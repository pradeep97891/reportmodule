import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AppService } from '../../core-module/service/app.service';
let AlertInputComponent = class AlertInputComponent {
    constructor(appService) {
        this.appService = appService;
        this.inputAlertInfo = new EventEmitter();
    }
    ngOnInit() {
        console.log(this.alertIpData);
    }
    // User entered data getting function
    onKey(event) {
        this.userValue = event.target.value;
    }
    // close popup and send data based on user button click
    closeModal(userAction) {
        var alertDetail = {
            userAction: userAction,
            userInput: this.userValue,
        };
        if (userAction && this.userValue != undefined && this.userValue != '') {
            this.alertIpData.requestData['reportSavedAs'] = this.userValue;
            this.appService
                .httpPost(this.alertIpData.requestData, '', environment.CUSTOME_BACKEND_URL + 'save-reports')
                .subscribe((data) => {
                if ((data === null || data === void 0 ? void 0 : data.responseCode) == 0) {
                    this.appService.showReportData = undefined;
                    //input validation
                    this.inputAlertInfo.emit(alertDetail);
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
    }
};
AlertInputComponent.ctorParameters = () => [
    { type: AppService }
];
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
export { AlertInputComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcmVwb3J0bW9kdWxlLyIsInNvdXJjZXMiOlsibGliL2FwcC9zaGFyZWQtbW9kdWxlL2FsZXJ0LWlucHV0L2FsZXJ0LWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBT25FLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBTzlCLFlBQ1UsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUx0QixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFNM0MsQ0FBQztJQUVKLFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQscUNBQXFDO0lBQ3JDLEtBQUssQ0FBQyxLQUFVO1FBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN0QyxDQUFDO0lBRUQsdURBQXVEO0lBQ2hELFVBQVUsQ0FBQyxVQUFtQjtRQUNuQyxJQUFJLFdBQVcsR0FBRztZQUNoQixVQUFVLEVBQUUsVUFBVTtZQUN0QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDMUIsQ0FBQztRQUNGLElBQUksVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxFQUFFO1lBQ3JFLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDL0QsSUFBSSxDQUFDLFVBQVU7aUJBQ1osUUFBUSxDQUNQLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUM1QixFQUFFLEVBQ0YsV0FBVyxDQUFDLG1CQUFtQixHQUFHLGNBQWMsQ0FDakQ7aUJBQ0EsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ2xCLElBQUcsQ0FBQSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsWUFBWSxLQUFJLENBQUMsRUFBRTtvQkFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO29CQUMzQyxrQkFBa0I7b0JBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUN0QyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNsQztZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ047YUFBTTtZQUNMLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDckM7UUFDRCxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUF6Q3VCLFVBQVU7O0FBUHZCO0lBQVIsS0FBSyxFQUFFO3dEQUF5QjtBQUV2QjtJQUFULE1BQU0sRUFBRTsyREFBcUM7QUFIbkMsbUJBQW1CO0lBTC9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsMmpEQUEyQzs7S0FFNUMsQ0FBQztHQUNXLG1CQUFtQixDQWlEL0I7U0FqRFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uLy4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlLW1vZHVsZS9zZXJ2aWNlL2FwcC5zZXJ2aWNlJztcclxuZGVjbGFyZSB2YXIgJDphbnk7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWFsZXJ0LWlucHV0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LWlucHV0LmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBwdWJsaWMgYWxlcnRJcERhdGE6IGFueTtcclxuXHJcbiAgQE91dHB1dCgpIGlucHV0QWxlcnRJbmZvID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwdWJsaWMgdXNlclZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBhcHBTZXJ2aWNlOiBBcHBTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuYWxlcnRJcERhdGEpO1xyXG4gIH1cclxuXHJcbiAgLy8gVXNlciBlbnRlcmVkIGRhdGEgZ2V0dGluZyBmdW5jdGlvblxyXG4gIG9uS2V5KGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMudXNlclZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLy8gY2xvc2UgcG9wdXAgYW5kIHNlbmQgZGF0YSBiYXNlZCBvbiB1c2VyIGJ1dHRvbiBjbGlja1xyXG4gIHB1YmxpYyBjbG9zZU1vZGFsKHVzZXJBY3Rpb246IGJvb2xlYW4pIHtcclxuICAgIHZhciBhbGVydERldGFpbCA9IHtcclxuICAgICAgdXNlckFjdGlvbjogdXNlckFjdGlvbixcclxuICAgICAgdXNlcklucHV0OiB0aGlzLnVzZXJWYWx1ZSxcclxuICAgIH07XHJcbiAgICBpZiAodXNlckFjdGlvbiAmJiB0aGlzLnVzZXJWYWx1ZSAhPSB1bmRlZmluZWQgJiYgdGhpcy51c2VyVmFsdWUgIT0gJycpIHtcclxuICAgICAgdGhpcy5hbGVydElwRGF0YS5yZXF1ZXN0RGF0YVsncmVwb3J0U2F2ZWRBcyddID0gdGhpcy51c2VyVmFsdWU7XHJcbiAgICAgIHRoaXMuYXBwU2VydmljZVxyXG4gICAgICAgIC5odHRwUG9zdChcclxuICAgICAgICAgIHRoaXMuYWxlcnRJcERhdGEucmVxdWVzdERhdGEsXHJcbiAgICAgICAgICAnJyxcclxuICAgICAgICAgIGVudmlyb25tZW50LkNVU1RPTUVfQkFDS0VORF9VUkwgKyAnc2F2ZS1yZXBvcnRzJ1xyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBpZihkYXRhPy5yZXNwb25zZUNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcFNlcnZpY2Uuc2hvd1JlcG9ydERhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIC8vaW5wdXQgdmFsaWRhdGlvblxyXG4gICAgICAgICAgICB0aGlzLmlucHV0QWxlcnRJbmZvLmVtaXQoYWxlcnREZXRhaWwpO1xyXG4gICAgICAgICAgICAkKCcuY2xzLWVycicpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5jbHMtZXJyJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgfVxyXG4gICAgaWYgKCF1c2VyQWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRBbGVydEluZm8uZW1pdChhbGVydERldGFpbCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==