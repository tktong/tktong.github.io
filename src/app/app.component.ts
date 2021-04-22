import { Component } from '@angular/core';
import { PERSONAL_DATA } from './personalData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  personalData = PERSONAL_DATA;
}
