import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionBloquageComponent } from './transaction-bloquage.component';

describe('TransactionBloquageComponent', () => {
  let component: TransactionBloquageComponent;
  let fixture: ComponentFixture<TransactionBloquageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionBloquageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionBloquageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
