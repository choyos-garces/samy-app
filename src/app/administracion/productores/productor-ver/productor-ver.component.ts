import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IProductor} from "../../../shared/interfaces/Administracion/IProductor";
import {ApiService} from "../../../shared/services/api.service";

@Component({
    selector: 'app-productor-ver',
    templateUrl: './productor-ver.component.html',
    styleUrls: ['./productor-ver.component.css']
})
export class ProductorVerComponent implements OnInit
{
    productor : IProductor;
    toggleWaiting : boolean = false;

    constructor( private route : ActivatedRoute,
                 private _apiService : ApiService,
                 public router : Router ) {}

    ngOnInit()
    {
        this.route.params.subscribe( params => {
            let id  = params['id'];
            this._apiService.get("/administracion/productores/" + id).subscribe(
                ( response ) => { this.productor = response }
            )
        })
    }


    toggleActive(productor : IProductor)
    {
        this.toggleWaiting = !this.toggleWaiting;
        this._apiService.patch("/administracion/productores/"+productor.id, {active : !productor.active}).subscribe(
            ( response : IProductor ) => {
                this.productor.active = response.active;
                this.toggleWaiting = !this.toggleWaiting;
            }
        );
    }
}
