import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificacaoAlunoComponent } from './classificacao-aluno.component';

describe('ClassificacaoAlunoComponent', () => {
  let component: ClassificacaoAlunoComponent;
  let fixture: ComponentFixture<ClassificacaoAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassificacaoAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificacaoAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
