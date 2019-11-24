import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppModule} from '../app.module';
import {ContentCardComponent} from '../content-card/content-card.component';

@NgModule({
  declarations: [
    ContentCardComponent
  ],
  imports: [
    CommonModule,
    AppModule,
  ]
})
export class ContentPanelModule { }
