import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Policy } from '../models/policy.model'
import { SmartPolicy } from '../models/smartPolicy.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  //url will change depending on the user and the data

  //HUGO
  //apiUrl='https://b8ef9f0f-b95e-40f9-b956-200af58dde05.mock.pstmn.io'
  //apiSmart= 'https://3e837851-ba83-40a0-b0b0-720ce39302f6.mock.pstmn.io';
  //POL
  apiUrl = 'https://908bf3e7-ef91-4be0-8a03-a073bb10f567.mock.pstmn.io'; //policy
  apiDetails= 'https://5abe182e-3540-4e0f-9fbf-b6383bbe760f.mock.pstmn.io'; //smart policy
  apiSmart= 'https://5abe182e-3540-4e0f-9fbf-b6383bbe760f.mock.pstmn.io';//smart 
  constructor( private _http: HttpClient) { }

  getPolicies(){
    return this._http.get<Policy[]>(this.apiUrl)
  }

  getSmartPolicies(){
    return this._http.get<SmartPolicy[]>(this.apiSmart)
  }
  /*getSmartPolicy(id:number){
     return this._http.get<SmartPolicy>(this.apiDetails);

  }*/
  postSmartPolicy(data: any){
    return this._http.post(this.apiUrl, data)
  }
  postPolicy(data: any){
    return this._http.post(this.apiUrl, data)
  }
}
