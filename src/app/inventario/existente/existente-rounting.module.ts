import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ExistenteBodegasComponent} from "./existente-bodegas/existente-bodegas.component";
import {ExistenteMaterialesComponent} from "./existente-materiales/existente-materiales.component";

const routes : Routes = [
    { path : "" , redirectTo : "bodegas", pathMatch : "full" },
    { path : "bodegas" , component: ExistenteBodegasComponent },
    { path : "materiales", component: ExistenteMaterialesComponent }
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class ExistenteRoutingModule {}