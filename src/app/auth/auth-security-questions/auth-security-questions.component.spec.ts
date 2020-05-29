import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSecurityQuestionsComponent } from './auth-security-questions.component';

describe('AuthSecurityQuestionsComponent', () => {
  let component: AuthSecurityQuestionsComponent;
  let fixture: ComponentFixture<AuthSecurityQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthSecurityQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSecurityQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
