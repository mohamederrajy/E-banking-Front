import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionServirComponent } from './transaction-servir.component';

describe('TransactionServirComponent', () => {
  let component: TransactionServirComponent;
  let fixture: ComponentFixture<TransactionServirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionServirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionServirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
