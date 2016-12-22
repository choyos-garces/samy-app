import {IDocument} from "../IDocument";
import {IPersonal} from "./IPersonal";

export interface IBodega extends IDocument {
    codigo : string;
    descripcion : string;
    encargado : IPersonal | any;
}