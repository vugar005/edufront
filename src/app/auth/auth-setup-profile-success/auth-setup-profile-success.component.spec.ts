import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSetupProfileSuccessComponent } from './auth-setup-profile-success.component';

describe('AuthSetupProfileSuccessComponent', () => {
  let component: AuthSetupProfileSuccessComponent;
  let fixture: ComponentFixture<AuthSetupProfileSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthSetupProfileSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSetupProfileSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
