import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPontoComponent } from './tipo-ponto.component';

describe('TipoPontoComponent', () => {
  let component: TipoPontoComponent;
  let fixture: ComponentFixture<TipoPontoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoPontoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
