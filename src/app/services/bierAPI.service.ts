import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/observable/of";
import { Bier } from "./Bier";
import { Brouwerij } from "./Brouwerij";

@Injectable()
export class bierAPIService{

    static interfaces: any;
    constructor(private _httpClient: HttpClient) { 
        console.log("BIERAPI-HTTPCLIENT Aangemaakt");
    }
    private apiUrl='http://localhost:5000/api/v1';

    getAllBieren():Observable<interfaces.IBier[]>{
        return this._httpClient.get<interfaces.IBier[]>(this.apiUrl+"/bieren/")
    }
    getABier(id:number):Observable<interfaces.IBier>{
        return this._httpClient.get<interfaces.IBier>(this.apiUrl+"/bieren/"+id)
    }
    makeABier(bier:Bier):Observable<Bier>{
        return this._httpClient.post<Bier>(this.apiUrl+"/bieren/",bier)
    }


}


export  namespace interfaces{
    export interface IBier{
        Id:number;
        Naam:String;
        EBC:number;
        Kleur:String;
        AlcoholGehalte:number;
        EBU:number;
        Brouwerij:Brouwerij;
    }
    export interface IBrouwerij{
        Id:number;
        Naam:String;
        Locatie:String;
        Oprichtingsjaar:String;
        Bieren:Array<Bier>;

    }
}
        