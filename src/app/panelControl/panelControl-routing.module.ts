import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {RecursosComponent} from "./recursos/recursos.component";

const routes : Routes = [
    { path : "" , redirectTo : "recursos", pathMatch : "full"},
    { path : "recursos", component : RecursosComponent },
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class PanelControlRoutingModule {}