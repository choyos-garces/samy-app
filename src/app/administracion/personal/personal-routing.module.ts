import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {PersonalListaComponent} from "./personal-lista/personal-lista.component";
import {PersonalNuevoComponent} from "./personal-nuevo/personal-nuevo.component";
import {PersonalVerComponent} from "./personal-ver/personal-ver.component";
import {PersonalEditarComponent} from "./personal-editar/personal-editar.component";

const routes : Routes = [
    { path : "" , redirectTo : "list", pathMatch : "full" },
    { path : "list" , component: PersonalListaComponent},
    { path : "add", component : PersonalNuevoComponent },
    { path : "view/:id", component : PersonalVerComponent },
    { path : "edit/:id", component : PersonalEditarComponent }
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class PersonalRoutingModule {}