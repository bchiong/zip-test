import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'zip-cta-panel',
  templateUrl: './cta-panel.component.html',
  styleUrls: ['./cta-panel.component.scss']
})
export class CtaPanelComponent implements OnInit {

  @Input() title?: string;
  @Input() buttonText?: string;

  constructor() { }

  ngOnInit() {
  }

}
