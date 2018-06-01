import { Component, OnInit } from '@angular/core';
import { NasaRoversService } from '../services/nasarovers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nasa-roverinfo',
  templateUrl: './nasa-roverinfo.component.html',
  styleUrls: ['./nasa-roverinfo.component.css']
})
export class NasaRoverinfoComponent implements OnInit {

  text: any;

  getRoverInfo():any{
    this._svcNasaRover.getRoverInfo("Curiosity").subscribe(
      data => {this.text = data;
                console.log(this.text)},
      err => console.log(err),
      () => console.log(this.text) 
    )
  }
  constructor(private _svcNasaRover : NasaRoversService, private router: Router) {

   }


  ngOnInit() {
  this.getRoverInfo();
  }

}
