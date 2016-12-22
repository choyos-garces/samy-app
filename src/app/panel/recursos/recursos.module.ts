import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { RecursosRoutingModule } from "./recursos-routing.module";
import { RecursosComponent } from "./recursos.component";
import { RecursoNuevoComponent } from "./recurso-nuevo/recurso-nuevo.component";
import { RecursosListaComponent } from "./recursos-lista/recursos-lista.component";
import { RecursoEditarComponent } from "./recurso-editar/recurso-editar.component";
import { RecursoVerComponent } from "./recurso-ver/recurso-ver.component";
import { CatagoriasItemComponent } from './recurso-editar/catagorias-item/catagorias-item.component';



@NgModule({
    imports : [CommonModule, FormsModule, ReactiveFormsModule, RecursosRoutingModule ],
    declarations : [RecursosComponent, RecursoNuevoComponent, RecursosListaComponent, RecursoEditarComponent, RecursoVerComponent, CatagoriasItemComponent]
})

export default class RecursosModule {}