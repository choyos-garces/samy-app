import {IDocument} from "../IDocument";

export interface IProductor extends IDocument {
    apellido? : string;
    ruc : string;
    correo : string;
    telefono : string;
}