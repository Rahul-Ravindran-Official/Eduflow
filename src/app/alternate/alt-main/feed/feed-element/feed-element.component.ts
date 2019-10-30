import {Component, Output, EventEmitter, Input} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-feed-element',
  templateUrl: './feed-element.component.html',
  styleUrls: ['./feed-element.component.css']
})
export class FeedElementComponent {

  @Input() showReplyButton: boolean;
  @Input() postId: number;
  @Input() upvoted: boolean;
  @Input() upvoteCount: number;
  @Input() replyCount: number;
  @Input() lastActive: string;
  @Input() author: string;
  @Input() question: string;
  @Input() tag: string;
  @Input() profilePictureUrl: string;
  @Input() reported: boolean;
  @Output() enterIntoPostWithPostId = new EventEmitter();

  constructor(private snackBar: MatSnackBar) {
    this.upvoteCount = 4;
    this.replyCount = 8;
    this.lastActive = '4 hours ago';
    this.upvoted = false;
    this.showReplyButton = true;
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

  onPostEnter() {
    this.enterIntoPostWithPostId.emit(this.postId);
  }

  reportToggle() {
    this.reported = !this.reported;

    if (this.reported) {
      this.snackBarCreator('Question Reported');
    } else {
      this.snackBarCreator('Undo Report Question');
    }
  }

  // utility functions
  snackBarCreator(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 1000,
    });
  }
}
