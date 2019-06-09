import { Component, OnInit } from '@angular/core';
import { ListphotosService } from './listphotos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-photos',
  templateUrl: './list-photos.component.html',
  styleUrls: ['./list-photos.component.css']
})
export class ListPhotosComponent implements OnInit {

  constructor(private PhotoService : ListphotosService, private router: Router) { }
  Photos:any;
  Photo:any;
  ngOnInit() {
    this.PhotoService.getPhotos().subscribe((data:any)=>
   { this.Photos=data,
    console.log(this.Photos)}
    )
  }
  PhotoDetails(id){
    this.router.navigate(['photodetails/'+ id]);
  }
  AddPhoto(){
    this.router.navigate(['addphoto']);
  }
}
