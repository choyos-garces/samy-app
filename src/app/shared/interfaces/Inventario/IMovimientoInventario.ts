import {IBodega} from "../Administracion/IBodega";
import {IMovimientoItem} from "./IMovimientoItem";
import {IKey} from "../IKey";
import {IMovimientoMaterial} from "./IMovimientoMaterial";
import {IDocument} from "../IDocument";
import {IMovimientoDetalle} from "./IMovimientoDetalle";

export interface IMovimientoInventario {
    id ? : string;
    accion : boolean;
    bodega : IBodega;
    materiales : IMovimientoMaterial[];
    detalle : IMovimientoDetalle;
    observaciones : IKey;
    created? : Date | string;
    createdBy : IDocument | string;
}