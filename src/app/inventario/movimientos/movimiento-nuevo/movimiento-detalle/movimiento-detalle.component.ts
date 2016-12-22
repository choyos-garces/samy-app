import {Component, Output, EventEmitter, Input, OnChanges, SimpleChanges} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";

import {FormController} from "../../../../shared/FormController";
import {Utils} from "../../../../shared/utils";

import {ICategoria} from "../../../../shared/interfaces/Panel/ICategoria";
import {IProveedor} from "../../../../shared/interfaces/Administracion/IProveedor";
import {IProductor} from "../../../../shared/interfaces/Administracion/IProductor";
import {IBodega} from "../../../../shared/interfaces/Administracion/IBodega";

@Component({
    selector : 'app-movimiento-detalle',
    templateUrl : 'movimiento-detalle.component.html'
})
export class MovimientoDetalleComponent extends FormController implements OnChanges {
    @Output() output = new EventEmitter();
    @Input() categorias : ICategoria[];
    @Input() accion : boolean;
    @Input() proveedores : IProveedor[];
    @Input() productores : IProductor[];
    @Input() bodegas : IBodega[];

    isNotReady = true;

    constructor(formBuilder : FormBuilder)
    {
        super(formBuilder);
    }

    ngOnInit() : void
    {
        this.addControl('documento', null, Validators.required);
        this.addControl('referencia', null, Validators.required);
        this.addControl('adicional', null);

        this.onControlChange('documento', value => {
            this.setControlValue('referencia', null);
            if(value == 'Saldo Inicial') {
                this.setControlValue('referencia', true);
            }
        });

        this.form.valueChanges.subscribe( value => {
            value = (this.form.valid) ? value : null;
            this.output.emit(value);
        });
    }

    ngOnChanges(changes: SimpleChanges): void
    {
        if('accion' in changes) {
            this.resetForm();
        }
        if(typeof this.accion != 'undefined') {
            this.isNotReady = false;
        }
    }
}