import { Component, OnInit, Input } from '@angular/core';
import { CalendarDay } from 'src/app/Models/calendar-day';


@Component({
  selector: 'ngh5-monthly-day-tile',
  templateUrl: './monthly-day-tile.component.html',
  styleUrls: ['./monthly-day-tile.component.css']
})
export class MonthlyDayTileComponent implements OnInit {
  @Input() calendarDay: CalendarDay;

  constructor() { }

  ngOnInit() {
  }

}
