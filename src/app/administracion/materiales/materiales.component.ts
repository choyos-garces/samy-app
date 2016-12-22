import {Component, OnInit} from '@angular/core';
import {DashboardService} from "../../shared/services/dashboard.service";

@Component({
    selector: 'app-materiales',
    template: '<router-outlet></router-outlet>'
})
export class MaterialesComponent implements OnInit {

    constructor(private _dashboardService : DashboardService) { }

    ngOnInit() {
        const base_uri = "administracion/materiales/";
        this._dashboardService.setHeader("Administracion", "Materiales", [
            { uri: base_uri + "list", icono : "fa-list"},
            { uri: base_uri + "add", icono : "fa-plus"}
        ]);
    }

}