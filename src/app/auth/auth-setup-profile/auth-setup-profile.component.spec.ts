import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSetupProfileComponent } from './auth-setup-profile.component';

describe('AuthSetupProfileComponent', () => {
  let component: AuthSetupProfileComponent;
  let fixture: ComponentFixture<AuthSetupProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthSetupProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSetupProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
