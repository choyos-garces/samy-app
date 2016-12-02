import {ICategoria} from "./Recursos/ICategoria";
import {IRecurso} from "./IRecurso";

export interface IMaterial {
    id : string;
    tipoMaterial : IRecurso;
    categoria : ICategoria;
    nombre : string;
    codigo : string;
    descripcion : string;
    active : boolean;
    created : Date;
}