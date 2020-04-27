import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoryGroup, SelectableUser} from '../../../../../Shared/interfaces';
import {MatSnackBar} from '@angular/material';
import {ChosenUsersService} from '../../../../../Shared/chosen-users.service';

@Component({
  selector: 'app-manage-classroom-instructors',
  templateUrl: './manage-classroom-instructors.component.html',
  styleUrls: ['./manage-classroom-instructors.component.css']
})
export class ManageClassroomInstructorsComponent implements OnInit {

  @Input() classroomId: string;
  @Output() gotoHomePage = new EventEmitter();
  categoryName = 'Category not yet selected';
  allInstructorNames: string[];
  currentCategoryId = '-2';
  categoryGroups: CategoryGroup[];
  selectableInstructorList: SelectableUser[];
  selectedInstructorIdsList: string[];

  constructor(private chosenInstructors: ChosenUsersService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.categoryGroups = this.getInstructorCategories();
    this.chosenInstructors.currentList.subscribe(updatedChosenInstructorsList =>
      this.onInstructorChosenChanged(updatedChosenInstructorsList)
    );
    this.allInstructorNames = this.getAllInstructorNames();
    this.onInitUpdateExistingInstructorsToChosenInstructorsService();
  }

  onInstructorChosenChanged(updatedChosenInstructorList: string[]) {
    this.selectedInstructorIdsList = updatedChosenInstructorList;
  }

  selectCategory(categoryId: string) {
    this.currentCategoryId = categoryId;
    this.selectableInstructorList = this.getInstructorsByCategory(categoryId);
    this.categoryGroups.forEach(categoryGroup => {
      categoryGroup.category.forEach(singleCategory => {
        if (singleCategory.categoryId === categoryId) {
          this.categoryName = 'Showing ' + singleCategory.categoryName;
          return;
        }
      });
    });
  }

  getInstructorCategories() {
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

  getAllInstructorNames() {
    const allElements: string[] = [];
    for (const element of this.getInstructorsByCategory('-1')) {
      allElements.push(element.fullName);
    }
    return allElements;
  }

  getInstructorsByCategory(categoryId: string) {
    console.log(categoryId);
    if (categoryId === '-2') {
      this.snackBarCreator('Choose a category first.');
      return;
    }

    if (categoryId === '-1') {
      // Returning all Instructors
    }

    // TODO API CALL here and dynamic programming for efficiency. Highly inefficient now.
    const selectableInstructor: SelectableUser[] = [];
    selectableInstructor[0] = {
      userId: '1',
      fullName: 'Iron Man',
      profilePicture: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      selected: false
    };
    selectableInstructor[1] = {
      userId: '2',
      fullName: 'Captain Marvel',
      profilePicture: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      selected: true
    };
    selectableInstructor[2] = {
      userId: '3',
      fullName: 'Spiderman',
      profilePicture: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      selected: false
    };
    selectableInstructor[3] = {
      userId: '4',
      fullName: 'Black Widow',
      profilePicture: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      selected: false
    };

    return selectableInstructor;
  }

  onInitUpdateExistingInstructorsToChosenInstructorsService() {
    // This means get all Instructors across all categories
    const allInstructors: SelectableUser[] = this.getInstructorsByCategory('-1');
    for (const Instructor of allInstructors) {
      if (Instructor.selected) {
        this.chosenInstructors.addToChosenUserList(Instructor.userId);
      }
    }
  }


  selectAllInstructorsOfCurrentCategoryId() {
    const selectableInstructor: SelectableUser[] = this.getInstructorsByCategory(this.currentCategoryId);
    if (selectableInstructor === undefined) {
      return;
    }
    for (const element of selectableInstructor) {
      this.chosenInstructors.addToChosenUserList(element.userId);
    }
  }

  unselectInstructorsOfCurrentGroupId() {
    const selectableInstructor: SelectableUser[] = this.getInstructorsByCategory(this.currentCategoryId);
    if (selectableInstructor === undefined) {
      return;
    }
    for (const element of selectableInstructor) {
      this.chosenInstructors.removeFromChosenUserList(element.userId);
    }
  }

  updateSelectedInstructors() {
    // todo api call => use selectedInstructorIdsList to remove every Instructors connection and update with new list.
    this.chosenInstructors.clearSlate();
    this.snackBarCreator('Instructor management updated successfully');
    this.gotoHomePage.emit();
  }

  makeString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  makeId(length) {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
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
