import {Component} from "@angular/core";
import {DashboardService} from "../../shared/services/dashboard.service";

@Component({
    selector : 'app-existente',
    template : '<router-outlet></router-outlet>'
})
export class ExistenteComponent {
    constructor(private headerService :  DashboardService)
    {

    }

    ngOnInit() : void
    {
        const base_uri = "inventario/existente/";
        this.headerService.setHeader("inventario", "Inventario en existencia", [
            { uri: [base_uri + "bodegas"], icono : "fa-building-o", title : "Por Bodegas"},
            { uri: [base_uri + "materiales"], icono : "fa-cube", title : "Por Materiales"}
        ])
    }
}