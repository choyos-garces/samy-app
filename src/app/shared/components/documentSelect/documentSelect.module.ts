import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

import {DocumentSelectComponent} from "./documentSelect.component";


@NgModule({
    imports : [CommonModule, ReactiveFormsModule],
    declarations : [DocumentSelectComponent],
    exports : [DocumentSelectComponent]
})
export class DocumentSelectModule {}