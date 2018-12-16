import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificacaoJogadorComponent } from './classificacao-jogador.component';

describe('ClassificacaoJogadorComponent', () => {
  let component: ClassificacaoJogadorComponent;
  let fixture: ComponentFixture<ClassificacaoJogadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassificacaoJogadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificacaoJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
