import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

import {IRecurso} from "../../../shared/interfaces/Panel/IRecurso";
import {IError} from "../../../shared/interfaces/IError";
import {ICategoria} from "../../../shared/interfaces/Panel/ICategoria";
import {ICollectionControlOutput} from "../../../shared/interfaces/ICollectionControlOutput";

import {ApiService} from "../../../shared/services/api.service";
import {FormController} from "../../../shared/FormController";

@Component({
    selector: 'app-editar-recurso',
    templateUrl: 'recurso-editar.component.html'
})
export class RecursoEditarComponent extends FormController implements OnInit {

    private recurso : IRecurso;
    private categoriaValid : boolean[] = [];

    constructor( private route : ActivatedRoute,
                 private _apiService : ApiService,
                 public router : Router,
                 formBuilder : FormBuilder )
    {
        super(formBuilder);
    }

    ngOnInit() {
        this.addControl("active", null, Validators.required);
        this.addControl("nombre", null, Validators.required);
        this.addControl("detalle", null);
        this.addControl("categorias", null, Validators.required);

        this.route.params.subscribe( params => {
            let id  = params['id'];
            this.subscribeResource('recurso', this._apiService.get("/panel/recursos/" + id), false, null,
                ( recurso : IRecurso ) => {
                    this.recurso = recurso;
                    this.form.setValue({
                        nombre : recurso.nombre,
                        active : recurso.active,
                        detalle : ('detalle' in recurso) ? recurso.detalle : null,
                        categorias: ('categorias' in recurso) ? recurso.categorias : []
                    });
                }
            )
        });

    }

    clearCategorias() : void {
        this.recurso.categorias = [
            ...this.recurso.categorias.filter( (categoria : ICategoria) => {
                return ( categoria != null && 'id' in categoria);
            })
        ];

        this.categoriaValid = [
            ...this.categoriaValid.slice(0, this.recurso.categorias.length )
        ];

        this.setControlValue('categorias', [ ...this.recurso.categorias ]);
        if(this.isCategoriasInvalid()) this.getControl('categorias').setErrors({notNull : true})

    }

    addCategoria() : void {
        let categoria : ICategoria = { active : false, nombre : null };

        this.recurso.categorias = [
            ...this.recurso.categorias,
            categoria
        ];

        this.setControlValue('categorias', [ ...this.recurso.categorias ]);
        if(this.isCategoriasInvalid()) this.getControl('categorias').setErrors({notNull : true})
    }

    updateCategorias( event : ICollectionControlOutput ) : void {
        let i = event.index;
        this.recurso.categorias[i] = event.value;
        this.categoriaValid[i] = event.valid;

        this.setControlValue('categorias', [ ...this.recurso.categorias ]);
        if(this.isCategoriasInvalid()) this.getControl('categorias').setErrors({notNull : true})
    }

    isCategoriasInvalid() : boolean {
        let flag = false;
        for( let a = 0; a < this.categoriaValid.length; a++ ) {
            if( !this.categoriaValid[a] ) {
                flag = true;
            }
        }

        return flag;
    }

    submit() {
        if(this.form.valid) {
            this.toggleForm();
            this._apiService.patch("/panel/recursos/"+this.recurso.id, this.form.value).subscribe(
                ( recurso : IRecurso ) => {
                    this.router.navigate(["../../view", recurso.id], { relativeTo: this.route });
                },
                ( error : IError) => {
                    this.toggleForm();
                    this.handleFormErrors(error.errors);
                }
            );
        }
    }
}
