import {Component} from "@angular/core";
import {DashboardService} from "../../shared/services/dashboard.service";

@Component({
    selector : 'app-historial',
    template: `<router-outlet></router-outlet>`
})
export class HistorialComponent
{
    constructor(private headerService :  DashboardService)
    {}

    ngOnInit() : void
    {
        this.headerService.setHeader("inventario", "Historial Inventario", [])
    }
}