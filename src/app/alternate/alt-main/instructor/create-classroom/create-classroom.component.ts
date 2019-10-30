import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-create-classroom',
  templateUrl: './create-classroom.component.html',
  styleUrls: ['./create-classroom.component.css']
})
export class CreateClassroomComponent implements OnInit {
  @Output() proceedToAddStudentsToNewClassroom = new EventEmitter();
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  createNewClass(classname: string, classId: string, classDescription: string) {

    // if ((classname.length === 0) || classDescription.length === 0) {
    //   this.showSnackbarMessage(
    //     'Please fill in both class name and class description'
    //   );
    //   return;
    // }

    // API CALL HERE
    this.showSnackbarMessage(
      'Classroom successfully created. Add some students now.'
    );

    // Replace with API success protocol
    if (true) {
      this.proceedToAddStudentsToNewClassroom.emit();
    }
  }

  showSnackbarMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
    });
  }
}
