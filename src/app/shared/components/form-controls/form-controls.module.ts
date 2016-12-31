import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {InputTextComponent} from "./input-simple/input-simple.component";
import {ControlErrorPipe} from "./control-error.pipe";
import {InputCollectionComponent} from "./input-collection/input-collection.component";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [ControlErrorPipe, InputTextComponent, InputCollectionComponent],
    exports: [InputTextComponent, InputCollectionComponent]
})
export class FormControlsModule {}