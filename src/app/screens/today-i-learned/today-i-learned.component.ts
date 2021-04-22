import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../models/book';
import {KeyValue} from '@angular/common';

@Component({
  selector: 'app-today-i-learned',
  templateUrl: './today-i-learned.component.html',
  styleUrls: ['./today-i-learned.component.scss']
})
export class TodayILearnedComponent implements OnInit {
  @Input() readings: Map<number, Book[]> = new Map();

  constructor() { }

  ngOnInit(): void {
  }

  keyDescOrder = (a: KeyValue<number, Book[]>, b: KeyValue<number, Book[]>): number => {
    return a.key > b.key ? -1 : (b.key > a.key ? 1 : 0);
  }
}
