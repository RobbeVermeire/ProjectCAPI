import { interfaces } from "./bierAPI.service";
import { Bier } from "./Bier";

export class Brouwerij implements interfaces.IBrouwerij {
    Id: number;
    Naam: String;
    Locatie: String;
    Oprichtingsjaar: String;
    Bieren: Bier[];
}