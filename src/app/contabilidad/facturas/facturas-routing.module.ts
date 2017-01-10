import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FacturaNuevaComponent} from "./factura-nueva/factura-nueva.component";

const routes : Routes = [
    { path : "" , redirectTo : "add", pathMatch : "full" },
    { path : "add", component : FacturaNuevaComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FacturasRoutingModule {}