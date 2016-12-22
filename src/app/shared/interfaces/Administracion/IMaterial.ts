import {ICategoria} from "../Panel/ICategoria";
import {IRecurso} from "../Panel/IRecurso";
import {IDocument} from "../IDocument";

export interface IMaterial extends IDocument{
    tipoMaterial : IRecurso;
    categoria : ICategoria;
    codigo : string;
    descripcion : string;
}