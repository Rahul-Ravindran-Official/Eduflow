import {Component, Input, OnInit} from '@angular/core';
import {DiscussionComment} from '../../../../../Shared/interfaces';

@Component({
  selector: 'app-discussion-feed',
  templateUrl: './discussion-feed.component.html',
  styleUrls: ['./discussion-feed.component.css']
})
export class DiscussionFeedComponent implements OnInit {

  @Input() answerId: string;
  commentFeedOfAnswer: DiscussionComment[];
  constructor() { }

  ngOnInit() {
    this.commentFeedOfAnswer = this.getDiscussionsByAnswerId();
  }

  getDiscussionsByAnswerId() {

    // TODO: API CALL HERE ...

    const discussionFeedOfAnswer: DiscussionComment[] = [
      {
        authorDisplayName: 'Anonymous',
        comment: 'This is a sample comment.',
        dateTimePosted: 'A few days ago.'
      },
      {
        authorDisplayName: 'Stan Lee',
        comment: 'Another Comment.',
        dateTimePosted: 'A few years ago.'
      },
      {
        authorDisplayName: 'Captain Marvel',
        comment: 'The first comment.',
        dateTimePosted: 'A few lightyears ago.'
      }
    ];
    return discussionFeedOfAnswer;
  }

}
