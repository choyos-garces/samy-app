import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {AuthGuard} from "../shared/guard/auth-guard.service";

import {HomeComponent} from "./home.component";
import {HomeWelcomeComponent} from "./welcome/home-welcome.component";

const routes : Routes = [
    {
        path : "home" ,
        component : HomeComponent,
        //canActivateChild: [AuthGuard],
        children : [
            { path : "", component: HomeWelcomeComponent },
            { path : "panel", loadChildren: "app/panel/panel.module" },
            { path : "administracion", loadChildren: "app/administracion/administracion.module" },
            { path : "inventario", loadChildren: "app/inventario/inventario.module" },
            { path : "contabilidad", loadChildren: "app/contabilidad/contabilidad.module" }
        ]

    }
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class HomeRoutingModule {}