import {IAplicacion} from "./IAplicacion";
import {IKey} from "../IKey";

export interface ISeccion extends IKey {
    aplicacion : IAplicacion;
}