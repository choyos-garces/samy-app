import { Component } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

import {IPersonal} from "../../../shared/interfaces/Administracion/IPersonal";
import {IError} from "../../../shared/interfaces/IError";

import {FormController} from "../../../shared/FormController";
import {ApiService} from "../../../shared/services/api.service"

@Component({
    selector: 'app-personal-nuevo',
    templateUrl: './personal-nuevo.component.html'
})
export class PersonalNuevoComponent extends FormController
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
        this.addControl('apellido', null, Validators.required);
        this.addControl('cedula', null, Validators.required);
        this.addControl('correo', null, Validators.required);
        this.addControl('codigo', null, Validators.required);
        this.addControl('telefono', null, Validators.required);
        this.addControl('celular', null, Validators.required);

        this.subscribeResource('codigo', this._apiService.get('/administracion/personal?codigo=true'), true, null,
            ( response ) => {
                this.setControlValue('codigo', response.codigo);
                this.codigoReady = true;
            }
        )
    }

    submit()
    {
        if(this.form.valid) {
            this.toggleForm();

            this._apiService.post("/administracion/personal", this.form.value).subscribe(
                ( repsonse : IPersonal ) => {
                    this.router.navigate(["../view", repsonse.id], { relativeTo: this.route });
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