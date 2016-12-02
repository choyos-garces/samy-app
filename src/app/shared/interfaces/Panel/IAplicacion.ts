import {IKey} from "../IKey";
import {ISeccion} from "./ISeccion";

export interface IAplicacion extends IKey {
    secciones : ISeccion[];
}