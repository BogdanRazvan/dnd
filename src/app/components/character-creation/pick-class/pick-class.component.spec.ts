import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickClassComponent } from './pick-class.component';

describe('PickClassComponent', () => {
  let component: PickClassComponent;
  let fixture: ComponentFixture<PickClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
