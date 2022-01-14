import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionRestitutionComponent } from './transaction-restitution.component';

describe('TransactionRestitutionComponent', () => {
  let component: TransactionRestitutionComponent;
  let fixture: ComponentFixture<TransactionRestitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionRestitutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionRestitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
