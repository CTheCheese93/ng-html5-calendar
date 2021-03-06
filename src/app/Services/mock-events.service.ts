import { Injectable } from '@angular/core';
import * as Moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class MockEventsService {
  events = [
    {
      title: 'Event Title',
      startDate: Moment('2019-12-15T10:00'),
      endDate: Moment('2019-12-15T13:00')
    },
    {
      title: 'Event Title 2',
      startDate: Moment('2020-01-05T12:00'),
      endDate: Moment('2020-01-05T16:00')
    },
    {
      title: 'Event Title 3',
      startDate: Moment('2020-12-15T10:00'),
      endDate: Moment('2020-12-20T13:00')
    }
  ]

  constructor() { }
}
