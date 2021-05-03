import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Policy } from '../models/policy.model'
import { SmartPolicy } from '../models/smartPolicy.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  //url will change depending on the user and the data
  apiUrl = 'https://2be45dd2-c306-4db0-abf4-43d1405bafdb.mock.pstmn.io'; //HUGO
  //apiUrl = 'https://02302687-5514-431f-99cd-0e5c77066d15.mock.pstmn.io'; //POL
  apiDetails= 'https://2be45dd2-c306-4db0-abf4-43d1405bafdb.mock.pstmn.io/smartpolicy'; 
  
  constructor( private _http: HttpClient) { }

  getPolicies(){
    return this._http.get<Policy[]>(this.apiUrl)
  }

  getSmartPolicies(){
    return this._http.get<SmartPolicy[]>(this.apiUrl)
  }
  getSmartPolicy(id:number){
     return this._http.get<SmartPolicy>(this.apiDetails);

  }
  postSmartPolicy(data: any){
    return this._http.post(this.apiUrl, data)
  }
}
