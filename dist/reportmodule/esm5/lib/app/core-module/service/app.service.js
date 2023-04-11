import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { saveAs } from 'file-saver';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.createReports = true;
        this.isEditReport = undefined;
        this.showReportData = undefined;
        this.selectedMenu = 'groupRequest';
        this.currentBasedOn = 'group-request';
        this.chartModules = {
            request_trend_year: 'request-trend',
            request_trend_comparision: 'request-trend-comparison',
            revenue_analysis: 'revenue-analysis',
            pipeline_departure: 'pipeline-departure',
        };
    }
    AppService.prototype.expandList = function (id, listData) {
        throw new Error('Method not implemented.');
    };
    //Common list service for pagination
    AppService.prototype.listService = function (list, pagination) {
        if (pagination === void 0) { pagination = true; }
        list['currentPage'] =
            list['currentPage'] == undefined ? 1 : list['currentPage'];
        list['list_body'] = list['list_body'] != null ? list['list_body'] : [];
        list['totalItems'] = list['list_body'].length;
        list['default_Parms']['page'] =
            list['default_Parms']['page'] == 0 ? 1 : list['default_Parms']['page'];
        list['noofPages'] = Math.ceil(list['list_body'].length / list['default_Parms']['itemsPerPage']);
        list['currentPage'] =
            list['currentPage'] > list['noofPages']
                ? list['noofPages']
                : list['currentPage'];
        list['default_Parms']['page'] =
            list['default_Parms']['page'] > list['noofPages']
                ? list['noofPages']
                : list['default_Parms']['page'];
        if (pagination == true &&
            list['list_body'].length > list['default_Parms']['itemsPerPage'])
            list['default_data'] = list['list_body'].slice((list['default_Parms']['page'] - 1) *
                list['default_Parms']['itemsPerPage'], list['default_Parms']['page'] * list['default_Parms']['itemsPerPage']);
        else
            list['default_data'] = list['list_body'];
        return list;
    };
    // tslint:disable-next-line: no-any
    AppService.prototype.httpPost = function (inputData, actionName, url) {
        // AES encryption
        // tslint:disable-next-line:max-line-length
        var data = CryptoJS.AES.encrypt(JSON.stringify(inputData), CryptoJS.enc.Base64.parse(environment.encryptionKey), { mode: CryptoJS.mode.ECB }).toString();
        var formData = new FormData();
        formData.append('data', data);
        var backEndURL = url;
        if (actionName == 'get' || actionName == 'GET') {
            return this.http.get(backEndURL).pipe(function (data) {
                var responseData = {};
                responseData = data;
                return responseData;
            });
        }
        else {
            return this.http
                .post(backEndURL, formData, {
                observe: 'response',
                responseType: 'text',
            })
                .pipe(map(function (data) {
                var responseData = {};
                var response;
                if (typeof data.body == 'string') {
                    response = JSON.parse(CryptoJS.AES.decrypt(data.body.replace(/^"(.*)"$/, '$1'), CryptoJS.enc.Base64.parse(environment.decryptionKey), { mode: CryptoJS.mode.ECB }).toString(CryptoJS.enc.Utf8));
                }
                else {
                    response = data.body;
                }
                responseData = response;
                responseData.status = data.status;
                return responseData;
            }));
        }
    };
    /**
     * Expand all list row
     * @param listData
     */
    AppService.prototype.expandContainerAll = function (listData) {
        if (this.expandAll.length == 0) {
            for (var i = 0; i < listData['default_data'].length; i++) {
                var flag = $('#expandContainer' + i).hasClass('d-none')
                    ? true
                    : false;
                this.expandAll.push(flag);
            }
        }
        if (this.expandAll.indexOf(false) == -1) {
            for (var i = 0; i < listData['default_data'].length; i++) {
                this.expandAll[i] = false;
                $('#expandclose' + i)
                    .removeClass('icon-71-infoup')
                    .addClass('icon-72-infodown');
            }
            $('.cls-sublist').removeClass('d-none').addClass('d-flex');
            listData.default_Parms.expand = true;
        }
        else {
            $('.cls-sublist').removeClass('d-flex').addClass('d-none');
            for (var i = 0; i < listData['default_data'].length; i++) {
                this.expandAll[i] = true;
                listData.default_Parms.expand = false;
                $('#expandclose' + i)
                    .removeClass('icon-72-infodown')
                    .addClass('icon-71-infoup');
            }
        }
    };
    AppService.prototype.dashboardService = function (moduleName, inputData, actionName) {
        // AES encryption
        var data = CryptoJS.AES.encrypt(JSON.stringify(inputData), CryptoJS.enc.Base64.parse(environment.encryptionKey), { mode: CryptoJS.mode.ECB }).toString();
        var formData = new FormData();
        formData.append('data', data);
        var backEndURL = environment.BACKEND_URL + '' + this.chartModules[moduleName];
        return this.http
            .post(backEndURL, formData, {
            observe: 'response',
            responseType: 'text',
        })
            .pipe(map(function (data) {
            var responseData = {};
            var response;
            if (typeof data.body == 'string') {
                response = JSON.parse(CryptoJS.AES.decrypt(data.body.replace(/^"(.*)"$/, '$1'), CryptoJS.enc.Base64.parse(environment.decryptionKey), { mode: CryptoJS.mode.ECB }).toString(CryptoJS.enc.Utf8));
            }
            else {
                response = data.body;
            }
            responseData = response;
            responseData.status = data.status;
            return responseData;
        }));
    };
    // download service
    AppService.prototype.downloadExcel = function (inputData, actionName, url, fileName) {
        // AES encryption
        // tslint:disable-next-line:max-line-length
        var data = CryptoJS.AES.encrypt(JSON.stringify(inputData), CryptoJS.enc.Base64.parse(environment.encryptionKey), { mode: CryptoJS.mode.ECB }).toString();
        var formData = new FormData();
        formData.append('data', data);
        this.http
            .post(url, formData, { responseType: 'blob' })
            .subscribe(function (response) {
            // saveAs(response, fileName + '.xlsx');
        });
    };
    AppService.prototype.initAuth = function () {
        return this.httpPost({
            reportName: 'init-auth',
            "requestUrl": "http://dev-rm.grouprm.net/59b4ba060b7339b26b7589c2c37ae49e/#udspMyA+BSzlCPD6A0UWCxPYdUcYa6aR5QT8LW3h9ibx7Ym9pi4KaqcGbxdNSRZ7kMfH0vcgIepuQwV5QhubuGQm/USWDvTIip8NLewkbklDSq6MfpXg6SJ+mzcBdgRE3eH7Ro56y6jO/avgDNi64g==",
        }, '', environment.COMMON_URL + 'init-auth').toPromise();
    };
    AppService.prototype.getSubModules = function (requestData) {
        return this.httpPost(requestData, 'POST', environment.ROOT_BACKEND_URL + 'conversion-report/get-all-report-types');
    };
    AppService.prototype.getDropDownData = function (requestData, url) {
        return this.httpPost(requestData, 'POST', environment.COMMON_URL + url);
    };
    AppService.prototype.handelShowReport = function (requestData, url) {
        return this.httpPost(requestData, 'POST', environment.ROOT_BACKEND_URL + 'conversion-report/' + url);
    };
    // user Action Log
    AppService.prototype.viewUserActionLog = function (requestData) {
        return this.httpPost(requestData, 'POST', 'https://dev-b2bwallet.infinitisoftware.net/user-action/view-user-action-log');
    };
    // Conversion Report
    AppService.prototype.getAllFieldsConversion = function (requestData) {
        return this.httpPost(requestData, 'POST', environment.ROOT_BACKEND_URL +
            'conversion-report/get-all-fields-conditions');
    };
    AppService.prototype.handelSaveReportConversion = function (requestData) {
        return this.httpPost(requestData, '', environment.ROOT_BACKEND_URL + 'conversion-report/save-reports');
    };
    AppService.prototype.getSavedReports = function (requestData) {
        return this.httpPost(requestData, '', environment.ROOT_BACKEND_URL + 'custom-report/get-saved-reports');
    };
    // Schedule Report
    AppService.prototype.scheduleSavedReports = function (requestData) {
        return this.httpPost(requestData, '', environment.ROOT_BACKEND_URL + 'conversion-report/schedule-saved-reports');
    };
    AppService.prototype.getScheduleDropdownData = function (requestData, url) {
        return this.httpPost(requestData, 'POST', environment.COMMON_URL + url);
    };
    AppService.prototype.getTravelAgency = function (requestData) {
        return this.httpPost(requestData, '', environment.COMMON_URL + 'get-travel-agency-possible-values');
    };
    AppService.prototype.getUserType = function (requestData) {
        return this.httpPost(requestData, '', environment.COMMON_URL + 'get-user-type-values');
    };
    AppService.prototype.getCountryVal = function (requestData) {
        return this.httpPost(requestData, '', environment.COMMON_URL + requestData.reportName);
    };
    AppService.prototype.getSectorVal = function (requestData) {
        return this.httpPost(requestData, '', environment.COMMON_URL + 'get-sector-possible-values');
    };
    AppService.prototype.getSectorPosVal = function (requestData) {
        return this.httpPost(requestData, '', environment.COMMON_URL + 'get-sector-possible-values');
    };
    AppService.prototype.getposVal = function (requestData) {
        return this.httpPost(requestData, '', environment.COMMON_URL + 'get-pos-possible-values');
    };
    AppService.prototype.getStatusRequest = function (requestData) {
        return this.httpPost(requestData, '', environment.COMMON_URL + 'get-status-of-request-values');
    };
    AppService.prototype.getStatusRequestVal = function (requestData) {
        return this.httpPost(requestData, '', environment.COMMON_URL + 'get-status-of-request-values');
    };
    AppService.prototype.getCurrencyValues = function (requestData) {
        return this.httpPost(requestData, '', environment.COMMON_URL + 'get-currency-possible-values');
    };
    AppService.prototype.getGroupCategoryVal = function (requestData) {
        return this.httpPost(requestData, '', environment.COMMON_URL + 'get-group-category-values');
    };
    AppService.prototype.getScheduleSavedReportMessage = function (requestData) {
        return this.httpPost(requestData, '', environment.CUSTOME_BACKEND_URL + 'schedule-saved-reports');
    };
    AppService.prototype.getDataHistoryDetails = function (requestData) {
        return this.httpPost(requestData, '', environment.REQUEST_URL + 'getDataforhistorydetails');
    };
    AppService.prototype.getDeleteReports = function (requestData) {
        return this.httpPost(requestData, '', environment.CUSTOME_BACKEND_URL + 'save-reports');
    };
    AppService.prototype.getSavedReportDelete = function (requestData) {
        return this.httpPost(requestData, '', environment.ROOT_BACKEND_URL + 'custom-report/save-reports');
    };
    AppService.prototype.handleAllReporttype = function (requestData) {
        return this.httpPost(requestData, '', environment.CUSTOME_BACKEND_URL + 'get-all-report-types');
    };
    AppService.prototype.getSavedReportDetails = function (requestData) {
        return this.httpPost(requestData, '', environment.CUSTOME_BACKEND_URL + 'get-saved-reports');
    };
    // CustomReport
    AppService.prototype.getAllReportsType = function (requestData) {
        return this.httpPost(requestData, '', environment.CUSTOME_BACKEND_URL + 'get-all-report-types');
    };
    AppService.prototype.dummyResponse = function (requestData) {
        var data = this.http.get(requestData);
        return data;
    };
    AppService.prototype.getAllFieldConditions = function (requestData, selectMenu) {
        // fieldsData  getFields
        return this.httpPost(requestData, 'get', environment.CUSTOME_BACKEND_URL +
            'get-all-fields-conditions/' +
            selectMenu);
        // return this.httpPost(
        //   requestData,
        //   '',
        //   environment.CUSTOME_BACKEND_URL + 'get-all-fields-conditions'
        // );
    };
    AppService.prototype.getMenuResponse = function (requestData) {
        return this.httpPost(requestData, 'get', environment.CUSTOME_BACKEND_URL + 'menu');
    };
    AppService.prototype.savedReportCreation = function (requestData) {
        return this.httpPost(requestData, '', environment.CUSTOME_BACKEND_URL + 'save-reports');
    };
    AppService.prototype.savedReportupdate = function (requestData) {
        return this.httpPost(requestData, '', environment.CUSTOME_BACKEND_URL + 'save-reports');
    };
    AppService.prototype.savedReportDelete = function (requestData) {
        return this.httpPost(requestData, '', environment.CUSTOME_BACKEND_URL + 'save-reports');
    };
    AppService.prototype.savedReportDeleteReqData = function (requestData) {
        return this.httpPost(requestData, '', environment.ROOT_BACKEND_URL + 'custom-report/save-reports');
    };
    AppService.prototype.reportUserNameType = function (requestData, reportName) {
        return this.httpPost(requestData, '', environment.COMMON_URL + reportName);
    };
    AppService.prototype.statusRequestService = function (requestData, reportName) {
        return this.httpPost(requestData, '', environment.COMMON_URL + reportName);
    };
    AppService.prototype.getDataFieldCondition = function (requestData, reportName) {
        return this.httpPost(requestData, '', environment.CUSTOME_BACKEND_URL +
            'get-data-for-fields-conditions' +
            '-' +
            reportName);
    };
    // Auto Complete
    AppService.prototype.autoCompleteData = function (requestData, reportName) {
        // return this.httpPost(requestData, '', environment.COMMON_URL + reportName);
        var url = environment.COMMON_URL + reportName;
        return this.httpPost(requestData, '', url);
    };
    // UserAction
    AppService.prototype.userActionDropDown = function (requestData) {
        return this.httpPost(requestData, 'POST', 'https://dev-b2bwallet.infinitisoftware.net/user-action/' +
            'drop-down-user-action-log');
    };
    AppService.prototype.userActionLog = function (requestData, url) {
        return this.httpPost(requestData, '', url);
    };
    // Dashboard
    AppService.prototype.revenueAnalysisRequest = function (requestData) {
        return this.dashboardService('revenue_analysis', requestData, '');
    };
    AppService.prototype.trendYearRequest = function (requestData) {
        return this.dashboardService('request_trend_year', requestData, '');
    };
    AppService.prototype.trendYearRequestComparision = function (requestData) {
        return this.dashboardService('request_trend_comparision', requestData, '');
    };
    // pipeline
    AppService.prototype.pipelineDepartureRequest = function (requestData) {
        return this.dashboardService('pipeline_departure', requestData, '');
    };
    // Dynamic Report
    AppService.prototype.authenticationAndAuthorization = function (requestData) {
        return this.httpPost(requestData, 'POST', environment.ROOT_BACKEND_URL + 'common/authenticate');
    };
    AppService.prototype.getReportKeyData = function (requestData) {
        return this.httpPost(requestData, 'GET', environment.ROOT_BACKEND_URL + 'common/routing');
    };
    AppService.prototype.getSubModuleData = function (requestData) {
        return this.httpPost(requestData, 'GET', environment.ROOT_BACKEND_URL + 'common/menu');
    };
    AppService.prototype.getSavedReportData = function () {
        return this.dummyResponse('/assets/listJSON/savedReport.json');
    };
    AppService.prototype.getAllFieldsConditions = function (requestData) {
        return this.httpPost(requestData, 'GET', environment.ROOT_BACKEND_URL + 'common/get-all-fields-conditions');
    };
    AppService.prototype.getMultiSelectOption = function (requestData, responseDetail) {
        // return this.httpPost(
        //   requestData,
        //   'GET',
        //   environment.ROOT_BACKEND_URL + responseDetail
        // );
        return this.httpPost(requestData, '', environment.COMMON_URL + responseDetail);
    };
    AppService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    AppService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AppService_Factory() { return new AppService(i0.ɵɵinject(i1.HttpClient)); }, token: AppService, providedIn: "root" });
    AppService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], AppService);
    return AppService;
}());
export { AppService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9yZXBvcnRtb2R1bGUvIiwic291cmNlcyI6WyJsaWIvYXBwL2NvcmUtbW9kdWxlL3NlcnZpY2UvYXBwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELHVDQUF1QztBQUN2QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7QUFNaEU7SUEwREUsb0JBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUF6RDdCLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLGlCQUFZLEdBQVEsU0FBUyxDQUFDO1FBQzlCLG1CQUFjLEdBQVEsU0FBUyxDQUFDO1FBQ2hDLGlCQUFZLEdBQVEsY0FBYyxDQUFDO1FBQ25DLG1CQUFjLEdBQVEsZUFBZSxDQUFDO1FBNkM3QyxpQkFBWSxHQUFXO1lBQ3JCLGtCQUFrQixFQUFFLGVBQWU7WUFDbkMseUJBQXlCLEVBQUUsMEJBQTBCO1lBQ3JELGdCQUFnQixFQUFFLGtCQUFrQjtZQUNwQyxrQkFBa0IsRUFBRSxvQkFBb0I7U0FDekMsQ0FBQztJQUdxQyxDQUFDO0lBakR4QywrQkFBVSxHQUFWLFVBQVcsRUFBVSxFQUFFLFFBQWE7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxvQ0FBb0M7SUFDN0IsZ0NBQVcsR0FBbEIsVUFBbUIsSUFBUyxFQUFFLFVBQTBCO1FBQTFCLDJCQUFBLEVBQUEsaUJBQTBCO1FBQ3RELElBQUksQ0FBQyxhQUFhLENBQUM7WUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFD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QU07U0FDbkIsQ0FBQztPQUNXLFVBQVUsQ0F5aUJ0QjtxQkFwakJEO0NBb2pCQyxBQXppQkQsSUF5aUJDO1NBemlCWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbi8vIGltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcclxuZGVjbGFyZSBsZXQgQ3J5cHRvSlM6IGFueTtcclxuZGVjbGFyZSBsZXQgJDogYW55O1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2VydmljZSB7XHJcbiAgcHVibGljIGNyZWF0ZVJlcG9ydHM6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHB1YmxpYyBpc0VkaXRSZXBvcnQ6IGFueSA9IHVuZGVmaW5lZDtcclxuICBwdWJsaWMgc2hvd1JlcG9ydERhdGE6IGFueSA9IHVuZGVmaW5lZDtcclxuICBwdWJsaWMgc2VsZWN0ZWRNZW51OiBhbnkgPSAnZ3JvdXBSZXF1ZXN0JztcclxuICBwdWJsaWMgY3VycmVudEJhc2VkT246IGFueSA9ICdncm91cC1yZXF1ZXN0JztcclxuXHJcbiAgcHVibGljIHVwZGF0ZVZhbHVlOiBhbnk7XHJcblxyXG4gIGV4cGFuZExpc3QoaWQ6IG51bWJlciwgbGlzdERhdGE6IGFueSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xyXG4gIH1cclxuICAvL0NvbW1vbiBsaXN0IHNlcnZpY2UgZm9yIHBhZ2luYXRpb25cclxuICBwdWJsaWMgbGlzdFNlcnZpY2UobGlzdDogYW55LCBwYWdpbmF0aW9uOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgbGlzdFsnY3VycmVudFBhZ2UnXSA9XHJcbiAgICAgIGxpc3RbJ2N1cnJlbnRQYWdlJ10gPT0gdW5kZWZpbmVkID8gMSA6IGxpc3RbJ2N1cnJlbnRQYWdlJ107XHJcblxyXG4gICAgbGlzdFsnbGlzdF9ib2R5J10gPSBsaXN0WydsaXN0X2JvZHknXSAhPSBudWxsID8gbGlzdFsnbGlzdF9ib2R5J10gOiBbXTtcclxuXHJcbiAgICBsaXN0Wyd0b3RhbEl0ZW1zJ10gPSBsaXN0WydsaXN0X2JvZHknXS5sZW5ndGg7XHJcblxyXG4gICAgbGlzdFsnZGVmYXVsdF9QYXJtcyddWydwYWdlJ10gPVxyXG4gICAgICBsaXN0WydkZWZhdWx0X1Bhcm1zJ11bJ3BhZ2UnXSA9PSAwID8gMSA6IGxpc3RbJ2RlZmF1bHRfUGFybXMnXVsncGFnZSddO1xyXG5cclxuICAgIGxpc3RbJ25vb2ZQYWdlcyddID0gTWF0aC5jZWlsKFxyXG4gICAgICBsaXN0WydsaXN0X2JvZHknXS5sZW5ndGggLyBsaXN0WydkZWZhdWx0X1Bhcm1zJ11bJ2l0ZW1zUGVyUGFnZSddXHJcbiAgICApO1xyXG5cclxuICAgIGxpc3RbJ2N1cnJlbnRQYWdlJ10gPVxyXG4gICAgICBsaXN0WydjdXJyZW50UGFnZSddID4gbGlzdFsnbm9vZlBhZ2VzJ11cclxuICAgICAgICA/IGxpc3RbJ25vb2ZQYWdlcyddXHJcbiAgICAgICAgOiBsaXN0WydjdXJyZW50UGFnZSddO1xyXG5cclxuICAgIGxpc3RbJ2RlZmF1bHRfUGFybXMnXVsncGFnZSddID1cclxuICAgICAgbGlzdFsnZGVmYXVsdF9QYXJtcyddWydwYWdlJ10gPiBsaXN0Wydub29mUGFnZXMnXVxyXG4gICAgICAgID8gbGlzdFsnbm9vZlBhZ2VzJ11cclxuICAgICAgICA6IGxpc3RbJ2RlZmF1bHRfUGFybXMnXVsncGFnZSddO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgcGFnaW5hdGlvbiA9PSB0cnVlICYmXHJcbiAgICAgIGxpc3RbJ2xpc3RfYm9keSddLmxlbmd0aCA+IGxpc3RbJ2RlZmF1bHRfUGFybXMnXVsnaXRlbXNQZXJQYWdlJ11cclxuICAgIClcclxuICAgICAgbGlzdFsnZGVmYXVsdF9kYXRhJ10gPSBsaXN0WydsaXN0X2JvZHknXS5zbGljZShcclxuICAgICAgICAobGlzdFsnZGVmYXVsdF9QYXJtcyddWydwYWdlJ10gLSAxKSAqXHJcbiAgICAgICAgICBsaXN0WydkZWZhdWx0X1Bhcm1zJ11bJ2l0ZW1zUGVyUGFnZSddLFxyXG4gICAgICAgIGxpc3RbJ2RlZmF1bHRfUGFybXMnXVsncGFnZSddICogbGlzdFsnZGVmYXVsdF9QYXJtcyddWydpdGVtc1BlclBhZ2UnXVxyXG4gICAgICApO1xyXG4gICAgZWxzZSBsaXN0WydkZWZhdWx0X2RhdGEnXSA9IGxpc3RbJ2xpc3RfYm9keSddO1xyXG4gICAgcmV0dXJuIGxpc3Q7XHJcbiAgfVxyXG4gIGNoYXJ0TW9kdWxlczogb2JqZWN0ID0ge1xyXG4gICAgcmVxdWVzdF90cmVuZF95ZWFyOiAncmVxdWVzdC10cmVuZCcsXHJcbiAgICByZXF1ZXN0X3RyZW5kX2NvbXBhcmlzaW9uOiAncmVxdWVzdC10cmVuZC1jb21wYXJpc29uJyxcclxuICAgIHJldmVudWVfYW5hbHlzaXM6ICdyZXZlbnVlLWFuYWx5c2lzJyxcclxuICAgIHBpcGVsaW5lX2RlcGFydHVyZTogJ3BpcGVsaW5lLWRlcGFydHVyZScsXHJcbiAgfTtcclxuICBleHBhbmRBbGw6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55XHJcbiAgcHVibGljIGh0dHBQb3N0KFxyXG4gICAgaW5wdXREYXRhOiBhbnksXHJcbiAgICBhY3Rpb25OYW1lOiBzdHJpbmcsXHJcbiAgICB1cmw6IGFueVxyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAvLyBBRVMgZW5jcnlwdGlvblxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxyXG4gICAgY29uc3QgZGF0YTogc3RyaW5nID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KGlucHV0RGF0YSksXHJcbiAgICAgIENyeXB0b0pTLmVuYy5CYXNlNjQucGFyc2UoZW52aXJvbm1lbnQuZW5jcnlwdGlvbktleSksXHJcbiAgICAgIHsgbW9kZTogQ3J5cHRvSlMubW9kZS5FQ0IgfVxyXG4gICAgKS50b1N0cmluZygpO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZGF0YScsIGRhdGEpO1xyXG4gICAgY29uc3QgYmFja0VuZFVSTCA9IHVybDtcclxuICAgIGlmIChhY3Rpb25OYW1lID09ICdnZXQnIHx8IGFjdGlvbk5hbWUgPT0gJ0dFVCcpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYmFja0VuZFVSTCkucGlwZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgIGxldCByZXNwb25zZURhdGE6IGFueSA9IHt9O1xyXG4gICAgICAgIHJlc3BvbnNlRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgLnBvc3QoYmFja0VuZFVSTCwgZm9ybURhdGEsIHtcclxuICAgICAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXHJcbiAgICAgICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICBtYXAoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlRGF0YTogYW55ID0ge307XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZTogYW55O1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEuYm9keSA9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShcclxuICAgICAgICAgICAgICAgIENyeXB0b0pTLkFFUy5kZWNyeXB0KFxyXG4gICAgICAgICAgICAgICAgICBkYXRhLmJvZHkucmVwbGFjZSgvXlwiKC4qKVwiJC8sICckMScpLFxyXG4gICAgICAgICAgICAgICAgICBDcnlwdG9KUy5lbmMuQmFzZTY0LnBhcnNlKGVudmlyb25tZW50LmRlY3J5cHRpb25LZXkpLFxyXG4gICAgICAgICAgICAgICAgICB7IG1vZGU6IENyeXB0b0pTLm1vZGUuRUNCIH1cclxuICAgICAgICAgICAgICAgICkudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXNwb25zZSA9IGRhdGEuYm9keTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNwb25zZURhdGEgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgcmVzcG9uc2VEYXRhLnN0YXR1cyA9IGRhdGEuc3RhdHVzO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBFeHBhbmQgYWxsIGxpc3Qgcm93XHJcbiAgICogQHBhcmFtIGxpc3REYXRhXHJcbiAgICovXHJcbiAgcHVibGljIGV4cGFuZENvbnRhaW5lckFsbChsaXN0RGF0YTogYW55KSB7XHJcbiAgICBpZiAodGhpcy5leHBhbmRBbGwubGVuZ3RoID09IDApIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0RGF0YVsnZGVmYXVsdF9kYXRhJ10ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgZmxhZzogYm9vbGVhbiA9ICQoJyNleHBhbmRDb250YWluZXInICsgaSkuaGFzQ2xhc3MoJ2Qtbm9uZScpXHJcbiAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5leHBhbmRBbGwucHVzaChmbGFnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZXhwYW5kQWxsLmluZGV4T2YoZmFsc2UpID09IC0xKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdERhdGFbJ2RlZmF1bHRfZGF0YSddLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5leHBhbmRBbGxbaV0gPSBmYWxzZTtcclxuICAgICAgICAkKCcjZXhwYW5kY2xvc2UnICsgaSlcclxuICAgICAgICAgIC5yZW1vdmVDbGFzcygnaWNvbi03MS1pbmZvdXAnKVxyXG4gICAgICAgICAgLmFkZENsYXNzKCdpY29uLTcyLWluZm9kb3duJyk7XHJcbiAgICAgIH1cclxuICAgICAgJCgnLmNscy1zdWJsaXN0JykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpLmFkZENsYXNzKCdkLWZsZXgnKTtcclxuXHJcbiAgICAgIGxpc3REYXRhLmRlZmF1bHRfUGFybXMuZXhwYW5kID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5jbHMtc3VibGlzdCcpLnJlbW92ZUNsYXNzKCdkLWZsZXgnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdERhdGFbJ2RlZmF1bHRfZGF0YSddLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5leHBhbmRBbGxbaV0gPSB0cnVlO1xyXG4gICAgICAgIGxpc3REYXRhLmRlZmF1bHRfUGFybXMuZXhwYW5kID0gZmFsc2U7XHJcbiAgICAgICAgJCgnI2V4cGFuZGNsb3NlJyArIGkpXHJcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2ljb24tNzItaW5mb2Rvd24nKVxyXG4gICAgICAgICAgLmFkZENsYXNzKCdpY29uLTcxLWluZm91cCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGFzaGJvYXJkU2VydmljZShcclxuICAgIG1vZHVsZU5hbWU6IHN0cmluZyxcclxuICAgIGlucHV0RGF0YTogYW55LFxyXG4gICAgYWN0aW9uTmFtZTogc3RyaW5nXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIC8vIEFFUyBlbmNyeXB0aW9uXHJcbiAgICBjb25zdCBkYXRhOiBzdHJpbmcgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoaW5wdXREYXRhKSxcclxuICAgICAgQ3J5cHRvSlMuZW5jLkJhc2U2NC5wYXJzZShlbnZpcm9ubWVudC5lbmNyeXB0aW9uS2V5KSxcclxuICAgICAgeyBtb2RlOiBDcnlwdG9KUy5tb2RlLkVDQiB9XHJcbiAgICApLnRvU3RyaW5nKCk7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdkYXRhJywgZGF0YSk7XHJcbiAgICBsZXQgYmFja0VuZFVSTCA9XHJcbiAgICAgIGVudmlyb25tZW50LkJBQ0tFTkRfVVJMICsgJycgKyB0aGlzLmNoYXJ0TW9kdWxlc1ttb2R1bGVOYW1lXTtcclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLnBvc3QoYmFja0VuZFVSTCwgZm9ybURhdGEsIHtcclxuICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnLFxyXG4gICAgICB9KVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoKGRhdGEpID0+IHtcclxuICAgICAgICAgIGxldCByZXNwb25zZURhdGE6IGFueSA9IHt9O1xyXG4gICAgICAgICAgbGV0IHJlc3BvbnNlOiBhbnk7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGEuYm9keSA9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UoXHJcbiAgICAgICAgICAgICAgQ3J5cHRvSlMuQUVTLmRlY3J5cHQoXHJcbiAgICAgICAgICAgICAgICBkYXRhLmJvZHkucmVwbGFjZSgvXlwiKC4qKVwiJC8sICckMScpLFxyXG4gICAgICAgICAgICAgICAgQ3J5cHRvSlMuZW5jLkJhc2U2NC5wYXJzZShlbnZpcm9ubWVudC5kZWNyeXB0aW9uS2V5KSxcclxuICAgICAgICAgICAgICAgIHsgbW9kZTogQ3J5cHRvSlMubW9kZS5FQ0IgfVxyXG4gICAgICAgICAgICAgICkudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IGRhdGEuYm9keTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgcmVzcG9uc2VEYXRhLnN0YXR1cyA9IGRhdGEuc3RhdHVzO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gZG93bmxvYWQgc2VydmljZVxyXG4gIHB1YmxpYyBkb3dubG9hZEV4Y2VsKFxyXG4gICAgaW5wdXREYXRhOiBhbnksXHJcbiAgICBhY3Rpb25OYW1lOiBzdHJpbmcsXHJcbiAgICB1cmw6IGFueSxcclxuICAgIGZpbGVOYW1lOiBzdHJpbmdcclxuICApOiBhbnkge1xyXG4gICAgLy8gQUVTIGVuY3J5cHRpb25cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICAgIGNvbnN0IGRhdGE6IHN0cmluZyA9IENyeXB0b0pTLkFFUy5lbmNyeXB0KFxyXG4gICAgICBKU09OLnN0cmluZ2lmeShpbnB1dERhdGEpLFxyXG4gICAgICBDcnlwdG9KUy5lbmMuQmFzZTY0LnBhcnNlKGVudmlyb25tZW50LmVuY3J5cHRpb25LZXkpLFxyXG4gICAgICB7IG1vZGU6IENyeXB0b0pTLm1vZGUuRUNCIH1cclxuICAgICkudG9TdHJpbmcoKTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2RhdGEnLCBkYXRhKTtcclxuICAgIHRoaXMuaHR0cFxyXG4gICAgICAucG9zdCh1cmwsIGZvcm1EYXRhLCB7IHJlc3BvbnNlVHlwZTogJ2Jsb2InIH0pXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBCbG9iKSA9PiB7XHJcbiAgICAgICAgLy8gc2F2ZUFzKHJlc3BvbnNlLCBmaWxlTmFtZSArICcueGxzeCcpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0QXV0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICB7XHJcbiAgICAgICAgcmVwb3J0TmFtZTogJ2luaXQtYXV0aCcsXHJcbiAgICAgICAgXCJyZXF1ZXN0VXJsXCI6XCJodHRwOi8vZGV2LXJtLmdyb3Vwcm0ubmV0LzU5YjRiYTA2MGI3MzM5YjI2Yjc1ODljMmMzN2FlNDllLyN1ZHNwTXlBK0JTemxDUEQ2QTBVV0N4UFlkVWNZYTZhUjVRVDhMVzNoOWlieDdZbTlwaTRLYXFjR2J4ZE5TUlo3a01mSDB2Y2dJZXB1UXdWNVFodWJ1R1FtL1VTV0R2VElpcDhOTGV3a2JrbERTcTZNZnBYZzZTSittemNCZGdSRTNlSDdSbzU2eTZqTy9hdmdETmk2NGc9PVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICcnLFxyXG4gICAgICBlbnZpcm9ubWVudC5DT01NT05fVVJMICsgJ2luaXQtYXV0aCdcclxuICAgICkudG9Qcm9taXNlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0U3ViTW9kdWxlcyhyZXF1ZXN0RGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwUG9zdChcclxuICAgICAgcmVxdWVzdERhdGEsXHJcbiAgICAgICdQT1NUJyxcclxuICAgICAgZW52aXJvbm1lbnQuUk9PVF9CQUNLRU5EX1VSTCArICdjb252ZXJzaW9uLXJlcG9ydC9nZXQtYWxsLXJlcG9ydC10eXBlcydcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RHJvcERvd25EYXRhKHJlcXVlc3REYXRhOiBhbnksIHVybDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwUG9zdChyZXF1ZXN0RGF0YSwgJ1BPU1QnLCBlbnZpcm9ubWVudC5DT01NT05fVVJMICsgdXJsKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYW5kZWxTaG93UmVwb3J0KHJlcXVlc3REYXRhOiBhbnksIHVybDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwUG9zdChcclxuICAgICAgcmVxdWVzdERhdGEsXHJcbiAgICAgICdQT1NUJyxcclxuICAgICAgZW52aXJvbm1lbnQuUk9PVF9CQUNLRU5EX1VSTCArICdjb252ZXJzaW9uLXJlcG9ydC8nICsgdXJsXHJcbiAgICApO1xyXG4gIH1cclxuICAvLyB1c2VyIEFjdGlvbiBMb2dcclxuICBwdWJsaWMgdmlld1VzZXJBY3Rpb25Mb2cocmVxdWVzdERhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFBvc3QoXHJcbiAgICAgIHJlcXVlc3REYXRhLFxyXG4gICAgICAnUE9TVCcsXHJcbiAgICAgICdodHRwczovL2Rldi1iMmJ3YWxsZXQuaW5maW5pdGlzb2Z0d2FyZS5uZXQvdXNlci1hY3Rpb24vdmlldy11c2VyLWFjdGlvbi1sb2cnXHJcbiAgICApO1xyXG4gIH1cclxuICAvLyBDb252ZXJzaW9uIFJlcG9ydFxyXG4gIHB1YmxpYyBnZXRBbGxGaWVsZHNDb252ZXJzaW9uKHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJ1BPU1QnLFxyXG4gICAgICBlbnZpcm9ubWVudC5ST09UX0JBQ0tFTkRfVVJMICtcclxuICAgICAgICAnY29udmVyc2lvbi1yZXBvcnQvZ2V0LWFsbC1maWVsZHMtY29uZGl0aW9ucydcclxuICAgICk7XHJcbiAgfVxyXG4gIHB1YmxpYyBoYW5kZWxTYXZlUmVwb3J0Q29udmVyc2lvbihyZXF1ZXN0RGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwUG9zdChcclxuICAgICAgcmVxdWVzdERhdGEsXHJcbiAgICAgICcnLFxyXG4gICAgICBlbnZpcm9ubWVudC5ST09UX0JBQ0tFTkRfVVJMICsgJ2NvbnZlcnNpb24tcmVwb3J0L3NhdmUtcmVwb3J0cydcclxuICAgICk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRTYXZlZFJlcG9ydHMocmVxdWVzdERhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFBvc3QoXHJcbiAgICAgIHJlcXVlc3REYXRhLFxyXG4gICAgICAnJyxcclxuICAgICAgZW52aXJvbm1lbnQuUk9PVF9CQUNLRU5EX1VSTCArICdjdXN0b20tcmVwb3J0L2dldC1zYXZlZC1yZXBvcnRzJ1xyXG4gICAgKTtcclxuICB9XHJcbiAgLy8gU2NoZWR1bGUgUmVwb3J0XHJcbiAgcHVibGljIHNjaGVkdWxlU2F2ZWRSZXBvcnRzKHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJycsXHJcbiAgICAgIGVudmlyb25tZW50LlJPT1RfQkFDS0VORF9VUkwgKyAnY29udmVyc2lvbi1yZXBvcnQvc2NoZWR1bGUtc2F2ZWQtcmVwb3J0cydcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0U2NoZWR1bGVEcm9wZG93bkRhdGEocmVxdWVzdERhdGE6IGFueSwgdXJsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KHJlcXVlc3REYXRhLCAnUE9TVCcsIGVudmlyb25tZW50LkNPTU1PTl9VUkwgKyB1cmwpO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0VHJhdmVsQWdlbmN5KHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJycsXHJcbiAgICAgIGVudmlyb25tZW50LkNPTU1PTl9VUkwgKyAnZ2V0LXRyYXZlbC1hZ2VuY3ktcG9zc2libGUtdmFsdWVzJ1xyXG4gICAgKTtcclxuICB9XHJcbiAgcHVibGljIGdldFVzZXJUeXBlKHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJycsXHJcbiAgICAgIGVudmlyb25tZW50LkNPTU1PTl9VUkwgKyAnZ2V0LXVzZXItdHlwZS12YWx1ZXMnXHJcbiAgICApO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0Q291bnRyeVZhbChyZXF1ZXN0RGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwUG9zdChcclxuICAgICAgcmVxdWVzdERhdGEsXHJcbiAgICAgICcnLFxyXG4gICAgICBlbnZpcm9ubWVudC5DT01NT05fVVJMICsgcmVxdWVzdERhdGEucmVwb3J0TmFtZVxyXG4gICAgKTtcclxuICB9XHJcbiAgcHVibGljIGdldFNlY3RvclZhbChyZXF1ZXN0RGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwUG9zdChcclxuICAgICAgcmVxdWVzdERhdGEsXHJcbiAgICAgICcnLFxyXG4gICAgICBlbnZpcm9ubWVudC5DT01NT05fVVJMICsgJ2dldC1zZWN0b3ItcG9zc2libGUtdmFsdWVzJ1xyXG4gICAgKTtcclxuICB9XHJcbiAgcHVibGljIGdldFNlY3RvclBvc1ZhbChyZXF1ZXN0RGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwUG9zdChcclxuICAgICAgcmVxdWVzdERhdGEsXHJcbiAgICAgICcnLFxyXG4gICAgICBlbnZpcm9ubWVudC5DT01NT05fVVJMICsgJ2dldC1zZWN0b3ItcG9zc2libGUtdmFsdWVzJ1xyXG4gICAgKTtcclxuICB9XHJcbiAgcHVibGljIGdldHBvc1ZhbChyZXF1ZXN0RGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwUG9zdChcclxuICAgICAgcmVxdWVzdERhdGEsXHJcbiAgICAgICcnLFxyXG4gICAgICBlbnZpcm9ubWVudC5DT01NT05fVVJMICsgJ2dldC1wb3MtcG9zc2libGUtdmFsdWVzJ1xyXG4gICAgKTtcclxuICB9XHJcbiAgcHVibGljIGdldFN0YXR1c1JlcXVlc3QocmVxdWVzdERhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFBvc3QoXHJcbiAgICAgIHJlcXVlc3REYXRhLFxyXG4gICAgICAnJyxcclxuICAgICAgZW52aXJvbm1lbnQuQ09NTU9OX1VSTCArICdnZXQtc3RhdHVzLW9mLXJlcXVlc3QtdmFsdWVzJ1xyXG4gICAgKTtcclxuICB9XHJcbiAgcHVibGljIGdldFN0YXR1c1JlcXVlc3RWYWwocmVxdWVzdERhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFBvc3QoXHJcbiAgICAgIHJlcXVlc3REYXRhLFxyXG4gICAgICAnJyxcclxuICAgICAgZW52aXJvbm1lbnQuQ09NTU9OX1VSTCArICdnZXQtc3RhdHVzLW9mLXJlcXVlc3QtdmFsdWVzJ1xyXG4gICAgKTtcclxuICB9XHJcbiAgcHVibGljIGdldEN1cnJlbmN5VmFsdWVzKHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJycsXHJcbiAgICAgIGVudmlyb25tZW50LkNPTU1PTl9VUkwgKyAnZ2V0LWN1cnJlbmN5LXBvc3NpYmxlLXZhbHVlcydcclxuICAgICk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRHcm91cENhdGVnb3J5VmFsKHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJycsXHJcbiAgICAgIGVudmlyb25tZW50LkNPTU1PTl9VUkwgKyAnZ2V0LWdyb3VwLWNhdGVnb3J5LXZhbHVlcydcclxuICAgICk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRTY2hlZHVsZVNhdmVkUmVwb3J0TWVzc2FnZShyZXF1ZXN0RGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwUG9zdChcclxuICAgICAgcmVxdWVzdERhdGEsXHJcbiAgICAgICcnLFxyXG4gICAgICBlbnZpcm9ubWVudC5DVVNUT01FX0JBQ0tFTkRfVVJMICsgJ3NjaGVkdWxlLXNhdmVkLXJlcG9ydHMnXHJcbiAgICApO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0RGF0YUhpc3RvcnlEZXRhaWxzKHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJycsXHJcbiAgICAgIGVudmlyb25tZW50LlJFUVVFU1RfVVJMICsgJ2dldERhdGFmb3JoaXN0b3J5ZGV0YWlscydcclxuICAgICk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXREZWxldGVSZXBvcnRzKHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJycsXHJcbiAgICAgIGVudmlyb25tZW50LkNVU1RPTUVfQkFDS0VORF9VUkwgKyAnc2F2ZS1yZXBvcnRzJ1xyXG4gICAgKTtcclxuICB9XHJcbiAgcHVibGljIGdldFNhdmVkUmVwb3J0RGVsZXRlKHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJycsXHJcbiAgICAgIGVudmlyb25tZW50LlJPT1RfQkFDS0VORF9VUkwgKyAnY3VzdG9tLXJlcG9ydC9zYXZlLXJlcG9ydHMnXHJcbiAgICApO1xyXG4gIH1cclxuICBwdWJsaWMgaGFuZGxlQWxsUmVwb3J0dHlwZShyZXF1ZXN0RGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwUG9zdChcclxuICAgICAgcmVxdWVzdERhdGEsXHJcbiAgICAgICcnLFxyXG4gICAgICBlbnZpcm9ubWVudC5DVVNUT01FX0JBQ0tFTkRfVVJMICsgJ2dldC1hbGwtcmVwb3J0LXR5cGVzJ1xyXG4gICAgKTtcclxuICB9XHJcbiAgcHVibGljIGdldFNhdmVkUmVwb3J0RGV0YWlscyhyZXF1ZXN0RGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwUG9zdChcclxuICAgICAgcmVxdWVzdERhdGEsXHJcbiAgICAgICcnLFxyXG4gICAgICBlbnZpcm9ubWVudC5DVVNUT01FX0JBQ0tFTkRfVVJMICsgJ2dldC1zYXZlZC1yZXBvcnRzJ1xyXG4gICAgKTtcclxuICB9XHJcbiAgLy8gQ3VzdG9tUmVwb3J0XHJcbiAgcHVibGljIGdldEFsbFJlcG9ydHNUeXBlKHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJycsXHJcbiAgICAgIGVudmlyb25tZW50LkNVU1RPTUVfQkFDS0VORF9VUkwgKyAnZ2V0LWFsbC1yZXBvcnQtdHlwZXMnXHJcbiAgICApO1xyXG4gIH1cclxuICBwdWJsaWMgZHVtbXlSZXNwb25zZShyZXF1ZXN0RGF0YTogYW55KSB7XHJcbiAgICB2YXIgZGF0YSA9IHRoaXMuaHR0cC5nZXQocmVxdWVzdERhdGEpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRBbGxGaWVsZENvbmRpdGlvbnMocmVxdWVzdERhdGE6IGFueSwgc2VsZWN0TWVudSkge1xyXG4gICAgLy8gZmllbGRzRGF0YSAgZ2V0RmllbGRzXHJcbiAgICByZXR1cm4gdGhpcy5odHRwUG9zdChcclxuICAgICAgcmVxdWVzdERhdGEsXHJcbiAgICAgICdnZXQnLFxyXG4gICAgICBlbnZpcm9ubWVudC5DVVNUT01FX0JBQ0tFTkRfVVJMICtcclxuICAgICAgICAnZ2V0LWFsbC1maWVsZHMtY29uZGl0aW9ucy8nICtcclxuICAgICAgICBzZWxlY3RNZW51XHJcbiAgICApO1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuaHR0cFBvc3QoXHJcbiAgICAvLyAgIHJlcXVlc3REYXRhLFxyXG4gICAgLy8gICAnJyxcclxuICAgIC8vICAgZW52aXJvbm1lbnQuQ1VTVE9NRV9CQUNLRU5EX1VSTCArICdnZXQtYWxsLWZpZWxkcy1jb25kaXRpb25zJ1xyXG4gICAgLy8gKTtcclxuICB9XHJcbiAgcHVibGljIGdldE1lbnVSZXNwb25zZShyZXF1ZXN0RGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwUG9zdChcclxuICAgICAgcmVxdWVzdERhdGEsXHJcbiAgICAgICdnZXQnLFxyXG4gICAgICBlbnZpcm9ubWVudC5DVVNUT01FX0JBQ0tFTkRfVVJMICsgJ21lbnUnXHJcbiAgICApO1xyXG4gIH1cclxuICBwdWJsaWMgc2F2ZWRSZXBvcnRDcmVhdGlvbihyZXF1ZXN0RGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwUG9zdChcclxuICAgICAgcmVxdWVzdERhdGEsXHJcbiAgICAgICcnLFxyXG4gICAgICBlbnZpcm9ubWVudC5DVVNUT01FX0JBQ0tFTkRfVVJMICsgJ3NhdmUtcmVwb3J0cydcclxuICAgICk7XHJcbiAgfVxyXG4gIHB1YmxpYyBzYXZlZFJlcG9ydHVwZGF0ZShyZXF1ZXN0RGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwUG9zdChcclxuICAgICAgcmVxdWVzdERhdGEsXHJcbiAgICAgICcnLFxyXG4gICAgICBlbnZpcm9ubWVudC5DVVNUT01FX0JBQ0tFTkRfVVJMICsgJ3NhdmUtcmVwb3J0cydcclxuICAgICk7XHJcbiAgfVxyXG4gIHB1YmxpYyBzYXZlZFJlcG9ydERlbGV0ZShyZXF1ZXN0RGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwUG9zdChcclxuICAgICAgcmVxdWVzdERhdGEsXHJcbiAgICAgICcnLFxyXG4gICAgICBlbnZpcm9ubWVudC5DVVNUT01FX0JBQ0tFTkRfVVJMICsgJ3NhdmUtcmVwb3J0cydcclxuICAgICk7XHJcbiAgfVxyXG4gIHB1YmxpYyBzYXZlZFJlcG9ydERlbGV0ZVJlcURhdGEocmVxdWVzdERhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFBvc3QoXHJcbiAgICAgIHJlcXVlc3REYXRhLFxyXG4gICAgICAnJyxcclxuICAgICAgZW52aXJvbm1lbnQuUk9PVF9CQUNLRU5EX1VSTCArICdjdXN0b20tcmVwb3J0L3NhdmUtcmVwb3J0cydcclxuICAgICk7XHJcbiAgfVxyXG4gIHB1YmxpYyByZXBvcnRVc2VyTmFtZVR5cGUocmVxdWVzdERhdGE6IGFueSwgcmVwb3J0TmFtZTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwUG9zdChyZXF1ZXN0RGF0YSwgJycsIGVudmlyb25tZW50LkNPTU1PTl9VUkwgKyByZXBvcnROYW1lKTtcclxuICB9XHJcbiAgcHVibGljIHN0YXR1c1JlcXVlc3RTZXJ2aWNlKHJlcXVlc3REYXRhOiBhbnksIHJlcG9ydE5hbWU6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFBvc3QocmVxdWVzdERhdGEsICcnLCBlbnZpcm9ubWVudC5DT01NT05fVVJMICsgcmVwb3J0TmFtZSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXREYXRhRmllbGRDb25kaXRpb24ocmVxdWVzdERhdGE6IGFueSwgcmVwb3J0TmFtZTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwUG9zdChcclxuICAgICAgcmVxdWVzdERhdGEsXHJcbiAgICAgICcnLFxyXG4gICAgICBlbnZpcm9ubWVudC5DVVNUT01FX0JBQ0tFTkRfVVJMICtcclxuICAgICAgICAnZ2V0LWRhdGEtZm9yLWZpZWxkcy1jb25kaXRpb25zJyArXHJcbiAgICAgICAgJy0nICtcclxuICAgICAgICByZXBvcnROYW1lXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gQXV0byBDb21wbGV0ZVxyXG4gIHB1YmxpYyBhdXRvQ29tcGxldGVEYXRhKHJlcXVlc3REYXRhOiBhbnksIHJlcG9ydE5hbWU6IGFueSkge1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuaHR0cFBvc3QocmVxdWVzdERhdGEsICcnLCBlbnZpcm9ubWVudC5DT01NT05fVVJMICsgcmVwb3J0TmFtZSk7XHJcbiAgICBsZXQgdXJsID0gZW52aXJvbm1lbnQuQ09NTU9OX1VSTCArIHJlcG9ydE5hbWU7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwUG9zdChyZXF1ZXN0RGF0YSwgJycsIHVybCk7XHJcbiAgfVxyXG4gIC8vIFVzZXJBY3Rpb25cclxuICBwdWJsaWMgdXNlckFjdGlvbkRyb3BEb3duKHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJ1BPU1QnLFxyXG4gICAgICAnaHR0cHM6Ly9kZXYtYjJid2FsbGV0LmluZmluaXRpc29mdHdhcmUubmV0L3VzZXItYWN0aW9uLycgK1xyXG4gICAgICAgICdkcm9wLWRvd24tdXNlci1hY3Rpb24tbG9nJ1xyXG4gICAgKTtcclxuICB9XHJcbiAgcHVibGljIHVzZXJBY3Rpb25Mb2cocmVxdWVzdERhdGE6IGFueSwgdXJsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KHJlcXVlc3REYXRhLCAnJywgdXJsKTtcclxuICB9XHJcblxyXG4gIC8vIERhc2hib2FyZFxyXG4gIHB1YmxpYyByZXZlbnVlQW5hbHlzaXNSZXF1ZXN0KHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmRhc2hib2FyZFNlcnZpY2UoJ3JldmVudWVfYW5hbHlzaXMnLCByZXF1ZXN0RGF0YSwgJycpO1xyXG4gIH1cclxuICBwdWJsaWMgdHJlbmRZZWFyUmVxdWVzdChyZXF1ZXN0RGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXNoYm9hcmRTZXJ2aWNlKCdyZXF1ZXN0X3RyZW5kX3llYXInLCByZXF1ZXN0RGF0YSwgJycpO1xyXG4gIH1cclxuICBwdWJsaWMgdHJlbmRZZWFyUmVxdWVzdENvbXBhcmlzaW9uKHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmRhc2hib2FyZFNlcnZpY2UoJ3JlcXVlc3RfdHJlbmRfY29tcGFyaXNpb24nLCByZXF1ZXN0RGF0YSwgJycpO1xyXG4gIH1cclxuICAvLyBwaXBlbGluZVxyXG4gIHB1YmxpYyBwaXBlbGluZURlcGFydHVyZVJlcXVlc3QocmVxdWVzdERhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGFzaGJvYXJkU2VydmljZSgncGlwZWxpbmVfZGVwYXJ0dXJlJywgcmVxdWVzdERhdGEsICcnKTtcclxuICB9XHJcblxyXG4gIC8vIER5bmFtaWMgUmVwb3J0XHJcbiAgcHVibGljIGF1dGhlbnRpY2F0aW9uQW5kQXV0aG9yaXphdGlvbihyZXF1ZXN0RGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwUG9zdChcclxuICAgICAgcmVxdWVzdERhdGEsXHJcbiAgICAgICdQT1NUJyxcclxuICAgICAgZW52aXJvbm1lbnQuUk9PVF9CQUNLRU5EX1VSTCArICdjb21tb24vYXV0aGVudGljYXRlJ1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRSZXBvcnRLZXlEYXRhKHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJ0dFVCcsXHJcbiAgICAgIGVudmlyb25tZW50LlJPT1RfQkFDS0VORF9VUkwgKyAnY29tbW9uL3JvdXRpbmcnXHJcbiAgICApO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0U3ViTW9kdWxlRGF0YShyZXF1ZXN0RGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwUG9zdChcclxuICAgICAgcmVxdWVzdERhdGEsXHJcbiAgICAgICdHRVQnLFxyXG4gICAgICBlbnZpcm9ubWVudC5ST09UX0JBQ0tFTkRfVVJMICsgJ2NvbW1vbi9tZW51J1xyXG4gICAgKTtcclxuICB9XHJcbiAgcHVibGljIGdldFNhdmVkUmVwb3J0RGF0YSgpIHtcclxuICAgIHJldHVybiB0aGlzLmR1bW15UmVzcG9uc2UoJy9hc3NldHMvbGlzdEpTT04vc2F2ZWRSZXBvcnQuanNvbicpO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0QWxsRmllbGRzQ29uZGl0aW9ucyhyZXF1ZXN0RGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwUG9zdChcclxuICAgICAgcmVxdWVzdERhdGEsXHJcbiAgICAgICdHRVQnLFxyXG4gICAgICBlbnZpcm9ubWVudC5ST09UX0JBQ0tFTkRfVVJMICsgJ2NvbW1vbi9nZXQtYWxsLWZpZWxkcy1jb25kaXRpb25zJ1xyXG4gICAgKTtcclxuICB9XHJcbiAgcHVibGljIGdldE11bHRpU2VsZWN0T3B0aW9uKHJlcXVlc3REYXRhOiBhbnksIHJlc3BvbnNlRGV0YWlsOiBzdHJpbmcpIHtcclxuICAgIC8vIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgLy8gICByZXF1ZXN0RGF0YSxcclxuICAgIC8vICAgJ0dFVCcsXHJcbiAgICAvLyAgIGVudmlyb25tZW50LlJPT1RfQkFDS0VORF9VUkwgKyByZXNwb25zZURldGFpbFxyXG4gICAgLy8gKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJycsXHJcbiAgICAgIGVudmlyb25tZW50LkNPTU1PTl9VUkwgKyByZXNwb25zZURldGFpbFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19