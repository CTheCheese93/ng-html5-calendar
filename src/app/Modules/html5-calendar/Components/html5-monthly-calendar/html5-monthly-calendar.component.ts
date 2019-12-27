import { Component, OnInit } from '@angular/core';
import * as Moment from 'moment';

@Component({
  selector: 'app-html5-monthly-calendar',
  templateUrl: './html5-monthly-calendar.component.html',
  styleUrls: ['./html5-monthly-calendar.component.css']
})
export class Html5MonthlyCalendarComponent implements OnInit {
  selectedMonth : Moment.Moment;
  selectedMonthTitle : String = '';
  calendarDays : Array<Moment.Moment> = [];

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
  }

  private _PopulateCalendarDays(first_day_of_calendar: Moment.Moment, last_day_of_calendar: Moment.Moment) {
    let dayDiff = last_day_of_calendar.diff(first_day_of_calendar, 'days');
    this.calendarDays = [];
    this.calendarDays.push(first_day_of_calendar);
    for(var i = 1; i < dayDiff; i++)
    {
      this.calendarDays.push(
        first_day_of_calendar.clone().add(i, 'days')
      );
    }
    this.calendarDays.push(last_day_of_calendar);
  }

  private _SetSelectedMonth(target_date: Moment.Moment) : void
  {
    this.selectedMonth = target_date;
    this.selectedMonthTitle = Moment(target_date).format('MMMM, YYYY').toString();
    this._BuildCalendar(this.selectedMonth);
  }
}