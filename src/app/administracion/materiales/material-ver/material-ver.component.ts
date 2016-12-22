import { Component, OnInit } from '@angular/core';
import {IMaterial} from "../../../shared/interfaces/Administracion/IMaterial";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../../shared/services/api.service";

@Component({
    selector: 'app-material-ver',
    templateUrl: 'material-ver.component.html'
})
export class MaterialVerComponent implements OnInit {

    material : IMaterial;
    toggleWaiting : boolean = false;

    constructor( private route : ActivatedRoute,
                 private _apiService : ApiService,
                 public router : Router ) {}

    ngOnInit()
    {
        this.route.params.subscribe( params => {
          let id  = params['id'];
          this._apiService.get("/administracion/materiales/" + id).subscribe(
              ( recurso ) => { this.material = recurso }
          )
        })
    }


    toggleActive(material : IMaterial)
    {
        this.toggleWaiting = !this.toggleWaiting;
        this._apiService.patch("/administracion/materiales/"+material.id, {active : !material.active}).subscribe(
            ( recurso : IMaterial ) => {
                this.material.active = recurso.active;
                this.toggleWaiting = !this.toggleWaiting;
            }
        );
    }

}
