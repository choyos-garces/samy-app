import {Component, OnInit} from "@angular/core";
import {ApiService} from "../../../shared/services/api.service";

@Component({
    selector : 'app-existente-bodegas',
    templateUrl: './existente-bodegas.component.html'
})
export class ExistenteBodegasComponent implements OnInit
{
    existente : any[];

    constructor(private _apiService : ApiService)
    {}

    ngOnInit() : void
    {
        this._apiService.get("/inventario/existente/bodegas").subscribe( data => {
            if('existente' in data) this.existente = data.existente
        });
    }
}