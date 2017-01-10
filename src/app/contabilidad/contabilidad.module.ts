import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {ContabilidadRoutingModule} from "./contabilidad-routing.module";
import FacturasModule from "./facturas/facturas.module";

@NgModule({
    imports: [CommonModule, ContabilidadRoutingModule, FacturasModule],
})
export default class ContabilidadModule {}