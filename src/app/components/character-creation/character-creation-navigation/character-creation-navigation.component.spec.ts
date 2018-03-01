import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreationNavigationComponent } from './character-creation-navigation.component';

describe('CharacterCreationNavigationComponent', () => {
  let component: CharacterCreationNavigationComponent;
  let fixture: ComponentFixture<CharacterCreationNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterCreationNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCreationNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
