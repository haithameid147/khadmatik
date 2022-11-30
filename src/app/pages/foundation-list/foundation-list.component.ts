import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foundation1, User } from 'src/app/_modules/allModules';
import { FileServiceService } from 'src/app/_services/file-service.service';
import { SeviceDataService } from 'src/app/_services/sevice-data.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-foundation-list',
  templateUrl: './foundation-list.component.html',
  styleUrls: ['./foundation-list.component.css']
})
export class FoundationListComponent implements OnInit {
  constructor(private route: ActivatedRoute,
    private serviceData: SeviceDataService,
    private router: Router,
    private userService : UserService,
    private fileService : FileServiceService
    
    ) { }
    foundationBean : Foundation1[] ;
    user: User;
    foundationId : number;
    userId : any;
    foundationCount:number;
    id: number;
    a : any ;
  ngOnInit(): void {
    this.refreshList();
    //console.log("haitham"+this.foundationCount)
  }
  refreshList() {
      this.foundationId = this.route.snapshot.params['id'];
 //   this.userId = this.route.snapshot.params['id'];
     this.userId = localStorage.getItem('username') ;
      this.serviceData.getFoundationCount(this.userId).subscribe(
        data =>{ this.foundationCount =data
        console.log(this.foundationCount)
        }
      )
    //  console.log("this.userId")
    //  console.log(this.userId)


    // this.userService.getUserById(this.userId).subscribe(
    //   data => {
    //     this.user = data
    //   }
    // );


      // if (this.userId === sessionStorage.getItem.)
     // let user = sessionStorage.getItem('authenticaterUser');

     this.serviceData.getFoundationByUserId(this.userId).subscribe(
      data => {
        this.foundationBean = data
      }
    );


      // this.a = this.authintication.getAuthUserId() ;
      // console.log("this.user") ;
      // console.log(this.a) ;
      // if (this.a === this.userId){
      //   this.serviceData.getFoundationByUserId(this.userId).subscribe(
      //     data => {
      //       this.foundationBean = data
      //       console.log(data) ;
      //     }
      //   );
      // }
      //  else {
      //   alert ("you don't have permission")
      //   this.serviceData.getFoundationByUserId(this.a).subscribe(
      //     data => {
      //       this.foundationBean = data
      //       console.log(data) ;
      //     }
      //   );
      // }


  }
  public uppdateFoundation(id,serviceId){
    this.router.navigate(['updateFoundation', this.userId , id , serviceId ] ) ;
  }

  public deleteFoundation(id){
    this.serviceData.getfoundationById(id).subscribe(f => {
      let photoname =f.photoName
      let servicename =f.nameAr
      this.fileService.deleteFileStorage(photoname,servicename);

    })
    this.serviceData.deleteِFoundation(id).subscribe(
      response => {
       this.refreshList();
      }
    );
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
  public addFoundation(){
    this.router.navigate(['/addFoundation']) ;
  }
}
