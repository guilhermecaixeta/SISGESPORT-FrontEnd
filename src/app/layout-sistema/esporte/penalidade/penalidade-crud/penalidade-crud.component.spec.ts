import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenalidadeCrudComponent } from './penalidade-crud.component';

describe('PenalidadeCrudComponent', () => {
  let component: PenalidadeCrudComponent;
  let fixture: ComponentFixture<PenalidadeCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenalidadeCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenalidadeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
