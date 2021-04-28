import { Component, OnInit } from '@angular/core';
import { Policy } from './models/policy.model';
import { RestService } from './services/rest.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: any;
  
  
  constructor(private restService: RestService) {
  }

  ngOnInit() {

  }
  
}
