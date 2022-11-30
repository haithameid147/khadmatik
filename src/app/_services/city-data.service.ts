import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { City } from '../_modules/allModules';
//https://filkhedmaa.herokuapp.com/
 // https://khdmat.herokuapp.com/
export class cityBean {

  constructor(public messege: string) { }
}

@Injectable({
  providedIn: 'root'
})

export class CityDataService{
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
// PATH_OF_API = 'https://fekhedmatikk.herokuapp.com';
PATH_OF_API = 'https://khdmat.herokuapp.com';

//  PATH_OF_API = 'http://localhost:8086';
 constructor(private http: HttpClient) { }

  // createBasicAuthanticationHTTPHeader() {
  //   let username = 'in28minutes';
  //   let password = 'dummy';
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

  //   return basicAuthHeaderString;
  // }

  getAllCity() {
    // let basicAuthHeaderString = this.createBasicAuthanticationHTTPHeader();
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // });
    // return this.http.get<City[]>(`http://localhost:8081//user/${username}`);
    return this.http.get<City[]>(this.PATH_OF_API+'/employees'
    ,{
      headers: this.requestHeader,
    }
    )
   // ,{ headers : headers});


  }

  deleteCity(id) {

    return this.http.delete(`https://filkhedmaa.herokuapp.com/delete/${id}`, { responseType: 'text'});
  }
  getCityById(id) {
    return this.http.get<City>(this.PATH_OF_API+'/employees/${id}');
  }
  updateCity(id, todo) {
    //  console.log("1");
    return this.http.put(`https://filkhedmaa.herokuapp.com/addCity/${id}`, todo, { responseType: 'text'});
    // return this.http.put('http://localhost:8081//addCity/?id', todo);
  }
  createCity(todo) {
    //  console.log("1");
    // return this.http.post(`http://localhost:8081//addCity/${id}`, todo);
    return this.http.put(`https://filkhedmaa.herokuapp.com/addCity`, todo , { responseType: 'text'});
  }


}
