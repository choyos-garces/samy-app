import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {MaterialListaComponent} from "./material-lista/material-lista.component";
import {MaterialNuevoComponent} from "./material-nuevo/material-nuevo.component";
import {MaterialVerComponent} from "./material-ver/material-ver.component";
import {MaterialEditarComponent} from "./material-editar/material-editar.component";

const routes : Routes = [
    { path : "" , redirectTo : "list", pathMatch : "full" },
    { path : "list" , component: MaterialListaComponent},
    { path : "add", component : MaterialNuevoComponent },
    { path : "view/:id", component : MaterialVerComponent },
    { path : "edit/:id", component : MaterialEditarComponent }
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class MaterialesRoutingModule {}