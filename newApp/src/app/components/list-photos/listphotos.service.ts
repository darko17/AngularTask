import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListphotosService {
  PhotosUrl = "http://jsonplaceholder.typicode.com/photos";
  constructor(private http : HttpClient) { }

  pho: PhotoModel;
  getPhotos(){
     return this.http.get(this.PhotosUrl);
  }
  getPhotoDetails(id){
    return this.http.get(this.PhotosUrl+'/'+id);
  }
  DeletePhoto(id){
    return this.http.delete(this.PhotosUrl+'/'+id);
  }
  EditTitle(id,title,Photo){
    Photo.title=title;
    let data=JSON.stringify(Photo);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(this.PhotosUrl+'/'+id,data,httpOptions);
  }
  AddPhoto(title,albumid, thumbnailurl, url){
     console.log(title,albumid,thumbnailurl,url)
     this.pho = {
       title:title,
       albumId:albumid,
       thumbnailUrl:thumbnailurl,
       url:url
    }

    let data = JSON.stringify(this.pho);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this.PhotosUrl,data,httpOptions);

  }
}
export class PhotoModel{
  title:string;
  albumId:string;
  url:string;
  thumbnailUrl: string;
}