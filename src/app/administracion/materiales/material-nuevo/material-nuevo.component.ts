import { Component } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

import {Utils} from "../../../shared/utils";
import {ApiService} from "../../../shared/services/api.service";
import {FormController} from "../../../shared/FormController";

import {IRecurso} from "../../../shared/interfaces/Panel/IRecurso";
import {ICategoria} from "../../../shared/interfaces/Panel/ICategoria";
import {IError} from "../../../shared/interfaces/IError";

@Component({
    selector: 'app-material-nuevo',
    templateUrl: 'material-nuevo.component.html'
})
export class MaterialNuevoComponent extends FormController
{

    tiposMateriales : IRecurso[];
    categorias : ICategoria[];
    codigo : string;
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
        this.addControl('tipoMaterial', null, Validators.required);
        this.addControl('codigo', null, Validators.required);
        this.addControl('nombre', null, Validators.required);
        this.addControl('descripcion', null);
        this.addControl('categoria', null, Validators.required);

        this.onControlChange('tipoMaterial', ( recursoId : string ) => {
            let recurso = this.tiposMateriales.filter( (recurso : IRecurso) => {
                return recurso.id == recursoId;
            })[0];

            this.categorias = [
                ...recurso.categorias.filter( categoria => categoria.active == true )
            ];
            let categoriaControl = this.getControl('categoria');
            categoriaControl.setValue(null);
        });

        this.subscribeResource('codigo', this._apiService.get("/administracion/materiales?codigo=true"), false, null,
            ( response ) => {
                if('codigo' in response) {
                    this.codigoReady = true;
                    this.setControlValue('codigo', response.codigo);
                }
            }
        );

        let filters = { active : true, 'seccion.id' : "_TIPO_MATERIAL" };
        this.subscribeResource("recursos", this._apiService.get("/panel/recursos?"+Utils.queryParameters(filters)), true, "tiposMateriales");
    }

    submit()
    {
        if(this.form.valid) {
            let data = this.form.value;
            this.toggleForm();

            this._apiService.post("/administracion/materiales", data).subscribe(
                ( response : IRecurso ) => {
                    this.toggleForm();
                    this.router.navigate(["../view", response.id], { relativeTo: this.route });
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
