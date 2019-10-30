import {Component, Input, OnInit} from '@angular/core';
import {AClass, Answer} from '../../../../Shared/interfaces';

@Component({
  selector: 'app-answer-feed',
  templateUrl: './answer-feed.component.html',
  styleUrls: ['./answer-feed.component.css']
})
export class AnswerFeedComponent implements OnInit {

  @Input() postId: string;
  answerFeedOfPost: Answer[];

  ngOnInit() {
    this.answerFeedOfPost = this.getAnswerFeedByPostId();
  }

  getAnswerFeedByPostId() {
    // TODO: API CALL HERE ...

    const answerFeedOfPost: Answer[] = [
      {
        answerId: '1',
        answer: 'This is the correct answer',
        authorDisplayImage: '',
        authorDisplayName: 'Anonymous',
        discussionCount: 10,
        discussionId: '1',
        trophyCount: 48,
        upvoteCount: 10,
        lastEdited: 'Yesterday',
        parentPostId: '10',
        upvoted: true,
        reported: false
      },
      {
        answerId: '2',
        answer: 'This is the 2nd best answer',
        authorDisplayImage: '',
        authorDisplayName: 'The Smart Kid',
        discussionCount: 32,
        discussionId: '2',
        trophyCount: 2048,
        upvoteCount: 512,
        lastEdited: '20 min ago',
        parentPostId: '10',
        upvoted: true,
        reported: true
      }
    ];

    return answerFeedOfPost;
  }

}
