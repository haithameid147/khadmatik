import { Foundation1 } from 'src/app/_modules/allModules';
import { SeviceDataService } from 'src/app/_services/sevice-data.service';
import { Orders } from './../_modules/allModules';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  constructor(private serviceData: SeviceDataService,private router: Router) { }
 orderBean :Orders[]
 userId
 foundationBean:Foundation1[]
  ngOnInit(): void {
    this.userId = localStorage.getItem('username') ;
this.refreshList()

  }
  refreshList(){
    this.serviceData.getAllOrders().subscribe(
      data => {
        this.orderBean = data
      }
    );
   this.serviceData.getAllfoundation().subscribe(
    data => this.foundationBean = data
   )

  }
  updateCheck($event){
    const id=$event.target.value;
    const isCheckd = $event.target.checked;
    this.serviceData.updateFoundationActive(isCheckd,id).subscribe(
      response => {
       this.refreshList();
      }
    );

  }
  public uppdateFoundation(id,serviceId){

    this.router.navigate(['updateFoundation',this.userId,  id , serviceId ] ) ;
  }

}
