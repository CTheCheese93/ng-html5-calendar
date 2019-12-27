import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Html5MonthlyCalendarComponent } from './html5-monthly-calendar.component';

describe('Html5MonthlyCalendarComponent', () => {
  let component: Html5MonthlyCalendarComponent;
  let fixture: ComponentFixture<Html5MonthlyCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Html5MonthlyCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Html5MonthlyCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
