import {Component, Input, OnInit} from '@angular/core';
import {ChosenUsersService} from '../../../../../Shared/chosen-users.service';

@Component({
  selector: 'app-select-user-element',
  templateUrl: './select-user-element.component.html',
  styleUrls: ['./select-user-element.component.css']
})

export class SelectUserElementComponent implements OnInit {

  @Input() isChecked: boolean;
  @Input() userId: string;
  @Input() userName: string;
  @Input() userProfilePicture: string;
  selectedUserIdsList: string[];
  temp: string;

  constructor(private chosenUsers: ChosenUsersService) { }

  ngOnInit() {
    this.chosenUsers.currentList.subscribe(updatedChosenUserList => this.chosenUsersChanged(updatedChosenUserList));
  }

  selectUser(isChecked: boolean) {
    if (!isChecked) {
      this.chosenUsers.removeFromChosenUserList(this.userId);
    } else {
      this.chosenUsers.addToChosenUserList(this.userId);
    }
  }

  chosenUsersChanged(updatedChosenUserList: string[]) {
    this.temp = '';
    this.selectedUserIdsList = updatedChosenUserList;
    this.selectedUserIdsList.forEach(value => this.temp += '|' + value);
    this.isChecked = this.selectedUserIdsList.indexOf(this.userId) !== -1;
  }
}
