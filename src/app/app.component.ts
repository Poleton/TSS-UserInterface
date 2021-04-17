import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Smart Shipments';
  userForm: FormGroup;
  @ViewChild('modalClose') modalClose:ElementRef;
  //Static data, you can change as per your need
  policies: any[] = [
	    {"id": "1", "productname": "Astrazeneca", "p_holder": "Astrazeneca Spain", "issuance": "2021-04-21/13:20:09", "expiration": "2021-08-21/00:00:00", "status": "OPERATIVE"},
	    {"id": "2", "productname": "Pfizer-BioNTech", "p_holder": "Pfizer Incorporated", "issuance": "2021-05-23/18:10:23", "expiration": "2021-09-21/00:00:00", "status": "OPERATIVE"},
      {"id": "3", "productname": "Moderna", "p_holder": "Moderna Incorporated", "issuance": "2021-05-23/18:10:23", "expiration": "2021-09-21/00:00:00", "status": "OPERATIVE"}
	   
	];
	itemResource = new DataTableResource(this.policies);
	items = [];
	itemCount = 0;
	params = {offset: 0, limit: 10}; //Static can be changed as per your need
	formFlag = 'add';

    constructor(){
      this.itemResource.count().then(count => this.itemCount = count);
      this.reloadItems(this.params);
    }  

    reloadItems(params) {
      this.itemResource.query(params).then(items => this.items = items);
    }

    // special properties:
    rowClick(rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.productname);
    }

    rowDoubleClick(rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.productname);
    }

	rowTooltip(item) { return item.p_holder; }

	//Init method
	ngOnInit(){
		this.userForm = new FormGroup({
		  'id': new FormControl(null),
		  'productname': new FormControl(null, Validators.required),
		  'p_holder': new FormControl(null, Validators.required),
      'issuance': new FormControl(null, Validators.required),
      'expiration': new FormControl(null, Validators.required),
      
		});
	}

	initUser(){
		//User form reset
		this.userForm.reset();
		this.formFlag = 'add';
	}
	//Save user's data
	saveUser(){
		if(this.formFlag == 'add')
		{
			this.userForm.value.id= this.policies.length + 1;
			this.policies.unshift(this.userForm.value);
		}
		else
		{
			var index = this.policies.findIndex(x => x.id== this.userForm.value.id);
			if (index !== -1) {
			  this.policies[index] = this.userForm.value;
			}
		}
		this.reloadTableManually();
		//Close modal
		this.modalClose.nativeElement.click();
		//User form reset
		this.userForm.reset();
	}
	//Get data while edit
	getData(item)
	{
		this.userForm.patchValue(item);
		this.formFlag = 'edit';
	}
	//Delete user's data
	delData(item){
		this.policies.splice(this.policies.indexOf(item), 1);
		this.reloadTableManually();
	}
	//Reload table manually after add/edit
	reloadTableManually(){
		this.reloadItems(this.params);
		this.itemResource.count().then(count => this.itemCount = count);
	}
}
