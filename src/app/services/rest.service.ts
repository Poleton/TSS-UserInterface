import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Policy } from '../models/policy.model'
import { SmartPolicy } from '../models/smartPolicy.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  //url will change depending on the user and the data
  apiUrl = 'https://ce6c86ca-84fd-42bb-9343-076993ac36fa.mock.pstmn.io/';
  
  constructor( private _http: HttpClient) { }

  getPolicies(){
    return this._http.get<Policy[]>(this.apiUrl)
  }

  getSmartPolicies(){
    return this._http.get<SmartPolicy[]>(this.apiUrl)
  }
}
