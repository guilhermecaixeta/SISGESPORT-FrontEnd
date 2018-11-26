import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoCrudComponent } from './cargo-crud.component';

describe('CargoCrudComponent', () => {
  let component: CargoCrudComponent;
  let fixture: ComponentFixture<CargoCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
