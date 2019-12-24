import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Html5CalendarComponent } from './Components/html5-calendar/html5-calendar.component';



@NgModule({
  declarations: [Html5CalendarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    Html5CalendarComponent
  ]
})
export class Html5CalendarModule { }
