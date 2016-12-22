import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../../shared/services/dashboard.service";

@Component({
    selector: 'app-personal',
    template: '<router-outlet></router-outlet>'
})
export class PersonalComponent implements OnInit {

    constructor(private headerService :  DashboardService)
    {

    }

    ngOnInit() : void
    {
        const base_uri = "administracion/personal/";
        this.headerService.setHeader("administracion", "Personal", [
            { uri: base_uri + "list", icono : "fa-list"},
            { uri: base_uri + "add", icono : "fa-plus"}
        ])
    }
}