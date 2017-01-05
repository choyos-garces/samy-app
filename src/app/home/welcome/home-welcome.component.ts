import {Component, OnInit} from "@angular/core";
import {DashboardService} from "../../shared/services/dashboard.service";
import {FormBuilder, Validators} from "@angular/forms";
import {FormValidators} from "../../shared/components/form-controls/form-validators";
import {ApiService} from "../../shared/services/api.service";

@Component({
    selector : 'home-welcome',
    templateUrl: './home-welcome.component.html'
})
export class HomeWelcomeComponent implements OnInit
{
    form : any;
    materiales : any;

    constructor(private _dashboard : DashboardService)
    {}

    ngOnInit(): void
    {
        this._dashboard.setHeader('Inicio', 'Samy', []);
    }
}