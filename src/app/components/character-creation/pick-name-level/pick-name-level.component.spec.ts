import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickNameLevelComponent } from './pick-name-level.component';

describe('PickNameComponent', () => {
  let component: PickNameLevelComponent;
  let fixture: ComponentFixture<PickNameLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickNameLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickNameLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
