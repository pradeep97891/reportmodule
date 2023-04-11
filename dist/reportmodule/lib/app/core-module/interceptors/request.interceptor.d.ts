/*************************************************
 * TS Component Name ----------  Request interceptor
 * Typescript Functions --------- Shailesh R
 * Created date ------------------- DD/MM/YYYY
 * Powered by -------------------- Infiniti software solutions
 *************************************************/
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";
export declare class RequestInterceptor implements HttpInterceptor {
    constructor();
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
