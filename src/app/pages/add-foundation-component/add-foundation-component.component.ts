

import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { first } from 'rxjs/Operators';
import { ActivatedRoute, Router } from '@angular/router';
import { City, Foundation1, Services, User } from 'src/app/_modules/allModules';
import { CityDataService } from 'src/app/_services/city-data.service';
import { SeviceDataService } from 'src/app/_services/sevice-data.service';
import { UserService } from 'src/app/_services/user.service';
import { UserAuthService } from 'src/app/_services/user-auth.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-add-foundation-component',
  templateUrl: './add-foundation-component.component.html',
  styleUrls: ['./add-foundation-component.component.css']
})

export class AddFoundationComponentComponent implements OnInit {
  showSpiner = false;
  user: User[];
  service: Services[];
  city: City[];
  @ViewChild('image') image: ElementRef;
  foundatiion: Foundation1 = new Foundation1(null, null, null, '', '', '', '', '', '', '', '','')
  private userId: any;
  //private userIdd: string;
  private serviceId;
  private cityId;
  public userFile: any = File;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userAuthService: UserAuthService,
    private userService: UserService,
    private servicedata: SeviceDataService,
    private cityDataService: CityDataService,
    private storage: AngularFireStorage
  ) { }
  ngOnInit(): void {
    //this.userId = 'admin'
    this.userId = localStorage.getItem('username');
    this.servicedata.getAllServices().subscribe(
      response => {
        this.service = response;
      }
    );
    this.cityDataService.getAllCity().subscribe(
      response => {
        this.city = response;
      }
    );
  }
  onSelectFile(event) {
    const file = event.target.files[0];
    this.userFile = file;
  }

  addFoundation(f: NgForm) {
    this.showSpiner = true ;
    this.serviceId = f.value.first;
    this.cityId = f.value.citydata;
    this.foundatiion.user = new User(this.userId, '', '', '', '');
    this.foundatiion.city = new City(this.cityId, '', '');
    this.foundatiion.service = new Services(this.serviceId, '');
    this.servicedata.getServicesById(this.serviceId).subscribe(
      data => {
        this.foundatiion.service = data
      }
    );
    this.cityDataService.getCityById(this.cityId).subscribe(
      data => {
        this.foundatiion.city = data
      }
    );
    this.userService.getUserByUserName(this.userId).subscribe(
      data => {
        this.foundatiion.user = data
      }
    );
    let image = (<HTMLInputElement>this.image.nativeElement).files[0];
//    let ref = this.storage.ref('foundation/' + this.foundatiion.nameAr + "/" + image.name)
      let ref = this.storage.ref('foundation/'+image.name)

    ref.put(image).then(() => {
      ref.getDownloadURL().subscribe(
        imagee => {
          // this.servicedata.createFoundation1(formData).subscribe(
          const formData = new FormData();
          this.foundatiion.photo = imagee
          formData.append('foundatiion', JSON.stringify(this.foundatiion));
          formData.append('file', this.userFile);
          this.servicedata.createFoundationwhithfirebase(this.foundatiion).subscribe(response => {
            this.showSpiner = false
            alert(response)
            this.router.navigate(['/foundationList']);
          }
          )
        }
      )
    }
    )
  }




  // addFoundation(f: NgForm) {
  //   this.serviceId = f.value.first;
  //   this.cityId = f.value.citydata;
  //   this.foundatiion.user = new User(this.userId, '', '', '', '');
  //   this.foundatiion.city = new City(this.cityId, '', '');
  //   this.foundatiion.service = new Services(this.serviceId, '');
  //   this.servicedata.getServicesById(this.serviceId).subscribe(
  //     data => {
  //       this.foundatiion.service = data
  //     }
  //   );
  //   this.cityDataService.getCityById(this.cityId).subscribe(
  //     data => {
  //       this.foundatiion.city = data
  //     }
  //   );
  //   this.userService.getUserByUserName(this.userId).subscribe(
  //     data => {
  //       this.foundatiion.user = data
  //     }
  //   );
  //   let image = (<HTMLInputElement>this.image.nativeElement).files[0];
  //   let ref = this.storage.ref('foundation/' + this.foundatiion.nameAr + "/" + image.name)
  //   ref.put(image).then(() => {
  //     ref.getDownloadURL().subscribe(
  //       image => {
  //         // this.servicedata.createFoundation1(formData).subscribe(
  //         const formData = new FormData();
  //         this.foundatiion.photo = image
  //         formData.append('foundatiion', JSON.stringify(this.foundatiion));
  //         formData.append('file', this.userFile);
  //         this.servicedata.createFoundationwhithfirebase(formData).subscribe(response => {
  //           alert("تم اضافة الخدمة")
  //           this.router.navigate(['/foundationList']);
  //         }
  //         )
  //       }
  //     )
  //   }
  //   )
  // }
 
   


}
