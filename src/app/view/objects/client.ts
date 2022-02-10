import { Agence } from "./agence";
import { Beneficiaire } from "./beneficiaire";
import { Compte } from "./compte";
import { KYC } from "./KYC";

export interface Client {
    // id?:number;
    // idKYC?:KYC;
    // idAgence?:Agence;
    // beneficiaire?:Beneficiaire[];
    // compte?:Compte;
    id?:string;
    code?:string;
    name?:string;
    description?:string;
    price?:number;
    quantity?:number;
    inventoryStatus?:string;
    category?:string;
    image?:string;
    rating?:number;
}