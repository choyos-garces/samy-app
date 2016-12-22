import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {HomeRoutingModule} from "./home-routing.module";

import {HomeComponent} from "./home.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {FormControlsModule} from "../shared/components/form-controls/form-controls.module";
import {HomeWelcomeComponent} from "./welcome/home-welcome.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [CommonModule, HomeRoutingModule, FormControlsModule, ReactiveFormsModule],
    declarations: [HomeComponent, NavigationComponent, DashboardComponent, HomeWelcomeComponent]
})
export default class HomeModule {}