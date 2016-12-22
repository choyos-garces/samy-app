import {Component, Input, EventEmitter, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

import {ICategoria} from "../../../../shared/interfaces/Panel/ICategoria";

import {FormController} from "../../../../shared/FormController";

@Component({
  selector: 'app-catagorias-item',
  templateUrl: 'catagorias-item.component.html',
  styleUrls: ['catagorias-item.component.css']
})
export class CatagoriasItemComponent extends FormController {

    @Output() output = new EventEmitter();
    @Input() index : number;
    private _categoria : ICategoria;

    constructor(formBuilder : FormBuilder){
        super(formBuilder);

        this.addControl("nombre", null, Validators.required);
        this.addControl("active", null, Validators.required);

        this.form.valueChanges.subscribe( (value : ICategoria) => {
            this.categoria.nombre = value.nombre;
            this.categoria.active = value.active;

            let payload = {
                value : this.categoria,
                index : this.index,
                valid : this.form.valid
            };

            this.output.emit(payload);
        })
    }

    @Input()
    set categoria( categoria : ICategoria) {
        this._categoria = categoria;

        // Actualiza Formulario con los datos
        this.form.setValue({
            nombre : categoria.nombre,
            active : categoria.active
        });

        this.getControl('nombre').markAsTouched();
    }

    get categoria() : ICategoria {
        return this._categoria;
    }

    toggleActive() {
        // Recordatoria para el usuario en el nombre
        this.getControl('nombre').markAsTouched();

        this.categoria.active = !this.categoria.active;
    }
}
