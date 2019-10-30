import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {AClass} from '../../Shared/interfaces';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Output() WantToCreateANewClass = new EventEmitter();
  @Output() EnterClass = new EventEmitter<string>();
  constructor(private snackBar: MatSnackBar) {}

  classes: AClass[] = [
    {
      name: 'MAT 102',
      lastActivity: new Date('1/1/16'),
    },
    {
      name: 'CSC 108',
      lastActivity: new Date('1/17/16'),
    },
    {
      name: 'MAT 135',
      lastActivity: new Date('1/28/16'),
    }
  ];

  openSnackBar(groupName: string) {
    this.snackBar.open('Entering ' + groupName, 'Close', {
      duration: 2000,
    });
  }

  emitWantToCreateANewClass() {
    this.WantToCreateANewClass.emit();
  }

  emitEnterClass(classId: string) {
    this.EnterClass.emit(classId);
  }
}
