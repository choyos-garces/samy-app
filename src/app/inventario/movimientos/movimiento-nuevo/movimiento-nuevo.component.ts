import {Component} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";

import {Utils} from "../../../shared/utils";
import {FormController} from "../../../shared/FormController";
import {ApiService} from "../../../shared/services/api.service";

import {IBodega} from "../../../shared/interfaces/Administracion/IBodega";
import {IMaterial} from "../../../shared/interfaces/Administracion/IMaterial";
import {IRecurso} from "../../../shared/interfaces/Panel/IRecurso";
import {IMovimientoItem} from "../../../shared/interfaces/Inventario/IMovimientoItem";
import {ICategoria} from "../../../shared/interfaces/Panel/ICategoria";
import {IProveedor} from "../../../shared/interfaces/Administracion/IProveedor";
import {IProductor} from "../../../shared/interfaces/Administracion/IProductor";
import {SamyValidators} from "../../../shared/components/form-controls/form-validators";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector : 'app-movimiento-nuevo',
    templateUrl : 'movimiento-nuevo.component.html',
    styleUrls: ['movimiento-nuevo.component.css']
})
export class MovimientoNuevoComponent extends FormController
{
    /** Loaded from DB **/
    bodegas : IBodega[];
    materiales : IMaterial[];
    proveedores : IProveedor[];
    productores : IProductor[];
    tiposMateriales : IRecurso[];
    acciones : IRecurso[];

    /** Movimiento Detalle **/
    accion : boolean;
    categorias : ICategoria[];
    bodegasDisponibles : IBodega[] = [];
    materialesDisponibles : IMaterial[] = [];

    formControls = {
        accion: [null, SamyValidators.notNullorEmpty],
        bodega: [null, SamyValidators.notNullorEmpty],
        detalle: [null, SamyValidators.notNullorEmpty],
        materiales: [[], SamyValidators.collectionRequired],
        observaciones: [null]
    };

    constructor(private _api : ApiService,
                private router : Router,
                private route : ActivatedRoute,
                formBuilder : FormBuilder)
    {
        super(formBuilder);
    }

    ngOnInit() : void
    {

        this.buildForm(this.formControls);

        // Fetch resources form DB
        let filters : any = { active : true };
        this.subscribeResource('bodegas', this._api.get("/administracion/bodegas?"+Utils.queryParameters(filters)), true);
        this.subscribeResource('materiales', this._api.get('/administracion/materiales?'+Utils.queryParameters(filters)), true, null,
            (response) => {
                //Valor inicial de los materiales disponibles
                this.materialesDisponibles = response.materiales
            }
        );
        this.subscribeResource('proveedores', this._api.get('/administracion/proveedores?'+Utils.queryParameters(filters)), true);
        this.subscribeResource('productores', this._api.get('/administracion/productores?'+Utils.queryParameters(filters)), true);

        filters['seccion.id'] = "_TIPO_MATERIAL";
        this.subscribeResource("recursos", this._api.get("/panel/recursos?"+Utils.queryParameters(filters)), true, "tiposMateriales");

        filters['seccion.id'] = "_MOVIMIENTOS";
        this.subscribeResource("recursos", this._api.get("/panel/recursos?"+Utils.queryParameters(filters)), true, "acciones");

        // Sets behavior for Controllers
        this.onControlChange('accion', (id : boolean) => {
            this.setControlValue('detalle', null);
            let results = <IRecurso[]>Utils.searchCollectionBy('id', this.acciones, id);
            if(results.length == 1) {
                let result = results[0];
                this.accion = (result.detalle == '1');
                this.categorias = result.categorias;
            }
            else {
                this.categorias = [];
            }
        });

        this.onControlChange('bodega', ( id : string ) => {
            this.bodegasDisponibles = Utils.searchCollectionNotEquals('id', this.bodegas, id);
        });

        this.onControlChange('materiales', ( movimeintoItems : IMovimientoItem[] ) => {
            let results = this.materiales.filter( ( material : IMaterial ) => {
                let flag = true;
                for(let i = 0; i < movimeintoItems.length; i++) {
                    if(material.id == movimeintoItems[i].material) flag = false;
                }
                return flag;
            });

            this.materialesDisponibles = [...results];
        })
    }

    //@Output: app-detalle.
    updateDetalle( detalle : any) : void
    {
        this.setControlValue('detalle', detalle);
    }

    //@Output: app-movimiento-items.
    updateMovimientoItems( movimientoItem : IMovimientoItem ) : void
    {
        let movimientoMateriales = this.getControlValue('materiales');
        movimientoMateriales = [
            ...movimientoMateriales,
            movimientoItem
        ];

        this.setControlValue('materiales', movimientoMateriales);
    }

    //@Template: Remueve el item de la lista de MovimientoItems y updetea el controller.
    removerMovimientoItem( index : number ) : void
    {
        let movimientoMateriales = this.getControlValue('materiales');

        movimientoMateriales = [
            ...movimientoMateriales.slice(0, index),
            ...movimientoMateriales.slice(index+1)
        ];

        this.setControlValue('materiales', movimientoMateriales);
    }

    //@Template: Da el numero de las selecciones de materiales.
    totalSeleccion() : number
    {
        let movimientoMateriales = (this.getControlValue('materiales') == null) ? [] : this.getControlValue('materiales');

        return movimientoMateriales.length;
    }

    //@Template: MovimientoMateriales solo tiene el :id de los materiales. Esto busca en la lista de materiales
    //           para darle el nombre.
    getMaterialById(id : string ) : IMaterial
    {
        let result = this.materiales.filter( ( material : IMaterial) => material.id == id );

        return result.length == 1 ? result[0] : null;
    }

    //@Template: Submit.
    submit() : void
    {
        if(this.form.valid) {
            this.toggleForm();
            let values = this.form.value;
            values.accion = this.accion;
            this._api.post('/inventario/movimientos', values).subscribe(
                response => {
                    this.toggleForm();
                    this.router.navigate(['../view', response.id], { relativeTo: this.route })
                },
                error => {
                    this.toggleForm();
                    if('errors' in error)
                    {
                        this.handleFormErrors(error.errors);
                    }
                }
            );
        }
    }
}