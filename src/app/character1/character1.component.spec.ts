import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Character1Component } from './character1.component';

describe('Character1Component', () => {
  let component: Character1Component;
  let fixture: ComponentFixture<Character1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Character1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Character1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
