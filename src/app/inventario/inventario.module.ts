import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {InventarioRoutingModule} from "./inventario-routing.module";

import ExistenteModule from "./existente/existente.module";
import MovimientosModule from "./movimientos/movimientos.module";
import GuiasTransferenciaModule from "./guias/guias.module";
import HistorialModule from "./historial/historial.module";

@NgModule({
    imports : [
        CommonModule,
        InventarioRoutingModule,
        ExistenteModule,
        MovimientosModule,
        GuiasTransferenciaModule,
        HistorialModule
    ]
})
export default class InventarioModule {}