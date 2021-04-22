import {Component, Input, OnInit} from '@angular/core';
import {TimelineItem} from '../../models/timelineItem';

@Component({
  selector: 'app-experience-education',
  templateUrl: './experience-education.component.html',
  styleUrls: ['./experience-education.component.scss']
})
export class ExperienceEducationComponent implements OnInit {
  @Input() workExperience: TimelineItem[] = [];
  @Input() otherExperience: TimelineItem[] = [];
  @Input() education: TimelineItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
