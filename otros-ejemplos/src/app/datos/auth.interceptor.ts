import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokenAuth = '312836178236812'; //localStorage.getItem('token')
    const newHeaders = request.headers.set('Authorization', tokenAuth);
    const cloneReq = request.clone({headers: newHeaders});
    return next.handle(cloneReq).pipe(
      map(resp => {
        console.log(resp)
        return resp;
      })
    )
  }
}
