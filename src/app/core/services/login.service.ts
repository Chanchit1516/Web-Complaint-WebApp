import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '@env';
import { LOGIN_RESPONSE_TYPE } from '@core/models/response-message';
import { Router } from '@angular/router';
import { LocalStorage } from '@core/services/local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private host: string = environment.host;
    private api = environment.api;

    constructor(
        private http: HttpClient,
        private router: Router,
        private localStorage: LocalStorage,
    ) {
    }

    public loginBypass(): Observable<any> {
        let url = `${this.host}${this.api.account.get.authenticateBypass}`;

        return this.http.get(url).pipe(
            tap((response) => {
                return response as LOGIN_RESPONSE_TYPE;
            })
        );
    }

    public loginWithAD(token: string): Observable<any> {
        let url = `${this.host}${this.api.account.get.authenticate}`;

        return this.http.get(url, {
            params: {
                token
            }
        }).pipe(
            tap((response) => {
                return response as LOGIN_RESPONSE_TYPE;
            })
        );
    }

    public logout(): void {
        this.localStorage.clearItems();
        this.router.navigateByUrl('login');
      }
}