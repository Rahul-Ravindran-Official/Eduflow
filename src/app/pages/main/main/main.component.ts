import {Component, Input, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-alt-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  // Sign In Step ?
  isSignedIn = false;

  lastViewedPostId: number;
  currentView = 'POSTS';

  screensWhereYouCannotLeaveWithoutConfirmingChanges = [
    'MANAGE_CLASSROOM_STUDENTS',
    'MANAGE_CLASSROOM_INSTRUCTORS'
  ];

  constructor(private snackBar: MatSnackBar) {}

  onPostEnterListener(postId) {
    this.lastViewedPostId = postId;
    // Toggling currentView
    if (this.currentView !== 'SINGLE_POST') {
      this.snackBarCreator('Opening post #' + postId);
      this.currentView = 'SINGLE_POST';
    }
  }

  OnPostExitListener() {
    if (this.currentView === 'MANAGE_CLASSROOM_STUDENTS') {
      this.snackBarCreator('Finalize before switching screens.');
      return;
    }
    // Toggling currentView
    if (this.currentView !== 'POSTS') {
      this.snackBarCreator('Returning to all posts');
      this.currentView = 'POSTS';
    }
  }

  onWantToQuestion() {
    // Toggling currentView
    if (this.currentView !== 'ASK_A_QUESTION') {
      this.snackBarCreator('Go ahead and ask a question!');
      this.currentView = 'ASK_A_QUESTION';
    }
  }

  OnGotoAllPosts() {
    if (this.currentView !== 'POSTS') {
      this.currentView = 'POSTS';
    }
  }
  // utility functions
  snackBarCreator(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 1000,
    });
  }

  onSuccessfullySignedIn() {
    this.isSignedIn = true;
  }

  createNewClass() {
    if (this.canChangeScreen() === false) { return; }
    this.currentView = 'CREATE_A_CLASS';
    this.snackBarCreator('Entering Create New Class');
  }

  enterClass(classId: string) {
    if (this.canChangeScreen() === false) { return; }
    this.snackBarCreator('Entering Class ' + classId);
  }

  gotoScreenAddStudentsToClassroom() {
    if (this.canChangeScreen() === false) { return; }
    this.currentView = 'MANAGE_CLASSROOM_STUDENTS';
  }

  gotoManageStudentsOfCurrentClassroom() {
    if (this.canChangeScreen() === false) { return; }
    this.currentView = 'MANAGE_CLASSROOM_STUDENTS';
  }

  gotoManageInstructorsOfCurrentChosenClassroom() {
    if (this.canChangeScreen() === false) { return; }
    this.currentView = 'MANAGE_CLASSROOM_INSTRUCTORS';
  }

  canChangeScreen() {
    for (const screen of this.screensWhereYouCannotLeaveWithoutConfirmingChanges) {
      if (this.currentView === screen) {
        this.snackBarCreator('Finalize before switching screens.');
        return false;
      }
    }
    return true;
  }
}
