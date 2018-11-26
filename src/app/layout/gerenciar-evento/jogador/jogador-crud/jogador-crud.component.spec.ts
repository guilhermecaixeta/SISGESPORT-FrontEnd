import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JogadorCrudComponent } from './jogador-crud.component';

describe('JogadorCrudComponent', () => {
  let component: JogadorCrudComponent;
  let fixture: ComponentFixture<JogadorCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogadorCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogadorCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
