import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Houseview1Component } from './houseview1.component';

describe('Houseview1Component', () => {
  let component: Houseview1Component;
  let fixture: ComponentFixture<Houseview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Houseview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Houseview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
