import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPontoCrudComponent } from './tipo-ponto-crud.component';

describe('TipoPontoCrudComponent', () => {
  let component: TipoPontoCrudComponent;
  let fixture: ComponentFixture<TipoPontoCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoPontoCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPontoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
