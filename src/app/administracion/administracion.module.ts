import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {AdministracionRoutingnModule} from "./administracion-routing.module";
import PersonalModule from "./personal/personal.module";
import ProveedoresModule from "./proveedores/proveedores.module";
import ProductoresModule from "./productores/productores.module";
import MaterialesModule from "./materiales/materiales.module";
import BodegasModule from "./bodegas/bodegas.module";

@NgModule({
    imports : [CommonModule, AdministracionRoutingnModule, PersonalModule, ProveedoresModule, ProductoresModule, MaterialesModule, BodegasModule]
})
export default class AdministracionModule {}