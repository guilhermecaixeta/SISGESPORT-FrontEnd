import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiDropDownMenuComponent } from './li-drop-down-menu.component';

describe('LiDropDownMenuComponent', () => {
  let component: LiDropDownMenuComponent;
  let fixture: ComponentFixture<LiDropDownMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiDropDownMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiDropDownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
