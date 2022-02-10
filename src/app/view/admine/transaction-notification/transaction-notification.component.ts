import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../objects/transaction';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transaction-notification',
  templateUrl: './transaction-notification.component.html',
  styleUrls: ['./transaction-notification.component.scss']
})
export class TransactionNotificationComponent implements OnInit {

  transactions:Transaction;
  reference:any;

  constructor(private transactionService:TransactionService) { }

  ngOnInit(): void {
    
  }

  onSubmit()
  {
      
  }

  findByReference()
  {
    this.transactionService.getProducts().then(data => (this.transactions = data));
  }

}
