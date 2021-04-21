import { Component } from '@angular/core';
import {BANNER_BUTTONS} from './personalData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private bannerButtons = BANNER_BUTTONS;
}
