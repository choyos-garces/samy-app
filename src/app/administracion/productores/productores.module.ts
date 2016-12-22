import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

import {ProductoresRoutingModule} from "./productores-routing.module";
import {ProductoresComponent} from "./productores.component";

import {ProductorListaComponent} from "./productor-lista/productor-lista.component";
import {ProductorNuevoComponent} from './productor-nuevo/productor-nuevo.component';
import {ProductorEditarComponent} from './productor-editar/productor-editar.component';
import {ProductorVerComponent} from './productor-ver/productor-ver.component';

@NgModule({
    imports : [CommonModule, ReactiveFormsModule, ProductoresRoutingModule],
    declarations : [ProductoresComponent, ProductorListaComponent, ProductorNuevoComponent, ProductorEditarComponent, ProductorVerComponent]
})
export default class ProductoresModule {}