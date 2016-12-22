import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecursosComponent} from "./recursos/recursos.component";

const routes : Routes = [
    { path : "" , redirectTo : "recursos", pathMatch : "full" },
    { path : "recursos", component : RecursosComponent, loadChildren: "app/panel/recursos/recursos.module"}
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class PanelRoutingModule {}