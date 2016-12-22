import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {MaterialesRoutingModule} from "./materiales-routing.module";

import {MaterialesComponent} from "./materiales.component";
import {MaterialVerComponent} from './material-ver/material-ver.component';
import {MaterialNuevoComponent} from "./material-nuevo/material-nuevo.component";
import {MaterialListaComponent} from "./material-lista/material-lista.component";
import { MaterialEditarComponent } from './material-editar/material-editar.component';

@NgModule({
    imports : [CommonModule, FormsModule, ReactiveFormsModule, MaterialesRoutingModule ],
    declarations : [MaterialesComponent, MaterialListaComponent, MaterialNuevoComponent, MaterialVerComponent, MaterialEditarComponent]
})
export default class MaterialesModule {}