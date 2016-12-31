import {Component} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

import {IBodega} from "../../../shared/interfaces/Administracion/IBodega";
import {IError} from "../../../shared/interfaces/IError";

import {FormController} from "../../../shared/FormController";
import {ApiService} from "../../../shared/services/api.service";
import {IPersonal} from "../../../shared/interfaces/Administracion/IPersonal";
import {IDocumentMap} from "../../../shared/components/documentSelect/shared/IDocumentMap";
import {Utils} from "../../../shared/utils";

@Component({
    selector: 'app-bodega-editar',
    templateUrl: 'bodega-editar.component.html'
})
export class BodegaEditarComponent extends FormController
{
    bodega : IBodega;
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
        this.addControl('active', null, Validators.required);
        this.addControl('nombre', null, Validators.required);
        this.addControl('descripcion', null);
        this.addControl('encargado', null, Validators.required);

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

        this.documentMap = {
            searchKeys: ["nombre", "apellido", "cedula"],
            display: ["nombre", "apellido"],
            small: ["cedula"]
        }
    }

    updateEncargado(id : string ) : void
    {
        this.setControlValue('encargado', id);
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
                    console.log(error.errors);
                    this.handleFormErrors(error.errors);
                }
            );
        }
    }

}
