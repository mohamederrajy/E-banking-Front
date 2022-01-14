import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionExtournComponent } from './transaction-extourn.component';

describe('TransactionExtournComponent', () => {
  let component: TransactionExtournComponent;
  let fixture: ComponentFixture<TransactionExtournComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionExtournComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionExtournComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
