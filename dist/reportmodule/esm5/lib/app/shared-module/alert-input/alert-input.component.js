import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AppService } from '../../core-module/service/app.service';
var AlertInputComponent = /** @class */ (function () {
    function AlertInputComponent(appService) {
        this.appService = appService;
        this.inputAlertInfo = new EventEmitter();
    }
    AlertInputComponent.prototype.ngOnInit = function () {
        console.log(this.alertIpData);
    };
    // User entered data getting function
    AlertInputComponent.prototype.onKey = function (event) {
        this.userValue = event.target.value;
    };
    // close popup and send data based on user button click
    AlertInputComponent.prototype.closeModal = function (userAction) {
        var _this = this;
        var alertDetail = {
            userAction: userAction,
            userInput: this.userValue,
        };
        if (userAction && this.userValue != undefined && this.userValue != '') {
            this.alertIpData.requestData['reportSavedAs'] = this.userValue;
            this.appService
                .httpPost(this.alertIpData.requestData, '', environment.CUSTOME_BACKEND_URL + 'save-reports')
                .subscribe(function (data) {
                if ((data === null || data === void 0 ? void 0 : data.responseCode) == 0) {
                    _this.appService.showReportData = undefined;
                    //input validation
                    _this.inputAlertInfo.emit(alertDetail);
                    $('.cls-err').addClass('d-none');
                }
            });
        }
        else {
            $('.cls-err').removeClass('d-none');
        }
        if (!userAction) {
            this.inputAlertInfo.emit(alertDetail);
        }
    };
    AlertInputComponent.ctorParameters = function () { return [
        { type: AppService }
    ]; };
    __decorate([
        Input()
    ], AlertInputComponent.prototype, "alertIpData", void 0);
    __decorate([
        Output()
    ], AlertInputComponent.prototype, "inputAlertInfo", void 0);
    AlertInputComponent = __decorate([
        Component({
            selector: 'app-alert-input',
            template: "<div class=\"cls-alert-conatiner\">\r\n\r\n  <div class=\"cls-bg\" ></div>\r\n\r\n\r\n\r\n  <form>\r\n    <div class=\"content\"><span style=\"display: none;\">grmDashboard app is running!</span> </div>\r\n\r\n    <div class=\"modal cls-model\" id=\"exampleModalLong\" tabindex=\"-1\" role=\"dialog\" data-keyboard=\"false\" data-backdrop=\"static\" \r\n      aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\">\r\n\r\n      <div class=\"modal-dialog cls-form\" role=\"document\">\r\n\r\n        <div class=\"modal-content\">\r\n\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">{{alertIpData.alertHeader}}</h5>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeModal(false)\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n           \r\n          </div>\r\n\r\n          <div class=\"modal-body input-field cls-custom-input cls-defaultIP\">\r\n            <input type=\"text\" (keyup)=\"onKey($event)\">\r\n            <label class=\"position-label\">{{alertIpData.inputLabel}}</label>\r\n            <span class=\"cls-err d-none\"> Enter the valid input </span>\r\n          </div>\r\n          <!--  -->\r\n          <div class=\"cls-save\">\r\n            <button type=\"button\" class=\"btn btn-secondary \"\r\n               (click)=\"closeModal(true)\">{{alertIpData.buttonData}}</button>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </form>\r\n</div>",
            styles: [".cls-alert-conatiner{position:fixed;top:0;left:0;right:0;bottom:0;z-index:2}.cls-alert-conatiner .cls-bg{background:#00000059;position:absolute;top:0;left:0;right:0;bottom:0;z-index:998;width:100%;height:100%;overflow:hidden}.cls-alert-conatiner .cls-model{background-color:unset;max-height:none;display:block;z-index:999;width:37%;height:auto;margin:0 auto;top:50px;box-shadow:none}.cls-alert-conatiner .cls-model .cls-form .cls-save{text-align:center}.cls-alert-conatiner .cls-model .input-field .cls-err{color:red}.cls-alert-conatiner .cls-model .cls-defaultIP .position-label{top:0!important}.cls-alert-conatiner .cls-model .cls-defaultIP .position-label.active{top:-5px!important}.btn-secondary{background:var(--PRIMARYCOLOR);color:var(--TXTWHITE);padding:5px 25px;font-size:16px;box-shadow:unset;transition:.5s}.btn-secondary:hover{box-shadow:inset 10em 0 0 0 var(--TXTWHITE);color:var(--PRIMARYCOLOR)}"]
        })
    ], AlertInputComponent);
    return AlertInputComponent;
}());
export { AlertInputComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcmVwb3J0bW9kdWxlLyIsInNvdXJjZXMiOlsibGliL2FwcC9zaGFyZWQtbW9kdWxlL2FsZXJ0LWlucHV0L2FsZXJ0LWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBT25FO0lBT0UsNkJBQ1UsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUx0QixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFNM0MsQ0FBQztJQUVKLHNDQUFRLEdBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQscUNBQXFDO0lBQ3JDLG1DQUFLLEdBQUwsVUFBTSxLQUFVO1FBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN0QyxDQUFDO0lBRUQsdURBQXVEO0lBQ2hELHdDQUFVLEdBQWpCLFVBQWtCLFVBQW1CO1FBQXJDLGlCQTJCQztRQTFCQyxJQUFJLFdBQVcsR0FBRztZQUNoQixVQUFVLEVBQUUsVUFBVTtZQUN0QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDMUIsQ0FBQztRQUNGLElBQUksVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxFQUFFO1lBQ3JFLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDL0QsSUFBSSxDQUFDLFVBQVU7aUJBQ1osUUFBUSxDQUNQLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUM1QixFQUFFLEVBQ0YsV0FBVyxDQUFDLG1CQUFtQixHQUFHLGNBQWMsQ0FDakQ7aUJBQ0EsU0FBUyxDQUFDLFVBQUMsSUFBSTtnQkFDZCxJQUFHLENBQUEsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLFlBQVksS0FBSSxDQUFDLEVBQUU7b0JBQzFCLEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztvQkFDM0Msa0JBQWtCO29CQUNsQixLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDdEMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDbEM7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNOO2FBQU07WUFDTCxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7Z0JBeENxQixVQUFVOztJQVB2QjtRQUFSLEtBQUssRUFBRTs0REFBeUI7SUFFdkI7UUFBVCxNQUFNLEVBQUU7K0RBQXFDO0lBSG5DLG1CQUFtQjtRQUwvQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLDJqREFBMkM7O1NBRTVDLENBQUM7T0FDVyxtQkFBbUIsQ0FpRC9CO0lBQUQsMEJBQUM7Q0FBQSxBQWpERCxJQWlEQztTQWpEWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcclxuaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUtbW9kdWxlL3NlcnZpY2UvYXBwLnNlcnZpY2UnO1xyXG5kZWNsYXJlIHZhciAkOmFueTtcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtYWxlcnQtaW5wdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWxlcnQtaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0SW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBhbGVydElwRGF0YTogYW55O1xyXG5cclxuICBAT3V0cHV0KCkgaW5wdXRBbGVydEluZm8gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHB1YmxpYyB1c2VyVmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGFwcFNlcnZpY2U6IEFwcFNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5hbGVydElwRGF0YSk7XHJcbiAgfVxyXG5cclxuICAvLyBVc2VyIGVudGVyZWQgZGF0YSBnZXR0aW5nIGZ1bmN0aW9uXHJcbiAgb25LZXkoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy51c2VyVmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgfVxyXG5cclxuICAvLyBjbG9zZSBwb3B1cCBhbmQgc2VuZCBkYXRhIGJhc2VkIG9uIHVzZXIgYnV0dG9uIGNsaWNrXHJcbiAgcHVibGljIGNsb3NlTW9kYWwodXNlckFjdGlvbjogYm9vbGVhbikge1xyXG4gICAgdmFyIGFsZXJ0RGV0YWlsID0ge1xyXG4gICAgICB1c2VyQWN0aW9uOiB1c2VyQWN0aW9uLFxyXG4gICAgICB1c2VySW5wdXQ6IHRoaXMudXNlclZhbHVlLFxyXG4gICAgfTtcclxuICAgIGlmICh1c2VyQWN0aW9uICYmIHRoaXMudXNlclZhbHVlICE9IHVuZGVmaW5lZCAmJiB0aGlzLnVzZXJWYWx1ZSAhPSAnJykge1xyXG4gICAgICB0aGlzLmFsZXJ0SXBEYXRhLnJlcXVlc3REYXRhWydyZXBvcnRTYXZlZEFzJ10gPSB0aGlzLnVzZXJWYWx1ZTtcclxuICAgICAgdGhpcy5hcHBTZXJ2aWNlXHJcbiAgICAgICAgLmh0dHBQb3N0KFxyXG4gICAgICAgICAgdGhpcy5hbGVydElwRGF0YS5yZXF1ZXN0RGF0YSxcclxuICAgICAgICAgICcnLFxyXG4gICAgICAgICAgZW52aXJvbm1lbnQuQ1VTVE9NRV9CQUNLRU5EX1VSTCArICdzYXZlLXJlcG9ydHMnXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICAgIGlmKGRhdGE/LnJlc3BvbnNlQ29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwU2VydmljZS5zaG93UmVwb3J0RGF0YSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgLy9pbnB1dCB2YWxpZGF0aW9uXHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRBbGVydEluZm8uZW1pdChhbGVydERldGFpbCk7XHJcbiAgICAgICAgICAgICQoJy5jbHMtZXJyJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLmNscy1lcnInKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXVzZXJBY3Rpb24pIHtcclxuICAgICAgdGhpcy5pbnB1dEFsZXJ0SW5mby5lbWl0KGFsZXJ0RGV0YWlsKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19