import {IBodega} from "../Administracion/IBodega";
import {IProveedor} from "../Administracion/IProveedor";
import {IProductor} from "../Administracion/IProductor";

export interface IMovimientoDetalle {
    id? : string;
    documento : string;
    referencia : string;
    adicional? : string;
    observacion? : string;
    bodega? : IBodega;
    proveedor? : IProveedor;
    productor? : IProductor;
}