import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

import {BodegasRoutingModule} from "./bodegas-routing.module";
import {DocumentSelectModule} from "../../shared/components/documentSelect/documentSelect.module";

import {BodegasComponent} from "./bodegas.component";
import {BodegaListaComponent} from "./bodega-lista/bodega-lista.component";
import {BodegaNuevaComponent} from "./bodega-nueva/bodega-nueva.component";
import {BodegaVerComponent} from './bodega-ver/bodega-ver.component';
import {BodegaEditarComponent} from './bodega-editar/bodega-editar.component';

@NgModule({
    imports : [CommonModule, ReactiveFormsModule, BodegasRoutingModule, DocumentSelectModule],
    declarations : [
        BodegasComponent,
        BodegaListaComponent,
        BodegaNuevaComponent,
        BodegaVerComponent,
        BodegaEditarComponent
    ]
})
export default class BodegasModule {}