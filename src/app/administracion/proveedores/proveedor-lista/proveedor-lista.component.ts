import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {IProveedor} from "../../../shared/interfaces/Administracion/IProveedor";

@Component({
    selector: 'app-proveedor-lista',
    templateUrl: './proveedor-lista.component.html',
})
export class ProveedorListaComponent implements OnInit
{

    proveedores : IProveedor[];

    constructor(private _apiService : ApiService) { }

    ngOnInit()
    {
        this._apiService.get("/administracion/proveedores").subscribe( data => {
            if('proveedores' in data) this.proveedores = data.proveedores
        });
    }

    toggleActive(proveedor : IProveedor, index : number)
    {
        this._apiService.patch("/administracion/proveedores/"+proveedor.id, {active : !proveedor.active }).subscribe(
            ( response : IProveedor ) => {
                this.proveedores[index].active = response.active;
            }
        );
    }


}