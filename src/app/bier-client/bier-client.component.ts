import { Component, OnInit } from '@angular/core';
import { bierAPIService } from '../services/bierAPI.service';
import { Bier } from '../services/Bier';

@Component({
  selector: 'app-bier-client',
  templateUrl: './bier-client.component.html',
  styleUrls: ['./bier-client.component.css']
})
export class BierClientComponent implements OnInit {

  constructor(private _svcBierAPI: bierAPIService) { }
  bier: Bier;


  naam:string;
  kleur:string;
  ebc:number;
  alcoholGehalte:number;
  ebu:number;
  brouwerijNaam:String;


  ngOnInit() {
  }

  PostBier():any{
    this.bier = new Bier;
    this.bier.Naam=this.naam;
    this.bier.Kleur=this.kleur;
    this.bier.EBC=this.ebc;
    this.bier.AlcoholGehalte=this.alcoholGehalte;
    this.bier.EBU=this.ebu;
    this.brouwerijNaam=this.brouwerijNaam;

    return this._svcBierAPI.makeABier(this.bier);
    
  }
}
