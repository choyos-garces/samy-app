import {Component, OnInit} from "@angular/core";
import {ApiService} from "../../../shared/services/api.service";

@Component({
    selector : 'app-existente-materiales',
    templateUrl : './existente-materiales.component.html'
})
export class ExistenteMaterialesComponent implements OnInit {
    existente : any[];

    constructor(private _apiService : ApiService)
    {}

    ngOnInit() : void
    {
        this._apiService.get("/inventario/existente/materiales").subscribe( data => {
            if('existente' in data) this.existente = data.existente
        });
    }
}