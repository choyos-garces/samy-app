import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

import {FormController} from "../../../shared/FormController";
import {ApiService} from "../../../shared/services/api.service";
import {Router, ActivatedRoute} from "@angular/router";
import {IBodega} from "../../../shared/interfaces/Administracion/IBodega";
import {IError} from "../../../shared/interfaces/IError";
import {IDocumentMap} from "../../../shared/components/documentSelect/shared/IDocumentMap";
import {IPersonal} from "../../../shared/interfaces/Administracion/IPersonal";
import {Utils} from "../../../shared/utils";

@Component({
    selector: 'app-bodega-nueva',
    templateUrl: 'bodega-nueva.component.html'
})
export class BodegaNuevaComponent extends FormController
{
    codigoReady : boolean = false;
    personal : IPersonal[];
    documentMap : IDocumentMap;

    constructor( private _apiService : ApiService,
                 private router : Router,
                 private route : ActivatedRoute,
                 formBuilder : FormBuilder )
    {
        super(formBuilder);
    }

    ngOnInit()
    {
        this.addControl('nombre', null, Validators.required);
        this.addControl('codigo', null, Validators.required);
        this.addControl('encargado', null, Validators.required);
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

        this.onControlChange('encargado', value => console.log(value));
    }

    updateEncargado(id : string ) : void
    {
        this.setControlValue('encargado', id);
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
