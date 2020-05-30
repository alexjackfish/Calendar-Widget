import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarCmComponent } from './calendar-cm.component';

describe('CalendarCmComponent', () => {
  let component: CalendarCmComponent;
  let fixture: ComponentFixture<CalendarCmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarCmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarCmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
