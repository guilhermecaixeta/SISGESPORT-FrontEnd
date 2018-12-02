import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoAlunoComponent } from './evento-aluno.component';

describe('EventoAlunoComponent', () => {
  let component: EventoAlunoComponent;
  let fixture: ComponentFixture<EventoAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
