import { __decorate } from "tslib";
/*************************************************
 * TS Component Name ----------  Response interceptor
 * Typescript Functions --------- Shailesh R
 * Created date ------------------- DD/MM/YYYY
 * Powered by -------------------- Infiniti software solutions
 *************************************************/
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
let ResponseInterceptor = class ResponseInterceptor {
    constructor() {
        this.retry = false;
    }
    // tslint:disable-next-line: no-any
    intercept(request, next) {
        return next.handle(request).pipe(map((event) => {
            if (event.type !== 0 && event.status === 200) {
                let response = {};
                if (event.body.size == undefined && typeof event.body == 'string') {
                    response = JSON.parse(CryptoJS.AES.decrypt(event.body.replace(/^"(.*)"$/, '$1'), CryptoJS.enc.Base64.parse(environment.decryptionKey), { mode: CryptoJS.mode.ECB }).toString(CryptoJS.enc.Utf8));
                }
                else {
                    response = event.body;
                }
                event = event.clone({
                    body: response,
                });
            }
            return event;
        }), catchError((error) => {
            let data = {};
            data = {
                reason: error && error.error.reason ? error.error.reason : '',
                status: error.error,
            };
            return throwError(data);
        }));
    }
};
ResponseInterceptor = __decorate([
    Injectable()
], ResponseInterceptor);
export { ResponseInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UuaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9yZXBvcnRtb2R1bGUvIiwic291cmNlcyI6WyJsaWIvYXBwL2NvcmUtbW9kdWxlL2ludGVyY2VwdG9ycy9yZXNwb25zZS5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O21EQUttRDtBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzNDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFHaEUsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFFOUI7UUFETyxVQUFLLEdBQVksS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNoQixtQ0FBbUM7SUFDNUIsU0FBUyxDQUNkLE9BQXlCLEVBQ3pCLElBQWlCO1FBRWpCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQzlCLEdBQUcsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ2pCLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQzVDLElBQUksUUFBUSxHQUFXLEVBQUUsQ0FBQztnQkFDMUIsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxTQUFTLElBQUksT0FBTyxLQUFLLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBRTtvQkFDakUsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQ25CLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUNsQixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEVBQ3BDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEVBQ3BELEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQzVCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQzlCLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7aUJBQ3ZCO2dCQUNELEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO29CQUNsQixJQUFJLEVBQUUsUUFBUTtpQkFDZixDQUFDLENBQUM7YUFDSjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLENBQUMsS0FBd0IsRUFBRSxFQUFFO1lBQ3RDLElBQUksSUFBSSxHQUFXLEVBQUUsQ0FBQztZQUN0QixJQUFJLEdBQUc7Z0JBQ0wsTUFBTSxFQUFFLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzdELE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSzthQUNwQixDQUFDO1lBQ0YsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBdkNZLG1CQUFtQjtJQUQvQixVQUFVLEVBQUU7R0FDQSxtQkFBbUIsQ0F1Qy9CO1NBdkNZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIFRTIENvbXBvbmVudCBOYW1lIC0tLS0tLS0tLS0gIFJlc3BvbnNlIGludGVyY2VwdG9yXHJcbiAqIFR5cGVzY3JpcHQgRnVuY3Rpb25zIC0tLS0tLS0tLSBTaGFpbGVzaCBSXHJcbiAqIENyZWF0ZWQgZGF0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tIEREL01NL1lZWVlcclxuICogUG93ZXJlZCBieSAtLS0tLS0tLS0tLS0tLS0tLS0tLSBJbmZpbml0aSBzb2Z0d2FyZSBzb2x1dGlvbnNcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBIdHRwUmVxdWVzdCxcclxuICBIdHRwSGFuZGxlcixcclxuICBIdHRwSW50ZXJjZXB0b3IsXHJcbiAgSHR0cEVycm9yUmVzcG9uc2UsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xyXG5kZWNsYXJlIGxldCBDcnlwdG9KUzogYW55O1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSZXNwb25zZUludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuICBwdWJsaWMgcmV0cnk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnlcclxuICBwdWJsaWMgaW50ZXJjZXB0KFxyXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcclxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KS5waXBlKFxyXG4gICAgICBtYXAoKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQudHlwZSAhPT0gMCAmJiBldmVudC5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgbGV0IHJlc3BvbnNlOiBvYmplY3QgPSB7fTtcclxuICAgICAgICAgIGlmIChldmVudC5ib2R5LnNpemUgPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBldmVudC5ib2R5ID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShcclxuICAgICAgICAgICAgICBDcnlwdG9KUy5BRVMuZGVjcnlwdChcclxuICAgICAgICAgICAgICAgIGV2ZW50LmJvZHkucmVwbGFjZSgvXlwiKC4qKVwiJC8sICckMScpLFxyXG4gICAgICAgICAgICAgICAgQ3J5cHRvSlMuZW5jLkJhc2U2NC5wYXJzZShlbnZpcm9ubWVudC5kZWNyeXB0aW9uS2V5KSxcclxuICAgICAgICAgICAgICAgIHsgbW9kZTogQ3J5cHRvSlMubW9kZS5FQ0IgfVxyXG4gICAgICAgICAgICAgICkudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IGV2ZW50LmJvZHk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBldmVudCA9IGV2ZW50LmNsb25lKHtcclxuICAgICAgICAgICAgYm9keTogcmVzcG9uc2UsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV2ZW50O1xyXG4gICAgICB9KSxcclxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgbGV0IGRhdGE6IG9iamVjdCA9IHt9O1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICByZWFzb246IGVycm9yICYmIGVycm9yLmVycm9yLnJlYXNvbiA/IGVycm9yLmVycm9yLnJlYXNvbiA6ICcnLFxyXG4gICAgICAgICAgc3RhdHVzOiBlcnJvci5lcnJvcixcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19