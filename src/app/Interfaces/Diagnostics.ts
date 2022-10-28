import { VehicleDTO } from "./Vehicle";

export interface DiagnosticDTO{
    _id:Number;
    TipoDiagnostico:String;
    DatosVehiculo:VehicleDTO[];
    EvaluacionAdjunta:String;
    CorreoCliente:String;
}