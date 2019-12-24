import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Html5CalendarComponent } from './html5-calendar.component';

describe('Html5CalendarComponent', () => {
  let component: Html5CalendarComponent;
  let fixture: ComponentFixture<Html5CalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Html5CalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Html5CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
