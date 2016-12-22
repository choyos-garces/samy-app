import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../../shared/services/dashboard.service";

@Component({
    selector: 'app-prductores',
    template: '<router-outlet></router-outlet>'
})
export class ProductoresComponent implements OnInit {

    constructor(private headerService :  DashboardService) {}

    ngOnInit() {
        const base_uri = "administracion/productores/";
        this.headerService.setHeader("administracion", "Productores", [
            { uri: base_uri + "list", icono : "fa-list"},
            { uri: base_uri + "add", icono : "fa-plus"}
        ])
    }
}