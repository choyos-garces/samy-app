import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {IRecurso} from "../../../shared/interfaces/Panel/IRecurso";
import {IError} from "../../../shared/interfaces/IError";

@Component({
  selector: 'app-recursos-lista',
  templateUrl: './recursos-lista.component.html',
  styleUrls: ['./recursos-lista.component.css']
})
export class RecursosListaComponent implements OnInit {

    recursos : IRecurso[];
    constructor(private _apiService : ApiService) { }

    ngOnInit() {
        this._apiService.get("/panel/recursos?aplicacion=all&seccion=all").subscribe( data => {
            if('recursos' in data ) this.recursos = data.recursos
        });
    }

    toggleActive(recurso : IRecurso, index : number) {
        this._apiService.patch("/panel/recursos/"+recurso.id, {active : !recurso.active}).subscribe(
            ( recurso : IRecurso ) => {
                this.recursos[index].active = recurso.active;
            }
        );
    }
}
