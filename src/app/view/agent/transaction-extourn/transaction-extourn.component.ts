import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ProductService } from '../transaction-servir/product.service';
import { TicketService } from '../transaction-servir/ticketService';
import { Product } from './Product';

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
  selector: 'app-transaction-extourn',
  templateUrl: './transaction-extourn.component.html',
  styleUrls: ['./transaction-extourn.component.scss']
})
export class TransactionExtournComponent implements OnInit {

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
      motifs:any[];

      reference:any;
        
      subscription: Subscription;

      constructor(public messageService: MessageService, public ticketService: TicketService, private productService: ProductService) { this.titles = [
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

      this.motifs = [
        {name:" Soutien familial", code:"1"},
        {name:"Epargne/investissement", code:"2"},
        {name:"Cadeau", code:"3"},
        {name:"Paiement de biens et de services", code:"4"},
        {name:"Frais de dépassement ", code:"5"},
        {name:"Frais d’éducation", code:"6"},
        {name:"Location/Hypothèque", code:"7"},
        {name:"Aide de secours/Médicale", code:"8"},
        {name:"Revenu d’un site internet", code:"9"},
        {name:"Dépenses salariales", code:"10"},
        {name:"Frais de loterie ou récompense/taxes", code:"11"},
        {name:"Prêt", code:"12"},
        {name:"Commerce sur internet", code:"13"},
        {name:"Donation", code:"16"},
        {name:"Autres (à préciser) ", code:"15"},
      ]
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
