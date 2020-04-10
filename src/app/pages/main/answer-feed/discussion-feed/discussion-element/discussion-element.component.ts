import {Component, Input, OnInit} from '@angular/core';
import {Answer, DiscussionComment} from '../../../../../Shared/interfaces';

@Component({
  selector: 'app-discussion-element',
  templateUrl: './discussion-element.component.html',
  styleUrls: ['./discussion-element.component.css']
})
export class DiscussionElementComponent implements OnInit {


  @Input() comment = 'This is a fantastic answer and I absolutely endorse this. There is so much to learn from this answer. Hats off to you, Gentleman.';
  @Input() author = 'Gopal Munapillai';
  @Input() dateTimePosted = '10 minutes ago';

  constructor() { }

  ngOnInit() {

  }

}
