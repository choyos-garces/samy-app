import { Component } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

import {IProveedor} from "../../../shared/interfaces/Administracion/IProveedor";
import {IError} from "../../../shared/interfaces/IError";

import {FormController} from "../../../shared/FormController";
import {ApiService} from "../../../shared/services/api.service";

@Component({
    selector: 'app-proveedor-editar',
    templateUrl: './proveedor-editar.component.html'
})
export class ProveedorEditarComponent extends FormController {

    proveedor : IProveedor;

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
        this.addControl('ruc', null, Validators.required);
        this.addControl('correo', null, Validators.required);
        this.addControl('telefono', null, Validators.required);

        this.route.params.subscribe( params => {
            let id  = params['id'];
            this.subscribeResource('proveedor', this._apiService.get("/administracion/proveedores/" + id), false, null,
                ( response : IProveedor ) => {
                    this.proveedor = response;
                    this.form.setValue({
                        active : response.active,
                        nombre : response.nombre,
                        ruc : response.ruc,
                        correo : response.correo,
                        telefono : response.telefono,
                    });
                }
            )
        });
    }

    submit()
    {
        if(this.form.valid) {
            this.toggleForm();

            this._apiService.patch("/administracion/proveedores/"+this.proveedor.id, this.form.value).subscribe(
                ( repsonse : IProveedor ) => {
                    this.router.navigate(["../../list"], { relativeTo: this.route });
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
