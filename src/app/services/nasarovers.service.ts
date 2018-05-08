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

    private apiUrl='https://api.nasa.gov/mars-photos';
    private LatestPhotoURL(_rover: string){
      return '/api/v1/rovers/'+_rover+'/latest_photos';
    }
    private apiKey='api_key=7uT9c1V3KKCMNRDJUyGk1GMIslFK8v3REUnRBNOE';
    

    getLatestPhotos(rover: string): Observable<interfaces.RootObject>{
      console.log(this.apiUrl+this.LatestPhotoURL(rover)+"?"+this.apiKey);
        return this._httpClient.get<interfaces.RootObject>(this.apiUrl+this.LatestPhotoURL(rover)+"?"+this.apiKey);
        
    }
}


export  namespace interfaces{
    export interface RootObject {
        latest_photos: Latestphoto[];
      }
      
      export interface Latestphoto {
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
        