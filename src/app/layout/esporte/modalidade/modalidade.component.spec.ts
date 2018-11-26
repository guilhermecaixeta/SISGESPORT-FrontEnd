import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadeComponent } from './modalidade.component';

describe('ModalidadeComponent', () => {
  let component: ModalidadeComponent;
  let fixture: ComponentFixture<ModalidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
