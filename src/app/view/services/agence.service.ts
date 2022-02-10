import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agence } from '../objects/agence';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {

  constructor(private http:HttpClient) { }

  getProducts() {
    return this.http.get<any>('assets/products.json')
    .toPromise()
    .then(res => <Agence[]>res.data)
    .then(data => { return data; });
}
}
