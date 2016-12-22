import { Component, OnInit } from '@angular/core';
import {IBodega} from "../../../shared/interfaces/Administracion/IBodega";
import {ApiService} from "../../../shared/services/api.service";

@Component({
    selector: 'app-bodegas-lista',
    templateUrl: 'bodega-lista.component.html'
})
export class BodegaListaComponent implements OnInit
{

    bodegas : IBodega[];

    constructor(private _apiService : ApiService)
    {}

    ngOnInit() : void
    {
        this._apiService.get("/administracion/bodegas").subscribe( data => {
            if('bodegas' in data) this.bodegas = data.bodegas
        });
    }

    toggleActive(bodega : IBodega, index : number) : void
    {
        this._apiService.patch("/administracion/bodegas/"+bodega.id, {active : !bodega.active}).subscribe(
            ( recurso : IBodega ) => {
                this.bodegas[index].active = recurso.active;
            }
        );
    }

}
