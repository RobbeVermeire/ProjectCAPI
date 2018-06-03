import { interfaces } from "./bierAPI.service";
import { Brouwerij } from "./Brouwerij";


export class Bier implements interfaces.IBier {
    Id: number;
    Naam: String;
    EBC: number;
    Kleur: String;
    AlcoholGehalte: number;
    EBU: number;
    Brouwerij: Brouwerij;
}