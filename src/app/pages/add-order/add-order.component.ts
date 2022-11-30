import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { City, Orders, Services } from 'src/app/_modules/allModules';
import { CityDataService } from 'src/app/_services/city-data.service';
import { SeviceDataService } from 'src/app/_services/sevice-data.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  service : Services[];
  city : City [] ;
  // foundatiion: Foundation1 = new Foundation1(null,null,null, '', '', '', '', '', '','');
  orders: Orders = new Orders(null,null,'', '', '', '','');

  private serviceId;
  private cityId ;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private servicedata: SeviceDataService,
    private cityDataService : CityDataService
  ) { }

  ngOnInit(): void {
    this.servicedata.getAllServices().subscribe(
      response => {
        this.service = response ;
        console.log(response)
      }
    );
    this.cityDataService.getAllCity().subscribe(
      response => {
        this.city = response ;
      }
    );
  }
  addOrder(f: NgForm) {
    this.serviceId = f.value.first ;
    this.cityId = f.value.citydata ;
   
    this.orders.city = new City(this.cityId,'','');
    this.orders.service = new Services(this.serviceId,'');


   //this.foundation.user.id = this.userId ;
  //  this.foundatiion.appUser.userName = '' ;
  //  this.foundatiion.appUser.password = '' ;


    this.servicedata.getServicesById(this.serviceId).subscribe(
      data => {
        //this.area.city
        this.orders.service = data
        console.log(data)
      }
    );
    this.cityDataService.getCityById(this.cityId).subscribe(
      data => {
        //this.area.city
        this.orders.city = data
      }
    );


    this.servicedata.createorders(this.orders).subscribe(
      response => {
        console.log(response)
       // this.router.navigate(['foundationList', this.userId]);
      // this.router.navigate(['']);
       alert("تم ارسال طلبك بنجاح")
       this.router.navigate(['/home'])
      }
    )
  }


}
