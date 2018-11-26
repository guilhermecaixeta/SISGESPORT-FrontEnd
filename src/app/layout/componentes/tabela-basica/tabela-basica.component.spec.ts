import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaBasicaComponent } from './tabela-basica.component';

describe('TabelaBasicaComponent', () => {
  let component: TabelaBasicaComponent;
  let fixture: ComponentFixture<TabelaBasicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaBasicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaBasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
