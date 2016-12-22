import {IMovimientoInventario} from "./IMovimientoInventario";
export interface IGuiaTransferencia {
    id? : string;
    numeroGuia : string;
    movimientoOrigen : IMovimientoInventario;
    movimientoDestino : IMovimientoInventario;
    status : string;
    created : Date | string;
    updated : Date | string;
}