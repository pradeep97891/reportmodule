import { __awaiter, __decorate, __generator } from "tslib";
import { Component } from '@angular/core';
import { fadeAnimation } from './app/core-module/animation/route-animation';
import { AppService } from './app/core-module/service/app.service';
import { Router } from '@angular/router';
import { CommonService } from './app/core-module/service/common.service';
var ReportmoduleComponent = /** @class */ (function () {
    function ReportmoduleComponent(router, service, commonService) {
        this.router = router;
        this.service = service;
        this.commonService = commonService;
        this.title = 'grmDashboard';
        this.themeType = false;
        this.activeRoute = '';
        this.animation = false;
        this.loader = true;
        this.authUrl();
    }
    ReportmoduleComponent.prototype.ngOnInit = function () {
        // this.configProductType();
    };
    // public configProductType() {
    //   var productType;
    //   switch (window.location.origin) {
    //     case "http://test-mh.grouprm.net":
    //       productType = 'mh'
    //       break;
    //     case "https://test-tr.infinitisoftware.net":
    //       productType = 'scoot'
    //       break;
    //     case "https://test-groupbookings.airmalta.com":
    //       productType = 'airmalta'
    //       break;
    //     default:
    //       productType = 'default'
    //       break;
    //   }
    //   localStorage.setItem('PRODUCTTYPE', productType)
    // }
    ReportmoduleComponent.prototype.authUrl = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, authResponce;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.initAuth()];
                    case 1:
                        response = _a.sent();
                        console.log(response);
                        this.language = response.response.data.language;
                        try {
                            // tslint:disable-next-line:max-line-length
                            this.router.navigate([response.response.data.routeModule]);
                            this.router.initialNavigation();
                            this.animation = true;
                            this.loader = false;
                            this.router.initialNavigation();
                        }
                        catch (e) {
                            this.loader = false;
                            this.router.navigate(['./11f9578d05e6f7bb58a3cdd00107e9f4e3882671']);
                            // this.router.resetConfig([{ path: '**', loadChildren: () => import('../lib/app/shared-module/error/error.module').then(m => m.ErrorModule) }]);
                            this.animation = false;
                        }
                        authResponce = {
                            "responseCode": 0,
                            "responseMessage": "ok",
                            "responseData": {
                                'airlineCode': '',
                                'userType': 'Airline',
                                'accessToken': "XXXXX"
                            }
                        };
                        if (authResponce.responseMessage === "ok") {
                            // environment.userType=authResponce.responseData.userType;
                            // environment.airlineCode=authResponce.responseData.userType;
                            sessionStorage.setItem("accessToken", authResponce.responseData.accessToken);
                            sessionStorage.setItem('themeCode', response.response.data.airlineCode);
                            this.commonService.themeCall();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportmoduleComponent.prototype.getRouterOutletState = function (outlet) {
        this.activeRoute = /[^/]*$/.exec(this.router.url)[0];
        return outlet.isActivated && this.animation ? outlet.activatedRoute : '';
    };
    ReportmoduleComponent.ctorParameters = function () { return [
        { type: Router },
        { type: AppService },
        { type: CommonService }
    ]; };
    ReportmoduleComponent = __decorate([
        Component({
            selector: 'lib-reportmodule',
            template: "<app-theme></app-theme>\r\n<div class=\"cls-report\">\r\n    <div class=\"content\"><span style=\"display: none;\">grmDashboard app is running!</span> </div>\r\n    <div class=\"container cls-maxwidth\">\r\n        <!-- <nav class=\"my-4\">\r\n            <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n                <a class=\"nav-item nav-link\" id=\"nav-home-tab\" data-toggle=\"tab\" href=\"#nav-home\" role=\"tab\"\r\n                    aria-controls=\"nav-home\" aria-selected=\"true\" [routerLink]=\"['/dashboard']\" routerLinkActive=\"active\">Home</a>\r\n                <a class=\"nav-item nav-link\" id=\"nav-profile-tab\" data-toggle=\"tab\" href=\"#nav-profile\" role=\"tab\"\r\n                    aria-controls=\"nav-profile\" aria-selected=\"false\" [routerLink]=\"['/pipeline']\" routerLinkActive=\"active\">Pipeline</a>\r\n            </div>\r\n        </nav> -->\r\n        <div class=\"text-right\">\r\n            <app-language [choosenLanguage]=\"language\"></app-language>\r\n        </div>\r\n\r\n        <!-- Common loader start -->\r\n        <app-common-loader [idVal]=1 *ngIf=\"loader\" loader='5258-loading-2.json' home=true></app-common-loader>\r\n        <!-- Common loader end -->\r\n\r\n\r\n        <div [@fadeAnimation]=\"getRouterOutletState(outlet)\">\r\n            <router-outlet #outlet=\"outlet\"></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n",
            animations: [fadeAnimation],
            styles: [".cls-report .navbar{background:VAR(--navbarcolor)!important;box-shadow:3px 3px 6px var(--DARKBOXSHADOW)}.cls-report .cls-theme-switcher{border-radius:30px;background:var(--BGWHITE)}.cls-report .cls-theme-switcher span{line-height:0;font-size:20px;cursor:pointer;display:inline-block;padding:0 15px}.cls-report .cls-theme-switcher span img{width:25px}.cls-report .cls-theme-switcher span.active{background:var(--BGDARK);border-radius:30px;color:var(--TXTWHITE)}.cls-report .cls-maxwidth{max-width:90%}@media screen and (min-width:320px) and (max-width:480px){.cls-report .cls-maxwidth{max-width:98%;padding:0 5px}}"]
        })
    ], ReportmoduleComponent);
    return ReportmoduleComponent;
}());
export { ReportmoduleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0bW9kdWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3JlcG9ydG1vZHVsZS8iLCJzb3VyY2VzIjpbImxpYi9yZXBvcnRtb2R1bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFbkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQU96RTtJQVFFLCtCQUFvQixNQUFjLEVBQVUsT0FBbUIsRUFBVSxhQUEyQjtRQUFoRixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBUHBHLFVBQUssR0FBRyxjQUFjLENBQUM7UUFDdkIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNYLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbkIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUluQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFDRSw0QkFBNEI7SUFDOUIsQ0FBQztJQUVELCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsc0NBQXNDO0lBQ3RDLHlDQUF5QztJQUN6QywyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLG1EQUFtRDtJQUNuRCw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLHNEQUFzRDtJQUN0RCxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLE1BQU07SUFDTixxREFBcUQ7SUFDckQsSUFBSTtJQUVVLHVDQUFPLEdBQXJCOzs7Ozs0QkFDeUIscUJBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBQTs7d0JBQTlDLFFBQVEsR0FBUyxTQUE2Qjt3QkFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFHdEIsSUFBSSxDQUFDLFFBQVEsR0FBSSxRQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO3dCQUN6RCxJQUFJOzRCQUNGLDJDQUEyQzs0QkFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBRSxRQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzs0QkFDcEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDOzRCQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzs0QkFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7NEJBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzt5QkFDakM7d0JBQUMsT0FBTyxDQUFDLEVBQUU7NEJBQ1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7NEJBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsNENBQTRDLENBQUMsQ0FBQyxDQUFDOzRCQUNyRSxpSkFBaUo7NEJBQ2pKLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO3lCQUN4Qjt3QkFPRyxZQUFZLEdBQUc7NEJBQ2pCLGNBQWMsRUFBRSxDQUFDOzRCQUNqQixpQkFBaUIsRUFBRSxJQUFJOzRCQUN2QixjQUFjLEVBQUU7Z0NBQ2QsYUFBYSxFQUFFLEVBQUU7Z0NBQ2pCLFVBQVUsRUFBRSxTQUFTO2dDQUNyQixhQUFhLEVBQUUsT0FBTzs2QkFDdkI7eUJBQ0YsQ0FBQTt3QkFDRCxJQUFHLFlBQVksQ0FBQyxlQUFlLEtBQUcsSUFBSSxFQUFDOzRCQUVyQywyREFBMkQ7NEJBQzNELDhEQUE4RDs0QkFDOUQsY0FBYyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQzs0QkFDN0UsY0FBYyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUcsUUFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzRCQUNqRixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO3lCQUNoQzs7Ozs7S0FTRjtJQUVNLG9EQUFvQixHQUEzQixVQUE0QixNQUFXO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sTUFBTSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDM0UsQ0FBQzs7Z0JBbEYyQixNQUFNO2dCQUFtQixVQUFVO2dCQUF3QixhQUFhOztJQVJ6RixxQkFBcUI7UUFOakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1Qix1NUNBQTRDO1lBRTVDLFVBQVUsRUFBRSxDQUFDLGFBQWEsQ0FBQzs7U0FDNUIsQ0FBQztPQUNXLHFCQUFxQixDQTJGakM7SUFBRCw0QkFBQztDQUFBLEFBM0ZELElBMkZDO1NBM0ZZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmYWRlQW5pbWF0aW9uIH0gZnJvbSAnLi9hcHAvY29yZS1tb2R1bGUvYW5pbWF0aW9uL3JvdXRlLWFuaW1hdGlvbic7XG5pbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSAnLi9hcHAvY29yZS1tb2R1bGUvc2VydmljZS9hcHAuc2VydmljZSc7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb21tb25TZXJ2aWNlIH0gZnJvbSAnLi9hcHAvY29yZS1tb2R1bGUvc2VydmljZS9jb21tb24uc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItcmVwb3J0bW9kdWxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlcG9ydG1vZHVsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlcG9ydG1vZHVsZS5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbZmFkZUFuaW1hdGlvbl1cbn0pXG5leHBvcnQgY2xhc3MgUmVwb3J0bW9kdWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGl0bGUgPSAnZ3JtRGFzaGJvYXJkJztcbiAgdGhlbWVUeXBlID0gZmFsc2U7XG4gIHB1YmxpYyBhY3RpdmVSb3V0ZSA9ICcnO1xuICBwcml2YXRlIGFuaW1hdGlvbiA9IGZhbHNlO1xuICBwdWJsaWMgbG9hZGVyID0gdHJ1ZTtcbiAgcHVibGljIGxhbmd1YWdlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzZXJ2aWNlOiBBcHBTZXJ2aWNlLCBwcml2YXRlIGNvbW1vblNlcnZpY2U6Q29tbW9uU2VydmljZSApIHtcbiAgICB0aGlzLmF1dGhVcmwoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIHRoaXMuY29uZmlnUHJvZHVjdFR5cGUoKTtcbiAgfVxuXG4gIC8vIHB1YmxpYyBjb25maWdQcm9kdWN0VHlwZSgpIHtcbiAgLy8gICB2YXIgcHJvZHVjdFR5cGU7XG4gIC8vICAgc3dpdGNoICh3aW5kb3cubG9jYXRpb24ub3JpZ2luKSB7XG4gIC8vICAgICBjYXNlIFwiaHR0cDovL3Rlc3QtbWguZ3JvdXBybS5uZXRcIjpcbiAgLy8gICAgICAgcHJvZHVjdFR5cGUgPSAnbWgnXG4gIC8vICAgICAgIGJyZWFrO1xuICAvLyAgICAgY2FzZSBcImh0dHBzOi8vdGVzdC10ci5pbmZpbml0aXNvZnR3YXJlLm5ldFwiOlxuICAvLyAgICAgICBwcm9kdWN0VHlwZSA9ICdzY29vdCdcbiAgLy8gICAgICAgYnJlYWs7XG4gIC8vICAgICBjYXNlIFwiaHR0cHM6Ly90ZXN0LWdyb3VwYm9va2luZ3MuYWlybWFsdGEuY29tXCI6XG4gIC8vICAgICAgIHByb2R1Y3RUeXBlID0gJ2Fpcm1hbHRhJ1xuICAvLyAgICAgICBicmVhaztcbiAgLy8gICAgIGRlZmF1bHQ6XG4gIC8vICAgICAgIHByb2R1Y3RUeXBlID0gJ2RlZmF1bHQnXG4gIC8vICAgICAgIGJyZWFrO1xuICAvLyAgIH1cbiAgLy8gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnUFJPRFVDVFRZUEUnLCBwcm9kdWN0VHlwZSlcbiAgLy8gfVxuXG4gIHByaXZhdGUgYXN5bmMgYXV0aFVybCgpIHtcbiAgICBjb25zdCByZXNwb25zZTogTG9hZCA9IGF3YWl0IHRoaXMuc2VydmljZS5pbml0QXV0aCgpO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICBcblxuICAgIHRoaXMubGFuZ3VhZ2UgPSAocmVzcG9uc2UgYXMgYW55KS5yZXNwb25zZS5kYXRhLmxhbmd1YWdlO1xuICAgIHRyeSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbKHJlc3BvbnNlIGFzIGFueSkucmVzcG9uc2UuZGF0YS5yb3V0ZU1vZHVsZV0pO1xuICAgICAgdGhpcy5yb3V0ZXIuaW5pdGlhbE5hdmlnYXRpb24oKTtcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgIHRoaXMubG9hZGVyID0gZmFsc2U7XG4gICAgICB0aGlzLnJvdXRlci5pbml0aWFsTmF2aWdhdGlvbigpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMubG9hZGVyID0gZmFsc2U7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4vMTFmOTU3OGQwNWU2ZjdiYjU4YTNjZGQwMDEwN2U5ZjRlMzg4MjY3MSddKTtcbiAgICAgIC8vIHRoaXMucm91dGVyLnJlc2V0Q29uZmlnKFt7IHBhdGg6ICcqKicsIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuLi9saWIvYXBwL3NoYXJlZC1tb2R1bGUvZXJyb3IvZXJyb3IubW9kdWxlJykudGhlbihtID0+IG0uRXJyb3JNb2R1bGUpIH1dKTtcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIFxuICAgIC8vIGxldCByZXFEYXRhID0ge1xuICAgIC8vICAgJ2FwaVRva2VuJzogJ3h4eHh4JyxcbiAgICAvLyAgICdlbWFpbElEJzogJ3l5eUB4eC5jb20nXG4gICAgLy8gfVxuICAgIC8vIHZhciBhdXRoUmVzcG9uY2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UuYXV0aGVudGljYXRpb25BbmRBdXRob3JpemF0aW9uKHJlcURhdGEpLnRvUHJvbWlzZSgpO1xuICAgIHZhciBhdXRoUmVzcG9uY2UgPSB7XG4gICAgICBcInJlc3BvbnNlQ29kZVwiOiAwLFxuICAgICAgXCJyZXNwb25zZU1lc3NhZ2VcIjogXCJva1wiLFxuICAgICAgXCJyZXNwb25zZURhdGFcIjoge1xuICAgICAgICAnYWlybGluZUNvZGUnOiAnJyxcbiAgICAgICAgJ3VzZXJUeXBlJzogJ0FpcmxpbmUnLFxuICAgICAgICAnYWNjZXNzVG9rZW4nOiBcIlhYWFhYXCJcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoYXV0aFJlc3BvbmNlLnJlc3BvbnNlTWVzc2FnZT09PVwib2tcIil7XG5cbiAgICAgIC8vIGVudmlyb25tZW50LnVzZXJUeXBlPWF1dGhSZXNwb25jZS5yZXNwb25zZURhdGEudXNlclR5cGU7XG4gICAgICAvLyBlbnZpcm9ubWVudC5haXJsaW5lQ29kZT1hdXRoUmVzcG9uY2UucmVzcG9uc2VEYXRhLnVzZXJUeXBlO1xuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImFjY2Vzc1Rva2VuXCIsIGF1dGhSZXNwb25jZS5yZXNwb25zZURhdGEuYWNjZXNzVG9rZW4pO1xuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndGhlbWVDb2RlJywgKHJlc3BvbnNlIGFzIGFueSkucmVzcG9uc2UuZGF0YS5haXJsaW5lQ29kZSk7XG4gICAgICB0aGlzLmNvbW1vblNlcnZpY2UudGhlbWVDYWxsKCk7XG4gICAgfVxuICAvLyAgIHZhciBhdXRoUmVzcG9uY2UxID0ge1xuICAvLyAgICAgXCJyZXNwb25zZUNvZGVcIjogMSxcbiAgLy8gICAgIFwicmVzcG9uc2VNZXNzYWdlXCI6IFwiRXJyb3JcIixcbiAgLy8gICAgICAgIFwicmVzcG9uc2VEYXRhXCI6IHtcbiAgLy8gICAgICAgICAgICBcImFwaVRva2VuXCIgOiAnSW52YWxpZCB0b2tlbidcbiAgLy8gICAgICB9XG4gIC8vICB9XG4gICAgXG4gIH1cblxuICBwdWJsaWMgZ2V0Um91dGVyT3V0bGV0U3RhdGUob3V0bGV0OiBhbnkpOiBhbnkge1xuICAgIHRoaXMuYWN0aXZlUm91dGUgPSAvW14vXSokLy5leGVjKHRoaXMucm91dGVyLnVybClbMF07XG4gICAgcmV0dXJuIG91dGxldC5pc0FjdGl2YXRlZCAmJiB0aGlzLmFuaW1hdGlvbiA/IG91dGxldC5hY3RpdmF0ZWRSb3V0ZSA6ICcnO1xuICB9XG59XG5pbnRlcmZhY2UgTG9hZCB7XG4gIHJvdXRlOiBzdHJpbmc7XG4gIHJlc3BvbnNlTWVzc2FnZTogc3RyaW5nO1xuICBzdGF0dXM6IG51bWJlcjtcbn1cbiJdfQ==