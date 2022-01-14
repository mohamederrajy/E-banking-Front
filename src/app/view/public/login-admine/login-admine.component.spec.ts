import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdmineComponent } from './login-admine.component';

describe('LoginAdmineComponent', () => {
  let component: LoginAdmineComponent;
  let fixture: ComponentFixture<LoginAdmineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAdmineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAdmineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
