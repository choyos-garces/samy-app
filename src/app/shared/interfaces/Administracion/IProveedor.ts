import {IDocument} from "../IDocument";

export interface IProveedor extends IDocument{
    ruc : string;
    correo : string;
    telefono : string;
}