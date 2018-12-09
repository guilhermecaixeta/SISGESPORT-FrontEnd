import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacaoEventoComponent } from './informacao-evento.component';

describe('InformacaoEventoComponent', () => {
  let component: InformacaoEventoComponent;
  let fixture: ComponentFixture<InformacaoEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacaoEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacaoEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
