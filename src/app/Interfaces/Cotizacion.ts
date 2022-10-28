import { RepuestosDTO } from "./utils/Repuestos";

export interface CotizacionDTO{
    _id:Number;
    Tipo:String;
    Cliente:String;
    Apellidos:String;
    Correo:String;
    Detalles:RepuestosDTO[];
    Fecha:Date;
}