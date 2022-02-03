import { Component, OnInit } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.scss']
})
export class ClientManagementComponent implements OnInit {

  
  constructor() { }

  productDialog: boolean;

    products: Product[];

    product: Product;

    selectedProducts: Product[];

    submitted: boolean;

  ngOnInit(): void {
  }

}
