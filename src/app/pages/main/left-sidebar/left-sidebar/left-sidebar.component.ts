import { Component, OnInit } from '@angular/core';

import { AClass } from '../../../../Shared/interfaces';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent {

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

}
