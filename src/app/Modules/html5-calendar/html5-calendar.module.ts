import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthlyCalendarComponent } from './Components/monthly-view/monthly-view.component';
import { MonthlyDayTileComponent } from './Components/monthly-day-tile/monthly-day-tile.component';


@NgModule({
  declarations: [MonthlyCalendarComponent, MonthlyDayTileComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MonthlyCalendarComponent
  ]
})
export class Html5CalendarModule { }
