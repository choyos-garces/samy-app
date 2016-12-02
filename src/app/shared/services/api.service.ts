import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {error} from "util";

@Injectable()
export class ApiService {

    baseURL : string;

    constructor(private http : Http) {
        this.baseURL = "http://localhost/samy/app_dev.php";
    }

    get(uri : string) : Observable<any> {
        return this.http.get(this.baseURL + uri)
            .map( (response : Response ) => {
                return (response.json()) || {}
            })
            .catch( (error : Response | any) => {
                return this.handleError(error);
            });
    }

    post(uri : string, data : any) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.baseURL + uri, data, options)
            .map( (response : Response ) => {
                return (response.json()) || {}
            })
            .catch( (error : Response | any) => {
                return this.handleError(error);
            });
    }

    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            errMsg = `${body.status} - ${body.detail || ''}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}