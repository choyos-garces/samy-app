import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {ProveedorListaComponent} from "./proveedor-lista/proveedor-lista.component";
import {ProveedorNuevoComponent} from "./proveedor-nuevo/proveedor-nuevo.component";
import {ProveedorVerComponent} from "./proveedor-ver/proveedor-ver.component";
import {ProveedorEditarComponent} from "./proveedor-editar/proveedor-editar.component";

const routes : Routes = [
    { path : "" , redirectTo : "list", pathMatch : "full" },
    { path : "list" , component: ProveedorListaComponent},
    { path : "add", component : ProveedorNuevoComponent },
    { path : "view/:id", component : ProveedorVerComponent },
    { path : "edit/:id", component : ProveedorEditarComponent }
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class ProveedoresRoutingModule {}