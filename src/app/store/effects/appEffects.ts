import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Http, Response, Headers } from "@angular/http";
import { Users } from "./../../types";
import { AppActions } from "../actions/appActions"

@Injectable()
export class appEffects {


    constructor(private action$: Actions, private _http: Http) {
    }

    @Effect() getUsers$ = this.action$
        .ofType(AppActions.GET_USERS)
        .map(toPayload)
        .switchMap(payload => {
            let requestURL = this.prepareGetRequestParams('/users', payload);
            return <Observable<any>>this._http.get(requestURL)
                .map(this.extractData)
                .catch(this.handleError)
                .switchMap(result => {
                    return Observable.of(<any>{
                        type: AppActions.RECIEVED_USERS,
                        payload: result === undefined ? [] : result
                    });
                });
        });

    @Effect() getUser$ = this.action$
        .ofType(AppActions.GET_USER)
        .map(toPayload)
        .switchMap(payload => {
            let requestURL = '/users/{$payload.id}';
            return <Observable<any>>this._http.get(requestURL)
                .map(this.extractData)
                .catch(this.handleError)
                .switchMap(result => {
                    return Observable.of(<any>{
                        type: AppActions.RECIEVED_USER,
                        payload: result === undefined ? [] : result
                    });
                });
        });


    private prepareRequest(payload: any[]) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let content = JSON.stringify({
            params: payload
        });
        return {
            headers: headers,
            content: content
        };
    }

    private prepareGetRequestParams(url: string, payload: any[]) {
        let keys = Object.keys(payload);
        let params = "?";
        keys.forEach(key => {
            params += key + "=" + payload[key] + "&";
        });
        if(params == "?"){
            return url;
        }
        return url + params.slice(0,-1);
    }

    private extractData(resp: Response): any {
        let body = resp.json();
        return body.result || null;
    }

    private handleError(error: Response | any): any {
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