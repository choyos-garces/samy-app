import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable()
export class ApiService {

    private baseURL : string;
    private jsonRequestOptions;

    constructor(private http : Http)
    {
        console.log("Servicio API Iniciado");

        let headers = new Headers({ 'Content-Type': 'application/json' });
        this.jsonRequestOptions = new RequestOptions({ headers: headers });
        this.baseURL = environment.url;
    }

    private request(uri : string, method : string, body : any = null, options : RequestOptions = null)
    {
        if(options == null) options = new RequestOptions();
        options.method = method;
        options.body = JSON.stringify(body);

        return this.http.request(this.baseURL + uri, options)
            .map(this.handleResponse)
            .catch(this.handleError);
    }

    private handleResponse( response  : Response) {
        return (response.json()) || {};

    }

    private handleError (error: Response | any) {
        let body = error.json();
        return Observable.throw(body);
    }

    get(uri : string) : Observable<any> { return this.request(uri, "GET") }

    post(uri : string, data : any) { return this.request(uri, "POST", data, this.jsonRequestOptions) }

    put(uri : string, data : any) { return this.request(uri, "PUT", data, this.jsonRequestOptions) }

    patch(uri : string, data : any) { return this.request(uri, "PATCH", data, this.jsonRequestOptions) }

}