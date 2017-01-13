import {NgModule} from "@angular/core";

import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

import {SamyFormControlsModule} from "../../shared/components/form-controls/form-controls.module";
import {MovimientosRoutingModule} from "./movimientos-routing.module";

import {MovimientosComponent} from "./movimientos.component";
import {MovimientoListaComponent} from "./movimiento-lista/movimiento-lista.component";
import {MovimientoNuevoComponent} from "./movimiento-nuevo/movimiento-nuevo.component";
import {MovimientoViewComponent} from "./movimiento-view/movimiento-view.component";

import {MovimientoItemComponent} from "./movimiento-nuevo/movimiento-item/movimiento-item.component";
import {MovimientoDetalleComponent} from "./movimiento-nuevo/movimiento-detalle/movimiento-detalle.component";


@NgModule({
    imports : [CommonModule, ReactiveFormsModule, MovimientosRoutingModule, SamyFormControlsModule],
    declarations: [
        MovimientosComponent,
        MovimientoViewComponent,
        MovimientoNuevoComponent,
        MovimientoListaComponent,
        MovimientoItemComponent,
        MovimientoDetalleComponent
    ]
})
export default class MovimientosModule {}