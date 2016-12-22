import {Component} from "@angular/core";
import {DashboardService} from "../../shared/services/dashboard.service";

@Component({
    selector : 'app-guias-transferencia',
    template : '<router-outlet></router-outlet>'
})
export class GuiasComponent
{
    constructor(private headerService :  DashboardService)
    {

    }

    ngOnInit() : void
    {
        const base_uri = "inventario/guias/";
        this.headerService.setHeader("inventario", "Guias y Documentos", [
            { uri: base_uri + "list", icono : "fa-building-o", title : 'Transferencuas'},
            { uri: base_uri + "remision", icono : "fa-truck", title : 'Guias de Remision'}
        ])
    }
}