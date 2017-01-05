import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {InputSimpleComponent} from "./input-simple/input-simple.component";
import {ControlErrorPipe} from "./control-error.pipe";
import {InputCollectionComponent} from "./input-collection/input-collection.component";
import {InputTextareaComponent} from "./input-textarea/input-textarea.component";
import {InputCheckboxComponent} from "./input-checkbox/input-checkbox.component";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [ControlErrorPipe, InputSimpleComponent, InputCollectionComponent, InputTextareaComponent, InputCheckboxComponent],
    exports: [InputSimpleComponent, InputCollectionComponent, InputTextareaComponent, InputCheckboxComponent]
})
export class SamyFormControlsModule {}