import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor() {}

  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }


  public getRoles(): [] {
    return JSON.parse(localStorage.getItem('roles'));
  }
  public getUserName() {
    return JSON.parse(localStorage.getItem('username'));
  }
    
  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }
  public setusername(jwtToken: string) {
  //  localStorage.setItem('username', JSON.stringify(jwtToken));
    localStorage.setItem('username', jwtToken);

  }
  public setfirstname(jwtToken: string) {
    localStorage.setItem('firstname', jwtToken);
  }
  public setlastname(jwtToken: string) {
    localStorage.setItem('lastname', jwtToken);
  }
  public setpassword(jwtToken: string) {
    localStorage.setItem('password', jwtToken);
  }
  public getToken(): string {
    return localStorage.getItem('jwtToken');
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }
}
