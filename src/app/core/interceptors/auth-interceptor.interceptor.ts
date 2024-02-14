import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorage } from "../services/token-storage.service";
import { log } from 'console';

@Injectable()
export class authInterceptorInterceptor implements HttpInterceptor {

  constructor(private tokenStorage: TokenStorage) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token: string = this.tokenStorage.getAccessToken() as string;
    let headers = null;

    if (token != null) headers = new HttpHeaders()
      .append('Authorization', `Bearer ${token}`)
      .append('ngrok-skip-browser-warning', 'true');

    else headers =
      new HttpHeaders()
        .set('ngrok-skip-browser-warning', 'true');

    const authReq: HttpRequest<any> = request.clone({
      headers: headers
    });

    return next.handle(authReq);
  }

}
