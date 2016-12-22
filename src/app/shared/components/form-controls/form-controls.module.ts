import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {InputTextComponent} from "./input-text/input-text.component";
import {ControlErrorPipe} from "./control-error.pipe";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [ControlErrorPipe, InputTextComponent],
    exports: [InputTextComponent]
})
export class FormControlsModule {}