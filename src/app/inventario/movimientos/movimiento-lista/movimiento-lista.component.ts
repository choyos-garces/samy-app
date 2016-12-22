import {Component, OnInit} from "@angular/core";

import {ApiService} from "../../../shared/services/api.service";
import {IMovimientoInventario} from "../../../shared/interfaces/Inventario/IMovimientoInventario";

@Component({
    selector : 'app-movimiento-lista',
    templateUrl: './movimiento-lista.component.html'
})
export class MovimientoListaComponent implements OnInit
{
    movimientos : IMovimientoInventario[];
    offset : number;

    constructor(private _apiService : ApiService)
    {}

    ngOnInit() : void
    {
        this._apiService.get("/inventario/movimientos").subscribe( data => {
            if('movimientos' in data) this.movimientos = data.movimientos
            this.offset = 0;
        });
    }
}