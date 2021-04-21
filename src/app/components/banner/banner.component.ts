import {Component, Input, OnInit} from '@angular/core';
import {ButtonLink} from '../../models/buttonLink';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() buttonLinks: ButtonLink[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
