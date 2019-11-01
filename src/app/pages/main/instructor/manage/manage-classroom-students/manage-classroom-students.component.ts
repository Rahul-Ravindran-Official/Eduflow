import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoryGroup, SelectableUser} from '../../../../../Shared/interfaces';
import {MatSnackBar} from '@angular/material';
import {ChosenUsersService} from '../../../../../Shared/chosen-users.service';

@Component({
  selector: 'app-manage-classroom-students',
  templateUrl: './manage-classroom-students.component.html',
  styleUrls: ['./manage-classroom-students.component.css']
})
export class ManageClassroomStudentsComponent implements OnInit {
  @Input() classroomId: string;
  @Output() gotoHomePage = new EventEmitter();
  categoryName = 'Category not yet selected';
  allStudentNames: string[];
  currentCategoryId = '-2';
  categoryGroups: CategoryGroup[];
  selectableStudentList: SelectableUser[];
  selectedStudentIdsList: string[];

  constructor(private chosenStudents: ChosenUsersService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.categoryGroups = this.getStudentCategories();
    this.chosenStudents.currentList.subscribe(updatedChosenStudentList => this.onStudentChosenChanged(updatedChosenStudentList));
    this.allStudentNames = this.getAllStudentNames();
    this.onInitUpdateExistingStudentsToChosenStudentsService();
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

  getStudentCategories() {
    // TODO API CALL HERE
    const categoryGroups: CategoryGroup[] = [];
    categoryGroups[0] = {
        categoryGroupID: '1',
        categoryGroupName: 'MYP',
        category: [
            {
              categoryId: '1',
              categoryName: 'Grade 5'
            },
            {
              categoryId: '2',
              categoryName: 'Grade 6'
            },
            {
              categoryId: '3',
              categoryName: 'Grade 7'
            },
            {
              categoryId: '4',
              categoryName: 'Grade 8'
            }
          ]
      };
    categoryGroups[1] = {
        categoryGroupID: '2',
        categoryGroupName: 'IGCSE',
        category: [
            {
              categoryId: '5',
              categoryName: 'Grade 9'
            },
            {
              categoryId: '6',
              categoryName: 'Grade 10'
            }
          ]
      };
    categoryGroups[2] = {
        categoryGroupID: '3',
        categoryGroupName: 'IB',
        category: [
            {
              categoryId: '7',
              categoryName: 'Grade 11'
            },
            {
              categoryId: '8',
              categoryName: 'Grade 12'
            }
          ]
      };
    return categoryGroups;
  }

  getAllStudentNames() {
    const allElements: string[] = [];
    for (const element of this.getStudentsByCategory('-1')) {
      allElements.push(element.fullName);
    }
    return allElements;
  }

  getStudentsByCategory(categoryId: string) {
    console.log(categoryId);
    if (categoryId === '-2') {
      this.snackBarCreator('Choose a category first.');
      return;
    }

    if (categoryId === '-1') {
      // Returning all students
    }

    // TODO API CALL here and dynamic programming for efficiency. Highly inefficient now.
    const selectableStudent: SelectableUser[] = [];
    selectableStudent[0] = {
          userId: '1',
          fullName: 'Iron Man',
          profilePicture: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
          selected: false
    };
    selectableStudent[1] = {
          userId: '2',
          fullName: 'Captain Marvel',
          profilePicture: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
          selected: true
    };
    selectableStudent[2] = {
          userId: '3',
          fullName: 'Spiderman',
          profilePicture: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
          selected: false
    };
    selectableStudent[3] = {
          userId: '4',
          fullName: 'Black Widow',
          profilePicture: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
          selected: false
    };

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

  makeString(length) {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  makeId(length) {
    let result           = '';
    const characters       = '0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  snackBarCreator(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 1000,
    });
  }
}
