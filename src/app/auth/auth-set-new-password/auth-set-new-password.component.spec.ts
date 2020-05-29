import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSetNewPasswordComponent } from './auth-set-new-password.component';

describe('AuthSetNewPasswordComponent', () => {
  let component: AuthSetNewPasswordComponent;
  let fixture: ComponentFixture<AuthSetNewPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthSetNewPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSetNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
