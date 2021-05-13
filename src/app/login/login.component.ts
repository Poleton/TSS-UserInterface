import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg:string=""
  key:string=""
  info!: [] ;
  constructor(private restService: RestService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(data: any){
  
    this.restService.postLogin(data)
      .subscribe(
        (result)=>{
        console.warn("result", result)
        console.warn("status", result.status)
        console.warn("body", result.body)
        //key=result.body
        if(result.status==200){
          this.router.navigate(['home'])
        } 
      },
       (error) => {
         this.msg="Username or password incorrect"
        })
      
    console.warn(data) // borrar al acabar enseña user y password por consola
  }

}
