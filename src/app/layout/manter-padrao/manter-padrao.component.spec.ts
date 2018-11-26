import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterPadraoComponent } from './manter-padrao.component';

describe('ManterPadraoComponent', () => {
  let component: ManterPadraoComponent;
  let fixture: ComponentFixture<ManterPadraoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManterPadraoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
