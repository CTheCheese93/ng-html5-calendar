import { Moment } from 'moment';
import { Ngh5Event } from './ngh5-event';

export class CalendarDay {
    date: Moment;
    events: Array<Ngh5Event>;
}