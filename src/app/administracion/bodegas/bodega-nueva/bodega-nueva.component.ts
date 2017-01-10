import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

import {FormController} from "../../../shared/FormController";
import {ApiService} from "../../../shared/services/api.service";
import {Router, ActivatedRoute} from "@angular/router";
import {IBodega} from "../../../shared/interfaces/Administracion/IBodega";
import {IError} from "../../../shared/interfaces/IError";
import {IPersonal} from "../../../shared/interfaces/Administracion/IPersonal";
import {Utils} from "../../../shared/utils";
import {SamyValidators} from "../../../shared/components/form-controls/form-validators";

@Component({
    selector: 'app-bodega-nueva',
    templateUrl: 'bodega-nueva.component.html'
})
export class BodegaNuevaComponent extends FormController
{
    codigoReady : boolean = false;
    personal : IPersonal[];

    constructor( private _apiService : ApiService,
                 private router : Router,
                 private route : ActivatedRoute,
                 formBuilder : FormBuilder )
    {
        super(formBuilder);
    }

    ngOnInit()
    {
        this.addControl('nombre', null, SamyValidators.notNullorEmpty);
        this.addControl('codigo', null, SamyValidators.notNullorEmpty);
        this.addControl('encargado', null, SamyValidators.notNullorEmpty);
        this.addControl('descripcion', null);

        this._apiService.get("/administracion/bodegas?codigo=true").subscribe(
            ( response ) => {
                if( 'codigo' in response ) {
                    this.codigoReady = true;
                    this.setControlValue('codigo', response.codigo);
                }
            }
        );

        let filters = { active : true };
        this.subscribeResource('personal', this._apiService.get("/administracion/personal?"+Utils.queryParameters(filters)));
    }

    submit()
    {
        if(this.form.valid) {
            this.toggleForm();

            this._apiService.post("/administracion/bodegas", this.form.value).subscribe(
                ( bodega : IBodega ) => {
                    this.router.navigate(["../view", bodega.id], { relativeTo: this.route });
                },
                ( error : IError) => {
                    this.toggleForm();
                    if('errors' in error) this.handleFormErrors(error.errors);
                }
            );
        }
    }
}
