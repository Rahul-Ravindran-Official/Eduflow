import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {ApiManagerService} from '../../../../Shared/api-manager.service';
import {CreateClassModal} from '../../../../Modals/CreateClassModal';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-create-classroom',
  templateUrl: './create-classroom.component.html',
  styleUrls: ['./create-classroom.component.css']
})
export class CreateClassroomComponent implements OnInit {

  apiCallSubscription: Subscription;
  @Output() proceedToAddStudentsToNewClassroom = new EventEmitter();

  constructor(private snackBar: MatSnackBar, private apiManagerService: ApiManagerService) { }

  ngOnInit() {
    this.apiCallSubscription = this.apiManagerService.onCallbackReceived.subscribe(
      (callback) => {
        if (callback.topic === CreateClassroomComponent.name) {
          this.onClassCreatedCallback(callback.data);
        }
      }
    );
  }

  createNewClass(classname: string, classId: string, classDescription: string) {

    if ((classname.length === 0) || classDescription.length === 0) {
      this.showSnackbarMessage(
        'Please fill in both class name and class description'
      );
      return;
    }

    this.apiCall(classname, classId, classDescription);
  }

  apiCall(className: string, classId: string, classDescription: string) {
    const api = this.apiManagerService.createClassroom;
    const createClassModal: CreateClassModal = new CreateClassModal(
      className, classId, classDescription, '123', '0'
    );
    this.apiManagerService.sendBControllerPostRequest(CreateClassroomComponent.name, api, createClassModal);
  }

  onClassCreatedCallback(callBackData: string) {
    console.log(callBackData);
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
