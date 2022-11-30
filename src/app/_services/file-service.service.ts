import { Injectable } from '@angular/core';
import {  AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  constructor(private storage :AngularFireStorage) { }



  public deleteFileStorage(photoname: string,nameAr:string): void {
    const storageRef = this.storage.ref("foundation/"+nameAr);
    storageRef.child(photoname).delete();
  }

  public addFileStorage(imagee: any,fname) {
    let image = (<HTMLInputElement>imagee.nativeElement).files[0];
    let imageurl 
    let ref = this.storage.ref('foundation/' + fname + "/" + image.name)   //jho
    ref.put(image).then(() => {
      ref.getDownloadURL().subscribe(
        imagee => {
          imageurl =imagee
          console.log("sssssssss "+imageurl)
        }
      )
    }
    )
    console.log("qqqqqqqqqqqqqq "+imageurl)

    return imageurl

  }


}
