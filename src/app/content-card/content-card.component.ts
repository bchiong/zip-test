import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'zip-content-card',
  templateUrl: './content-card.component.html',
})
export class ContentCardComponent implements OnInit {
  @Input() theme?: string;
  @Input() image?: string;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
