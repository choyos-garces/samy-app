import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {RecursoNuevoComponent} from "./recurso-nuevo/recurso-nuevo.component";
import {RecursosListaComponent} from "./recursos-lista/recursos-lista.component";
import {RecursoEditarComponent} from "./recurso-editar/recurso-editar.component";
import {RecursoVerComponent} from "./recurso-ver/recurso-ver.component";

const routes : Routes = [
    { path : "" , redirectTo : "list", pathMatch : "full" },
    { path : "list" , component: RecursosListaComponent },
    { path : "add", component : RecursoNuevoComponent },
    { path : "edit/:id", component : RecursoEditarComponent },
    { path : "view/:id", component : RecursoVerComponent },
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class RecursosRoutingModule {}