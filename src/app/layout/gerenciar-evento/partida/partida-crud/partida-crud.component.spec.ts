import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidaCrudComponent } from './partida-crud.component';

describe('PartidaCrudComponent', () => {
  let component: PartidaCrudComponent;
  let fixture: ComponentFixture<PartidaCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartidaCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
