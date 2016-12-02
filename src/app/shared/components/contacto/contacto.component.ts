import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";

import {FormController} from "../FormController";
import {IContacto} from "../interfaces/IContacto";

@Component({
    selector: 'app-contacto',
    templateUrl: './contacto.component.html'
})
export class ContactoComponent extends FormController implements OnInit {
    @Output() update = new EventEmitter<IContacto>();

    constructor(formBuilder : FormBuilder) {
        super(formBuilder);
    }

    ngOnInit(): void {
        this.addControl('contactoNombre', null, Validators.required);
        this.addControl('contactoTelefono', null);
        this.addControl('contactoCorreo', null);

        this.form.valueChanges.subscribe(value => this.update.emit(value));
    }
}