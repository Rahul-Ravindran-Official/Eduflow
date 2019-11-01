import {Component, EventEmitter, OnInit, Output} from '@angular/core';

export interface Select {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search-and-filters',
  templateUrl: './search-and-filters.component.html',
  styleUrls: ['./search-and-filters.component.css']
})
export class SearchAndFiltersComponent {

  @Output() askAQuestion = new EventEmitter();

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

  emitAskAQuestionEvent() {
    this.askAQuestion.emit();
  }
}
