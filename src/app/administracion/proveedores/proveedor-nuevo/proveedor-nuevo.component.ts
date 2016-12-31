import { Component } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

import {IProveedor} from "../../../shared/interfaces/Administracion/IProveedor";
import {IError} from "../../../shared/interfaces/IError";

import {FormController} from "../../../shared/FormController";
import {ApiService} from "../../../shared/services/api.service"

@Component({
    selector: 'app-proveedor-nuevo',
    templateUrl: './proveedor-nuevo.component.html'
})
export class ProveedorNuevoComponent extends FormController
{
    codigoReady : boolean = false;

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
        this.addControl('ruc', null, Validators.required);
        this.addControl('correo', null, Validators.required);
        this.addControl('telefono', null, Validators.required);
    }

    submit()
    {
        if(this.form.valid) {
            this.toggleForm();

            this._apiService.post("/administracion/proveedores", this.form.value).subscribe(
                ( repsonse : IProveedor ) => {
                    this.router.navigate(["../list"], { relativeTo: this.route });
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