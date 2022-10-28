import { Clients } from "./ClientsDTO";

export interface VehicleDTO{
    _id:Number;
    Marca:String;
    Tipo:String;
    Cilindraje:Number;
    PlacaRegistral:String;
    PropietarioActual:Clients[];
    EstadoActual:String;
}