import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../../shared/services/dashboard.service";

@Component({
    selector: 'app-bodegas',
    template: '<router-outlet></router-outlet>'
})
export class BodegasComponent implements OnInit {

    constructor(private headerService :  DashboardService)
    {

    }

    ngOnInit() : void
    {
        const base_uri = "administracion/bodegas/";
        this.headerService.setHeader("administracion", "Bodegas", [
            { uri: base_uri + "list", icono : "fa-list"},
            { uri: base_uri + "add", icono : "fa-plus"}
        ])
    }

}
