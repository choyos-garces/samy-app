import { Component, OnInit } from '@angular/core';
import {IProveedor} from "../../../shared/interfaces/Administracion/IProveedor";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../../shared/services/api.service";

@Component({
    selector: 'app-proveedor-ver',
    templateUrl: './proveedor-ver.component.html',
    styleUrls: ['./proveedor-ver.component.css']
})
export class ProveedorVerComponent implements OnInit
{
    proveedor : IProveedor;
    toggleWaiting : boolean = false;

    constructor( private route : ActivatedRoute,
                 private _apiService : ApiService,
                 public router : Router ) {}

    ngOnInit()
    {
        this.route.params.subscribe( params => {
            let id  = params['id'];
            this._apiService.get("/administracion/proveedores/" + id).subscribe(
                ( response ) => { this.proveedor = response }
            )
        })
    }


    toggleActive(proveedor : IProveedor)
    {
        this.toggleWaiting = !this.toggleWaiting;
        this._apiService.patch("/administracion/proveedorses/"+proveedor.id, {active : !proveedor.active}).subscribe(
            ( response : IProveedor ) => {
                this.proveedor.active = response.active;
                this.toggleWaiting = !this.toggleWaiting;
            }
        );
    }
}
