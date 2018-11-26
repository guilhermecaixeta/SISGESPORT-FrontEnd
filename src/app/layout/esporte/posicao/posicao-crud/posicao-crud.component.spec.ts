import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosicaoCrudComponent } from './posicao-crud.component';

describe('PosicaoCrudComponent', () => {
  let component: PosicaoCrudComponent;
  let fixture: ComponentFixture<PosicaoCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosicaoCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosicaoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
