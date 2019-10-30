import {Component, Input, OnInit, Output} from '@angular/core';
import {ChosenStudentsService} from '../chosen-students.service';

@Component({
  selector: 'app-select-student-element',
  templateUrl: './select-student-element.component.html',
  styleUrls: ['./select-student-element.component.css']
})
export class SelectStudentElementComponent implements OnInit {

  @Input() isChecked: boolean;
  @Input() userId: string;
  @Input() studentName: string;
  @Input() studentProfilePicture: string;
  selectedStudentIdsList: string[];

  temp: string;
  constructor(private chosenStudents: ChosenStudentsService) { }

  ngOnInit() {
    this.chosenStudents.currentList.subscribe(updatedChosenStudentList => this.chosenStudentsChanged(updatedChosenStudentList));
  }

  selectStudent(isChecked: boolean) {
    if (!isChecked) {
      this.chosenStudents.removeFromChosenStudentList(this.userId);
    } else {
      this.chosenStudents.addToChosenStudentList(this.userId);
    }
  }

  chosenStudentsChanged(updatedChosenStudentList: string[]) {
    this.temp = '';
    this.selectedStudentIdsList = updatedChosenStudentList;
    this.selectedStudentIdsList.forEach(value => this.temp += '|' + value);
    if (this.selectedStudentIdsList.indexOf(this.userId) !== -1) {
      this.isChecked = true;
    } else {
      this.isChecked = false;
    }
  }
}
