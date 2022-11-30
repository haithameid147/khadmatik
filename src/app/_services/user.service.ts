import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_modules/allModules';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
// PATH_OF_API = 'https://fekhedmatikk.herokuapp.com';
PATH_OF_API = 'https://khdmat.herokuapp.com';

//PATH_OF_API = 'http://localhost:8086';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
  ) { }



  // public login2(loginData) {
  //   return this.httpclient.post(this.PATH_OF_API + `/authenticate`, {loginData}).pipe(

  //   map(
  //     data = >{

  //     }
  //   )


  //   )
  //   , {
  //     headers: this.requestHeader,
  //   });   updateCity
  // }
  public login(loginData) {
    return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }
  public createUser(user) {
    return this.httpclient.post(this.PATH_OF_API+`/registerNewUser`, user, {
      headers: this.requestHeader,
    });
  }
  public updateUser(id, user) {
    return this.httpclient.put(this.PATH_OF_API+`/addUser/${id}`, user, { responseType: 'text' });
    //  return this.httpclient.put(`http://localhost:8081/addCity/${id}`, todo, { responseType: 'text'});updateUserfield

  }
  public updateUserfield(id, firstname,lastname,mobile) {
    //console.log(user);
    return this.httpclient.put(this.PATH_OF_API+`/updateUserField/${id},${firstname},${lastname},${mobile}/user`, { responseType: 'text' });
    //  return this.httpclient.put(`http://localhost:8081/addCity/${id}`, todo, { responseType: 'text'});updateUserfield

  }
  public updatepasswordfield(username, password) {
    //console.log(user);
    return this.httpclient.put(this.PATH_OF_API+`/updatePassword/${username},${password}/user`, { responseType: 'text' });
    //  return this.httpclient.put(`http://localhost:8081/addCity/${id}`, todo, { responseType: 'text'});updateUserfield

  }
  public getUserByUserName(name) {
    return this.httpclient.get<User>(this.PATH_OF_API+`/getUserByUserName/${name}`)
  };

  public forUser() {
    return this.httpclient.get(this.PATH_OF_API + '/forUser', {
      responseType: 'text',
    });
  }


  public forAdmin() {
    return this.httpclient.get(this.PATH_OF_API + '/forAdmin', {
      responseType: 'text',
    });
  }

  public roleMatch(allowedRoles): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
  }
}
