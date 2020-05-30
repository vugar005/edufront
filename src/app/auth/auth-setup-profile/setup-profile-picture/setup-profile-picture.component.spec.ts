import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupProfilePictureComponent } from './setup-profile-picture.component';

describe('SetupProfilePictureComponent', () => {
  let component: SetupProfilePictureComponent;
  let fixture: ComponentFixture<SetupProfilePictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupProfilePictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupProfilePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
