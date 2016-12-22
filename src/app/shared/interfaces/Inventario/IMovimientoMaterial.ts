import {IBodega} from "../Administracion/IBodega";
import {IMaterial} from "../Administracion/IMaterial";
import {IMovimientoDetalle} from "./IMovimientoDetalle";
import {IMovimientoInventario} from "./IMovimientoInventario";

export interface IMovimientoMaterial {
    id? : string;
    codigo? : string;
    movimiento? : IMovimientoInventario;
    accion : boolean;
    bodega : IBodega | any;
    material : IMaterial | any;
    cantidad : number;
    existente? : number;
    movimientoDetalle : IMovimientoDetalle;
    created? : (Date | string)
}