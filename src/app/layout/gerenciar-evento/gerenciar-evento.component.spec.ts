import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarEventoComponent } from './gerenciar-evento.component';

describe('GerenciarEventoComponent', () => {
  let component: GerenciarEventoComponent;
  let fixture: ComponentFixture<GerenciarEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciarEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
