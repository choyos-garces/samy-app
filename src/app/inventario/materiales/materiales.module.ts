import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {MaterialesComponent} from "./materiales.component";
import { ListaMaterialesComponent } from './lista-materiales/lista-materiales.component';
import { NuevoMaterialComponent } from './nuevo-material/nuevo-material.component';
import { SaldoInicialBodegaComponent } from './nuevo-material/saldo-inicial-bodega/saldo-inicial-bodega.component';

@NgModule({
    imports : [CommonModule],
    declarations : [MaterialesComponent, ListaMaterialesComponent, NuevoMaterialComponent, SaldoInicialBodegaComponent],
    exports : [MaterialesComponent]
})
export class MaterialesModule {}