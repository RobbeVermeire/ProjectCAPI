import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/observable/of";

@Injectable()
export class NasaRoversService {

    constructor(private _httpClient: HttpClient) { 
        console.log("NasaRover-HTTPCLIENT Aangemaakt");
    }

    private apiUrl='https://api.nasa.gov/mars-photos/api/v1';

    private apiKey='api_key=7uT9c1V3KKCMNRDJUyGk1GMIslFK8v3REUnRBNOE';

    getLatestPhotos(rover: string): Observable<interfaces.photos>{
        return this._httpClient.get<interfaces.photos>(this.apiUrl+'/rovers/'+rover+"/latest_photos?"+this.apiKey);
        
    }
    getDatePhotos(rover: string, camera: string, sol: number): Observable<interfaces.photos>{
      return this._httpClient.get<interfaces.photos>(this.apiUrl+'/rovers/'+rover+'/photos?'+"sol="+sol+'&'+'camera='+camera+'&'+this.apiKey);
    }
    getRoverInfo(rover: string):Observable<interfaces.Manifest>{
      return this._httpClient.get<interfaces.Manifest>(this.apiUrl+'/manifest/'+rover+'?'+this.apiKey)
    }

}


export  namespace interfaces{
  export interface Manifest {
    photo_manifest: Photomanifest;
  }
  
  export interface Photomanifest {
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
    max_sol: number;
    max_date: string;
    total_photos: number;
    photos: Photo[];
  }
  
  export interface Photo {
    sol: number;
    total_photos: number;
    cameras: string[];
  }
  export interface photos {
        photos: Photo[];
      }
      
      export interface Photo {
        id: number;
        sol: number;
        camera: Camera;
        img_src: string;
        earth_date: string;
        rover: Rover;
      }
      
      export interface Rover {
        id: number;
        name: string;
        landing_date: string;
        launch_date: string;
        status: string;
        max_sol: number;
        max_date: string;
        total_photos: number;
        cameras: Camera2[];
      }
      
      export interface Camera2 {
        name: string;
        full_name: string;
      }
      
      export interface Camera {
        id: number;
        name: string;
        rover_id: number;
        full_name: string;
      }



}
        