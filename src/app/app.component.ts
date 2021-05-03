import { Component, OnInit } from '@angular/core';
import { Policy } from './models/policy.model';
import { RestService } from './services/rest.service';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  
  constructor(private restService: RestService, private title: Title) {
    title.setTitle('Telematics Smart Shipments')
  }

  ngOnInit() {

  }
  
}
