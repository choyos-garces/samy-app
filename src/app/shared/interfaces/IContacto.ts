import {IDocument} from "./IDocument";

export interface IContacto extends IDocument{
    telefono : string;
    correo : string;
}