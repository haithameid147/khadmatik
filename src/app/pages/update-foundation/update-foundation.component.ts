import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { City, Foundation1, Services, User } from 'src/app/_modules/allModules';
import { CityDataService } from 'src/app/_services/city-data.service';
import { FileServiceService } from 'src/app/_services/file-service.service';
import { SeviceDataService } from 'src/app/_services/sevice-data.service';
import { UserService } from 'src/app/_services/user.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-update-foundation',
  templateUrl: './update-foundation.component.html',
  styleUrls: ['./update-foundation.component.css']
})
export class UpdateFoundationComponent implements OnInit {

  user: User[];
  service: Services[];
  servicee: Services = new Services(null, '');
  city: City[];
  foundatiion: Foundation1 = new Foundation1(null, null, null, '', '', '', '', '', '', '', '','');
  foundatiiion: Foundation1 = new Foundation1(null, null, null, '', '', '', '', '', '', '', '','');
  private userId: any;
  private userCheck: any;
  private str: string
  private cityId;
  public userFile: any = File;
  @ViewChild('image') image: ElementRef;


  
  private serviceId;
  private foundationId;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private servicedata: SeviceDataService,
    private cityDataService: CityDataService,
    private fileservice: FileServiceService,
    private storage: AngularFireStorage
  ) { }
  ngselect: any;
  ngselect2: any;
  ngOnInit(): void {
    this.userId = localStorage.getItem('username');
    this.foundationId = this.route.snapshot.params['foundationId'];
    this.serviceId = this.route.snapshot.params['serviceId'];

    //get all services
    this.servicedata.getAllServices().subscribe(
      response => {
        this.service = response;
      }
    );

    //get all cities
    this.cityDataService.getAllCity().subscribe(
      response => {
        this.city = response;
      }
    );

    //get service that used to appear when update 
    this.servicedata.getServicesById(this.serviceId).subscribe(
      data => {
        this.servicee = data;
      }
    )

    // getfoundationByIdd
    this.servicedata.getfoundationByIdd(this.foundationId)
      .subscribe(
        data => {
          this.foundatiion = data
          this.str = Object.values([data.user.userName]).toString();
          if (this.userId === this.str) {
            
          }
           else{
            alert("you don't have permission")
            this.router.navigate(['/foundationList']);
           }
          this.str = Object.values([data.user.userName]).toString();
          console.log("str")
          console.log(this.str)
          //  this.userCheck = str
        }

      );

      //getserviceIdByfoundationByIdd 
    this.servicedata.getserviceIdByfoundationByIdd(this.foundationId)
      .subscribe(
        data => {
          this.ngselect2 = data
        }
      );
     //getcityIdByfoundationByIdd
    this.servicedata.getcityIdByfoundationByIdd(this.foundationId)
      .subscribe(
        data =>
          this.ngselect = data
      );

    this.servicedata.getServicesById(this.serviceId).subscribe(
      data => {
        this.foundatiion.service = data;
      }
    );
      
    this.userService.getUserByUserName(this.userId).subscribe(
      data => {
        this.foundatiion.user = data
      }
    );

    console.log(this.foundatiion);
    // this.userCheck =  this.foundatiion.user.userName ;
    console.log("this.userCheck");

    console.log(this.str);

  }

  onSelectFile(event) {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      if (file.size > 200000) {
        alert("too big or something");
        return;
      }
    }
    this.userFile = file;
  }
  updateFoundation(f: NgForm) {
    this.serviceId = f.value.first;
    this.cityId = f.value.citydata;
    this.foundatiion.city = new City(this.cityId, '', '');
    this.foundatiion.service = new Services(this.serviceId, '');
    this.userService.getUserByUserName(this.userId).subscribe(
      data => {
        this.foundatiion.user = data
      }
    );
    const formData = new FormData();
    formData.append('foundatiion', JSON.stringify(this.foundatiion));
    formData.append('file', this.userFile);
    if (this.userFile && this.userFile.length > 0) {
      this.servicedata.updateFoundationWithoutfile(this.foundationId, formData, this.foundatiion).subscribe(
        response => {
        alert("no file")
          this.router.navigate(['/foundationList']);
        }
      )
    }
    else {
      // this.servicedata.updateFoundation(this.foundationId, formData).subscribe(
      //   response => {
            this.servicedata.getfoundationById(this.foundationId).subscribe(f => {
            let photoname =f.photoName
            let servicename =f.nameAr
            this.fileservice.deleteFileStorage(photoname,servicename);
             

            let image = (<HTMLInputElement>this.image.nativeElement).files[0];
            let ref = this.storage.ref('foundation/' + this.foundatiion.nameAr + "/" + image.name)
            ref.put(image).then(() => {
              ref.getDownloadURL().subscribe(
                image => {
                  // this.servicedata.createFoundation1(formData).subscribe(
                  const formData = new FormData();
                  this.foundatiion.photo = image
                  formData.append('foundatiion', JSON.stringify(this.foundatiion));
                  formData.append('file', this.userFile);
                  this.servicedata.updateFoundation(this.foundationId, formData).subscribe(response => {
                    alert(response)
                    this.router.navigate(['/foundationList']);
                  }
                  )
                }
              )
            }
        
            )















          })
         // this.router.navigate(['/foundationList']);
      //   }
      // )

    }

  }


}
