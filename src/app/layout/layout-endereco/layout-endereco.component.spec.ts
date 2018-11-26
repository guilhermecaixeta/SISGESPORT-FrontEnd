import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutEnderecoComponent } from './layout-endereco.component';

describe('LayoutEnderecoComponent', () => {
  let component: LayoutEnderecoComponent;
  let fixture: ComponentFixture<LayoutEnderecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutEnderecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
