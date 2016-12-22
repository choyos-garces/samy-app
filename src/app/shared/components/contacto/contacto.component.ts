import {Component, Output, EventEmitter, Input} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";
import {FormController} from "../../FormController";
import {IControlOutput} from "../../interfaces/IControlOutput";
import {IContacto} from "../../interfaces/IContacto";

@Component({
    selector: 'app-contacto',
    templateUrl: 'contacto.component.html'
})
export class ContactoComponent extends FormController {
    @Output() output = new EventEmitter<IControlOutput>();

    private _contacto : IContacto | any = {};

    constructor(formBuilder : FormBuilder)
    {
        super(formBuilder);
    }

    @Input()
    set contacto ( contacto : IContacto)
    {
        this._contacto = contacto;

        this.form.setValue({
            nombre : contacto.nombre,
            telefono : contacto.telefono,
            correo : contacto.correo
        })
    }

    get contacto () : IContacto
    {
        return this._contacto;
    }

    ngOnInit(): void
    {
        this.addControl('nombre', null, Validators.required);
        this.addControl('telefono', null);
        this.addControl('correo', null, Validators.required);

        this.form.valueChanges.subscribe( (value) => {
            this._contacto['nombre'] = value.nombre;
            this._contacto['telefono'] = value.telefono;
            this._contacto['correo'] = value.correo;

            let payload : IControlOutput = {
                value : this.contacto,
                valid : this.form.valid
            };

            this.output.emit(payload)
        });
    }
}