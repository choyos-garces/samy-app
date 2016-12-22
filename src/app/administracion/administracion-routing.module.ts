import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {PersonalComponent} from "./personal/personal.component";
import {ProductoresComponent} from "./productores/productores.component";
import {ProveedoresComponent} from "./proveedores/proveedores.component";
import {BodegasComponent} from "./bodegas/bodegas.component";
import {MaterialesComponent} from "./materiales/materiales.component";

const routes : Routes = [
    { path : "" , redirectTo : "personal", pathMatch : "full"},
    { path : "personal", component : PersonalComponent, loadChildren: "app/administracion/personal/personal.module"},
    { path : "proveedores", component : ProveedoresComponent, loadChildren: "app/administracion/proveedores/proveedores.module"},
    { path : "productores", component : ProductoresComponent, loadChildren: "app/administracion/productores/productores.module"},
    { path : "materiales", component : MaterialesComponent, loadChildren: "app/administracion/materiales/materiales.module"},
    { path : "bodegas", component : BodegasComponent, loadChildren: "app/administracion/bodegas/bodegas.module" }
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class AdministracionRoutingnModule {}