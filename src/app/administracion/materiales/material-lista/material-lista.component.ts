import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {IMaterial} from "../../../shared/interfaces/Administracion/IMaterial";

@Component({
    selector: 'app-material-lista',
    templateUrl: 'material-lista.component.html'
})
export class MaterialListaComponent implements OnInit {

    materiales : IMaterial[];

    constructor(private _apiService : ApiService) { }

    ngOnInit() {
        this._apiService.get("/administracion/materiales").subscribe( data => {
            if('materiales' in data) this.materiales = data.materiales
        });
    }

    toggleActive(material : IMaterial, index : number) {
        this._apiService.patch("/administracion/materiales/"+material.id, {active : !material.active}).subscribe(
            ( recurso : IMaterial ) => {
                this.materiales[index].active = recurso.active;
            }
        );
    }

}
