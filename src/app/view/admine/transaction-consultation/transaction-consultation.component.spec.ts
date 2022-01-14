import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionConsultationComponent } from './transaction-consultation.component';

describe('TransactionConsultationComponent', () => {
  let component: TransactionConsultationComponent;
  let fixture: ComponentFixture<TransactionConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionConsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
