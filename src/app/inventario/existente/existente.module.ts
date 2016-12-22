import {NgModule} from "@angular/core";

import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {ExistenteRoutingModule} from "./existente-rounting.module";

import {ExistenteComponent} from "./existente.component";
import {ExistenteBodegasComponent} from "./existente-bodegas/existente-bodegas.component";
import {ExistenteMaterialesComponent} from "./existente-materiales/existente-materiales.component";

@NgModule({
    imports : [CommonModule, ReactiveFormsModule, ExistenteRoutingModule],
    declarations: [ExistenteComponent, ExistenteBodegasComponent, ExistenteMaterialesComponent]
})
export default class ExistenteModule {}