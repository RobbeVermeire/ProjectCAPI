import { Component, OnInit } from '@angular/core';
import { NasaRoversService } from '../services/nasarovers.service';
import { interfaces } from '../services/nasarovers.service'

@Component({
  selector: 'app-nasa-photo',
  templateUrl: './nasa-photo.component.html',
  styleUrls: ['./nasa-photo.component.css']
})
export class NasaPhotoComponent implements OnInit {


  Rovers = ['Curiosity','Opportunity','Spirit']
  SelectedRover: string = this.Rovers[0];
  
  getPhotos(): any {
    this._svcNasaRover.getLatestPhotos(this.SelectedRover).subscribe(
      data => {this.photos = data.latest_photos;
                console.log(this.photos)},
      err => console.log(err),
      () => console.log('Photos have been loaded') 
    )
  }
  photos:interfaces.Latestphoto[];

  constructor(private _svcNasaRover : NasaRoversService) {

   }

  ngOnInit(): void {
    this.getPhotos();
  }


}
