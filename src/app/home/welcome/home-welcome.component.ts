import {Component, OnInit} from "@angular/core";
import {DashboardService} from "../../shared/services/dashboard.service";
import {FormBuilder, Validators} from "@angular/forms";
import {FormValidators} from "../../shared/components/form-controls/form-validators";
import {ApiService} from "../../shared/services/api.service";
import {IMaterial} from "../../shared/interfaces/Administracion/IMaterial";
import {IInputBaseOptions} from "../../shared/components/form-controls/IInputBaseOptions";

@Component({
    selector : 'home-welcome',
    templateUrl: './home-welcome.component.html'
})
export class HomeWelcomeComponent implements OnInit
{
    form : any;
    materiales : IMaterial[];
    inputMateriales : IInputBaseOptions;

    constructor(private _dashboard : DashboardService, private formBuilder : FormBuilder, private api : ApiService)
    {
    }


    ngOnInit(): void
    {
        this.form = this.formBuilder.group({
            test : [31321, FormValidators.notNullorEmpty],
            test2 : [null, Validators.compose([FormValidators.notNullorEmpty, FormValidators.notNumber])]
        });

        this.inputMateriales = {
            name : 'col-test',
            label : 'Collection Test',
            control : this.form.controls['test']
        };

        this.api.get('/administracion/materiales').subscribe( res => this.materiales = res.materiales );

        this._dashboard.setHeader('Inicio', 'Samy', []);
    }
}