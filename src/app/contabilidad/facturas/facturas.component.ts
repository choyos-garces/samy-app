import {Component} from "@angular/core";
import {DashboardService} from "../../shared/services/dashboard.service";

@Component({
    selector: 'app-facturas',
    template : '<router-outlet></router-outlet>'
})
export class FacturasComponent {
    constructor(private _dashboard :  DashboardService)
    {

    }

    ngOnInit() : void
    {
        const base_uri = "contabilidad/facturas/";
        this._dashboard.setHeader("inventario", "Inventario en existencia", [
            { uri: [base_uri + "list"], icono : "fa-list", title : "Lista de Facturas"},
            { uri: [base_uri + "add"], icono : "fa-plus", title : "Ingresar Factura"},
        ])
    }
}