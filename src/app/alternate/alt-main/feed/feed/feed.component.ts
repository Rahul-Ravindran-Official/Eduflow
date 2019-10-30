import {Component, EventEmitter, Input, Output} from '@angular/core';

export interface Post {
  postId: number;
  upvoted: boolean;
  upvoteCount: number;
  replyCount: number;
  lastActive: string;
  author: string;
  question: string;
  tag: string;
  profilePictureUrl: string;
  flagged: boolean;
}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {

  @Input() classId: number;
  @Output() enterIntoPostWithPostId = new EventEmitter();

  posts: Post[] = [
    {
      postId: 1,
      upvoted: false,
      author: 'Rahul Ravindran',
      lastActive: '8 hours ago',
      profilePictureUrl: '',
      question: 'Why is the Sun yellow?',
      replyCount: 20,
      tag: 'Geo Quiz 2',
      upvoteCount: 38487,
      flagged: false
    },
    {
      postId: 2,
      upvoted: true,
      author: 'Lena Fawaz Mohammad',
      lastActive: 'A few minutes ago',
      profilePictureUrl: '',
      question: 'I just want to clarify, if I want to solve the questions using the ' +
        '1000 fractions provided, I can just describe what the code would be doing in layman terms ?',
      replyCount: 3,
      tag: 'Problem Set 3',
      upvoteCount: 21,
      flagged: true
    }
  ];

  onPostEnterListener(postId) {
    // Relaying
    this.enterIntoPostWithPostId.emit(
      postId
    );
  }

}
