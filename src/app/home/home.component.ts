import { Component, OnInit } from '@angular/core';
import { Foundation1 } from '../_modules/allModules';
import { SeviceDataService } from '../_services/sevice-data.service';
import { MatDialog } from '@angular/material/dialog';
import { ShowFoundationdialogComponent } from '../pages/show-foundationdialog/show-foundationdialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  noData = false ;
  breakpoint :any ;
  cityIdFromToken :number ;
  serviceId : number;
  serviceIdfromToken: number;
  keyword :string ;
  hasServiceIdFromSearch :any
  hasCityIdfromsearch :any
  foundationBean : Foundation1[] ;
  constructor( private  servicedata: SeviceDataService
     ,private route: ActivatedRoute,
     public fDialog: MatDialog
    ) { 
      this.route.paramMap.subscribe(params => {
        this.ngOnInit();
    });

    }
  //  this._activatedRoute.paramMap.subscribe(params => {
  ngOnInit(): void {
    this.serviceIdfromToken =Number(localStorage.getItem('service'))  
    this.cityIdFromToken = Number(localStorage.getItem('city') )
    this.serviceId =this.route.snapshot.params['id'];
    this.keyword =this.route.snapshot.params['keyword'];
    //this
    // this.hasServiceIdFromSearch =this.route.snapshot.paramMap.has('serviceId');
    // this.hasCityIdfromsearch  =this.route.snapshot.paramMap.has('cityId');
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 3;

    this.getProvider();
  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
  }
  public getProvider(){
    const hasServiceId: boolean =this.route.snapshot.paramMap.has('id');
    const hasKeyword : boolean =this.route.snapshot.paramMap.has('keyword');


    if(hasServiceId){
      console.log("haotham 1")
      //alert("service")
          this.servicedata.getFoundationByServicesId(this.serviceId,this.cityIdFromToken).subscribe(
            data => {
              this.foundationBean = data
              
            }
          )
    }

   else if(hasKeyword){
    // console.log("haotham 2")
    if (isNaN(this.cityIdFromToken))
    {
   //   alert(this.cityIdFromToken)
      this.cityIdFromToken = 0
    }


    if (isNaN(this.serviceIdfromToken))
    {
      console.log("haotham 3")
      //alert(this.serviceIdfromToken)
      this.serviceIdfromToken = 0
    }

    this.servicedata.getFoundationBySearch(this.serviceIdfromToken,this.cityIdFromToken,this.keyword).subscribe(
      data => {
        console.log("haotham 4")
        this.foundationBean = data
        
      }
    )
}
      
    else{
     this.noData = true ;
    // this.servicedata.getAllfoundation().subscribe(
    //   data => {
    //     console.log("haotham 6")
    //     this.foundationBean = data

    //   }
    // )
    }
    //if i want all foundation
    // else{
    //   this.servicedata.getAllfoundation().subscribe(
    //     data => {
    //       console.log("haotham 6")
    //       this.foundationBean = data
  
    //     }
    //   )
    //   }
  }
  public showFoundation(foundationBean :Foundation1){
      this.fDialog.open(ShowFoundationdialogComponent,
        {
          data:{
            foundation:foundationBean

          },
          height:'500px',width:'800px'}
        );
  }

}
