import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

import {HistorialRoutingModule} from "./historial-routing.module";

import {HistorialComponent} from "./historial.component";
import {HistorialListaComponent} from "./historial-lista/historial-lista.component";

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, HistorialRoutingModule],
    declarations: [
        HistorialComponent,
        HistorialListaComponent
    ]
})
export default class HistorialModule {}