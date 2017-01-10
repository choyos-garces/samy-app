import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FacturasComponent} from "./facturas/facturas.component";

const routes : Routes = [
    { path : "" , redirectTo : "facturas", pathMatch : "full" },
    { path : "facturas", component : FacturasComponent, loadChildren: "app/contabilidad/facturas/facturas.module"},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContabilidadRoutingModule {}