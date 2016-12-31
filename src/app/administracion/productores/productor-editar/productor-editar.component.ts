import { Component } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

import {IProductor} from "../../../shared/interfaces/Administracion/IProductor";
import {IError} from "../../../shared/interfaces/IError";

import {FormController} from "../../../shared/FormController";
import {ApiService} from "../../../shared/services/api.service";

@Component({
    selector: 'app-productor-editar',
    templateUrl: './productor-editar.component.html'
})
export class ProductorEditarComponent extends FormController {

    productor : IProductor;

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
        this.addControl('ruc', null, Validators.required);
        this.addControl('correo', null, Validators.required);
        this.addControl('telefono', null, Validators.required);

        this.route.params.subscribe( params => {
            let id  = params['id'];
            this.subscribeResource('personal', this._apiService.get("/administracion/productores/" + id), false, null,
                ( response : IProductor ) => {
                    this.productor = response;
                    this.form.setValue({
                        active : response.active,
                        nombre : response.nombre,
                        apellido : response.apellido,
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

            this._apiService.patch("/administracion/productores/"+this.productor.id, this.form.value).subscribe(
                ( repsonse : IProductor ) => {
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
