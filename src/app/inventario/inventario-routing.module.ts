import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ExistenteComponent} from "./existente/existente.component";
import {MovimientosComponent} from "./movimientos/movimientos.component";
import {GuiasComponent} from "./guias/guias.component";
import {HistorialComponent} from "./historial/historial.component";

const routes : Routes = [
    { path : "" , redirectTo : "existente", pathMatch : "full"},
    { path : "existente", component : ExistenteComponent, loadChildren: "app/inventario/existente/existente.module"},
    { path : "movimientos", component : MovimientosComponent, loadChildren: "app/inventario/movimientos/movimientos.module"},
    { path : "guias", component : GuiasComponent, loadChildren: "app/inventario/guias/guias.module"},
    { path : "historial", component: HistorialComponent, loadChildren: "app/inventario/historial/historial.module"}
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class InventarioRoutingModule {}