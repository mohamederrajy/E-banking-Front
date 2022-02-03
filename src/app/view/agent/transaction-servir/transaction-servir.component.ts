import { Component,OnInit,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { Subscription } from 'rxjs';
import { Product } from '../client-management/Product';
import { ProductService } from './product.service';
import { TicketService } from './ticketService';

interface transfertType {
  name: string,
  code: number
}

interface identityType {
  name: string,
  code: number
}

interface titles{
  name: string,
  code: number
}

@Component({
  selector: 'app-transaction-servir',
  templateUrl: './transaction-servir.component.html',
  providers:[MessageService],
  styleUrls: ['./transaction-servir.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TransactionServirComponent implements OnInit {
  
  items: MenuItem[];
  products: Product[];

  client:string = "";
  identity:string;
  value1:any;
  value3:any;
  value8:any;
  value7:any;
  property:any;

  transferts: transfertType[];
  identities:identityType[];

  titles: titles[];
  cities: any[];
  professions:any[];
  frais:any[];
  beneficiaires:any[];


  reference:any;
    
  subscription: Subscription;

  constructor(public messageService: MessageService, public ticketService: TicketService, private productService: ProductService) {
    this.titles = [
      {name:'Monsieur', code:1},
      {name: 'Madame', code:2}
    ];

    this.identities = [
      {name: 'CIN', code: 1},
      {name: 'Passeport', code: 2},
      {name: 'Permis de Conduite', code: 3}
    ];
    this.cities = [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" }
    ];

    this.professions = [
      {name:"Medecin", code:"M"},
      {name:"Enseignant", code:"E"},
      {name:"Ingénieur", code:"I"},
      {name:"Autre", code:"A"},
    ];
  }

  geeks: MenuItem[];
  steps: number = 0;
  
  ngOnInit() {
    this.geeks = [
      { label: "Réference de la transaction" },
      { label: "KYCs du bénéficiaire" },
      { label: "Validation de la transaction" },
    //   { label: "HTML" },
    ];

    this.productService.getProductsSmall().then(data => (this.products = data));
  }

  onSubmit()
  {
      if(this.steps < 2)
      {
          this.steps += 1;
          console.log(this.steps);
      }
  }

  onBack()
  {
      if(this.steps >0)
      {
        this.steps -= 1;
        console.log(this.steps);
      }
      
  }
}
