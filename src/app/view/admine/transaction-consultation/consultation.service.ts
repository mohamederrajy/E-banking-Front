import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from './Client';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  constructor(private http:HttpClient) { }

  getCustomersMedium() {
    return this.http.get<any>('assets/Client.json')
        .toPromise()
        .then(res => <Client[]>res.data)
        .then(data => { return data; });
}
}
