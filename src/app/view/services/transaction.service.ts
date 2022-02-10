import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../objects/transaction';



@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http:HttpClient) {

   }

   getProducts() {
    return this.http.get<any>('assets/transaction.json')
    .toPromise()
    .then(res => <Transaction>res.data)
    .then(data => { return data; });
}
}
