import {IKey} from "./IKey";

export interface IBodega extends IKey {
    codigo : string;
    descripcion : string;
    active : boolean;
    created : Date;
}