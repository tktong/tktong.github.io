import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { BannerComponent } from './components/banner/banner.component';
import { LandingComponent } from './screens/landing/landing.component';
import { WorkExperienceComponent } from './screens/work-experience/work-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    LandingComponent,
    WorkExperienceComponent
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
