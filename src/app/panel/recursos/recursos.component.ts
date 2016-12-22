import {Component, OnInit} from '@angular/core';
import {DashboardService} from "../../shared/services/dashboard.service";

@Component({
    selector: 'app-panel-recursos',
    template: '<router-outlet></router-outlet>'
})
export class RecursosComponent implements OnInit {

    constructor(private _dashboardService : DashboardService) { }

    ngOnInit() {
        const base_uri = "panel/recursos/";
        this._dashboardService.setHeader("Panel de Control", "Datos y Recursos", [
            { uri: base_uri + "list", icono : "fa-list"},
            { uri: base_uri + "add", icono : "fa-plus"}
        ]);
    }
}