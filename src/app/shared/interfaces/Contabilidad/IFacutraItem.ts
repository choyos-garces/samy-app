import {IMaterial} from "../Administracion/IMaterial";
export interface IFacutraItem {
    id?: string;
    tipo: string;
    material?: string | IMaterial;
    servicio?: string | any;
    cantidad: number;
    descuento: number;
    precio: number;
}