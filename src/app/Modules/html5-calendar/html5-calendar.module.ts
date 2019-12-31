import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthlyCalendarComponent } from './Components/monthly-view/monthly-view.component';


@NgModule({
  declarations: [MonthlyCalendarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MonthlyCalendarComponent
  ]
})
export class Html5CalendarModule { }
