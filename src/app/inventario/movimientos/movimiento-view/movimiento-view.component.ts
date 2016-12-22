import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";

import {ApiService} from "../../../shared/services/api.service";

import {IMovimientoInventario} from "../../../shared/interfaces/Inventario/IMovimientoInventario";
import {IMovimientoMaterial} from "../../../shared/interfaces/Inventario/IMovimientoMaterial";

@Component({
    selector : 'app-inventario-movimeinto-ver',
    templateUrl : './movimiento-view.component.html'
})
export class MovimientoViewComponent implements OnInit {

    movimiento : IMovimientoInventario;

    constructor( private route : ActivatedRoute,
                 private _apiService : ApiService,
                 public router : Router )
    {}

    ngOnInit()
    {
        this.route.params.subscribe( params => {
            let id  = params['id'];
            this._apiService.get("/inventario/movimientos/" + id).subscribe(
                ( response ) => { this.movimiento = response }
            )
        })
    }

    existente( item : IMovimientoMaterial) : number
    {
        if(this.movimiento.accion) {
            return item.cantidad + item.existente;
        }
        else {
            return item.existente - item.cantidad;
        }
    }
}