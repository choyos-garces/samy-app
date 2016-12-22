import { Component, OnInit } from '@angular/core';
import {FormController} from "../shared/FormController";
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../shared/guard/auth.service";
import {Router, NavigationExtras} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent extends FormController implements OnInit {

    constructor(formBuilder : FormBuilder, public authService : AuthService, public router : Router) {
        super(formBuilder);
    }

    ngOnInit() {
        this.addControl('_username', null, Validators.required);
        this.addControl('_password', null, Validators.required);

        this.form.valueChanges.subscribe( value => {
            if(this.form.valid && this.isFormDisabled() ) this.toggleForm();
        })
    }

    submit() {
        this.authService.login(this.form.value).subscribe(() => {
            if(this.authService.isLoggedIn) {
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '';

                let navigationExtras : NavigationExtras = {
                    preserveQueryParams : true,
                    preserveFragment : true
                };

                //this.router.navigate([redirect], navigationExtras)
            }
        });
    }
}
