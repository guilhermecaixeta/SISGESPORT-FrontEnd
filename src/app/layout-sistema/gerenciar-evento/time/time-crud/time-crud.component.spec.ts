import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCrudComponent } from './time-crud.component';

describe('TimeCrudComponent', () => {
  let component: TimeCrudComponent;
  let fixture: ComponentFixture<TimeCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
