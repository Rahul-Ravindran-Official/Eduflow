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
        answer: 'Hello Aakash, Thanks for seeking clarification. Motion is always relative to a reference point. In your example you are in a train. You are stationary with respect to your seat because it is moving at the same rate and direction as you. On the other hand for the fixed pole you are moving and vice-versa. Meena\'s video below has a great explanation and I would recommend you watch it. ',
        authorDisplayImage: 'https://media-exp1.licdn.com/dms/image/C5603AQFpVtMYTkRR8w/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=xyrZhstDJtY17MyscLEr-9EbUvX8AbIWp_yH98ULbwk',
        authorDisplayName: 'Mrs Geeta (Teacher)',
        discussionCount: 10,
        discussionId: '1',
        trophyCount: 0,
        upvoteCount: 10,
        lastEdited: '5 Min Ago',
        parentPostId: '10',
        upvoted: true,
        reported: false
      },
      {
        answerId: '2',
        answer: 'Hello Aakash, even I didn\'t understand it at first but this video made it crystal clear to me: https://www.youtube.com/watch?v=Hbt92gFj998 ',
        authorDisplayImage: 'https://media-exp1.licdn.com/dms/image/C5103AQH9BkviM2dz0A/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=ghU2nr5DD4JrWab11cUG7kHD5ey1MwqI9U0gAGiy37A',
        authorDisplayName: 'Meera Singh',
        discussionCount: 32,
        discussionId: '2',
        trophyCount: 3,
        upvoteCount: 6,
        lastEdited: '20 min ago',
        parentPostId: '10',
        upvoted: true,
        reported: true
      }
    ];

    return answerFeedOfPost;
  }

}
