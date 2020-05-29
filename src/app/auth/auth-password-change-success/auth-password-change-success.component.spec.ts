import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPasswordChangeSuccessComponent } from './auth-password-change-success.component';

describe('AuthPasswordChangeSuccessComponent', () => {
  let component: AuthPasswordChangeSuccessComponent;
  let fixture: ComponentFixture<AuthPasswordChangeSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthPasswordChangeSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthPasswordChangeSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
