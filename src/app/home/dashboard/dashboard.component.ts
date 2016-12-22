import {Component, OnInit} from '@angular/core';
import {IHeader} from "../../shared/interfaces/IHeader";
import {DashboardService} from "../../shared/services/dashboard.service";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit
{
    header : IHeader;
    compania = environment.coname;

    constructor(private _headerService : DashboardService)
    {}

    ngOnInit(): void
    {
        this._headerService.headerChange.subscribe( flag => {
            this.header = this._headerService.getHeader();
        });

        this._headerService.setHeader("loading...", "loading...", []);
    }
}
