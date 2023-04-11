import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
/**
 * Author : Naveen
 * Desc :  alert
 */
var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
        /**
         * get image path
         */
        this.userInput = {};
        /**
        * output data
        */
        this.choosedVal = new EventEmitter();
        /**
        * Desc: on closing alert add class close design
        */
        this.toClose = false;
    }
    AlertComponent.prototype.ngOnInit = function () {
        $('body').css("overflow", "hidden");
    };
    AlertComponent.prototype.ngOnChanges = function () {
    };
    AlertComponent.prototype.ngAfterViewInit = function () {
        feather.replace();
    };
    /**
     * close modal
     */
    AlertComponent.prototype.closeModal = function (val) {
        var _this = this;
        var dataVal = {
            flag: val
        };
        this.toClose = true;
        // $('.cls-popup').addClass('close-ani');
        $('#fn-background').removeClass('cls-background');
        $('body').css("overflow", "auto");
        setTimeout(function () {
            _this.choosedVal.emit(dataVal);
        }, 400);
    };
    /**
    * removeError
    */
    AlertComponent.prototype.removeError = function () {
        if ($('#reason').val().length > 0) {
            $('#reason').removeClass('cls-error');
        }
    };
    __decorate([
        Input()
    ], AlertComponent.prototype, "userInput", void 0);
    __decorate([
        Output()
    ], AlertComponent.prototype, "choosedVal", void 0);
    AlertComponent = __decorate([
        Component({
            selector: 'app-alert',
            template: "<div class=\"cls-alert-container\">\r\n  <!-- background  -->\r\n  <span id=\"fn-background\" class=\"cls-background\"  (click)=\"closeModal(false)\"></span>\r\n  <!-- alert-container -->\r\n  <div class=\"cls-popup\" [ngClass]=\"toClose ? 'close-ani' : ''\">\r\n    <span class=\"cls-top-close\" (click)=\"closeModal(false)\">\r\n      <em class=\"icon-12-reject\"></em>\r\n    </span>\r\n    <!-- Alert body -->\r\n    <div class=\"cls-content cls-alert-icon mt-1\">\r\n       <!-- Button Design -->\r\n      <div class=\"text-center cls-btns mt-3 mb-5 px-4\">\r\n        <ng-container>\r\n          <!-- <em data-feather=\"alert-triangle\"></em>\r\n          <em data-feather=\"bell\"></em> -->\r\n          <span  class=\"d-block cls-feathericon\" data-feather=\"alert-triangle\"></span>\r\n          <!-- <button type=\"button\" class=\"btn cls-custombtn ml-0 text-center waves-effect waves-light mr-3 p-0\"> -->\r\n          <span class=\"px-4 text-center py-1 mr-3\">\r\n            {{userInput.title | translate }}\r\n          </span>\r\n        <!-- </button> -->\r\n          <div class=\"mt-3 text-right cls-footer\">\r\n            <ng-container *ngFor=\"let action of userInput.button; last as last\">\r\n              <button type=\"button\" class=\"btn cls-custom-btn\" [ngClass]=\"{'cls-submit' : action.status === true,'cls-secondary' : action.status === false, 'mr-0': last}\" (click)=\"closeModal(action.status)\"><span>{{action.label | translate }}</span></button>\r\n            </ng-container>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
            styles: ["@keyframes fadeIn-popup{60%,75%,90%,from,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:translate3d(0,0,0)}}.cls-background{position:fixed;top:0;left:0;right:0;bottom:0;background:var(--TXTBLACK);opacity:.5;z-index:1000}.cls-popup{animation:1s linear forwards fadeIn-popup;transition:.5s;margin:0 auto;padding-bottom:30px;width:36%;position:fixed;z-index:1001;background:var(--white);top:30%;left:0;right:0;border-radius:8px}.cls-popup textarea{margin-top:7px;min-height:unset;border:1px solid #e6e6e6;border-radius:4px;width:100%;padding:10px}.cls-popup .cls-error{border:1px solid red}.cls-popup .cls-mandatory{color:red}.cls-popup .cls-reason{display:block;font-size:14px!important;text-align:left;margin-top:15px}.cls-popup .cls-footer{position:absolute;bottom:0;left:0;background:#e6e6e6;width:100%;border-bottom-left-radius:8px;border-bottom-right-radius:8px;margin-top:8px;padding:15px 20px}.cls-popup .cls-feathericon{color:red;width:100px;height:39px;margin:0 auto 10px}.cls-popup .cls-icon{width:30px;margin:0 auto}.cls-popup .cls-mgs{font-size:14px;color:var(--light)}.cls-popup .cls-mgs.cls-clr-blk{color:var(--dark)!important}.cls-popup .cls-custombtn{height:30px!important}.cls-popup .cls-custombtn span{font-size:14px}.cls-popup .cls-custombtn span em{font-size:12px;top:31%;right:10%;padding:0}.cls-popup .cls-top-close{cursor:pointer;position:absolute;width:18px;height:18px;background:red;display:inline-block;right:-6px;top:-6px;border-radius:4px;color:var(--TXTWHITE);text-align:center;padding:2px;border:1px solid #fff}.cls-popup .cls-top-close em{font-size:9px;color:var(--TXTWHITE);vertical-align:text-top;font-weight:600}.cls-popup .cls-top-close:hover{box-shadow:0 2px 10px 0 rgba(0,0,0,.1);transform:scale(1.1)}.cls-popup .cls-alert-icon em{display:block;margin:0 auto;font-size:40px;padding:10px}.cls-popup .cls-btns{margin:30px 0 35px}.cls-popup .cls-btns .cls-custom-btn span{font:unset}.cls-popup .cls-btns .cls-btn-secondary{padding:7px 25px!important}.cls-popup .cls-content{margin-top:45px;margin-left:auto;margin-right:auto;min-width:350px;text-align:center}.cls-popup .cls-content span{font-size:19px}.cls-popup .cls-close{position:absolute;top:15px;right:15px;cursor:pointer}:host(.cls-alert) .cls-close{display:none!important}.close-ani{display:block;animation:.5s forwards fadeout;transition:.5s}.close-ani .cls-background{display:none}.cls-submit{background:var(--PRIMARYCOLOR);color:var(--TXTWHITE);padding:0 25px;font-size:16px;box-shadow:unset;transition:.5s}.cls-submit:hover{box-shadow:inset 10em 0 0 0 var(--TXTWHITE);color:var(--PRIMARYCOLOR)}.cls-secondary{background:var(--BGWHITE);color:var(--PRIMARYCOLOR);padding:0 25px;font-size:16px;box-shadow:unset;transition:.5s;margin-right:15px}@keyframes fadeout{0%{transform:scale(1);transform:scale(1) translate3d(0,0,0)}5%{opacity:.9;transform:scale(1.1)}100%{transform:scale(0);transform:scale(0) translate3d(0,0,0)}}@media only screen and (max-width:480px){.cls-alert-container .cls-popup{width:80%}.cls-alert-container .cls-popup .cls-content{min-width:unset;width:100%}.cls-alert-container .cls-popup .cls-content span{font-size:15px!important;padding:0!important;margin:0!important}.cls-alert-container .cls-popup .cls-btns .cls-btn-primary,.cls-alert-container .cls-popup .cls-btns .cls-btn-secondary{padding:7px 15px!important}.cls-alert-container .cls-popup .cls-footer{padding:10px 20px}.cls-alert-container .cls-popup textarea{width:100%;float:left;margin-bottom:44px}}@media (min-width:481px) and (max-width:766px){.cls-alert-container .cls-popup{width:80%;top:10%}.cls-alert-container .cls-popup .cls-content{min-width:unset;width:100%}.cls-alert-container .cls-popup .cls-content span{font-size:15px;padding:0!important;margin:0!important}.cls-alert-container .cls-popup .cls-btns .cls-btn-primary,.cls-alert-container .cls-popup .cls-btns .cls-btn-secondary{padding:7px 15px!important}.cls-alert-container .cls-popup .cls-footer{padding:10px 20px}.cls-alert-container .cls-popup textarea{width:100%;float:left;margin-bottom:34px;padding:5px}}@media (min-width:767px) and (max-width:1024px){.cls-popup{min-width:66%}.cls-popup .cls-custom-btn.cls-btn-primary{padding:7px 25px!important}.cls-popup textarea{padding:5px}}"]
        })
    ], AlertComponent);
    return AlertComponent;
}());
export { AlertComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcmVwb3J0bW9kdWxlLyIsInNvdXJjZXMiOlsibGliL2FwcC9zaGFyZWQtbW9kdWxlL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBUyxLQUFLLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc1RTs7O0dBR0c7QUFNSDtJQWNFO1FBWkY7O1dBRUc7UUFDZSxjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BDOztVQUVFO1FBQ2UsZUFBVSxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hFOztVQUVFO1FBQ0ssWUFBTyxHQUFZLEtBQUssQ0FBQztJQUNoQixDQUFDO0lBRVYsaUNBQVEsR0FBZjtRQUNFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDTSxvQ0FBVyxHQUFsQjtJQUVBLENBQUM7SUFDTSx3Q0FBZSxHQUF0QjtRQUNFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQ0Q7O09BRUc7SUFDSSxtQ0FBVSxHQUFqQixVQUFrQixHQUFZO1FBQTlCLGlCQVdDO1FBVkMsSUFBTSxPQUFPLEdBQVM7WUFDcEIsSUFBSSxFQUFHLEdBQUc7U0FDWCxDQUFBO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIseUNBQXlDO1FBQ3pDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7SUFDRDs7TUFFRTtJQUNLLG9DQUFXLEdBQWxCO1FBQ0UsSUFBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRztZQUNqQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQTFDUTtRQUFSLEtBQUssRUFBRTtxREFBNEI7SUFJMUI7UUFBVCxNQUFNLEVBQUU7c0RBQStEO0lBVDdELGNBQWM7UUFMMUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsK2xEQUFxQzs7U0FFdEMsQ0FBQztPQUNXLGNBQWMsQ0FnRDFCO0lBQUQscUJBQUM7Q0FBQSxBQWhERCxJQWdEQztTQWhEWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsSW5wdXQsT3V0cHV0LEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5kZWNsYXJlIHZhciAkIDogYW55O1xyXG5kZWNsYXJlIHZhciBmZWF0aGVyOiBhbnk7XHJcbi8qKlxyXG4gKiBBdXRob3IgOiBOYXZlZW5cclxuICogRGVzYyA6ICBhbGVydFxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtYWxlcnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWxlcnQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuLyoqXHJcbiAqIGdldCBpbWFnZSBwYXRoXHJcbiAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB1c2VySW5wdXQgOmFueSA9IHt9O1xyXG4gIC8qKlxyXG4gICogb3V0cHV0IGRhdGFcclxuICAqL1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2hvb3NlZFZhbDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIC8qKlxyXG4gICogRGVzYzogb24gY2xvc2luZyBhbGVydCBhZGQgY2xhc3MgY2xvc2UgZGVzaWduIFxyXG4gICovXHJcbiAgcHVibGljIHRvQ2xvc2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKSB7IFxyXG4gICAgJCgnYm9keScpLmNzcyhcIm92ZXJmbG93XCIsIFwiaGlkZGVuXCIpO1xyXG4gIH1cclxuICBwdWJsaWMgbmdPbkNoYW5nZXMoKXtcclxuXHJcbiAgfVxyXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSA6IHZvaWQge1xyXG4gICAgZmVhdGhlci5yZXBsYWNlKCk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIGNsb3NlIG1vZGFsXHJcbiAgICovXHJcbiAgcHVibGljIGNsb3NlTW9kYWwodmFsOiBib29sZWFuKSA6IHZvaWQge1xyXG4gICAgY29uc3QgZGF0YVZhbCA6IGFueSA9IHtcclxuICAgICAgZmxhZyA6IHZhbFxyXG4gICAgfVxyXG4gICAgdGhpcy50b0Nsb3NlID0gdHJ1ZTtcclxuICAgIC8vICQoJy5jbHMtcG9wdXAnKS5hZGRDbGFzcygnY2xvc2UtYW5pJyk7XHJcbiAgICAkKCcjZm4tYmFja2dyb3VuZCcpLnJlbW92ZUNsYXNzKCdjbHMtYmFja2dyb3VuZCcpO1xyXG4gICAgJCgnYm9keScpLmNzcyhcIm92ZXJmbG93XCIsIFwiYXV0b1wiKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNob29zZWRWYWwuZW1pdChkYXRhVmFsKTtcclxuICAgIH0sIDQwMCk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICogcmVtb3ZlRXJyb3JcclxuICAqL1xyXG4gIHB1YmxpYyByZW1vdmVFcnJvcigpIDogdm9pZCB7XHJcbiAgICBpZigkKCcjcmVhc29uJykudmFsKCkubGVuZ3RoID4gMCApIHtcclxuICAgICAgJCgnI3JlYXNvbicpLnJlbW92ZUNsYXNzKCdjbHMtZXJyb3InKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19