import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyDayTileComponent } from './monthly-day-tile.component';

describe('MonthlyDayTileComponent', () => {
  let component: MonthlyDayTileComponent;
  let fixture: ComponentFixture<MonthlyDayTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyDayTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyDayTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
