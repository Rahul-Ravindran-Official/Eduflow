import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoryGroup, SelectableUser, Student} from '../../../../../Shared/interfaces';
import {MatSnackBar} from '@angular/material';
import {ChosenUsersService} from '../../../../../Shared/chosen-users.service';
import {Subscription} from 'rxjs';
import {ApiManagerService} from '../../../../../Shared/api-manager.service';
import {StudentClassroomManagementGetDataModal} from '../../../../../Modals/StudentClassroomManagement/StudentClassroomManagementGetDataModal';

@Component({
  selector: 'app-manage-classroom-students',
  templateUrl: './manage-classroom-students.component.html',
  styleUrls: ['./manage-classroom-students.component.css']
})
export class ManageClassroomStudentsComponent implements OnInit {

  private apiCallSubscription: Subscription;

  @Input() classroomId: string;
  @Output() gotoHomePage = new EventEmitter();
  categoryName = 'Category not yet selected';
  currentCategoryId = '-2';
  categoryGroups: CategoryGroup[] = [];
  selectableStudentList: SelectableUser[];
  selectedStudentIdsList: string[];
  availableStudents: Student[] = [];
  constructor(private chosenStudents: ChosenUsersService,
              private snackBar: MatSnackBar,
              private apiManagerService: ApiManagerService) { }

  ngOnInit() {
    this.chosenStudents.currentList.subscribe(updatedChosenStudentList => this.onStudentChosenChanged(updatedChosenStudentList));
    this.onInitUpdateExistingStudentsToChosenStudentsService();
    this.getDataFromApiListenerAndPoster();
  }

  getDataFromApiListenerAndPoster() {

    const api = this.apiManagerService.getManageClassroomData;
    const studentClassroomManagementGetData: StudentClassroomManagementGetDataModal = new StudentClassroomManagementGetDataModal(
      '1',
      '1'
    );
    this.apiManagerService.sendBControllerPostRequest(
      ManageClassroomStudentsComponent.name + '#GET',
      api,
      studentClassroomManagementGetData
    );

    this.apiCallSubscription = this.apiManagerService.onCallbackReceived.subscribe(
      (callback) => {

        if (callback.topic === (ManageClassroomStudentsComponent.name + '#GET')) {
          this.getDataFromApiReceived(callback.data);
        }

        if (callback.topic === (ManageClassroomStudentsComponent.name + '#POST')) {
          this.getDataFromApiReceived(callback.data);
        }
      }
    );
  }

  private getDataFromApiReceived(data: any) {

    for (const row of data.response.result[0].result) {
      this.categoryGroups.push({
        categoryGroupID: row.organizational_category_group_id,
        categoryGroupName: row.organizational_category_group_name,
        category: []
      });
    }

    for (const row of data.response.result[1].result) {
      const indexOfParentCategoryGroup = this.getIndexOfCategoryGroupByCategoryGroupId(
        row.organizational_category_group_id,
        this.categoryGroups
      );
      this.categoryGroups[indexOfParentCategoryGroup].category.push({
        categoryId: row.organizational_category_id,
        categoryName: row.organizational_category_name
      });
    }

    for (const row of data.response.result[2].result) {
      this.availableStudents.push({
        firstName: row.first_name,
        lastName: row.last_name,
        userId: row.user_id,
        organizational_category_id: row.organizational_category_id,
        group_id: row.group_id,
        permanent_ban: row.permanent_ban,
        temporary_ban: row.temporary_ban
      });
    }

  }

  getIndexOfCategoryGroupByCategoryGroupId(searchElement: string, categoryGroups: CategoryGroup[]) {
    let index = -1;
    for (const categoryGroup of categoryGroups) {
      index += 1;
      if (categoryGroup.categoryGroupID === searchElement) {
        return index;
      }
    }
    return -1;
  }

  onStudentChosenChanged(updatedChosenStudentList: string[]) {
    this.selectedStudentIdsList = updatedChosenStudentList;
  }

  selectCategory(categoryId: string) {
    this.currentCategoryId = categoryId;
    this.selectableStudentList = this.getStudentsByCategory(categoryId);
    this.categoryGroups.forEach( categoryGroup => {
      categoryGroup.category.forEach( singleCategory => {
        if (singleCategory.categoryId === categoryId) {
          this.categoryName = 'Showing ' + singleCategory.categoryName;
          return;
        }
      });
    });
  }

  getStudentsByCategory(categoryId: string) {
    const selectableStudent: SelectableUser[] = [];

    if (categoryId === '-2') {
      this.snackBarCreator('Choose a category first.');
      return;
    }

    if (categoryId === '-1') {
      // Returning all students
      for (const student of this.availableStudents) {
        let isSelected = false;
        if (student.group_id !== '-1') {
          isSelected = true;
        }
        if (student.temporary_ban === '0' && student.permanent_ban === '0') {
          selectableStudent.push({
            selected: isSelected,
            userId: student.userId,
            fullName: student.firstName + ' ' + student.lastName,
            profilePicture: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
          });
        }
      }
      return selectableStudent;
    }

    for (const student of this.availableStudents) {
      if (student.organizational_category_id === categoryId) {
        let isSelected = false;
        if (student.group_id !== '-1') {
          isSelected = true;
        }
        if (student.temporary_ban === '0' && student.permanent_ban === '0') {
          selectableStudent.push({
            selected: isSelected,
            userId: student.userId,
            fullName: student.firstName + ' ' + student.lastName,
            profilePicture: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
          });
        }
      }
    }
    return selectableStudent;
  }

  onInitUpdateExistingStudentsToChosenStudentsService() {
    // This means get all students across all categories
    const allStudents: SelectableUser[] = this.getStudentsByCategory('-1');
    for (const student of allStudents) {
      if (student.selected) {
        this.chosenStudents.addToChosenUserList(student.userId);
      }
    }
  }

  selectAllStudentsOfCurrentCategoryId() {
    const selectableStudent: SelectableUser[] = this.getStudentsByCategory(this.currentCategoryId);
    if (selectableStudent === undefined) { return; }
    for (const element of selectableStudent) {
      this.chosenStudents.addToChosenUserList(element.userId);
    }
  }

  unselectStudentsOfCurrentGroupId() {
    const selectableStudent: SelectableUser[] = this.getStudentsByCategory(this.currentCategoryId);
    if (selectableStudent === undefined) { return; }
    for (const element of selectableStudent) {
      this.chosenStudents.removeFromChosenUserList(element.userId);
    }
  }

  updateSelectedStudents() {
    // todo api call => use selectedUserIdsList to remove every students connection and update with new list.
    this.chosenStudents.clearSlate();
    this.snackBarCreator('Student management updated successfully');
    this.gotoHomePage.emit();
  }

  snackBarCreator(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 1000,
    });
  }

}
