import {NgModule} from "@angular/core";

import {DashboardService} from "./services/dashboard.service";
import {ApiService} from "./services/api.service";

@NgModule({
    providers : [DashboardService, ApiService],
})
export class ShareModule {}