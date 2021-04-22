import {Component, Input, OnInit} from '@angular/core';
import {TimelineItem} from '../../models/timelineItem';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @Input() items: TimelineItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
