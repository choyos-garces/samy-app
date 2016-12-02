import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {RecursosModule} from "./recursos/recursos.module";

import {PanelControlRoutingModule} from "./panelControl-routing.module";

@NgModule({
    imports : [CommonModule, PanelControlRoutingModule, RecursosModule]
})
export default class PanelControlModule {}