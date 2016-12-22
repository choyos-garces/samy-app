import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {PanelRoutingModule} from "./panel-routing.module";
import RecursosModule from "./recursos/recursos.module";

@NgModule({
    imports : [CommonModule, PanelRoutingModule, RecursosModule]
})
export default class PanelModule {}