import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidaAlunoComponent } from './partida-aluno.component';

describe('PartidaAlunoComponent', () => {
  let component: PartidaAlunoComponent;
  let fixture: ComponentFixture<PartidaAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartidaAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidaAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
