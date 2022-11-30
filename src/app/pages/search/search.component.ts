import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City, Services } from 'src/app/_modules/allModules';
import { CityDataService } from 'src/app/_services/city-data.service';
import { SeviceDataService } from 'src/app/_services/sevice-data.service';
import { UserAuthService } from 'src/app/_services/user-auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  staticService :Services[];
  staticCity : City[];
  allcity:City[];
  service: Services[];
  title = 'jwt-youtube-ui';
  cityName:any = 'jh';
  ngselect:any;
  test ;
  serviceId:any = 'esf';

  constructor(   private userAuthService: UserAuthService,
    private router: Router,
    private  servicedata: SeviceDataService,
    private cityDataService: CityDataService,
    public userService: UserService) { }
  ngOnInit(): void {
     var staticServicee: Array<Services> = [
      { id: 1, name: "نظافة" },
      { id: 2, name: "نجار" },
      { id: 3, name: "سباك" }
    ];
     this.staticService = staticServicee

     var staticCity1: Array<City> = [
      { id: 1, nameAr: "القاهره",nameEn: "cairo" },
      { id: 2, nameAr: "الاسكندرية",nameEn:"alex" },
      { id: 3, nameAr: "طنطا",nameEn:"tanta" }
    ];
       this.staticCity = staticCity1

    this.servicedata.getAllServices().subscribe(
      data => {
        console.log("service",data)
        this.service = data
     
      }
    )
    this.cityDataService.getAllCity().subscribe(
      data => {

        this.allcity = data
      }
    );
    this.getCityToken();   
    this.getServiceToken();
   // this.cityName = localStorage.getItem('city') ;

    
  }

  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }
  public doSearch(valueee: String)
  {
    //console.log("hhh"+valueee)

    if(!valueee){
      valueee = 'no' ;
    }
 //   console.log(valueee)
   
   this.router.navigate([`/search/${valueee}/${this.cityName}/${this.serviceId}`]);

  }
  public doSearchh()
  {
    //console.log("hhh"+valueee)

   const valueee ='no'
 //   console.log(valueee)
   
   this.router.navigate([`/search/${valueee}/${this.cityName}/${this.serviceId}`]);

  }
  public logout() {
    this.userAuthService.clear();
    this.router.navigate(['/home']);
  }


  onEditClickCity(id:any){
    localStorage.setItem('city',id);
    this.cityName = localStorage.getItem('city') ;
  }
  onEditClickService(id:any){
    console.log("haitham")
    localStorage.setItem('service',id);
    this.serviceId = localStorage.getItem('service') ;
  //  this.router.navigate([`/search/"no"/${this.cityName}/${this.serviceId}`]);

    //this.doSearch();
  }
  getCityToken(){
    this.test = localStorage.getItem('city')
    if (this.test != null) {
   this.cityName = localStorage.getItem('city') ;
   localStorage.setItem('city',this.cityName);
    }
    

  }

  getServiceToken(){
    this.serviceId = localStorage.getItem('service') ;
    localStorage.setItem('service',this.serviceId);

  }
  clearSearch(){
    this.userAuthService.clear();
    this.router.navigate(['/home']);
  }

}
