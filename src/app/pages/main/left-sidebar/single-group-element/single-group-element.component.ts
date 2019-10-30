import {Component, Input, OnInit} from '@angular/core';
import { AClass } from '../../../../Shared/interfaces';

@Component({
  selector: 'app-single-group-element',
  templateUrl: './single-group-element.component.html',
  styleUrls: ['./single-group-element.component.css']
})
export class SingleGroupElementComponent {
  @Input() aClass: AClass;
}
