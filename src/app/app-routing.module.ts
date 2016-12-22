import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes : Routes = [
    { path : "", redirectTo: "home", pathMatch : 'full' },
    { path : "home", loadChildren : "app/home/home.module" }
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule {}