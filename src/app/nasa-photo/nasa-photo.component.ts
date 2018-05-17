import { Component, OnInit } from '@angular/core';
import { NasaRoversService } from '../services/nasarovers.service';
import { interfaces } from '../services/nasarovers.service'

@Component({
  selector: 'app-nasa-photo',
  templateUrl: './nasa-photo.component.html',
  styleUrls: ['./nasa-photo.component.css']
})
export class NasaPhotoComponent implements OnInit {
  show: boolean;


  Rovers = ['Curiosity','Opportunity','Spirit']
  SelectedRover: string = this.Rovers[0];

  testMethod(event): void{
    console.log(this.SelectedRover);
  }
  
  getPhotos(): any {
    this._svcNasaRover.getLatestPhotos(this.SelectedRover).subscribe(
      data => {this.photos = data.latest_photos;
                console.log(this.photos)},
      err => console.log(err),
      () => console.log('Photos have been loaded') 
    )
    this.show = true;
    
  }
  photos:interfaces.Latestphoto[];

  constructor(private _svcNasaRover : NasaRoversService) {

   }

  ngOnInit(): void {
    this.getPhotos();
  }


}
