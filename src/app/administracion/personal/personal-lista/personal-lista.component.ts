import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {IPersonal} from "../../../shared/interfaces/Administracion/IPersonal";

@Component({
    selector: 'app-personal-lista',
    templateUrl: './personal-lista.component.html',
})
export class PersonalListaComponent implements OnInit {

    personal : IPersonal[];

    constructor(private _apiService : ApiService) { }

    ngOnInit() {
        this._apiService.get("/administracion/personal").subscribe( data => {
            if('personal' in data) this.personal = data.personal
        });
    }

    toggleActive(personal : IPersonal, index : number) {
        this._apiService.patch("/administracion/personal/"+personal.id, {active : !personal.active }).subscribe(
            ( response : IPersonal ) => {
                this.personal[index].active = response.active;
            }
        );
    }


}