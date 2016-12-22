import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {AppRoutingModule} from "./app-routing.module";
import {ShareModule} from "./shared/shared.module";
import {LoginModule} from "./login/login.module";

import {AppComponent } from './app.component';

import {AuthGuard} from "./shared/guard/auth-guard.service";
import {AuthService} from "./shared/guard/auth.service";
import HomeModule from "./home/home.module";

@NgModule({
    imports: [
        BrowserModule, HttpModule,
        LoginModule, AppRoutingModule, ShareModule, HomeModule ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [AuthGuard, AuthService]
})

export default class AppModule {}