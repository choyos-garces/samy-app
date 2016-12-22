import {IMaterial} from "../Administracion/IMaterial";
import {IBodega} from "../Administracion/IBodega";

export interface IInventarioBodega {
    id? : string;
    material : IMaterial | string;
    bodega : IBodega | string;
    cantidad : number;
    updated: Date | string;
    created : Date | string;
}