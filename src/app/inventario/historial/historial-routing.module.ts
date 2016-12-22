import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HistorialListaComponent} from "./historial-lista/historial-lista.component";

const routes : Routes = [
    { path : "" , component: HistorialListaComponent },
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class HistorialRoutingModule {}