import {Component} from "@angular/core";
import {FormController} from "../../../shared/FormController";
import {FormBuilder} from "@angular/forms";
import {SamyValidators} from "../../../shared/components/form-controls/form-validators";
import {ApiService} from "../../../shared/services/api.service";
import {Utils} from "../../../shared/utils";
import {IProveedor} from "../../../shared/interfaces/Administracion/IProveedor";
import {IMaterial} from "../../../shared/interfaces/Administracion/IMaterial";
import {IRecurso} from "../../../shared/interfaces/Panel/IRecurso";
import {IFacutraItem} from "../../../shared/interfaces/Contabilidad/IFacutraItem";

@Component({
    selector: 'app-factura-nueva',
    templateUrl: './factura-nueva.component.html'
})
export class FacturaNuevaComponent extends FormController
{
    proveedores : IProveedor[];
    materiales : IMaterial[];
    tiposMateriales : IRecurso[];

    formControls = {
        proveedor: [null, SamyValidators.notNullorEmpty],
        factura: [null, SamyValidators.notNullorEmpty],
        items: [[], SamyValidators.collectionRequired],
        iva: [14, SamyValidators.numericRange(0,100)]
    };

    constructor(formBuilder : FormBuilder,
                private _api : ApiService)
    {
        super(formBuilder);
    }

    ngOnInit() : void
    {
        this.buildForm(this.formControls);

        let filters : any = { active : true };
        this.subscribeResource('proveedores', this._api.get('/administracion/proveedores?'+Utils.queryParameters(filters)));
        this.subscribeResource('materiales', this._api.get('/administracion/materiales'));

        filters = { 'seccion.id' : "_TIPO_MATERIAL" };
        this.subscribeResource("recursos", this._api.get("/panel/recursos?"+Utils.queryParameters(filters)), true, "tiposMateriales");
    }

    addItem( value : any ) : void
    {
        let currentItems = this.getControlValue('items');
        this.setControlValue('items', [value, ...currentItems])
    }

    valoresFactura() {
        let facturaSubtotal : number = 0;
        let facturaDescuento : number = 0;
        let facturaIva : number = 0;
        let facturaTotal : number = 0;

        let items : IFacutraItem[] = this.getControlValue('items');
        let iva : number = this.getControlValue('iva')/100;
        let itemSubtotal, itemDescuento, itemIva;
        for(let i = 0; i < items.length; i++) {
            itemSubtotal = items[i].cantidad*items[i].precio;
            itemDescuento = itemSubtotal*items[i].descuento/100;
            itemIva = (itemSubtotal-itemDescuento)*iva;

            facturaSubtotal += itemSubtotal;
            facturaDescuento += itemDescuento;
            facturaIva += itemIva;
            facturaTotal += itemSubtotal + itemIva - itemDescuento;
        }

        return {
            subtotal: facturaSubtotal,
            descuento: facturaDescuento,
            iva:facturaIva,
            total: facturaTotal
        }
    };

    getMaterialById( id : string ) : IMaterial {
        let result = Utils.searchCollectionBy('id', this.materiales, id );

        return result[0];
    }
}