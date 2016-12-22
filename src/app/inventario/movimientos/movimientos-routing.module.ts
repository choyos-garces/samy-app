import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {MovimientoListaComponent} from "./movimiento-lista/movimiento-lista.component";
import {MovimientoNuevoComponent} from "./movimiento-nuevo/movimiento-nuevo.component";
import {MovimientoViewComponent} from "./movimiento-view/movimiento-view.component";


const routes : Routes = [
    { path : "" , redirectTo : "list", pathMatch : "full" },
    { path : "list" , component: MovimientoListaComponent },
    { path : "ingreso", component: MovimientoNuevoComponent },
    { path : "view/:id", component: MovimientoViewComponent }
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class MovimientosRoutingModule {}