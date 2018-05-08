import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { NasaPhotoComponent } from './nasa-photo/nasa-photo.component';

import { NasaRoversService } from './services/nasarovers.service';


@NgModule({
  declarations: [
    AppComponent,
    NasaPhotoComponent
  ],
  imports: [
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
