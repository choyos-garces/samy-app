import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

import {ProveedoresRoutingModule} from "./proveedores-routing.module";
import {ProveedoresComponent} from "./proveedores.component";

import {ProveedorListaComponent} from "./proveedor-lista/proveedor-lista.component";
import { ProveedorNuevoComponent } from './proveedor-nuevo/proveedor-nuevo.component';
import { ProveedorEditarComponent } from './proveedor-editar/proveedor-editar.component';
import { ProveedorVerComponent } from './proveedor-ver/proveedor-ver.component';

@NgModule({
    imports : [CommonModule, ReactiveFormsModule, ProveedoresRoutingModule],
    declarations : [ProveedoresComponent, ProveedorListaComponent, ProveedorNuevoComponent, ProveedorEditarComponent, ProveedorVerComponent]
})
export default class ProveedoresModule {}