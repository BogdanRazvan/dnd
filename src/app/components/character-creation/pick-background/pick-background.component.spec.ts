import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickBackgroundComponent } from './pick-background.component';

describe('PickBackgroundComponent', () => {
  let component: PickBackgroundComponent;
  let fixture: ComponentFixture<PickBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
