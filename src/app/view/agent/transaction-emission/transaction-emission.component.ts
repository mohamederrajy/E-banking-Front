import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Client } from '../../objects/client';
import { ClientService } from '../../services/client.service';
import { CountryService } from './countiesService';
import { JobService } from './jobsService';


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
  selector: 'app-transaction-emission',
  templateUrl: './transaction-emission.component.html',
  styleUrls: ['./transaction-emission.component.scss']
})
export class TransactionEmissionComponent implements OnInit {

  client:Client;
  cliente:string;
  identity:string;
  value1:any;
  value3:any;
  value8:any;
  value7:any;
  property:any;
  steps:any = 1;

  transferts: transfertType[];
  identities:identityType[];

  selectedTransfertType: transfertType;

  titles: titles[];
  cities: any[];
  professions:any[];
  frais:any[];
  beneficiaires:any[];
  

  constructor(private primengConfig: PrimeNGConfig, private countryService: CountryService, private jobService:JobService, private clientService:ClientService) { 
    this.transferts = [
      {name: 'Espece', code: 1},
      {name: 'Débit', code: 2}
    ];

    this.identities = [
      {name: 'CIN', code: 1},
      {name: 'Passeport', code: 2},
      {name: 'Permis de Conduite', code: 3}
    ];

    this.titles = [
      {name:'Monsieur', code:1},
      {name: 'Madame', code:2}
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

    this.frais = [
      {name: "A la charge du client béneficiaire", code:0},
      {name: "A la charge du donneur d'ordre", code:1},
      {name: "Frais partagés", code:2}
    ];

    this.beneficiaires = [
      {name: "Elmeskaoui Amine", code:0},
      {name: "Afassy Brahim", code:1},
      {name: "Goumghar Oussama", code:2},
      {name: "Er-rajy Mohamed", code:3},
      {name: "Abdelhakim Amine", code:4},
      {name: "Chakiri Houssam", code:5}
    ]

  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    // this.client = this.clientService.getProduct();
    
  }

  searchClient():void
  {
    console.log(this.steps);
    // this.property = this.client.id;
    this.cliente = "client";
    // this.client = this.clientService.getProduct();
    this.property = this.client.id;

  }

  onSubmit()
  {
    if(this.steps < 3)
    {
      console.log(this.steps);
      this.steps = this.steps + 1; 
    }
  }

  onBack()
  {
    this.steps = this.steps - 1;
    console.log(this.steps);
  }

  onAddBen()
  {
    this.steps = 4
    console.log(this.steps);
  }

}
