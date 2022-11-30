import { Component, OnInit } from '@angular/core';
import { User } from '../_modules/allModules';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User =new User('','','','','');
  password =Math.random().toString(36).slice(-8);
 private userId :string ;
  message;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('username') ;
    // this.user =new User('','','','');
    this.forUser();

    this.getUserByUserNam(this.userId);
 //   this.user.userPassword='lkh';
  }

  forUser() {
    this.userService.forUser().subscribe(
      (response) => {
        this.message = response;
      }, 
      (error)=>{
        console.log(error);
      }
    );
  }

  getUserByUserNam(name){
    this.userService.getUserByUserName(name).subscribe(
      data => {this.user = data
        this.user.userPassword='';

      }
    );
  }
  saveCity(){
    this.userService.updateUser(this.userId,this.user).subscribe(
      date => {
        alert("added")

      }
    ) ;
  
  }
  updateUser(){
    const userFirstName= this.user.userFirstName
    const userLastName= this.user.userLastName
    const mobile =this.user.mobile

    this.userService.updateUserfield(this.userId,userFirstName,userLastName,mobile).subscribe(
      date => {
        console.log(date);
        alert("added")

      }
    ) ;
  
  }
  updatePassword(){
    const userPassword= this.user.userPassword
    //const userLastName= this.user.userLastName
    //console.log(userFirstName,userLastName);

    this.userService.updatepasswordfield(this.userId,userPassword).subscribe(
      date => {
        alert("added")

      }
    ) ;
  
  }
  

}


