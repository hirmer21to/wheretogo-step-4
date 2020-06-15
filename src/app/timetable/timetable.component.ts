import { Component, OnInit } from '@angular/core';
import { LECTURES } from '../shared/mock-lectures';
import { Lecture } from '../shared/lecture';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styles: []
})
export class TimetableComponent implements OnInit {
  lectures = LECTURES;
  selectedLecture: Lecture;

  onSelect(lecture: Lecture): void {
    this.selectedLecture = lecture;
  }

  constructor() { }

  ngOnInit() {
  }

}
