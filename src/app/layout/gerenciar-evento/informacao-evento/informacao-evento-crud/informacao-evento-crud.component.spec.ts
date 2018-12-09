import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacaoEventoCrudComponent } from './informacao-evento-crud.component';

describe('InformacaoEventoCrudComponent', () => {
  let component: InformacaoEventoCrudComponent;
  let fixture: ComponentFixture<InformacaoEventoCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacaoEventoCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacaoEventoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
