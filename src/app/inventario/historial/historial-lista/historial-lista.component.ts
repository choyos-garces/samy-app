import {Component} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";

import {ApiService} from "../../../shared/services/api.service";
import {FormController} from "../../../shared/FormController";
import {FormBuilder} from "@angular/forms";
import {Utils} from "../../../shared/utils";
import {IBodega} from "../../../shared/interfaces/Administracion/IBodega";
import {IMaterial} from "../../../shared/interfaces/Administracion/IMaterial";
import {IMovimientoMaterial} from "../../../shared/interfaces/Inventario/IMovimientoMaterial";

@Component({
    selector : 'app-historial-lista',
    templateUrl: './historial-lista.component.html'
})
export class HistorialListaComponent extends FormController {

    bodegas : IBodega[];
    materiales: IMaterial[];
    historial : IMovimientoMaterial[];

    constructor( private route : ActivatedRoute,
                 private _api : ApiService,
                 public router : Router,
                 formBuilder : FormBuilder)
    {
        super(formBuilder);
    }

    ngOnInit()
    {

        this.addControl('bodega', null);
        this.addControl('material', null);
        this.addControl('desde', null);
        this.addControl('hasta', null);
        this.addControl('limit', null);

        let filters = { active : true };
        this.subscribeResource('bodegas', this._api.get('/administracion/bodegas?' + Utils.queryParameters(filters)));
        this.subscribeResource('materiales', this._api.get('/administracion/materiales?' + Utils.queryParameters(filters)));
        this.route.params.subscribe( params => {
            let materialId  = params['material'];
            let bodegaId = params['bodega'];

        })
    }

    submit() : void
    {
        this.toggleForm();
        let values = this.form.value;
        let filters = {};
        if( values.bodega !== null ) filters['bodega.id'] = values.bodega;
        if( values.material !== null ) filters['material.id'] = values.material;

        let range = {};
        if( values.desde !== null && values.desde !== "" ) range['desde'] = values.desde;
        if( values.hasta !== null && values.hasta !== "" ) range['hasta'] = values.hasta;


        let uri = "/inventario/historial/?" + Utils.queryParameters(filters) + "&" + Utils.queryParameters(range, 'range');
        this.subscribeResource('historial', this._api.get(uri), true, null, () => this.toggleForm() );
    }
}
