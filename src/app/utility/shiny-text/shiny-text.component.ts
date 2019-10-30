import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shiny-text',
  templateUrl: './shiny-text.component.html',
  styleUrls: ['./shiny-text.component.css']
})
export class ShinyTextComponent {

  @Input() value: string;
  @Input() fontSize: string;

}
