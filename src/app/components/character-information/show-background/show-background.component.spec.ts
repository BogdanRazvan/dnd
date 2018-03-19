import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBackgroundComponent } from './show-background.component';

describe('ShowBackgroundComponent', () => {
  let component: ShowBackgroundComponent;
  let fixture: ComponentFixture<ShowBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
