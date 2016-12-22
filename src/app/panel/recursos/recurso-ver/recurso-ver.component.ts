import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {Router, ActivatedRoute} from "@angular/router";

import {IRecurso} from "../../../shared/interfaces/Panel/IRecurso";

@Component({
    selector: 'app-recurso-ver',
    templateUrl: './recurso-ver.component.html',
    styleUrls: ['./recurso-ver.component.css']
})
export class RecursoVerComponent implements OnInit {

    recurso : IRecurso;

    constructor(private route : ActivatedRoute, private _apiService : ApiService, public router : Router ) {}

    ngOnInit() {
        this.route.params.subscribe( params => {
            let id  = params['id'];
            this._apiService.get("/panel/recursos/" + id).subscribe(
                ( recurso ) => { this.recurso = recurso }
            )
        })
    }

    toggleActive(recurso : IRecurso) {
        this._apiService.patch("/panel/recursos/"+recurso.id, {active : !recurso.active}).subscribe(
            ( recurso : IRecurso ) => {
                this.recurso.active = recurso.active;
            }
        );
    }
}
