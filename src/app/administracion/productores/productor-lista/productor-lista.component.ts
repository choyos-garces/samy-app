import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {IProductor} from "../../../shared/interfaces/Administracion/IProductor";

@Component({
    selector: 'app-productor-lista',
    templateUrl: './productor-lista.component.html',
})
export class ProductorListaComponent implements OnInit
{
    productores : IProductor[];

    constructor(private _apiService : ApiService) {}

    ngOnInit()
    {
        this._apiService.get("/administracion/productores").subscribe( data => {
            if('productores' in data) this.productores = data.productores
        });
    }

    toggleActive(productor : IProductor, index : number)
    {
        this._apiService.patch("/administracion/productores/"+productor.id, {active : !productor.active }).subscribe(
            ( response : IProductor ) => {
                this.productores[index].active = response.active;
            }
        );
    }
}