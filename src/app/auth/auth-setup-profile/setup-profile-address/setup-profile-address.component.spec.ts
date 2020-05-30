import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupProfileAddressComponent } from './setup-profile-address.component';

describe('SetupProfileAddressComponent', () => {
  let component: SetupProfileAddressComponent;
  let fixture: ComponentFixture<SetupProfileAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupProfileAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupProfileAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
