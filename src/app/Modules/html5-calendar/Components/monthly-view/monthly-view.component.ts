import { Component, OnInit, Input } from '@angular/core';
import { Ngh5Event } from '../../../../Models/event'
import * as Moment from 'moment';

@Component({
  selector: 'ngh5-monthly-view',
  templateUrl: './monthly-view.component.html',
  styleUrls: ['./monthly-view.component.css']
})
export class MonthlyCalendarComponent implements OnInit {
  @Input() events: Ngh5Event[];

  selectedMonth : Moment.Moment;
  selectedMonthTitle : String = '';
  calendarDays = [];

  constructor() { }

  ngOnInit()
  {
    this._SetSelectedMonth(Moment("2019-12-15"));
  }

  public GoToNextMonth() : void
  {
    this._SetSelectedMonth(this.selectedMonth.clone().add(1, 'months'));
  }

  public GoToPrevMonth(): void
  {
    this._SetSelectedMonth(this.selectedMonth.clone().subtract(1, 'months'))
  }

  private _BuildCalendar(today: Moment.Moment)
  {
    let first_day_of_month = Moment(today).subtract(today.date() - 1, 'days');
    let first_day_of_calendar = Moment(first_day_of_month).day(0);
    let last_day_of_calendar = Moment(first_day_of_calendar).add(34, 'days');
    
    this._PopulateCalendarDays(first_day_of_calendar, last_day_of_calendar);

    // console.log(today);
    // console.log(first_day_of_month);
    // console.log(first_day_of_calendar);
    // console.log(last_day_of_calendar);
    // console.log(this.selectedMonth);
    // let _date = this.events[0];
    // let _today = Moment('2019-12-15T12:00');
    // console.log(_date.startDate);
    // console.log(_date.startDate.isSame(_today, 'day'))
    console.log(this.calendarDays);
  }

  private _PopulateCalendarDays(
    first_day_of_calendar: Moment.Moment,
    last_day_of_calendar: Moment.Moment)
  {
    // Empty calendar tiles before adding more
    this.calendarDays = [];
    let dayDiff = last_day_of_calendar.diff(first_day_of_calendar, 'days');

    this.calendarDays.push({
      date: first_day_of_calendar,
      events: this.events.filter(e => e.startDate.isSame(first_day_of_calendar, 'day'))
    });

    // Populate the days up to the first day of the month
    for(var i = 1; i < dayDiff; i++)
    {
      let _day = first_day_of_calendar.clone().add(i, 'days')
      this.calendarDays.push({
        date: _day,
        events:this.events.filter(e => e.startDate.isSame(_day, 'day'))
      });
    }
    
    this.calendarDays.push({
      date: last_day_of_calendar,
      events: this.events.filter(e => e.startDate.isSame(last_day_of_calendar, 'day'))
    });
  }

  private _SetSelectedMonth(target_date: Moment.Moment) : void
  {
    this.selectedMonth = target_date;
    this.selectedMonthTitle = Moment(target_date).format('MMMM, YYYY').toString();
    this._BuildCalendar(this.selectedMonth);
  }
}