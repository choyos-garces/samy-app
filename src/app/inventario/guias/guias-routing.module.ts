import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {TransferenciaListaComponent} from "./transferencia-lista/transferencia-lista.component";
import {TransferenciaVerComponent} from "./transferencia-ver/transferencia-ver.component";

const routes : Routes = [
    { path : "" , redirectTo : "list", pathMatch : "full" },
    { path : "list" , component: TransferenciaListaComponent },
    { path : "view/:id", component: TransferenciaVerComponent }
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class GuiasRoutingModule {}