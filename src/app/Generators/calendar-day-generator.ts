import { Ngh5Event } from '../Models/ngh5-event';
import { Moment } from 'moment';
import { CalendarDay } from '../Models/calendar-day';

export class CalendarDayGenerator {
    private _events: Array<Ngh5Event>;

    constructor(events: Array<Ngh5Event>){
        this._events = events;
    }

    GenerateCalendarDay(date: Moment){
        let _calendarDay = new CalendarDay();
        _calendarDay.date = date;
        _calendarDay.events = this._events.filter(e => e.startDate.isSame(_calendarDay.date, 'day'));
        return _calendarDay
    }
}