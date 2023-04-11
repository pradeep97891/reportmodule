import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { fadeAnimation } from './app/core-module/animation/route-animation';
import { AppService } from './app/core-module/service/app.service';
import { Router } from '@angular/router';
import { CommonService } from './app/core-module/service/common.service';
let ReportmoduleComponent = class ReportmoduleComponent {
    constructor(router, service, commonService) {
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
    ngOnInit() {
        // this.configProductType();
    }
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
    authUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.service.initAuth();
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
            // 
            // let reqData = {
            //   'apiToken': 'xxxxx',
            //   'emailID': 'yyy@xx.com'
            // }
            // var authResponce = await this.service.authenticationAndAuthorization(reqData).toPromise();
            var authResponce = {
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
            //   var authResponce1 = {
            //     "responseCode": 1,
            //     "responseMessage": "Error",
            //        "responseData": {
            //            "apiToken" : 'Invalid token'
            //      }
            //  }
        });
    }
    getRouterOutletState(outlet) {
        this.activeRoute = /[^/]*$/.exec(this.router.url)[0];
        return outlet.isActivated && this.animation ? outlet.activatedRoute : '';
    }
};
ReportmoduleComponent.ctorParameters = () => [
    { type: Router },
    { type: AppService },
    { type: CommonService }
];
ReportmoduleComponent = __decorate([
    Component({
        selector: 'lib-reportmodule',
        template: "<app-theme></app-theme>\r\n<div class=\"cls-report\">\r\n    <div class=\"content\"><span style=\"display: none;\">grmDashboard app is running!</span> </div>\r\n    <div class=\"container cls-maxwidth\">\r\n        <!-- <nav class=\"my-4\">\r\n            <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n                <a class=\"nav-item nav-link\" id=\"nav-home-tab\" data-toggle=\"tab\" href=\"#nav-home\" role=\"tab\"\r\n                    aria-controls=\"nav-home\" aria-selected=\"true\" [routerLink]=\"['/dashboard']\" routerLinkActive=\"active\">Home</a>\r\n                <a class=\"nav-item nav-link\" id=\"nav-profile-tab\" data-toggle=\"tab\" href=\"#nav-profile\" role=\"tab\"\r\n                    aria-controls=\"nav-profile\" aria-selected=\"false\" [routerLink]=\"['/pipeline']\" routerLinkActive=\"active\">Pipeline</a>\r\n            </div>\r\n        </nav> -->\r\n        <div class=\"text-right\">\r\n            <app-language [choosenLanguage]=\"language\"></app-language>\r\n        </div>\r\n\r\n        <!-- Common loader start -->\r\n        <app-common-loader [idVal]=1 *ngIf=\"loader\" loader='5258-loading-2.json' home=true></app-common-loader>\r\n        <!-- Common loader end -->\r\n\r\n\r\n        <div [@fadeAnimation]=\"getRouterOutletState(outlet)\">\r\n            <router-outlet #outlet=\"outlet\"></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n",
        animations: [fadeAnimation],
        styles: [".cls-report .navbar{background:VAR(--navbarcolor)!important;box-shadow:3px 3px 6px var(--DARKBOXSHADOW)}.cls-report .cls-theme-switcher{border-radius:30px;background:var(--BGWHITE)}.cls-report .cls-theme-switcher span{line-height:0;font-size:20px;cursor:pointer;display:inline-block;padding:0 15px}.cls-report .cls-theme-switcher span img{width:25px}.cls-report .cls-theme-switcher span.active{background:var(--BGDARK);border-radius:30px;color:var(--TXTWHITE)}.cls-report .cls-maxwidth{max-width:90%}@media screen and (min-width:320px) and (max-width:480px){.cls-report .cls-maxwidth{max-width:98%;padding:0 5px}}"]
    })
], ReportmoduleComponent);
export { ReportmoduleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0bW9kdWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3JlcG9ydG1vZHVsZS8iLCJzb3VyY2VzIjpbImxpYi9yZXBvcnRtb2R1bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFbkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQU96RSxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQVFoQyxZQUFvQixNQUFjLEVBQVUsT0FBbUIsRUFBVSxhQUEyQjtRQUFoRixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBUHBHLFVBQUssR0FBRyxjQUFjLENBQUM7UUFDdkIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNYLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbkIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUluQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELFFBQVE7UUFDTiw0QkFBNEI7SUFDOUIsQ0FBQztJQUVELCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsc0NBQXNDO0lBQ3RDLHlDQUF5QztJQUN6QywyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLG1EQUFtRDtJQUNuRCw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLHNEQUFzRDtJQUN0RCxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLE1BQU07SUFDTixxREFBcUQ7SUFDckQsSUFBSTtJQUVVLE9BQU87O1lBQ25CLE1BQU0sUUFBUSxHQUFTLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBR3RCLElBQUksQ0FBQyxRQUFRLEdBQUksUUFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN6RCxJQUFJO2dCQUNGLDJDQUEyQztnQkFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBRSxRQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDcEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUNqQztZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLDRDQUE0QyxDQUFDLENBQUMsQ0FBQztnQkFDckUsaUpBQWlKO2dCQUNqSixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUN4QjtZQUNELEdBQUc7WUFDSCxrQkFBa0I7WUFDbEIseUJBQXlCO1lBQ3pCLDRCQUE0QjtZQUM1QixJQUFJO1lBQ0osNkZBQTZGO1lBQzdGLElBQUksWUFBWSxHQUFHO2dCQUNqQixjQUFjLEVBQUUsQ0FBQztnQkFDakIsaUJBQWlCLEVBQUUsSUFBSTtnQkFDdkIsY0FBYyxFQUFFO29CQUNkLGFBQWEsRUFBRSxFQUFFO29CQUNqQixVQUFVLEVBQUUsU0FBUztvQkFDckIsYUFBYSxFQUFFLE9BQU87aUJBQ3ZCO2FBQ0YsQ0FBQTtZQUNELElBQUcsWUFBWSxDQUFDLGVBQWUsS0FBRyxJQUFJLEVBQUM7Z0JBRXJDLDJEQUEyRDtnQkFDM0QsOERBQThEO2dCQUM5RCxjQUFjLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUM3RSxjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRyxRQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2pGLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDaEM7WUFDSCwwQkFBMEI7WUFDMUIseUJBQXlCO1lBQ3pCLGtDQUFrQztZQUNsQywyQkFBMkI7WUFDM0IsMENBQTBDO1lBQzFDLFNBQVM7WUFDVCxLQUFLO1FBRUwsQ0FBQztLQUFBO0lBRU0sb0JBQW9CLENBQUMsTUFBVztRQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxPQUFPLE1BQU0sQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzNFLENBQUM7Q0FDRixDQUFBOztZQW5GNkIsTUFBTTtZQUFtQixVQUFVO1lBQXdCLGFBQWE7O0FBUnpGLHFCQUFxQjtJQU5qQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLHU1Q0FBNEM7UUFFNUMsVUFBVSxFQUFFLENBQUMsYUFBYSxDQUFDOztLQUM1QixDQUFDO0dBQ1cscUJBQXFCLENBMkZqQztTQTNGWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmFkZUFuaW1hdGlvbiB9IGZyb20gJy4vYXBwL2NvcmUtbW9kdWxlL2FuaW1hdGlvbi9yb3V0ZS1hbmltYXRpb24nO1xuaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gJy4vYXBwL2NvcmUtbW9kdWxlL3NlcnZpY2UvYXBwLnNlcnZpY2UnO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29tbW9uU2VydmljZSB9IGZyb20gJy4vYXBwL2NvcmUtbW9kdWxlL3NlcnZpY2UvY29tbW9uLnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXJlcG9ydG1vZHVsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXBvcnRtb2R1bGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXBvcnRtb2R1bGUuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW2ZhZGVBbmltYXRpb25dXG59KVxuZXhwb3J0IGNsYXNzIFJlcG9ydG1vZHVsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRpdGxlID0gJ2dybURhc2hib2FyZCc7XG4gIHRoZW1lVHlwZSA9IGZhbHNlO1xuICBwdWJsaWMgYWN0aXZlUm91dGUgPSAnJztcbiAgcHJpdmF0ZSBhbmltYXRpb24gPSBmYWxzZTtcbiAgcHVibGljIGxvYWRlciA9IHRydWU7XG4gIHB1YmxpYyBsYW5ndWFnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2VydmljZTogQXBwU2VydmljZSwgcHJpdmF0ZSBjb21tb25TZXJ2aWNlOkNvbW1vblNlcnZpY2UgKSB7XG4gICAgdGhpcy5hdXRoVXJsKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyB0aGlzLmNvbmZpZ1Byb2R1Y3RUeXBlKCk7XG4gIH1cblxuICAvLyBwdWJsaWMgY29uZmlnUHJvZHVjdFR5cGUoKSB7XG4gIC8vICAgdmFyIHByb2R1Y3RUeXBlO1xuICAvLyAgIHN3aXRjaCAod2luZG93LmxvY2F0aW9uLm9yaWdpbikge1xuICAvLyAgICAgY2FzZSBcImh0dHA6Ly90ZXN0LW1oLmdyb3Vwcm0ubmV0XCI6XG4gIC8vICAgICAgIHByb2R1Y3RUeXBlID0gJ21oJ1xuICAvLyAgICAgICBicmVhaztcbiAgLy8gICAgIGNhc2UgXCJodHRwczovL3Rlc3QtdHIuaW5maW5pdGlzb2Z0d2FyZS5uZXRcIjpcbiAgLy8gICAgICAgcHJvZHVjdFR5cGUgPSAnc2Nvb3QnXG4gIC8vICAgICAgIGJyZWFrO1xuICAvLyAgICAgY2FzZSBcImh0dHBzOi8vdGVzdC1ncm91cGJvb2tpbmdzLmFpcm1hbHRhLmNvbVwiOlxuICAvLyAgICAgICBwcm9kdWN0VHlwZSA9ICdhaXJtYWx0YSdcbiAgLy8gICAgICAgYnJlYWs7XG4gIC8vICAgICBkZWZhdWx0OlxuICAvLyAgICAgICBwcm9kdWN0VHlwZSA9ICdkZWZhdWx0J1xuICAvLyAgICAgICBicmVhaztcbiAgLy8gICB9XG4gIC8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1BST0RVQ1RUWVBFJywgcHJvZHVjdFR5cGUpXG4gIC8vIH1cblxuICBwcml2YXRlIGFzeW5jIGF1dGhVcmwoKSB7XG4gICAgY29uc3QgcmVzcG9uc2U6IExvYWQgPSBhd2FpdCB0aGlzLnNlcnZpY2UuaW5pdEF1dGgoKTtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgXG5cbiAgICB0aGlzLmxhbmd1YWdlID0gKHJlc3BvbnNlIGFzIGFueSkucmVzcG9uc2UuZGF0YS5sYW5ndWFnZTtcbiAgICB0cnkge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyhyZXNwb25zZSBhcyBhbnkpLnJlc3BvbnNlLmRhdGEucm91dGVNb2R1bGVdKTtcbiAgICAgIHRoaXMucm91dGVyLmluaXRpYWxOYXZpZ2F0aW9uKCk7XG4gICAgICB0aGlzLmFuaW1hdGlvbiA9IHRydWU7XG4gICAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xuICAgICAgdGhpcy5yb3V0ZXIuaW5pdGlhbE5hdmlnYXRpb24oKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuLzExZjk1NzhkMDVlNmY3YmI1OGEzY2RkMDAxMDdlOWY0ZTM4ODI2NzEnXSk7XG4gICAgICAvLyB0aGlzLnJvdXRlci5yZXNldENvbmZpZyhbeyBwYXRoOiAnKionLCBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi4vbGliL2FwcC9zaGFyZWQtbW9kdWxlL2Vycm9yL2Vycm9yLm1vZHVsZScpLnRoZW4obSA9PiBtLkVycm9yTW9kdWxlKSB9XSk7XG4gICAgICB0aGlzLmFuaW1hdGlvbiA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBcbiAgICAvLyBsZXQgcmVxRGF0YSA9IHtcbiAgICAvLyAgICdhcGlUb2tlbic6ICd4eHh4eCcsXG4gICAgLy8gICAnZW1haWxJRCc6ICd5eXlAeHguY29tJ1xuICAgIC8vIH1cbiAgICAvLyB2YXIgYXV0aFJlc3BvbmNlID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmF1dGhlbnRpY2F0aW9uQW5kQXV0aG9yaXphdGlvbihyZXFEYXRhKS50b1Byb21pc2UoKTtcbiAgICB2YXIgYXV0aFJlc3BvbmNlID0ge1xuICAgICAgXCJyZXNwb25zZUNvZGVcIjogMCxcbiAgICAgIFwicmVzcG9uc2VNZXNzYWdlXCI6IFwib2tcIixcbiAgICAgIFwicmVzcG9uc2VEYXRhXCI6IHtcbiAgICAgICAgJ2FpcmxpbmVDb2RlJzogJycsXG4gICAgICAgICd1c2VyVHlwZSc6ICdBaXJsaW5lJyxcbiAgICAgICAgJ2FjY2Vzc1Rva2VuJzogXCJYWFhYWFwiXG4gICAgICB9XG4gICAgfVxuICAgIGlmKGF1dGhSZXNwb25jZS5yZXNwb25zZU1lc3NhZ2U9PT1cIm9rXCIpe1xuXG4gICAgICAvLyBlbnZpcm9ubWVudC51c2VyVHlwZT1hdXRoUmVzcG9uY2UucmVzcG9uc2VEYXRhLnVzZXJUeXBlO1xuICAgICAgLy8gZW52aXJvbm1lbnQuYWlybGluZUNvZGU9YXV0aFJlc3BvbmNlLnJlc3BvbnNlRGF0YS51c2VyVHlwZTtcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJhY2Nlc3NUb2tlblwiLCBhdXRoUmVzcG9uY2UucmVzcG9uc2VEYXRhLmFjY2Vzc1Rva2VuKTtcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3RoZW1lQ29kZScsIChyZXNwb25zZSBhcyBhbnkpLnJlc3BvbnNlLmRhdGEuYWlybGluZUNvZGUpO1xuICAgICAgdGhpcy5jb21tb25TZXJ2aWNlLnRoZW1lQ2FsbCgpO1xuICAgIH1cbiAgLy8gICB2YXIgYXV0aFJlc3BvbmNlMSA9IHtcbiAgLy8gICAgIFwicmVzcG9uc2VDb2RlXCI6IDEsXG4gIC8vICAgICBcInJlc3BvbnNlTWVzc2FnZVwiOiBcIkVycm9yXCIsXG4gIC8vICAgICAgICBcInJlc3BvbnNlRGF0YVwiOiB7XG4gIC8vICAgICAgICAgICAgXCJhcGlUb2tlblwiIDogJ0ludmFsaWQgdG9rZW4nXG4gIC8vICAgICAgfVxuICAvLyAgfVxuICAgIFxuICB9XG5cbiAgcHVibGljIGdldFJvdXRlck91dGxldFN0YXRlKG91dGxldDogYW55KTogYW55IHtcbiAgICB0aGlzLmFjdGl2ZVJvdXRlID0gL1teL10qJC8uZXhlYyh0aGlzLnJvdXRlci51cmwpWzBdO1xuICAgIHJldHVybiBvdXRsZXQuaXNBY3RpdmF0ZWQgJiYgdGhpcy5hbmltYXRpb24gPyBvdXRsZXQuYWN0aXZhdGVkUm91dGUgOiAnJztcbiAgfVxufVxuaW50ZXJmYWNlIExvYWQge1xuICByb3V0ZTogc3RyaW5nO1xuICByZXNwb25zZU1lc3NhZ2U6IHN0cmluZztcbiAgc3RhdHVzOiBudW1iZXI7XG59XG4iXX0=