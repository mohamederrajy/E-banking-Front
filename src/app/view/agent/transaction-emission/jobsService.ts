import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JobService {

    constructor(private http: HttpClient) { }

    getCountries() {
    return this.http.get<any>('assets/jobs.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => { return data; });
    }
}