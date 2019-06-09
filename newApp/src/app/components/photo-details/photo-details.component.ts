import { Component, OnInit } from '@angular/core';
import { ListphotosService } from './../list-photos/listphotos.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {
  Photo:any;
  private sub: any;
  id: number;
  constructor(private PhotoService : ListphotosService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
    this.PhotoService.getPhotoDetails(this.id).subscribe(
      (data:any)=>{this.Photo=data,
      console.log(data)}
    )
  }
  DeletePhoto() {
    if(confirm("Are you sure you want to delete this image")) {
      this.PhotoService.DeletePhoto(this.id).subscribe(
        (data:any)=>{
          this.router.navigate(['photos']);
        }
      )
    }
  }
  EditTitle(){
    let newTitle=prompt("Vnesete go novoto ime na slikata",'');
    if(newTitle===''){
      alert("Ne e vneseno ime");
    }
    else {
      this.PhotoService.EditTitle(this.id,newTitle,this.Photo);
    }
  }

}
