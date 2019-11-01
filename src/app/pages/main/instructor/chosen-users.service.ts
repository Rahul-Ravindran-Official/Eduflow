import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class ChosenUsersService {
  private chosenUserIds = new BehaviorSubject<string[]>([]);
  currentList = this.chosenUserIds.asObservable();

  updateChosenUserList(updatedChosenUserList: string[]) {
    this.chosenUserIds.next(updatedChosenUserList);
  }

  addToChosenUserList(UserId: string) {
    let updated = this.chosenUserIds.getValue();
    if (updated.indexOf(UserId) === -1) {
      updated.push(UserId);
    }
    this.updateChosenUserList(updated);
  }

  removeFromChosenUserList(UserId: string) {
    let updated = this.chosenUserIds.getValue();
    const indexToRemove = updated.indexOf(UserId);
    delete updated[indexToRemove];
    this.updateChosenUserList(updated);
  }

  clearSlate() {
    this.updateChosenUserList([]);
  }
}
