import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenalidadeComponent } from './penalidade.component';

describe('PenalidadeComponent', () => {
  let component: PenalidadeComponent;
  let fixture: ComponentFixture<PenalidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenalidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
