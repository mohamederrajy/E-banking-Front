import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionEmissionComponent } from './transaction-emission.component';

describe('TransactionEmissionComponent', () => {
  let component: TransactionEmissionComponent;
  let fixture: ComponentFixture<TransactionEmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionEmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionEmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
