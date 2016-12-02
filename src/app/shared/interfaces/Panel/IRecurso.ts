import {IKey} from "./IKey";
import {ISeccion} from "./Recursos/ISeccion";
import {IAplicacion} from "./Recursos/IAplicacion";
import {ICategoria} from "./Recursos/ICategoria";

export interface IRecurso extends IKey{
    aplicacion : IAplicacion;
    seccion : ISeccion;
    detalle : string;
    categorias? : ICategoria[];
    active : boolean;
    created : Date | string;
}