import { Component, OnInit } from '@angular/core';
import { NasaRoversService } from '../services/nasarovers.service';
import { interfaces } from '../services/nasarovers.service'
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-nasa-photo',
  templateUrl: './nasa-photo.component.html',
  styleUrls: ['./nasa-photo.component.css']
})
export class NasaPhotoComponent implements OnInit {

  photos:interfaces.Photo[];
  show: boolean;
  Rovers = ['Curiosity','Opportunity','Spirit']
  SelectedRover: string = this.Rovers[0];
  
  
  getLatestPhotos(): any {
    this._svcNasaRover.getLatestPhotos(this.SelectedRover).subscribe(
      data => {this.photos = data.photos;
                console.log(this.photos)},
      err => console.log(err),
      () => console.log(this.photos) 
    )
    this.show = true;
  }
  changePage():any{
    this.router.navigateByUrl('/marsphotos')
  }
  


  constructor(private _svcNasaRover : NasaRoversService, private router: Router) {

   }

  ngOnInit(): void {
  }


}
