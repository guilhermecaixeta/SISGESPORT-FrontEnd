import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadeCrudComponent } from './modalidade-crud.component';

describe('ModalidadeCrudComponent', () => {
  let component: ModalidadeCrudComponent;
  let fixture: ComponentFixture<ModalidadeCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalidadeCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
