import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BodegaNuevaComponent} from "./bodega-nueva/bodega-nueva.component";
import {BodegaListaComponent} from "./bodega-lista/bodega-lista.component";
import {BodegaVerComponent} from "./bodega-ver/bodega-ver.component";
import {BodegaEditarComponent} from "./bodega-editar/bodega-editar.component";

const routes : Routes = [
    { path : "" , redirectTo : "list", pathMatch : "full" },
    { path : "list" , component: BodegaListaComponent},
    { path : "add", component : BodegaNuevaComponent },
    { path : "view/:id", component : BodegaVerComponent },
    { path : "edit/:id", component : BodegaEditarComponent }
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class BodegasRoutingModule {}