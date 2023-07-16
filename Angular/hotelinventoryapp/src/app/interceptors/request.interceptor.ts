import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Request Interceptor', request);

    switch (request.method) {
      case 'GET':
        const newRequest = request.clone({
          headers: new HttpHeaders({token: 'get request'})
        });
        return next.handle(newRequest);
        break;
      case 'POST':
        const newRequest1 = request.clone({
          headers: new HttpHeaders({token: 'post request'})
        });
        return next.handle(newRequest1);
        break;
      default:
        break;
    }

    return next.handle(request);
  }
}
