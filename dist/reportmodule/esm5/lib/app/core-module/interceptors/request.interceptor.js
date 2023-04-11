import { __decorate } from "tslib";
/*************************************************
 * TS Component Name ----------  Request interceptor
 * Typescript Functions --------- Shailesh R
 * Created date ------------------- DD/MM/YYYY
 * Powered by -------------------- Infiniti software solutions
 *************************************************/
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
var RequestInterceptor = /** @class */ (function () {
    function RequestInterceptor() {
    }
    RequestInterceptor.prototype.intercept = function (request, next) {
        request = request.clone({
            body: request.body,
        });
        return next.handle(request);
    };
    RequestInterceptor.ɵprov = i0.ɵɵdefineInjectable({ factory: function RequestInterceptor_Factory() { return new RequestInterceptor(); }, token: RequestInterceptor, providedIn: "root" });
    RequestInterceptor = __decorate([
        Injectable({
            providedIn: "root",
        })
    ], RequestInterceptor);
    return RequestInterceptor;
}());
export { RequestInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3JlcG9ydG1vZHVsZS8iLCJzb3VyY2VzIjpbImxpYi9hcHAvY29yZS1tb2R1bGUvaW50ZXJjZXB0b3JzL3JlcXVlc3QuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OzttREFLbUQ7QUFFbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFhM0M7SUFDRTtJQUFnQixDQUFDO0lBRVYsc0NBQVMsR0FBaEIsVUFDRSxPQUF5QixFQUN6QixJQUFpQjtRQUVqQixPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUN0QixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7U0FDbkIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O0lBWFUsa0JBQWtCO1FBSjlCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FFVyxrQkFBa0IsQ0FhOUI7NkJBakNEO0NBaUNDLEFBYkQsSUFhQztTQWJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIFRTIENvbXBvbmVudCBOYW1lIC0tLS0tLS0tLS0gIFJlcXVlc3QgaW50ZXJjZXB0b3JcclxuICogVHlwZXNjcmlwdCBGdW5jdGlvbnMgLS0tLS0tLS0tIFNoYWlsZXNoIFJcclxuICogQ3JlYXRlZCBkYXRlIC0tLS0tLS0tLS0tLS0tLS0tLS0gREQvTU0vWVlZWVxyXG4gKiBQb3dlcmVkIGJ5IC0tLS0tLS0tLS0tLS0tLS0tLS0tIEluZmluaXRpIHNvZnR3YXJlIHNvbHV0aW9uc1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIEh0dHBSZXF1ZXN0LFxyXG4gIEh0dHBIYW5kbGVyLFxyXG4gIEh0dHBFdmVudCxcclxuICBIdHRwSW50ZXJjZXB0b3IsXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlcXVlc3RJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgcHVibGljIGludGVyY2VwdChcclxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXHJcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcclxuICAgICAgYm9keTogcmVxdWVzdC5ib2R5LFxyXG4gICAgfSk7IFxyXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19