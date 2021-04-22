import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { BannerComponent } from './components/banner/banner.component';
import { LandingComponent } from './screens/landing/landing.component';
import { CardComponent } from './components/card/card.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ExperienceEducationComponent } from './screens/experience-education/experience-education.component';
import { TodayILearnedComponent } from './screens/today-i-learned/today-i-learned.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    LandingComponent,
    CardComponent,
    TimelineComponent,
    ExperienceEducationComponent,
    TodayILearnedComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
