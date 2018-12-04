import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeAlunoComponent } from './time-aluno.component';

describe('TimeAlunoComponent', () => {
  let component: TimeAlunoComponent;
  let fixture: ComponentFixture<TimeAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
