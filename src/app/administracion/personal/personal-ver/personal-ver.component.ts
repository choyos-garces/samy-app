import { Component, OnInit } from '@angular/core';
import {IPersonal} from "../../../shared/interfaces/Administracion/IPersonal";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../../shared/services/api.service";

@Component({
    selector: 'app-personal-ver',
    templateUrl: './personal-ver.component.html',
    styleUrls: ['./personal-ver.component.css']
})
export class PersonalVerComponent implements OnInit
{
    personal : IPersonal;
    toggleWaiting : boolean = false;

    constructor( private route : ActivatedRoute,
                 private _apiService : ApiService,
                 public router : Router ) {}

    ngOnInit()
    {
        this.route.params.subscribe( params => {
            let id  = params['id'];
            this._apiService.get("/administracion/personal/" + id).subscribe(
                ( response ) => { this.personal = response }
            )
        })
    }


    toggleActive(personal : IPersonal)
    {
        this.toggleWaiting = !this.toggleWaiting;
        this._apiService.patch("/administracion/personals/"+personal.id, {active : !personal.active}).subscribe(
            ( response : IPersonal ) => {
                this.personal.active = response.active;
                this.toggleWaiting = !this.toggleWaiting;
            }
        );
    }
}
