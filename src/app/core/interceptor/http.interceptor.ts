import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpEvent,
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LocalStorage } from '@core/services/local-storage.service';
import { LOCAL_STORAGE_KEYS } from '@core/constants/local-storage.constant';
import { LoginService } from '@core/services/login.service';
import Swal from 'sweetalert2';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
    constructor(
        private localStorage: LocalStorage,
        private loginService: LoginService
    ) {
    }

    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let authorization: string = this.localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);

        authorization = `Bearer ${authorization}`;

        return next.handle(httpRequest.clone({ setHeaders: { authorization } }))
            .pipe(
                tap((event) => {
                    if (event instanceof HttpResponse) {
                        if (!event.body.isSuccess) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Error',
                                text: event.body?.error,
                              })
                            // this.snackbarService.showSnackbar(event.body?.error || 'error has occurred', 'bg-danger', 10000);
                        }

                        // this.loadingService.hide();
                    }
                }),
                catchError((error: HttpErrorResponse) => {
                    // console.log(error);
                    // this.loadingService.hide();
                    if(error.status === 401){
                        this.loginService.logout();
                    }else{
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: error.error?.title || error.message,
                          })
                        // this.snackbarService.showSnackbar(error.error?.title || error.message, 'bg-danger', 10000);
                    }
                    return throwError(error);
                })
            )
    }
}