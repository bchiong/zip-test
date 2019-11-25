import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'zip-content-panel',
  templateUrl: './content-panel.component.html',
})
export class ContentPanelComponent implements OnInit {
  @Input() hasBackground: boolean;
  @Input() title: string;

  constructor() { }

  ngOnInit() {

  }

}
