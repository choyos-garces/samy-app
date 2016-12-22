import {ISeccion} from "./ISeccion";
import {IAplicacion} from "./IAplicacion";
import {ICategoria} from "./ICategoria";
import {IDocument} from "../IDocument";

export interface IRecurso extends IDocument {
    aplicacion : IAplicacion;
    seccion : ISeccion;
    detalle : string;
    categorias? : ICategoria[];
}