import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaCrudComponent } from './turma-crud.component';

describe('TurmaCrudComponent', () => {
  let component: TurmaCrudComponent;
  let fixture: ComponentFixture<TurmaCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurmaCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
