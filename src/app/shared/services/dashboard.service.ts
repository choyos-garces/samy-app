import {Injectable} from "@angular/core";
import {IHeader} from "../interfaces/IHeader";
import {Observable} from "rxjs";

@Injectable()
export class HeaderService {

    private header : IHeader;
    headerChange : Observable<any>;
    observer : any;

    constructor() {
        console.log("Servicio Dashboard Iniciado");
        this.headerChange = new Observable((observer :any) => this.observer = observer)
            .startWith(true)
            .share();
    }

    getHeader() {
        return this.header;
    }

    setHeader( grupo : string , seccion : string, acciones : any[] ) {
        this.header = {
            grupo : grupo,
            seccion : seccion,
            acciones : acciones
        };

        this.observer.next(true);
    }
}