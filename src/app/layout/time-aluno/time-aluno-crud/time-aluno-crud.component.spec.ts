import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeAlunoCrudComponent } from './time-aluno-crud.component';

describe('TimeAlunoCrudComponent', () => {
  let component: TimeAlunoCrudComponent;
  let fixture: ComponentFixture<TimeAlunoCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeAlunoCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeAlunoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
