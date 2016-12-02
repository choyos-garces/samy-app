import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

import {ContactoComponent} from "./contacto.component";

@NgModule({
    imports : [CommonModule, ReactiveFormsModule],
    declarations : [ContactoComponent],
    exports : [ContactoComponent]
})
export class ContactoModule {}