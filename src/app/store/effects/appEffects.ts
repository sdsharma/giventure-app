import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Http, Response, Headers } from "@angular/http";
import { newUser, loginUser, resetUser } from "./../../types";
import { AppActions } from "../actions/appActions"

@Injectable()
export class AppEffects {


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

    @Effect() createUser$ = this.action$
        .ofType(AppActions.CREATE_USER)
        .map(toPayload)
        .switchMap(payload => {
            let requestContent = this.prepareRequest(<newUser>payload);
            return <Observable<any>>this._http.post(
                '/users',
                requestContent.content,
                { headers: requestContent.headers }
            )
                .map(this.extractData)
                .catch(this.handleError)
                .switchMap(result => {
                    return Observable.of(<any>{
                        type: AppActions.CREATED_USER,
                        payload: result === undefined ? [] : result
                    });
                });
        });


    @Effect() login$ = this.action$
        .ofType(AppActions.LOGIN)
        .map(toPayload)
        .switchMap(payload => {
            let requestContent = this.prepareRequest(<loginUser>payload);
            return <Observable<any>>this._http.post(
                '/users/login',
                requestContent.content,
                { headers: requestContent.headers }
            )
            .map(this.extractData)
            .catch((err) => {
                return Observable.of(<any>{
                    type: AppActions.LOGIN_FAILED
                });
            })
            .switchMap(result => {
                return Observable.of(<any>{
                    type: AppActions.LOGGED_IN
                });
            });
        });

    @Effect() reset$ = this.action$
        .ofType(AppActions.RESET)
        .map(toPayload)
        .switchMap(payload => {
            let requestContent = this.prepareRequest(<resetUser>payload);
            return this._http.post(
                '/users/resetrequest',
                requestContent.content,
                { headers: requestContent.headers }
            );
        });


    private prepareRequest(payload: any) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let content = JSON.stringify(payload);
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