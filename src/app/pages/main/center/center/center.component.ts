import { Component, OnInit } from '@angular/core';

export interface Select {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})

export class CenterComponent {

  defaultSortType = 'TIME-ASCENDING';
  sortType: Select[] = [
    {value: 'UPVOTES', viewValue: 'Upvotes'},
    {value: 'TIME-ASCENDING', viewValue: 'Latest'},
    {value: 'TIME-DESCENDING', viewValue: 'Oldest'}
  ];

  defaultPostType = 'UNREAD';
  postType: Select[] = [
    {value: 'READ', viewValue: 'Read'},
    {value: 'UNREAD', viewValue: 'Unread'},
    {value: 'ALL', viewValue: 'All'}
  ];


}
