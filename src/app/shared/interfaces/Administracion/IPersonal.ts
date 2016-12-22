import {IDocument} from "../IDocument";
/**
 * Created by choyo on 12/2/2016.
 */

export interface IPersonal extends IDocument {
    nombre : string;
    apellido : string;
    cedula : string;
    correo : string;
    codigo : string;
    telefono : string;
    celular? : string;
}