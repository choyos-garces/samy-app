import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

import {PersonalListaComponent} from "./personal-lista/personal-lista.component";
import {PersonalRoutingModule} from "./personal-routing.module";
import {PersonalComponent} from "./personal.component";
import { PersonalNuevoComponent } from './personal-nuevo/personal-nuevo.component';
import { PersonalEditarComponent } from './personal-editar/personal-editar.component';
import { PersonalVerComponent } from './personal-ver/personal-ver.component';

@NgModule({
    imports : [CommonModule, ReactiveFormsModule, PersonalRoutingModule],
    declarations : [PersonalComponent, PersonalListaComponent, PersonalNuevoComponent, PersonalEditarComponent, PersonalVerComponent]
})
export default class PersonalModule {}