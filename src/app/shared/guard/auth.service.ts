import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class AuthService {
    isLoggedIn : boolean = false;
    redirectUrl : string;

    constructor(private http : Http) {
        console.log("Servicio AuthService Iniciado");
    }

    login(credencials : { user : string, password : string }) : Observable<boolean> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let a = this.http.post(environment.url + "auth/" , credencials, options)
            .map(this.extractData)
            .catch(this.handleError);

        a.subscribe( data => console.log(data));
        return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true)
    }

    logout() : void {
        this.isLoggedIn = false;
    }

    private extractData(res : Response) {
        let body = res.json();
        return body || {};
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}