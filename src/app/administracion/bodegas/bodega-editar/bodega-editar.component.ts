import {Component} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {FormBuilder} from "@angular/forms";

import {IBodega} from "../../../shared/interfaces/Administracion/IBodega";
import {IError} from "../../../shared/interfaces/IError";

import {Utils} from "../../../shared/utils";
import {FormController} from "../../../shared/FormController";
import {FormValidators} from "../../../shared/components/form-controls/form-validators";
import {ApiService} from "../../../shared/services/api.service";
import {IPersonal} from "../../../shared/interfaces/Administracion/IPersonal";

@Component({
    selector: 'app-bodega-editar',
    templateUrl: 'bodega-editar.component.html'
})
export class BodegaEditarComponent extends FormController
{
    bodega : IBodega;
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
        this.addControl('active',false);
        this.addControl('nombre', null, FormValidators.notNullorEmpty);
        this.addControl('descripcion', null);
        this.addControl('encargado', null, FormValidators.notNullorEmpty);

        this.route.params.subscribe( ( params : string[] ) => {
            let id  = params['id'];
            this.subscribeResource('bodega', this._apiService.get("/administracion/bodegas/" + id), false, null,
                ( response : IBodega ) => {
                    this.bodega = response;
                    this.form.setValue({
                        active : response.active,
                        nombre : response.nombre,
                        descripcion : ( 'descripcion' in response ) ? response.descripcion : null,
                        encargado: ( 'encargado' in response ) ? response.encargado.id : null
                    });
                }
            );
        });

        let filters = { active : true };
        this.subscribeResource('personal', this._apiService.get("/administracion/personal?"+Utils.queryParameters(filters)));
    }

    submit() : void
    {
        if(this.form.valid) {
            this.toggleForm();

            this._apiService.patch("/administracion/bodegas/"+this.bodega.id, this.form.value).subscribe(
                ( repsonse : IBodega ) => {
                    this.router.navigate(["../../view", repsonse.id], { relativeTo: this.route });
                },
                ( error : IError) => {
                    this.toggleForm();
                    this.handleFormErrors(error.errors);
                }
            );
        }
    }

}
