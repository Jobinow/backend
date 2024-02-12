import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenStorage} from "../services/token-storage.service";

@Injectable()
export class authInterceptorInterceptor implements HttpInterceptor {

  constructor(private tokenStorage: TokenStorage) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string | null = this.tokenStorage.getAccessToken()
    const headers = new HttpHeaders().set('ngrok-skip-browser-warning', 'true');

    if (token != null) headers.append('Authorization', `Bearer ${token}`);

    const authReq: HttpRequest<any> = request.clone({
      headers
    });

    return next.handle(authReq);
  }

}
