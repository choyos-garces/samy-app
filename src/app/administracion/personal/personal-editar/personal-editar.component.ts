import { Component } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

import {IPersonal} from "../../../shared/interfaces/Administracion/IPersonal";
import {IError} from "../../../shared/interfaces/IError";

import {FormController} from "../../../shared/FormController";
import {ApiService} from "../../../shared/services/api.service";

@Component({
    selector: 'app-personal-editar',
    templateUrl: './personal-editar.component.html'
})
export class PersonalEditarComponent extends FormController {

    personal : IPersonal;

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
        this.addControl('apellido', null, Validators.required);
        this.addControl('cedula', null, Validators.required);
        this.addControl('correo', null, Validators.required);
        this.addControl('codigo', null, Validators.required);
        this.addControl('telefono', null, Validators.required);
        this.addControl('celular', null, Validators.required);

        this.route.params.subscribe( params => {
            let id  = params['id'];
            this.subscribeResource('personal', this._apiService.get("/administracion/personal/" + id), false, null,
                ( response : IPersonal ) => {
                    this.form.setValue({
                        active : response.active,
                        nombre : response.nombre,
                        apellido : response.apellido,
                        cedula : response.cedula,
                        correo : response.correo,
                        codigo : response.codigo,
                        telefono : response.telefono,
                        celular : response.celular
                    });
                }
            )
        });
    }

    submit()
    {
        if(this.form.valid) {
            this.toggleForm();

            this._apiService.patch("/administracion/personal/"+this.personal.id, this.form.value).subscribe(
                ( repsonse : IPersonal ) => {
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
