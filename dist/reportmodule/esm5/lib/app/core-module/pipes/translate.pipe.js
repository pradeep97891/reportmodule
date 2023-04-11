import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
import { appConfig } from '../config/app';
import * as english from '../../assets/languages/english/language.json';
import * as spanish from '../../assets/languages/spanish/language.json';
import * as portuguese from '../../assets/languages/portuguese/language.json';
// tslint:disable-next-line: no-any
var lang = {
    EN: english,
    AR: spanish,
    PT: portuguese
};
/**
 * Author: Shailesh R
 * Desc: pipe to perform pipe transform that performs language translation
 */
var TranslatePipe = /** @class */ (function () {
    function TranslatePipe() {
    }
    /**
      * Author: Shailesh R
      * Desc: Translate language based on JSON key
      */
    TranslatePipe.prototype.transform = function (key) {
        return lang[appConfig.CURRENTLANGUAGE] !== undefined ? lang[appConfig.CURRENTLANGUAGE].default[key] || key : key;
    };
    TranslatePipe = __decorate([
        Pipe({
            name: 'translate',
            pure: false
        })
    ], TranslatePipe);
    return TranslatePipe;
}());
export { TranslatePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9yZXBvcnRtb2R1bGUvIiwic291cmNlcyI6WyJsaWIvYXBwL2NvcmUtbW9kdWxlL3BpcGVzL3RyYW5zbGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sS0FBSyxPQUFPLE1BQU0sOENBQThDLENBQUM7QUFDeEUsT0FBTyxLQUFLLE9BQU8sTUFBTSw4Q0FBOEMsQ0FBQztBQUN4RSxPQUFPLEtBQUssVUFBVSxNQUFNLGlEQUFpRCxDQUFDO0FBQzlFLG1DQUFtQztBQUNuQyxJQUFNLElBQUksR0FBUTtJQUNoQixFQUFFLEVBQUUsT0FBTztJQUNYLEVBQUUsRUFBRSxPQUFPO0lBQ1gsRUFBRSxFQUFFLFVBQVU7Q0FDZixDQUFDO0FBQ0Y7OztHQUdHO0FBS0g7SUFBQTtJQVNBLENBQUM7SUFSQTs7O1FBR0k7SUFDSSxpQ0FBUyxHQUFoQixVQUFpQixHQUFXO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ25ILENBQUM7SUFQVSxhQUFhO1FBSnpCLElBQUksQ0FBQztZQUNKLElBQUksRUFBRSxXQUFXO1lBQ2pCLElBQUksRUFBRSxLQUFLO1NBQ1osQ0FBQztPQUNXLGFBQWEsQ0FTekI7SUFBRCxvQkFBQztDQUFBLEFBVEQsSUFTQztTQVRZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGFwcENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9hcHAnO1xyXG5pbXBvcnQgKiBhcyBlbmdsaXNoIGZyb20gJy4uLy4uL2Fzc2V0cy9sYW5ndWFnZXMvZW5nbGlzaC9sYW5ndWFnZS5qc29uJztcclxuaW1wb3J0ICogYXMgc3BhbmlzaCBmcm9tICcuLi8uLi9hc3NldHMvbGFuZ3VhZ2VzL3NwYW5pc2gvbGFuZ3VhZ2UuanNvbic7XHJcbmltcG9ydCAqIGFzIHBvcnR1Z3Vlc2UgZnJvbSAnLi4vLi4vYXNzZXRzL2xhbmd1YWdlcy9wb3J0dWd1ZXNlL2xhbmd1YWdlLmpzb24nO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueVxyXG5jb25zdCBsYW5nOiBhbnkgPSB7XHJcbiAgRU46IGVuZ2xpc2gsXHJcbiAgQVI6IHNwYW5pc2gsXHJcbiAgUFQ6IHBvcnR1Z3Vlc2VcclxufTtcclxuLyoqXHJcbiAqIEF1dGhvcjogU2hhaWxlc2ggUlxyXG4gKiBEZXNjOiBwaXBlIHRvIHBlcmZvcm0gcGlwZSB0cmFuc2Zvcm0gdGhhdCBwZXJmb3JtcyBsYW5ndWFnZSB0cmFuc2xhdGlvblxyXG4gKi9cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICd0cmFuc2xhdGUnLFxyXG4gIHB1cmU6IGZhbHNlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAvKipcclxuICAgKiBBdXRob3I6IFNoYWlsZXNoIFJcclxuICAgKiBEZXNjOiBUcmFuc2xhdGUgbGFuZ3VhZ2UgYmFzZWQgb24gSlNPTiBrZXlcclxuICAgKi9cclxuICBwdWJsaWMgdHJhbnNmb3JtKGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBsYW5nW2FwcENvbmZpZy5DVVJSRU5UTEFOR1VBR0VdICE9PSB1bmRlZmluZWQgPyBsYW5nW2FwcENvbmZpZy5DVVJSRU5UTEFOR1VBR0VdLmRlZmF1bHRba2V5XSB8fCBrZXkgOiBrZXk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=