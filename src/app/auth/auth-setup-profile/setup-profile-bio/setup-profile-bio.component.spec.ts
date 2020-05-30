import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupProfileBioComponent } from './setup-profile-bio.component';

describe('SetupProfileBioComponent', () => {
  let component: SetupProfileBioComponent;
  let fixture: ComponentFixture<SetupProfileBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupProfileBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupProfileBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
