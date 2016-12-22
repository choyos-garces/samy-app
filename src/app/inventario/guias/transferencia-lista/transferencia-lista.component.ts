import {Component, OnInit} from "@angular/core";
import {IGuiaTransferencia} from "../../../shared/interfaces/Inventario/IGuiaTransferencia";
import {ApiService} from "../../../shared/services/api.service";

@Component({
    selector : "app-guia-transferencia-lista",
    templateUrl : "transferencia-lista.component.html"
})
export class TransferenciaListaComponent implements OnInit {

    guias : IGuiaTransferencia[];

    constructor( private _api : ApiService)
    {}


    ngOnInit(): void
    {
        this._api.get("/inventario/guias").subscribe( data => {
            if('guias' in data) this.guias = data.guias
        });
    }
}