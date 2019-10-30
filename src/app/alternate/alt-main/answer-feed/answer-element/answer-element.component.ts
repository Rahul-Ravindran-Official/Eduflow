import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Select} from '../../post-question/post-question.component';

@Component({
  selector: 'app-answer-element',
  templateUrl: './answer-element.component.html',
  styleUrls: ['./answer-element.component.css']
})
export class AnswerElementComponent {

  @Input() parentPostId: string;
  @Input() upvoted: boolean;
  @Input() upvoteCount: number;
  @Input() discussionCount: number;
  @Input() lastEdited: string;
  @Input() author: string;
  @Input() answer: string;
  @Input() authorDisplayImage: string;
  @Input() trophyCount: number;
  @Input() reported: boolean;

  private showDiscussions = false;
  private showCommentBox: boolean;
  private replying = false;
  private replyValue = 'Reply';

  private commentText = '';

  selectedAnonymityScopeId = 1;
  defaultAnonymityScope = '1';
  anonymityScope: Select[] = [
    {id: '0', viewValue: 'Anonymous'},
    {id: '1', viewValue: 'Rahul Ravindran'},
  ];

  constructor(private snackBar: MatSnackBar) {
    this.author = 'Anonymous';
    this.answer = 'The answer to this question is so absurdly simple that I am going' +
                  ' to write it in a pretty long sentence on how absurd it is that ' +
                  'I am trying to dodge the question to show it\'s absurdness.';
    this.upvoteCount = 4;
    this.discussionCount = 8;
    this.lastEdited = '4 hours ago';
    this.upvoted = false;
    this.showDiscussions = false;
  }

  toggleUpvote() {
    if (this.upvoted) {
      this.upvoted = false;
      this.upvoteCount--;
    } else {
      this.upvoted = true;
      this.upvoteCount++;
    }
  }

  showAnswerDiscussions() {
    this.showDiscussions = !this.showDiscussions;
  }

  toggleReply() {
    this.showDiscussions = true;
    this.replying = !this.replying;
    this.showCommentBox = !this.showCommentBox;
    if (!this.replying) {
      this.replyValue = 'Reply';
    } else {
      this.replyValue = 'Cancel Reply';
    }
  }

  postDiscussionComment() {
    this.replying = false;
    this.showCommentBox = false;
    this.replyValue = 'Reply';
    this.commentText = '';
    this.openSnackBar('Comment Posted');
  }

  getAnonymityScopeNameFromChosenAnonymityScopeId() {
    for (const anonymityScope of this.anonymityScope) {
      if (anonymityScope.id === this.selectedAnonymityScopeId.toString()) {
        return anonymityScope.viewValue;
      }
    }
  }

  onSelectionChangedAnonymityLevel($event) {
    this.selectedAnonymityScopeId = $event.value;
    this.openSnackBar('You will be posting as ' + this.getAnonymityScopeNameFromChosenAnonymityScopeId());
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
    });
  }

  reportToggle() {
    this.reported = !this.reported;

    if (this.reported) {
      this.openSnackBar('Answer Reported.');
    } else {
      this.openSnackBar('Undo Report Answer.');
    }
  }

}
