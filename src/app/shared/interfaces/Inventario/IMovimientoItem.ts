import {IMaterial} from "../Administracion/IMaterial";
export interface IMovimientoItem {
    material : IMaterial | string;
    cantidad : number;
}