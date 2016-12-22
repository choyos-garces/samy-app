import { Component, OnInit } from '@angular/core';
import {IBodega} from "../../../shared/interfaces/Administracion/IBodega";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../../shared/services/api.service";

@Component({
    selector: 'app-bodega-ver',
    templateUrl: './bodega-ver.component.html'
})
export class BodegaVerComponent implements OnInit
{
    bodega : IBodega;
    toggleWaiting : boolean = false;

    constructor( private route : ActivatedRoute,
                 private _apiService : ApiService,
                 public router : Router )
    {}

    ngOnInit()
    {
        this.route.params.subscribe( params => {
            let id  = params['id'];
            this._apiService.get("/administracion/bodegas/" + id).subscribe(
                ( response ) => { this.bodega = response }
            )
        })
    }


    toggleActive(bodega : IBodega)
    {
        this.toggleWaiting = !this.toggleWaiting;
        this._apiService.patch("/administracion/bodegas/"+bodega.id, {active : !bodega.active}).subscribe(
            ( response : IBodega ) => {
                this.bodega.active = response.active;
                this.toggleWaiting = !this.toggleWaiting;
            }
        );
    }
}
