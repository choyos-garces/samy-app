import {Component, Input, Output, EventEmitter} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";
import {FormController} from "../../../../shared/FormController";
import {IRecurso} from "../../../../shared/interfaces/Panel/IRecurso";
import {IMaterial} from "../../../../shared/interfaces/Administracion/IMaterial";
import {IMovimientoItem} from "../../../../shared/interfaces/Inventario/IMovimientoItem";



@Component({
    selector : 'app-movimiento-item',
    templateUrl : 'movimiento-item.component.html'
})
export class MovimientoItemComponent extends FormController
{
    @Input() tiposMateriales : IRecurso[] = [];
    @Input() materiales : IMaterial[] = [];
    @Output() output = new EventEmitter();

    categorias : any[];
    opcionesMaterial : IMaterial[];

    constructor(formBuilder : FormBuilder)
    {
        super(formBuilder);
    }

    ngOnInit() : void
    {
        this.addControl('tipoMaterial', null, Validators.required);
        this.addControl('categoria', null, Validators.required);
        this.addControl('material', null, Validators.required);
        this.addControl('cantidad', null, Validators.required);


        this.onControlChange('tipoMaterial', ( value : string ) => {
            let results = this.tiposMateriales.filter(tipoMaterial => tipoMaterial.id == value);
            this.categorias = (results.length == 1 ) ? [...results[0].categorias] : [];
        });

        this.onControlChange('categoria', ( value : string ) => {
            let results = this.materiales.filter(material => material.categoria.id == value);
            this.opcionesMaterial = [...results];
        });
    }

    submit() : void
    {
        if(this.form.valid) {
            this.toggleForm();
            this.output.emit({
                material  : this.getControlValue('material'),
                cantidad : this.getControlValue('cantidad')
            });

            this.resetForm();
            this.toggleForm();
        }

    }
}