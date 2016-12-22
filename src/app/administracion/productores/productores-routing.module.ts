import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {ProductorListaComponent} from "./productor-lista/productor-lista.component";
import {ProductorNuevoComponent} from "./productor-nuevo/productor-nuevo.component";
import {ProductorVerComponent} from "./productor-ver/productor-ver.component";
import {ProductorEditarComponent} from "./productor-editar/productor-editar.component";

const routes : Routes = [
    { path : "" , redirectTo : "list", pathMatch : "full" },
    { path : "list" , component: ProductorListaComponent},
    { path : "add", component : ProductorNuevoComponent },
    { path : "view/:id", component : ProductorVerComponent },
    { path : "edit/:id", component : ProductorEditarComponent }
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class ProductoresRoutingModule {}