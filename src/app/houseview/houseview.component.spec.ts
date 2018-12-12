import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseviewComponent } from './houseview.component';

describe('HouseviewComponent', () => {
  let component: HouseviewComponent;
  let fixture: ComponentFixture<HouseviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
