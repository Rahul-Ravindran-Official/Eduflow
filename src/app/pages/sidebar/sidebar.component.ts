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
      name: '9th Grade Physics',
      lastActivity: new Date('4/6/20'),
    },
    {
      name: '9th Grade French',
      lastActivity: new Date('4/6/20'),
    },
    {
      name: '9th Grade History',
      lastActivity: new Date('4/5/20'),
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
