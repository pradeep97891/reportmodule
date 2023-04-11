import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class ResponseInterceptor implements HttpInterceptor {
    retry: boolean;
    constructor();
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any>;
}
