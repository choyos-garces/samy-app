import {Component, OnInit} from "@angular/core";
import {DashboardService} from "../../shared/services/dashboard.service";

@Component({
    selector : 'home-welcome',
    template: ``
})
export class HomeWelcomeComponent implements OnInit
{
    constructor(private _dashboard : DashboardService)
    {}


    ngOnInit(): void
    {
        this._dashboard.setHeader('Inicio', 'Samy', [])
    }
}