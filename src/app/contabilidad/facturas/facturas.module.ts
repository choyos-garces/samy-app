import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FacturasRoutingModule} from "./facturas-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {SamyFormControlsModule} from "../../shared/components/form-controls/form-controls.module";
import {FacturasComponent} from "./facturas.component";
import {FacturaNuevaComponent} from "./factura-nueva/factura-nueva.component";
import {FacturaAgregarItemComponent} from "./factura-nueva/agregar-item/agregar-item.component";
import {DecimalPlacesPipe} from "../../shared/pipes/decimal-places.pipe";

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, FacturasRoutingModule, SamyFormControlsModule ],
    declarations: [
        DecimalPlacesPipe,
        FacturasComponent,
        FacturaAgregarItemComponent,
        FacturaNuevaComponent
    ]
})
export default class FacturasModule {}