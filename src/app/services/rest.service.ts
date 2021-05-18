import { HttpClient } from '@angular/common/http';
import { Inject,Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Policy } from '../models/policy.model'
import { SmartPolicy } from '../models/smartPolicy.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  key!:string;
  
  //url will change depending on the user and the data
  //HUGO POSTMAN
  //apiUrl='https://b8ef9f0f-b95e-40f9-b956-200af58dde05.mock.pstmn.io'
  //posPolicy='https://b8ef9f0f-b95e-40f9-b956-200af58dde05.mock.pstmn.io';
  //smart= 'https://3e837851-ba83-40a0-b0b0-720ce39302f6.mock.pstmn.io';
  //getPol='https://b8ef9f0f-b95e-40f9-b956-200af58dde05.mock.pstmn.io';
  
  //POL POSTMAN
  loginCorrect='https://fde385b2-b4e8-4b78-81ec-10238ef16999.mock.pstmn.io?id=1234';

  policiesUrl = 'https://04c3d35e-2d99-4b22-b6a9-ae8a4498e05b.mock.pstmn.io/'; //policy
  smartPolUrl= 'https://04c3d35e-2d99-4b22-b6a9-ae8a4498e05b.mock.pstmn.io/'; //smart policy
  alertsUrl= '';//alerts 
/*
  loginCorrect='https://fde385b2-b4e8-4b78-81ec-10238ef16999.mock.pstmn.io?id=1234';

  smartPolUrl= 'https://localhost:8080/users/'+this.key+'/api/smart-policies';    
  policiesUrl= 'https://localhost:8080/users/'+this.key+'/api/policies';   
  alertsUrl= 'https://localhost:8080/users/'+this.key+'/api/smart-policies/1/alerts';
*/  
  constructor( private _http: HttpClient) {
  }

  public setKey(_key:string){
    this.key=_key
    console.warn("servicekey", this.key)
  }

  getPolicies(){
    return this._http.get<Policy[]>(this.policiesUrl)
  }

  getSmartPolicies(){
    return this._http.get<SmartPolicy[]>(this.smartPolUrl)
  }
  /*getSmartPolicy(id:number){
     return this._http.get<SmartPolicy>(this.apiDetails);

  }*/
  postSmartPolicy(data: any){
    return this._http.post(this.smartPolUrl, data)
  }
  postPolicy(data: any){
    return this._http.post(this.policiesUrl, data)
  }

  postLogin(data:any){
    return this._http.post(this.loginCorrect, data, {observe: 'response'})
  }

}
