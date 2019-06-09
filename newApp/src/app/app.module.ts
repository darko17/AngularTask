import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPhotosComponent } from './components/list-photos/list-photos.component';
import {HttpClientModule} from '@angular/common/http';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';
import { FrontPageComponent } from './components/front-page/front-page.component';

//import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [
    AppComponent,
    ListPhotosComponent,
    PhotoDetailsComponent,
    AddPhotoComponent,
    FrontPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    //MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
