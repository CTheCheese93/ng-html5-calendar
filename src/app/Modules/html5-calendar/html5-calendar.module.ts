import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Html5MonthlyCalendarComponent } from './Components/html5-monthly-calendar/html5-monthly-calendar.component';



@NgModule({
  declarations: [Html5MonthlyCalendarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    Html5MonthlyCalendarComponent
  ]
})
export class Html5CalendarModule { }
