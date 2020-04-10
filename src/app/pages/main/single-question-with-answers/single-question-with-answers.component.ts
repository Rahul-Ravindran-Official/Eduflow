import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../feed/feed/feed.component';
import {Select} from '../post-question/post-question.component';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-single-question-with-answers',
  templateUrl: './single-question-with-answers.component.html',
  styleUrls: ['./single-question-with-answers.component.css']
})
export class SingleQuestionWithAnswersComponent {
  @Input() postId: string;
  theQuestion: Post;

  private htmlContent: string;
  private showAnswerBar: boolean;

  selectedAnonymityScopeId = 1;
  defaultAnonymityScope = '1';
  anonymityScope: Select[] = [
    {id: '0', viewValue: 'Anonymous'},
    {id: '1', viewValue: 'Gopal Munapillai'},
  ];

  constructor(private snackBar: MatSnackBar) {
    this.theQuestion = {
      postId: 1,
      upvoted: false,
      author: 'Aakash Palimula',
      lastActive: '8 hours ago',
      profilePictureUrl: '',
      question: 'Friends, Today teacher told us that if i travel by train, even if i am sitting, that i am moving with respect to a stationary pole. Can someone please help me understand?',
      replyCount: 20,
      tag: 'Class 9 - Physics',
      upvoteCount: 14,
      flagged: false
    };

    this.showAnswerBar = false;
  }

  onSelectionChangedAnonymityLevel($event) {
    this.selectedAnonymityScopeId = $event.value;
    this.showSnackbarMessage('You will be posting as ' + this.getAnonymityScopeNameFromChosenAnonymityScopeId());
  }

  getAnonymityScopeNameFromChosenAnonymityScopeId() {
    for (const anonymityScope of this.anonymityScope) {
      if (anonymityScope.id === this.selectedAnonymityScopeId.toString()) {
        return anonymityScope.viewValue;
      }
    }
  }

  showSnackbarMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
    });
  }

  postAnswer() {
    this.showSnackbarMessage(
      'PSEUDO POST QUESTION' + '\n' +
      'HTML Content: ' + this.htmlContent + '\n' +
      'Anonymity Level: ' + this.getAnonymityScopeNameFromChosenAnonymityScopeId() + '\n'
    );
  }

  toggleShowAnswerBar() {
    this.showAnswerBar = !this.showAnswerBar;
  }
}
