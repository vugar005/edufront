import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCreateSuccessComponent } from './account-create-success.component';

describe('AccountCreateSuccessComponent', () => {
  let component: AccountCreateSuccessComponent;
  let fixture: ComponentFixture<AccountCreateSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountCreateSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCreateSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
