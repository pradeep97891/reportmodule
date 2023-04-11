import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { appConfig } from '../../core-module/config/app';
/******
 * component : language component
 * created : 17-06-2021
 * Author : Benita Shiny P.
 */
var LanguageComponent = /** @class */ (function () {
    function LanguageComponent() {
        /**
         * languages list
         */
        this.languageData = [
            {
                code: 'EN',
                name: 'English'
            },
            {
                code: 'AR',
                name: 'Spanish'
            },
            {
                code: 'PT',
                name: 'Portuguese'
            }
        ];
        /**
         * display language option
         */
        this.displayOption = appConfig.DISPLAYlANGUAGEOPTION;
        // const language =  document.cookie.match(new RegExp('(^| )' + 'groupRMLan' + '=([^;]+)')) as string[];
        // // if cookie exist set the cookie language else set default laguage as EN( English )
        // if (language) {
        //   this.choosenLanguage = language[2];
        //   appConfig.CURRENTLANGUAGE = this.choosenLanguage;
        // } else {
        //   appConfig.CURRENTLANGUAGE = 'EN';
        // }
    }
    LanguageComponent.prototype.ngOnInit = function () {
    };
    LanguageComponent.prototype.ngOnChanges = function () {
        if (this.choosenLanguage) {
            appConfig.CURRENTLANGUAGE = this.choosenLanguage;
        }
        else {
            appConfig.CURRENTLANGUAGE = 'EN';
        }
    };
    /**
    * Author: Shailesh R
    * Desc: Set language for the application
    * @param: lang: Language name
    */
    LanguageComponent.prototype.setLanguage = function (index) {
        appConfig.CURRENTLANGUAGE = this.languageData[index].code;
        this.choosenLanguage = this.languageData[index].code;
        document.cookie = "groupRMLan=" + this.choosenLanguage;
    };
    __decorate([
        Input()
    ], LanguageComponent.prototype, "choosenLanguage", void 0);
    LanguageComponent = __decorate([
        Component({
            selector: 'app-language',
            template: "<div class=\"dropdown\" *ngIf=\"displayOption\">\r\n    <button class=\"btn dropdown-toggle mt-2\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n      aria-haspopup=\"true\" aria-expanded=\"false\">\r\n      <span class=\"cls-lang-code\">{{choosenLanguage}}</span>\r\n      <!-- {{ choosenLanguage.name | translate }} -->\r\n    </button>\r\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n      <a class=\"dropdown-item cls-ar-text-right\" (click)=\"setLanguage(i)\"\r\n        *ngFor=\"let language of languageData; let i = index\" title=\"{{'Select The Language' |translate}}\"><span\r\n          class=\"cls-lang-code\">{{language.code}}</span>{{ language.name | translate }}</a>\r\n    </div>\r\n  </div>",
            styles: [".dropdown .dropdown-menu a{padding:7px 10px}.dropdown .dropdown-toggle{background:var(--BGWHITE);height:38px}.cls-lang-code{font-size:12px;display:inline-block;border:1px solid var(--BDRREGULAR);border-radius:100%;height:27px;width:27px;text-align:center;vertical-align:middle;padding-top:4px;margin-right:7px}.cls-lang-code::after,.cls-lang-code::before{display:none}@media (min-width:760px) and (max-width:1024px){.dropdown-toggle{font-size:12px!important;padding:5px}}"]
        })
    ], LanguageComponent);
    return LanguageComponent;
}());
export { LanguageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcmVwb3J0bW9kdWxlLyIsInNvdXJjZXMiOlsibGliL2FwcC9zaGFyZWQtbW9kdWxlL2xhbmd1YWdlL2xhbmd1YWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3pEOzs7O0dBSUc7QUFNSDtJQTJCRTtRQTFCQTs7V0FFRztRQUNJLGlCQUFZLEdBQUc7WUFDcEI7Z0JBQ0UsSUFBSSxFQUFDLElBQUk7Z0JBQ1QsSUFBSSxFQUFDLFNBQVM7YUFDZjtZQUNEO2dCQUNFLElBQUksRUFBQyxJQUFJO2dCQUNULElBQUksRUFBQyxTQUFTO2FBQ2Y7WUFDRDtnQkFDRSxJQUFJLEVBQUMsSUFBSTtnQkFDVCxJQUFJLEVBQUMsWUFBWTthQUNsQjtTQUNGLENBQUM7UUFNRjs7V0FFRztRQUNJLGtCQUFhLEdBQWEsU0FBUyxDQUFDLHFCQUFxQixDQUFDO1FBRS9ELHdHQUF3RztRQUN4Ryx1RkFBdUY7UUFDdkYsa0JBQWtCO1FBQ2xCLHdDQUF3QztRQUN4QyxzREFBc0Q7UUFDdEQsV0FBVztRQUNYLHNDQUFzQztRQUN0QyxJQUFJO0lBQ04sQ0FBQztJQUNNLG9DQUFRLEdBQWY7SUFFQSxDQUFDO0lBQ0QsdUNBQVcsR0FBWDtRQUNFLElBQUcsSUFBSSxDQUFDLGVBQWUsRUFBQztZQUN0QixTQUFTLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7U0FDbEQ7YUFBTTtZQUNMLFNBQVMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUNBOzs7O01BSUU7SUFDSSx1Q0FBVyxHQUFsQixVQUFtQixLQUFhO1FBQzlCLFNBQVMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDMUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNyRCxRQUFRLENBQUMsTUFBTSxHQUFHLGdCQUFjLElBQUksQ0FBQyxlQUFpQixDQUFDO0lBQ3pELENBQUM7SUFsQ1E7UUFBUixLQUFLLEVBQUU7OERBQTBCO0lBdEJ2QixpQkFBaUI7UUFMN0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIscXdCQUF3Qzs7U0FFekMsQ0FBQztPQUNXLGlCQUFpQixDQXlEN0I7SUFBRCx3QkFBQztDQUFBLEFBekRELElBeURDO1NBekRZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBhcHBDb25maWcgfSBmcm9tICcuLi8uLi9jb3JlLW1vZHVsZS9jb25maWcvYXBwJztcclxuLyoqKioqKlxyXG4gKiBjb21wb25lbnQgOiBsYW5ndWFnZSBjb21wb25lbnRcclxuICogY3JlYXRlZCA6IDE3LTA2LTIwMjFcclxuICogQXV0aG9yIDogQmVuaXRhIFNoaW55IFAuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1sYW5ndWFnZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xhbmd1YWdlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9sYW5ndWFnZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLyoqXHJcbiAgICogbGFuZ3VhZ2VzIGxpc3RcclxuICAgKi9cclxuICBwdWJsaWMgbGFuZ3VhZ2VEYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBjb2RlOidFTicsXHJcbiAgICAgIG5hbWU6J0VuZ2xpc2gnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOidBUicsXHJcbiAgICAgIG5hbWU6J1NwYW5pc2gnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjb2RlOidQVCcsXHJcbiAgICAgIG5hbWU6J1BvcnR1Z3Vlc2UnXHJcbiAgICB9XHJcbiAgXTtcclxuICAvKipcclxuICAgKiBEZXNjOiBMYW5ndWFnZSB2YWx1ZVxyXG4gICAqL1xyXG4gIC8vIHB1YmxpYyBjaG9vc2VuTGFuZ3VhZ2UgPSAnRU4nO1xyXG4gIEBJbnB1dCgpIGNob29zZW5MYW5ndWFnZSA6IHN0cmluZztcclxuICAvKipcclxuICAgKiBkaXNwbGF5IGxhbmd1YWdlIG9wdGlvblxyXG4gICAqL1xyXG4gIHB1YmxpYyBkaXNwbGF5T3B0aW9uIDogYm9vbGVhbiA9IGFwcENvbmZpZy5ESVNQTEFZbEFOR1VBR0VPUFRJT047XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBjb25zdCBsYW5ndWFnZSA9ICBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58ICknICsgJ2dyb3VwUk1MYW4nICsgJz0oW147XSspJykpIGFzIHN0cmluZ1tdO1xyXG4gICAgLy8gLy8gaWYgY29va2llIGV4aXN0IHNldCB0aGUgY29va2llIGxhbmd1YWdlIGVsc2Ugc2V0IGRlZmF1bHQgbGFndWFnZSBhcyBFTiggRW5nbGlzaCApXHJcbiAgICAvLyBpZiAobGFuZ3VhZ2UpIHtcclxuICAgIC8vICAgdGhpcy5jaG9vc2VuTGFuZ3VhZ2UgPSBsYW5ndWFnZVsyXTtcclxuICAgIC8vICAgYXBwQ29uZmlnLkNVUlJFTlRMQU5HVUFHRSA9IHRoaXMuY2hvb3Nlbkxhbmd1YWdlO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgYXBwQ29uZmlnLkNVUlJFTlRMQU5HVUFHRSA9ICdFTic7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIFxyXG4gIH1cclxuICBuZ09uQ2hhbmdlcygpe1xyXG4gICAgaWYodGhpcy5jaG9vc2VuTGFuZ3VhZ2Upe1xyXG4gICAgICBhcHBDb25maWcuQ1VSUkVOVExBTkdVQUdFID0gdGhpcy5jaG9vc2VuTGFuZ3VhZ2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhcHBDb25maWcuQ1VSUkVOVExBTkdVQUdFID0gJ0VOJztcclxuICAgIH1cclxuICB9XHJcbiAgIC8qKlxyXG4gICAqIEF1dGhvcjogU2hhaWxlc2ggUlxyXG4gICAqIERlc2M6IFNldCBsYW5ndWFnZSBmb3IgdGhlIGFwcGxpY2F0aW9uXHJcbiAgICogQHBhcmFtOiBsYW5nOiBMYW5ndWFnZSBuYW1lXHJcbiAgICovXHJcbiAgcHVibGljIHNldExhbmd1YWdlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGFwcENvbmZpZy5DVVJSRU5UTEFOR1VBR0UgPSB0aGlzLmxhbmd1YWdlRGF0YVtpbmRleF0uY29kZTtcclxuICAgIHRoaXMuY2hvb3Nlbkxhbmd1YWdlID0gdGhpcy5sYW5ndWFnZURhdGFbaW5kZXhdLmNvZGU7XHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBgZ3JvdXBSTUxhbj0ke3RoaXMuY2hvb3Nlbkxhbmd1YWdlfWA7XHJcbiAgfVxyXG59XHJcbiJdfQ==