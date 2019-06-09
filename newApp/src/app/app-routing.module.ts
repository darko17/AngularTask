import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPhotosComponent } from './components/list-photos/list-photos.component';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';
import { FrontPageComponent } from './components/front-page/front-page.component';

const routes: Routes = [
  {path: 'photos',
  component: ListPhotosComponent  
},
{path: 'photodetails/:id',
  component: PhotoDetailsComponent
},
{path: 'addphoto',
component: AddPhotoComponent},
{path: '',
component: FrontPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
