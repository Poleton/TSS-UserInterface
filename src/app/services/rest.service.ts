import {HttpClient, HttpHeaders} from '@angular/common/http';
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
  newAlertsUrl!:string
  deactivateUrl!:string
  //API
  login = 'http://localhost:8080/user';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor( private _http: HttpClient) {
    console.warn("service2key", this.key)
  }



  public setKey(_key:string){
    this.key=_key
    this.smartPolUrl= "http://localhost:8080/users/"+this.key+"/api/smart-policies";
    this.policiesUrl= "http://localhost:8080/users/"+this.key+"/api/policies";
    this.alertsUrl= "http://localhost:8080/users/"+this.key+"/api/smart-policies/";
    this.newAlertsUrl= "http://localhost:8080/users/"+this.key+"/api/smart-policies/new-alerts";
    this.deactivateUrl= "http://localhost:8080/users/" +this.key+ "/api/smart-policies/"
    console.warn("servicekey", this.key)
  }
  getAlerts(id : number){
    return this._http.get<Alert[]>(this.alertsUrl+id.toString()+"/alerts") //+ this.key + "/" + id)
  }
  getPolicies(){
    return this._http.get<Policy[]>(this.policiesUrl)
  }
  postPolicy(data: any){
    return this._http.post(this.policiesUrl, data)
  }

  getSmartPolicies(){
    return this._http.get<SmartPolicy[]>(this.smartPolUrl)
  }
  postSmartPolicy(data: any){
    return this._http.post(this.smartPolUrl, data, this.httpOptions)
  }

  postLogin(data:any){
    return this._http.post(this.login, data, {observe: 'response'})
  }

  postHasNewAlert(data: any){
    return this._http.post<any>(this.newAlertsUrl, data, this.httpOptions)
  }

  getDeactivate(smartId:number){
    return this._http.get<any>(this.deactivateUrl+smartId.toString()+"/deactivation")
  }
}
