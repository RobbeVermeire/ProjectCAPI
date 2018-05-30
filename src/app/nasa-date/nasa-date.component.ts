import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NasaRoversService } from '../services/nasarovers.service';
import { interfaces } from '../services/nasarovers.service'

@Component({
  selector: 'app-nasa-date',
  templateUrl: './nasa-date.component.html',
  styleUrls: ['./nasa-date.component.css']
})
export class NasaDateComponent implements OnInit {

  show: boolean = false;
  Sol: number;
  Rovers = ['Curiosity', 'Opportunity', 'Spirit'];
  SelectedRover = this.Rovers[0];
  Cameras = ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM', 'PANCAM', 'MINITES'];
  SelectedCamera: string;
  photos: interfaces.Photo[];

  test(): any {
    console.log(this.SelectedRover);
    console.log(this.Sol)
    console.log(this.SelectedCamera);
  }

  constructor
    (
    private router: Router,
    private _svcNasaRover: NasaRoversService,
  ) { }

  ngOnInit() { }

  changePage(): any {
    this.router.navigateByUrl('/latestphotos')
  }

  getDatePhotos(): any {
    this._svcNasaRover.getDatePhotos(this.SelectedRover, this.SelectedCamera, this.Sol).subscribe(
      data => {
      this.photos = data.photos;
      },
      err => console.log(err),
      () => console.log('Photos have been loaded')
    )
    this.show = true;
    console.log(this.photos)
  }

}

