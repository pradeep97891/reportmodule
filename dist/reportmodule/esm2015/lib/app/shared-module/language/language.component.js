import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { appConfig } from '../../core-module/config/app';
/******
 * component : language component
 * created : 17-06-2021
 * Author : Benita Shiny P.
 */
let LanguageComponent = class LanguageComponent {
    constructor() {
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
    ngOnInit() {
    }
    ngOnChanges() {
        if (this.choosenLanguage) {
            appConfig.CURRENTLANGUAGE = this.choosenLanguage;
        }
        else {
            appConfig.CURRENTLANGUAGE = 'EN';
        }
    }
    /**
    * Author: Shailesh R
    * Desc: Set language for the application
    * @param: lang: Language name
    */
    setLanguage(index) {
        appConfig.CURRENTLANGUAGE = this.languageData[index].code;
        this.choosenLanguage = this.languageData[index].code;
        document.cookie = `groupRMLan=${this.choosenLanguage}`;
    }
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
export { LanguageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcmVwb3J0bW9kdWxlLyIsInNvdXJjZXMiOlsibGliL2FwcC9zaGFyZWQtbW9kdWxlL2xhbmd1YWdlL2xhbmd1YWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3pEOzs7O0dBSUc7QUFNSCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQTJCNUI7UUExQkE7O1dBRUc7UUFDSSxpQkFBWSxHQUFHO1lBQ3BCO2dCQUNFLElBQUksRUFBQyxJQUFJO2dCQUNULElBQUksRUFBQyxTQUFTO2FBQ2Y7WUFDRDtnQkFDRSxJQUFJLEVBQUMsSUFBSTtnQkFDVCxJQUFJLEVBQUMsU0FBUzthQUNmO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFDLElBQUk7Z0JBQ1QsSUFBSSxFQUFDLFlBQVk7YUFDbEI7U0FDRixDQUFDO1FBTUY7O1dBRUc7UUFDSSxrQkFBYSxHQUFhLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQztRQUUvRCx3R0FBd0c7UUFDeEcsdUZBQXVGO1FBQ3ZGLGtCQUFrQjtRQUNsQix3Q0FBd0M7UUFDeEMsc0RBQXNEO1FBQ3RELFdBQVc7UUFDWCxzQ0FBc0M7UUFDdEMsSUFBSTtJQUNOLENBQUM7SUFDTSxRQUFRO0lBRWYsQ0FBQztJQUNELFdBQVc7UUFDVCxJQUFHLElBQUksQ0FBQyxlQUFlLEVBQUM7WUFDdEIsU0FBUyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQ2xEO2FBQU07WUFDTCxTQUFTLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUNsQztJQUNILENBQUM7SUFDQTs7OztNQUlFO0lBQ0ksV0FBVyxDQUFDLEtBQWE7UUFDOUIsU0FBUyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMxRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3JELFFBQVEsQ0FBQyxNQUFNLEdBQUcsY0FBYyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekQsQ0FBQztDQUNGLENBQUE7QUFuQ1U7SUFBUixLQUFLLEVBQUU7MERBQTBCO0FBdEJ2QixpQkFBaUI7SUFMN0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGNBQWM7UUFDeEIscXdCQUF3Qzs7S0FFekMsQ0FBQztHQUNXLGlCQUFpQixDQXlEN0I7U0F6RFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGFwcENvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUtbW9kdWxlL2NvbmZpZy9hcHAnO1xyXG4vKioqKioqXHJcbiAqIGNvbXBvbmVudCA6IGxhbmd1YWdlIGNvbXBvbmVudFxyXG4gKiBjcmVhdGVkIDogMTctMDYtMjAyMVxyXG4gKiBBdXRob3IgOiBCZW5pdGEgU2hpbnkgUC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWxhbmd1YWdlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbGFuZ3VhZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xhbmd1YWdlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExhbmd1YWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvKipcclxuICAgKiBsYW5ndWFnZXMgbGlzdFxyXG4gICAqL1xyXG4gIHB1YmxpYyBsYW5ndWFnZURhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6J0VOJyxcclxuICAgICAgbmFtZTonRW5nbGlzaCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6J0FSJyxcclxuICAgICAgbmFtZTonU3BhbmlzaCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvZGU6J1BUJyxcclxuICAgICAgbmFtZTonUG9ydHVndWVzZSdcclxuICAgIH1cclxuICBdO1xyXG4gIC8qKlxyXG4gICAqIERlc2M6IExhbmd1YWdlIHZhbHVlXHJcbiAgICovXHJcbiAgLy8gcHVibGljIGNob29zZW5MYW5ndWFnZSA9ICdFTic7XHJcbiAgQElucHV0KCkgY2hvb3Nlbkxhbmd1YWdlIDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGRpc3BsYXkgbGFuZ3VhZ2Ugb3B0aW9uXHJcbiAgICovXHJcbiAgcHVibGljIGRpc3BsYXlPcHRpb24gOiBib29sZWFuID0gYXBwQ29uZmlnLkRJU1BMQVlsQU5HVUFHRU9QVElPTjtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIGNvbnN0IGxhbmd1YWdlID0gIGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnwgKScgKyAnZ3JvdXBSTUxhbicgKyAnPShbXjtdKyknKSkgYXMgc3RyaW5nW107XHJcbiAgICAvLyAvLyBpZiBjb29raWUgZXhpc3Qgc2V0IHRoZSBjb29raWUgbGFuZ3VhZ2UgZWxzZSBzZXQgZGVmYXVsdCBsYWd1YWdlIGFzIEVOKCBFbmdsaXNoIClcclxuICAgIC8vIGlmIChsYW5ndWFnZSkge1xyXG4gICAgLy8gICB0aGlzLmNob29zZW5MYW5ndWFnZSA9IGxhbmd1YWdlWzJdO1xyXG4gICAgLy8gICBhcHBDb25maWcuQ1VSUkVOVExBTkdVQUdFID0gdGhpcy5jaG9vc2VuTGFuZ3VhZ2U7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICBhcHBDb25maWcuQ1VSUkVOVExBTkdVQUdFID0gJ0VOJztcclxuICAgIC8vIH1cclxuICB9XHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgXHJcbiAgfVxyXG4gIG5nT25DaGFuZ2VzKCl7XHJcbiAgICBpZih0aGlzLmNob29zZW5MYW5ndWFnZSl7XHJcbiAgICAgIGFwcENvbmZpZy5DVVJSRU5UTEFOR1VBR0UgPSB0aGlzLmNob29zZW5MYW5ndWFnZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFwcENvbmZpZy5DVVJSRU5UTEFOR1VBR0UgPSAnRU4nO1xyXG4gICAgfVxyXG4gIH1cclxuICAgLyoqXHJcbiAgICogQXV0aG9yOiBTaGFpbGVzaCBSXHJcbiAgICogRGVzYzogU2V0IGxhbmd1YWdlIGZvciB0aGUgYXBwbGljYXRpb25cclxuICAgKiBAcGFyYW06IGxhbmc6IExhbmd1YWdlIG5hbWVcclxuICAgKi9cclxuICBwdWJsaWMgc2V0TGFuZ3VhZ2UoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgYXBwQ29uZmlnLkNVUlJFTlRMQU5HVUFHRSA9IHRoaXMubGFuZ3VhZ2VEYXRhW2luZGV4XS5jb2RlO1xyXG4gICAgdGhpcy5jaG9vc2VuTGFuZ3VhZ2UgPSB0aGlzLmxhbmd1YWdlRGF0YVtpbmRleF0uY29kZTtcclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IGBncm91cFJNTGFuPSR7dGhpcy5jaG9vc2VuTGFuZ3VhZ2V9YDtcclxuICB9XHJcbn1cclxuIl19