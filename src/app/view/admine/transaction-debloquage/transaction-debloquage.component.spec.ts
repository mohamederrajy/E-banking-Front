import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDebloquageComponent } from './transaction-debloquage.component';

describe('TransactionDebloquageComponent', () => {
  let component: TransactionDebloquageComponent;
  let fixture: ComponentFixture<TransactionDebloquageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionDebloquageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionDebloquageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
