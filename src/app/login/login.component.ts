import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../_modules/allModules';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User =new User('','','','','');  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user.userName = '';
    this.user.mobile = '';
    this.user.userFirstName = '';
    this.user.userLastName = '';
    this.user.userPassword = '';
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
          this.router.navigate(['/foundationList']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
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
}
