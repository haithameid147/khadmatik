import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertPromise } from 'selenium-webdriver';
import { User } from 'src/app/_modules/allModules';
import { UserAuthService } from 'src/app/_services/user-auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  user: User =new User('','','','','');
  constructor(

    private router: Router,
    private userService: UserService,
    private userAuthService: UserAuthService,
  ) { }

  ngOnInit(): void {
    this.user.userName = '';
    this.user.mobile = '';
    this.user.userFirstName = '';
    this.user.userLastName = '';
    this.user.userPassword = '';
  }

  newUser(){
    this.userService.createUser(this.user).subscribe(
      response => {
        if(response){
          alert("تم الاضافة بنجاح يرجي تسجيل الدخول لاضافة الخدمة")
        this.router.navigate(['/login'])
        }
        else
        alert("الايميل مستخدمن قبل يرجي تغييره")
      }
    )
  }


  login(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe(
      (response: any) => {
        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);
        this.userAuthService.setusername(response.user.userName)
        
        const role = response.user.role[0].roleName;
        if (role === 'Admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/user']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
   

