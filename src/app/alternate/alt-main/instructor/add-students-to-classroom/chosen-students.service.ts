import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class ChosenStudentsService {
  private chosenStudentIds = new BehaviorSubject<string[]>([]);
  currentList = this.chosenStudentIds.asObservable();

  updateChosenStudentList(updatedChosenStudentList: string[]) {
    this.chosenStudentIds.next(updatedChosenStudentList);
  }

  addToChosenStudentList(studentId: string) {
    let updated = this.chosenStudentIds.getValue();
    if (updated.indexOf(studentId) === -1) {
      updated.push(studentId);
    }
    this.updateChosenStudentList(updated);
  }

  removeFromChosenStudentList(studentId: string) {
    let updated = this.chosenStudentIds.getValue();
    const indexToRemove = updated.indexOf(studentId);
    delete updated[indexToRemove];
    this.updateChosenStudentList(updated);
  }

  clearSlate() {
    this.updateChosenStudentList([]);
  }
}
