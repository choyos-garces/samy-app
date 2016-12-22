import {NgModule} from "@angular/core";

import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

import {GuiasRoutingModule} from "./guias-routing.module";
import {DocumentSelectModule} from "../../shared/components/documentSelect/documentSelect.module";

import {GuiasComponent} from "./guias.component";
import {TransferenciaListaComponent} from "./transferencia-lista/transferencia-lista.component";
import {TransferenciaVerComponent} from "./transferencia-ver/transferencia-ver.component";



@NgModule({
    imports : [CommonModule, ReactiveFormsModule, GuiasRoutingModule, DocumentSelectModule],
    declarations: [
        GuiasComponent,
        TransferenciaListaComponent,
        TransferenciaVerComponent
    ]
})
export default class GuiasModule {}