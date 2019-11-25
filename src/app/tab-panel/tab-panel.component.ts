import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zip-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss']
})
export class TabPanelComponent {

  tabValues = ['Retail', 'Health', 'Services'];
  highlighted = 0;
  constructor() { }

  setTabHighlight(index: number) {
    this.highlighted = index;
  }
}
