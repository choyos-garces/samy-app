import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";

import {IRecurso} from "../../../shared/interfaces/Panel/IRecurso";
import {IAplicacion} from "../../../shared/interfaces/Panel/IAplicacion";
import {ISeccion} from "../../../shared/interfaces/Panel/ISeccion";
import {IError} from "../../../shared/interfaces/IError";

import {FormController} from "../../../shared/FormController";
import {ApiService} from "../../../shared/services/api.service";

@Component({
    selector: 'app-nuevo-recurso',
    templateUrl: 'recurso-nuevo.component.html'
})
export class RecursoNuevoComponent extends FormController implements OnInit {

    index : IAplicacion[];
    aplicacion : string;
    secciones : ISeccion[];

    constructor( private _apiService : ApiService,
                 private router : Router,
                 private route : ActivatedRoute,
                 formBuilder : FormBuilder )
    {
        super(formBuilder);
    }

    ngOnInit() {
        this.addControl("aplicacion", null);
        this.addControl("seccion", null, Validators.required);
        this.addControl("nombre", null, Validators.required);
        this.addControl("detalle", null);

        this.getControl("aplicacion").valueChanges
            .subscribe( (id : string ) => {
                let app = this.index.filter(item => {
                    return item.id == id
                });

                this.getControl("seccion").setValue(null);

                this.secciones = [ ...app[0].secciones];
            });

        this.subscribeResource('index', this._apiService.get("/panel/recursos?index=true"))

    }

    submit() {
        if(this.form.valid) {
            let data = this.form.value;
            this.toggleForm();

            this._apiService.post("/panel/recursos", data).subscribe(
                ( recurso : IRecurso ) => {
                    this.router.navigate(["../view", recurso.id], { relativeTo: this.route });
                },
                ( error : IError) => {
                    this.toggleForm();
                    console.log(error.errors);
                    this.handleFormErrors(error.errors);
                }
            );
        }
    }
}
