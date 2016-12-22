import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../../shared/services/dashboard.service";

@Component({
    selector: 'app-proveedores',
    template: '<router-outlet></router-outlet>'
})
export class ProveedoresComponent implements OnInit {

    constructor(private headerService :  DashboardService) {}

    ngOnInit() {
        const base_uri = "administracion/proveedores/";
        this.headerService.setHeader("administracion", "Proveedores", [
            { uri: base_uri + "list", icono : "fa-list"},
            { uri: base_uri + "add", icono : "fa-plus"}
        ])
    }
}