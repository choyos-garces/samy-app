import {Component, Input, EventEmitter, Output, AfterViewChecked, AfterViewInit} from "@angular/core";
import {FormController} from "../../../../shared/FormController";
import {FormBuilder} from "@angular/forms";
import {IMaterial} from "../../../../shared/interfaces/Administracion/IMaterial";
import {SamyValidators} from "../../../../shared/components/form-controls/form-validators";
import {IRecurso} from "../../../../shared/interfaces/Panel/IRecurso";
import {ICategoria} from "../../../../shared/interfaces/Panel/ICategoria";
import {Utils} from "../../../../shared/utils";

@Component({
    selector: 'app-factura-agregar-item',
    templateUrl: './agregar-item.component.html'
})
export class FacturaAgregarItemComponent extends FormController implements AfterViewInit
{
    @Input() tiposMateriales : IRecurso[];
    @Input() materiales : IMaterial[] = [];
    @Output() output = new EventEmitter<any>();

    categorias : ICategoria[] = [];
    opcionesMateriales : IMaterial[] = [];

    private formControls = {
        tipoMaterial : [null, SamyValidators.notNullorEmpty],
        categoria : [null, SamyValidators.notNullorEmpty],
        material : [null, SamyValidators.validListOption],
        detalle : [null],
        cantidad: [1, SamyValidators.numericRange(1)],
        descuento: [0, SamyValidators.numericRange(0, 100)],
        precio: ["0.00", SamyValidators.numericRange(0)],
    };

    constructor( formBuilder : FormBuilder )
    {
        super(formBuilder);
    }

    ngOnInit() : void
    {
        this.buildForm(this.formControls);

        this.onControlChange('tipoMaterial', (value) => {
            let results = Utils.searchCollectionBy('id', this.tiposMateriales, value);
            if(results.length == 1) {
                this.categorias = [...results[0].categorias];
            }
        });

        this.onControlChange('categoria', (value) => {
            let results = this.materiales.filter(material => material.categoria.id == value);
            this.opcionesMateriales = [...results];
            if(this.getControlValue('material') !== null) this.setControlValue('material', null);
        });
    }

    ngAfterViewInit() : void
    {
        $('#factura-agregar-material').on('hidden.bs.modal', {self : this}, function (e) {
            let self = e.data.self;
            self.resetForm(self.formControls);
            self.categorias = [];
            self.opcionesMateriales = [];
        })
    }

    submit() : void
    {
        if(this.form.valid) {
            let value = this.form.value;
            delete value.categoria;
            delete value.tipoMaterial;

            this.output.emit(value);
            $('#factura-agregar-material').modal('hide');
        }
    }
}