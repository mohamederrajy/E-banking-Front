import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../../agent/transaction-servir/ticketService';
import { Client } from './Client';
import { ConsultationService } from './consultation.service';

@Component({
  selector: 'app-transaction-consultation',
  templateUrl: './transaction-consultation.component.html',
  styleUrls: ['./transaction-consultation.component.scss']
})
export class TransactionConsultationComponent implements OnInit {

    // customers1: Client[];

    customers2: Client[];
    statuses:any[]
    // selectedCustomer1: Client;

    selectedCustomer2: Client;
    

    constructor(private consultationService: ConsultationService) { }

    ngOnInit() {
        // this.consultationService.getCustomersMedium().then(data => this.customers1 = data);
        this.consultationService.getCustomersMedium().then(data => this.customers2 = data);

        this.statuses = [
          {label: 'test', value: 'unqualified'},
          {label: 'Qualified', value: 'qualified'},
          {label: 'New', value: 'new'},
          {label: 'Negotiation', value: 'negotiation'},
          {label: 'Renewal', value: 'renewal'},
          {label: 'Proposal', value: 'proposal'}
          
      ];
      console.log(this.selectedCustomer2);
    };


}
