import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Foundation1, Orders, Services } from '../_modules/allModules';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class SeviceDataService {
// PATH_OF_API = 'https://fekhedmatikk.herokuapp.com';
PATH_OF_API = 'https://khdmat.herokuapp.com';

//PATH_OF_API = 'http://localhost:8086';
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(private http: HttpClient,
    private storage: AngularFireStorage) { }

  getAllServices() {

    return this.http.get<Services[]>(this.PATH_OF_API + '/allServices', {
      headers: this.requestHeader,
    }

    )

  }

  createBasicAuthanticationHTTPHeader() {
    let username = 'in28minutes';
    let password = 'dummy';
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }

  deleteServices(id) {
    return this.http.delete(this.PATH_OF_API + `/deleteService/${id}`, { responseType: 'text' },

    );
  }
  getServicesById(id) {
    return this.http.get<Services>(this.PATH_OF_API + `/service/${id}`);
  }
  updateServices(id, todo) {
    return this.http.put(this.PATH_OF_API + `/addService/${id}`, todo, { responseType: 'text' });
  }
  createServices(todo) {
    return this.http.post(this.PATH_OF_API + `/addservice`, todo, { responseType: 'text' });
  }

  // ............................................................................
  //                            Foundation
  // ............................................................................

  getFoundationByServicesId(id, city) {
    return this.http.get<Foundation1[]>(this.PATH_OF_API + `/employees/${id},${city}/foundation`, { headers: this.requestHeader, });
  }
  getFoundationByUserId(id) {
    return this.http.get<Foundation1[]>(this.PATH_OF_API + `/apppUserr/${id}/foundation`);
  }
  // jgiug
  getAllfoundation() {
    return this.http.get<Foundation1[]>(this.PATH_OF_API + '/foundation', { headers: this.requestHeader, });
  }
  getfoundationById(id) {
    return this.http.get<Foundation1>(this.PATH_OF_API + `/foundation/${id}`);
  }
  getfoundationByIdd(id) {
    return this.http.get<Foundation1>(this.PATH_OF_API + `/foundation/${id}`);
  }
  getserviceIdByfoundationByIdd(id) {
    return this.http.get<number>(this.PATH_OF_API + `/foundationServiceID/${id}`);
  }
  getcityIdByfoundationByIdd(id) {
    return this.http.get<number>(this.PATH_OF_API + `/foundationCityID/${id}`);
  }
  getFoundationByKeyord(keyword, city) {
    // return this.http.get<Foundation1[]>(`http://localhost:8081/getAllfoundationNameContaining/${keyword},${city}`,{ headers: this.requestHeader,});
    return this.http.get<Foundation1[]>(this.PATH_OF_API + `/getAllfoundationNameContaining/${keyword}`, { headers: this.requestHeader, });

  }
  getFoundationBySearch(serviceId, cityId, name) {
    // return this.http.get<Foundation1[]>(`http://localhost:8081/getAllfoundationNameContaining/${keyword},${city}`,{ headers: this.requestHeader,});
    return this.http.get<Foundation1[]>(this.PATH_OF_API + `/getAllfoundationBySerch/${serviceId},${cityId},${name}/foundation`, { headers: this.requestHeader, });

  }
  ///////////////////////////////////////////////// update //////////////////////////////////////////////////////////////////
  //ubdatefoundationActive
  updateFoundation(id, formData: FormData): Observable<any> {
    const response = this.http.put(this.PATH_OF_API + `/addFoundationWithFile/${id}`, formData, { responseType: 'text' });
    return response;
  }
  updateFoundationActive(active, id): Observable<any> {
    const response = this.http.put(this.PATH_OF_API + `/ubdatefoundationActive/${active},${id}/fondation`, { responseType: 'text' });
    return response;
  }
  updateFoundationWithoutfile(id, formData: FormData, todo): Observable<any> {
    const response = this.http.put(this.PATH_OF_API + `/addFoundationWithoutFile/${id}`, formData, { responseType: 'text' });
    return response;
  }
  //////////////////////////////////////////////////// post /////////////////////////////////////////////////////////////////////
  // save whithout image 
  createFoundation(todo) {
    return this.http.post(this.PATH_OF_API + `/addfoundation`, todo, { responseType: 'text' });
  }

  //save image in server file
  createFoundation1(formData: FormData): Observable<any> {
    return this.http.post(this.PATH_OF_API + '/addfoundationFileServer', formData, { responseType: 'text' });
  }

  //save in firebase
  createFoundationwhithfirebase(formData: any): Observable<any> {
    return this.http.post(this.PATH_OF_API + `/addfoundationFireBaseServerfondation`, formData, { responseType: 'text' });
  }
  // createFoundationwhithfirebase(formData: FormData): Observable<any> {
  //   return this.http.post(this.PATH_OF_API + `/addfoundationFireBaseServerfondation`, formData, { responseType: 'text' });
  // }

  //save in byte
  createFoundationImageToServer(formData: FormData): Observable<any> {
    return this.http.post(this.PATH_OF_API + '/addfoundationFileServer', formData, { responseType: 'text' });
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // public addFileStorage(imagee: any,fname): Observable<any> {
  //   let image = (<HTMLInputElement>imagee.nativeElement).files[0];
  //   let imageurl 
  //   let ref = this.storage.ref('foundation/' + fname + "/" + image.name)
  //   ref.put(image).then(() => {
  //     ref.getDownloadURL().subscribe(
  //       imagee => {
  //         imageurl =imagee
  //         console.log("sssssssss "+imageurl)
  //       }
  //     )
  //   }
  //   )
  //   console.log("qqqqqqqqqqqqqq "+imageurl)

  //   return imageurl

  // }


  deleteِFoundation(id) {
    return this.http.delete(this.PATH_OF_API + `/deleteFoundation/${id}`, { responseType: 'text' });
  }
  getFoundationCount(username) {
    // return this.http.get<Foundation1[]>(`http://localhost:8081/getAllfoundationNameContaining/${keyword},${city}`,{ headers: this.requestHeader,});
    return this.http.get<any>(this.PATH_OF_API + `/countOfFoundationByUser/${username}`, { headers: this.requestHeader, });

  }


  // ............................................................................................................................................
  //                                          ORDER
  // ..........................................................................................................................................

  getAllOrders() {
    return this.http.get<Orders[]>(this.PATH_OF_API + '/orders')
  }

  deleteorders(id) {

    return this.http.delete(this.PATH_OF_API + `/deleteorder/${id}`, { responseType: 'text' });
  }
  getordersById(id) {
    return this.http.get<Orders>(this.PATH_OF_API + `/orders/${id}`);
  }
  updateorders(id, todo) {
    return this.http.put(this.PATH_OF_API + `/addorders/${id}`, todo, { headers: this.requestHeader, });
  }
  createorders(todo) {
    return this.http.post(this.PATH_OF_API + `/addorders`, todo, {
      headers: this.requestHeader,
    });
  }
  public createUser(user) {
    return this.http.post(this.PATH_OF_API + `/registerNewUser`, user, {
      headers: this.requestHeader,
    });
  }



}
