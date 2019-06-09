import { Component, OnInit } from '@angular/core';
import { ListphotosService } from '../list-photos/listphotos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {

  constructor(private PhotoService:ListphotosService, private router: Router) { }

  ngOnInit() {
  }


  AddPhoto(title, albumid,thumbnail, url){
    console.log(title.value, albumid.value,thumbnail.value, url.value);
    this.PhotoService.AddPhoto(title.value, albumid.value,thumbnail.value, url.value).subscribe(
      data => {
        console.log("Photo Added");
        this.router.navigate(['photos'])
      }
    )
  }

}
