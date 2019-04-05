import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HTTP_INTERCEPTORS } from '@Angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(error => {
                if (error instanceof HttpErrorResponse) {   // This deals with all the errors we get
                    if (error.status === 401) {
                        return throwError(error.statusText);
                    // if there is a 401 error, tell the user that there is a 401 error (which is unauthorised)
                    }
                    const applicationError = error.headers.get('Application-Error');
                    if (applicationError) {
                        console.error(applicationError);
                        return throwError(applicationError);
                    // if there is an Application-Error it will show it in the console
                    }
                    const serverError = error.error;
                    let modalStateErrors = '';
                    if (serverError && typeof serverError === 'object') {
                        for (const key in serverError) {
                            if (serverError[key]) {
                                modalStateErrors += serverError[key] + '\n';
                            }
                        }
                    // if there is a modal state error it will say that there is
                    // e.g. a modal state error is if the user hasn't put in the right information to log in
                    // or they haven't put the correct information in to register an account
                    }
                    return throwError(modalStateErrors || serverError || 'Server Error');
                    // What comes up when its not a modalStateError or a serverError.
                }
            })
        );
    }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};
// this tells the code to actually do what is said above.
