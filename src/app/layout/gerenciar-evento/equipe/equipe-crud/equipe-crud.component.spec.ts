import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeCrudComponent } from './equipe-crud.component';

describe('EquipeCrudComponent', () => {
  let component: EquipeCrudComponent;
  let fixture: ComponentFixture<EquipeCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipeCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
