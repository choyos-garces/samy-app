import { Component } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

import {IProductor} from "../../../shared/interfaces/Administracion/IProductor";
import {IError} from "../../../shared/interfaces/IError";

import {FormController} from "../../../shared/FormController";
import {ApiService} from "../../../shared/services/api.service"

@Component({
    selector: 'app-productor-nuevo',
    templateUrl: './productor-nuevo.component.html'
})
export class ProductorNuevoComponent extends FormController
{
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
        this.addControl('apellido', null, Validators.required);
        this.addControl('ruc', null, Validators.required);
        this.addControl('correo', null, Validators.required);
        this.addControl('telefono', null, Validators.required);
    }

    submit()
    {
        if(this.form.valid) {
            this.toggleForm();

            this._apiService.post("/administracion/productores", this.form.value).subscribe(
                ( repsonse : IProductor ) => {
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