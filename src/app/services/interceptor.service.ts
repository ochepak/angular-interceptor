import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = !req.url.match(/\/public/) ? {'Authorization': 'Bearer ' + Math.random()} : {};
    const newReq = req.clone({
      setHeaders: headers,
      url: environment.API_URL + req.url
    });
    return next.handle(newReq).pipe(
      catchError(err => console.log('Status code: ' + err.status))
    );
  }
}
