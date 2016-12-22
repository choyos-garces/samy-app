import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../../shared/services/api.service";
import {IMaterial} from "../../../shared/interfaces/Administracion/IMaterial";
import {FormController} from "../../../shared/FormController";
import {FormBuilder, Validators} from "@angular/forms";
import {IError} from "../../../shared/interfaces/IError";

@Component({
    selector: 'app-material-editar',
    templateUrl: 'material-editar.component.html'
})
export class MaterialEditarComponent extends FormController{

    material : IMaterial;

    constructor( private route : ActivatedRoute,
               private _apiService : ApiService,
               public router : Router,
               formBuilder : FormBuilder )
    {
        super(formBuilder);
    }

    ngOnInit()
    {
        this.addControl('nombre', null, Validators.required);
        this.addControl('descripcion', null);
        this.addControl('active', null, Validators.required);

        this.route.params.subscribe( params => {
            let id  = params['id'];
            this.subscribeResource('material', this._apiService.get("/administracion/materiales/" + id), false, null,
                ( response : IMaterial ) => {
                    this.material = response;
                    this.form.setValue({
                        nombre : response.nombre,
                        descripcion : ( 'descripcion' in response ) ? response.descripcion : null,
                        active : response.active
                    })
                }
            );
        });
    }


    submit()
    {
        if(this.form.valid) {
            this.toggleForm();
            this._apiService.patch("/administracion/materiales/"+this.material.id, this.form.value).subscribe(
                ( response : IMaterial ) => {
                    this.router.navigate(["../../view", response.id], { relativeTo: this.route });
                },
                ( error : IError) => {
                    this.toggleForm();
                    this.handleFormErrors(error.errors);
                }
            );
        }
    }
}
