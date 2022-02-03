import { Component, OnInit } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-transaction-historique',
  templateUrl: './transaction-historique.component.html',
  styleUrls: ['./transaction-historique.component.scss']
})
export class TransactionHistoriqueComponent implements OnInit {

  constructor() {
    
   }

   productDialog: boolean;

    products: Product[];

    product: Product;

    selectedProducts: Product[];

    submitted: boolean;

  ngOnInit(): void {
  }

}
