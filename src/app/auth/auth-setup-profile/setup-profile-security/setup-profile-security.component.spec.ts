import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupProfileSecurityComponent } from './setup-profile-security.component';

describe('SetupProfileSecurityComponent', () => {
  let component: SetupProfileSecurityComponent;
  let fixture: ComponentFixture<SetupProfileSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupProfileSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupProfileSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
