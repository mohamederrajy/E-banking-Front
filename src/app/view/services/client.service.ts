import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../objects/client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  // data:any = {
  //   "id": "1000"
  // };

  constructor(private http:HttpClient) { }

  getProduct() {
    return this.http.get('assets/OneClient.json').toPromise().then(data=>console.log(data));
    
  // getProduct()
  // {
  //   return this.data;
  // }

}

getProducts() {
  return this.http.get<any>('assets/products.json')
  .toPromise()
  .then(res => <Client[]>res.data)
  .then(data => { return data; });
}

}
