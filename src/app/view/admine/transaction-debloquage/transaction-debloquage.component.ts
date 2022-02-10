import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Product } from '../../agent/transaction-historique/Product';
import { ProductService } from '../../agent/transaction-servir/product.service';

@Component({
  selector: 'app-transaction-debloquage',
  templateUrl: './transaction-debloquage.component.html',
  styleUrls: ['./transaction-debloquage.component.scss']
})
export class TransactionDebloquageComponent implements OnInit {

  productDialog: boolean;

  products: Product[];

  product: Product;

  selectedProducts: Product[];

  submitted: boolean;

  statuses: any[];

constructor(private productService: ProductService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

ngOnInit() {
  this.productService.getProducts().then(data => this.products = data);

  this.statuses = [
      {label: 'Bloqué', value: 'instock'},
      {label: 'Débloqué', value: 'lowstock'},
      {label: 'A servir', value: 'outofstock'}
  ];
}

openNew() {
  this.product = {};
  this.submitted = false;
  this.productDialog = true;
}

deleteSelectedProducts() {
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          // this.products = this.products.filter(val => !this.selectedProducts.includes(val));
          
          for (let i = 0; i < this.selectedProducts.length; i++) {
            this.selectedProducts[i].inventoryStatus = "lowstock";
            console.log(this.products[i].inventoryStatus);
        }
          this.selectedProducts = null;
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
      }
  });
}

editProduct(product: Product) {
  this.product = {...product};
  this.productDialog = true;
}

deleteProduct(product: Product) {
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.products = this.products.filter(val => val.id !== product.id);
          this.product = {};
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
      }
  });
}

hideDialog() {
  this.productDialog = false;
  this.submitted = false;
}

saveProduct() {
  this.submitted = true;

  if (this.product.name.trim()) {
      if (this.product.id) {
          this.products[this.findIndexById(this.product.id)] = this.product;
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
      }
      else {
          this.product.id = this.createId();
          this.product.image = 'product-placeholder.svg';
          this.products.push(this.product);
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
      }

      this.products = [...this.products];
      this.productDialog = false;
      this.product = {};
  }
}

findIndexById(id: string): number {
  let index = -1;
  for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
          index = i;
          break;
      }
  }

  return index;
}

createId(): string {
  let id = '';
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for ( var i = 0; i < 5; i++ ) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}
}
