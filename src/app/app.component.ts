import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City, Services } from './_modules/allModules';
import { CityDataService } from './_services/city-data.service';
import { SeviceDataService } from './_services/sevice-data.service';
// import { UserAuthService } from './_services/user-auth.service';
// import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  service: Services[];
  title = 'jwt-youtube-ui';
  cityName:any;
  ngselect:any;
  serviceId:any;
  allcity:City[];
  constructor(
    private  servicedata: SeviceDataService,
    private cityDataService: CityDataService,
  
    private router: Router
  ) {}
   
    ngOnInit(): void {
     
    this.getCityToken();   
    this.getServiceToken();
   // this.cityName = localStorage.getItem('city') ;
    this.servicedata.getAllServices().subscribe(
      data => {
        this.service = data
     
      }
    )
    this.cityDataService.getAllCity().subscribe(
      data => {

        this.allcity = data
      }
    );
         
  }


  onEditClickCity(id:any){
    localStorage.setItem('city',id);
    this.cityName = localStorage.getItem('city') ;
  }
  onEditClickService(id:any){
    localStorage.setItem('service',id);
    this.serviceId = localStorage.getItem('service') ;
  }
  getCityToken(){
    this.cityName = localStorage.getItem('city') ;
    localStorage.setItem('city',this.cityName);

  }

  getServiceToken(){
    this.serviceId = localStorage.getItem('service') ;
    localStorage.setItem('service',this.serviceId);

  }
}
