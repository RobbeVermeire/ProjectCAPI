import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NasaPhotoComponent } from './nasa-photo/nasa-photo.component';

import { NasaRoversService } from './services/nasarovers.service';
import { NasaDateComponent } from './nasa-date/nasa-date.component';


@NgModule({
  declarations: [
    AppComponent,
    NasaPhotoComponent,
    NasaDateComponent
  ],
  imports: [
    RouterModule.forRoot(
      [
        {path: 'marsphotos', component:NasaDateComponent},
        {path: 'latestphotos', component:NasaPhotoComponent}
      ]
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    NasaRoversService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
