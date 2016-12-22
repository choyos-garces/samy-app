import {Component} from "@angular/core";
import {DashboardService} from "../../shared/services/dashboard.service";

@Component({
    selector : 'app-movimientos',
    template : '<router-outlet></router-outlet>'
})
export class MovimientosComponent {
    constructor(private headerService :  DashboardService)
    {

    }

    ngOnInit() : void
    {
        const base_uri = "inventario/movimientos/";
        this.headerService.setHeader("inventario", "Ingresos y Egresos", [
            { uri: base_uri + "list", icono : "fa-list"},
            { uri: base_uri + "ingreso", icono : "fa-plus"},
            { uri: base_uri + "egreso", icono : "fa-minus"}
        ])
    }
}