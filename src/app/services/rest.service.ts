import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Inject,Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Alert } from '../models/alert.model';
import { Policy } from '../models/policy.model'
import { SmartPolicy } from '../models/smartPolicy.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  key!: string 
  smartPolUrl!: string
  policiesUrl!:string
  alertsUrl!:string
  //url will change depending on the user and the data
  //HUGO POSTMAN
  //apiUrl='https://b8ef9f0f-b95e-40f9-b956-200af58dde05.mock.pstmn.io'
  //posPolicy='https://b8ef9f0f-b95e-40f9-b956-200af58dde05.mock.pstmn.io';
  //smart= 'https://3e837851-ba83-40a0-b0b0-720ce39302f6.mock.pstmn.io';
  //policiesUrl='https://b8ef9f0f-b95e-40f9-b956-200af58dde05.mock.pstmn.io';
  //FERRAN POSTMAN
  //smartPolUrl= 'https://0eef3714-a20f-4e88-9a9f-8292c28c92ac.mock.pstmn.io'
  //policiesUrl = 'https://10b3b14c-2b59-4a4b-8c0b-7182fc90655b.mock.pstmn.io'
  //login = 'https://239ee2b2-f71b-4553-89ae-31fe888f2c04.mock.pstmn.io'
  //alertsUrl = 'https://51654eb6-c912-4cb6-9894-2d2294810c47.mock.pstmn.io'
  //POL POSTMAN
  //login='https://fde385b2-b4e8-4b78-81ec-10238ef16999.mock.pstmn.io?id=1234';

  //policiesUrl = 'https://04c3d35e-2d99-4b22-b6a9-ae8a4498e05b.mock.pstmn.io/'; //policy
  //smartPolUrl = 'https://703c5070-c48b-489f-95e8-40e4fb1dcdb3.mock.pstmn.io'; //smart policy
  //alertsUrl= 'https://849efb4b-ae14-46a3-905d-6c445a396287.mock.pstmn.io/';//alerts 

  //login='https://fde385b2-b4e8-4b78-81ec-10238ef16999.mock.pstmn.io?id=1234';
  
  //API
  login = 'http://localhost:8080/user';
  
  
  constructor( private _http: HttpClient) {
    console.warn("service2key", this.key)
  }

 

  public setKey(_key:string){
    this.key=_key
    this.smartPolUrl= "http://localhost:8080/users/"+this.key+"/api/smart-policies";    
    this.policiesUrl= "http://localhost:8080/users/"+this.key+"/api/policies";   
    this.alertsUrl= "http://localhost:8080/users/"+this.key+"/api/smart-policies/1/alerts";
    console.warn("servicekey", this.key)
  }
  getAlerts(id : number){
    return this._http.get<Alert[]>(this.alertsUrl) //+ this.key + "/" + id)
  }
  getPolicies(){
    return this._http.get<Policy[]>(this.policiesUrl)
  }
  postPolicy(data: any){
    return this._http.post(this.policiesUrl, data)
  }
////////////////////////////////////////////////////////////////
  getSmartPolicies(){
    return this._http.get<SmartPolicy[]>(this.smartPolUrl)
  }
  postSmartPolicy(data: any){
    return this._http.post(this.smartPolUrl, data)
  }
////////////////////////////////////////////////////////////////
  postLogin(data:any){
    return this._http.post(this.login, data, {observe: 'response'})
  }

}
