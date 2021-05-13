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
  posPolicy='https://b8ef9f0f-b95e-40f9-b956-200af58dde05.mock.pstmn.io';
  smart= 'https://3e837851-ba83-40a0-b0b0-720ce39302f6.mock.pstmn.io';
  getPol='https://b8ef9f0f-b95e-40f9-b956-200af58dde05.mock.pstmn.io';
  //POL
  apiUrl = 'https://04c3d35e-2d99-4b22-b6a9-ae8a4498e05b.mock.pstmn.io/'; //policy
  apiDetails= 'https://5abe182e-3540-4e0f-9fbf-b6383bbe760f.mock.pstmn.io'; //smart policy
  apiSmart= 'https://5abe182e-3540-4e0f-9fbf-b6383bbe760f.mock.pstmn.io';//smart 
  loginCorrect='https://fde385b2-b4e8-4b78-81ec-10238ef16999.mock.pstmn.io?id=1234';
  constructor( private _http: HttpClient) { }

  getPolicies(){
    return this._http.get<Policy[]>(this.apiUrl)
  }

  getSmartPolicies(){
    return this._http.get<SmartPolicy[]>(this.getPol)
  }
  /*getSmartPolicy(id:number){
     return this._http.get<SmartPolicy>(this.apiDetails);

  }*/
  postSmartPolicy(data: any){
    return this._http.post(this.getPol, data)
  }
  postPolicy(data: any){
    return this._http.post(this.getPol, data)
  }

  postLogin(data:any){
    return this._http.post(this.loginCorrect, data, {observe: 'response'})
  }

}
