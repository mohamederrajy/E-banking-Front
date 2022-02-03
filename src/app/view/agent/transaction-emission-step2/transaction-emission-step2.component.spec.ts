import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionEmissionStep2Component } from './transaction-emission-step2.component';

describe('TransactionEmissionStep2Component', () => {
  let component: TransactionEmissionStep2Component;
  let fixture: ComponentFixture<TransactionEmissionStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionEmissionStep2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionEmissionStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
