import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { HeroPanelComponent } from './hero-panel/hero-panel.component';
import { IconsPanelComponent } from './icons-panel/icons-panel.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { ContentPanelComponent } from './content-panel/content-panel.component';
import { CtaPanelComponent } from './cta-panel/cta-panel.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    HeroPanelComponent,
    IconsPanelComponent,
    ContentCardComponent,
    SubHeaderComponent,
    ContentPanelComponent,
    CtaPanelComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
