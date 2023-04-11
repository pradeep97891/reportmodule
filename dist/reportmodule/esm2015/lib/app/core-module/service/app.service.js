import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { saveAs } from 'file-saver';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
let AppService = class AppService {
    constructor(http) {
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
    expandList(id, listData) {
        throw new Error('Method not implemented.');
    }
    //Common list service for pagination
    listService(list, pagination = true) {
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
    }
    // tslint:disable-next-line: no-any
    httpPost(inputData, actionName, url) {
        // AES encryption
        // tslint:disable-next-line:max-line-length
        const data = CryptoJS.AES.encrypt(JSON.stringify(inputData), CryptoJS.enc.Base64.parse(environment.encryptionKey), { mode: CryptoJS.mode.ECB }).toString();
        const formData = new FormData();
        formData.append('data', data);
        const backEndURL = url;
        if (actionName == 'get' || actionName == 'GET') {
            return this.http.get(backEndURL).pipe((data) => {
                let responseData = {};
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
                .pipe(map((data) => {
                let responseData = {};
                let response;
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
    }
    /**
     * Expand all list row
     * @param listData
     */
    expandContainerAll(listData) {
        if (this.expandAll.length == 0) {
            for (let i = 0; i < listData['default_data'].length; i++) {
                let flag = $('#expandContainer' + i).hasClass('d-none')
                    ? true
                    : false;
                this.expandAll.push(flag);
            }
        }
        if (this.expandAll.indexOf(false) == -1) {
            for (let i = 0; i < listData['default_data'].length; i++) {
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
            for (let i = 0; i < listData['default_data'].length; i++) {
                this.expandAll[i] = true;
                listData.default_Parms.expand = false;
                $('#expandclose' + i)
                    .removeClass('icon-72-infodown')
                    .addClass('icon-71-infoup');
            }
        }
    }
    dashboardService(moduleName, inputData, actionName) {
        // AES encryption
        const data = CryptoJS.AES.encrypt(JSON.stringify(inputData), CryptoJS.enc.Base64.parse(environment.encryptionKey), { mode: CryptoJS.mode.ECB }).toString();
        const formData = new FormData();
        formData.append('data', data);
        let backEndURL = environment.BACKEND_URL + '' + this.chartModules[moduleName];
        return this.http
            .post(backEndURL, formData, {
            observe: 'response',
            responseType: 'text',
        })
            .pipe(map((data) => {
            let responseData = {};
            let response;
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
    // download service
    downloadExcel(inputData, actionName, url, fileName) {
        // AES encryption
        // tslint:disable-next-line:max-line-length
        const data = CryptoJS.AES.encrypt(JSON.stringify(inputData), CryptoJS.enc.Base64.parse(environment.encryptionKey), { mode: CryptoJS.mode.ECB }).toString();
        const formData = new FormData();
        formData.append('data', data);
        this.http
            .post(url, formData, { responseType: 'blob' })
            .subscribe((response) => {
            // saveAs(response, fileName + '.xlsx');
        });
    }
    initAuth() {
        return this.httpPost({
            reportName: 'init-auth',
            "requestUrl": "http://dev-rm.grouprm.net/59b4ba060b7339b26b7589c2c37ae49e/#udspMyA+BSzlCPD6A0UWCxPYdUcYa6aR5QT8LW3h9ibx7Ym9pi4KaqcGbxdNSRZ7kMfH0vcgIepuQwV5QhubuGQm/USWDvTIip8NLewkbklDSq6MfpXg6SJ+mzcBdgRE3eH7Ro56y6jO/avgDNi64g==",
        }, '', environment.COMMON_URL + 'init-auth').toPromise();
    }
    getSubModules(requestData) {
        return this.httpPost(requestData, 'POST', environment.ROOT_BACKEND_URL + 'conversion-report/get-all-report-types');
    }
    getDropDownData(requestData, url) {
        return this.httpPost(requestData, 'POST', environment.COMMON_URL + url);
    }
    handelShowReport(requestData, url) {
        return this.httpPost(requestData, 'POST', environment.ROOT_BACKEND_URL + 'conversion-report/' + url);
    }
    // user Action Log
    viewUserActionLog(requestData) {
        return this.httpPost(requestData, 'POST', 'https://dev-b2bwallet.infinitisoftware.net/user-action/view-user-action-log');
    }
    // Conversion Report
    getAllFieldsConversion(requestData) {
        return this.httpPost(requestData, 'POST', environment.ROOT_BACKEND_URL +
            'conversion-report/get-all-fields-conditions');
    }
    handelSaveReportConversion(requestData) {
        return this.httpPost(requestData, '', environment.ROOT_BACKEND_URL + 'conversion-report/save-reports');
    }
    getSavedReports(requestData) {
        return this.httpPost(requestData, '', environment.ROOT_BACKEND_URL + 'custom-report/get-saved-reports');
    }
    // Schedule Report
    scheduleSavedReports(requestData) {
        return this.httpPost(requestData, '', environment.ROOT_BACKEND_URL + 'conversion-report/schedule-saved-reports');
    }
    getScheduleDropdownData(requestData, url) {
        return this.httpPost(requestData, 'POST', environment.COMMON_URL + url);
    }
    getTravelAgency(requestData) {
        return this.httpPost(requestData, '', environment.COMMON_URL + 'get-travel-agency-possible-values');
    }
    getUserType(requestData) {
        return this.httpPost(requestData, '', environment.COMMON_URL + 'get-user-type-values');
    }
    getCountryVal(requestData) {
        return this.httpPost(requestData, '', environment.COMMON_URL + requestData.reportName);
    }
    getSectorVal(requestData) {
        return this.httpPost(requestData, '', environment.COMMON_URL + 'get-sector-possible-values');
    }
    getSectorPosVal(requestData) {
        return this.httpPost(requestData, '', environment.COMMON_URL + 'get-sector-possible-values');
    }
    getposVal(requestData) {
        return this.httpPost(requestData, '', environment.COMMON_URL + 'get-pos-possible-values');
    }
    getStatusRequest(requestData) {
        return this.httpPost(requestData, '', environment.COMMON_URL + 'get-status-of-request-values');
    }
    getStatusRequestVal(requestData) {
        return this.httpPost(requestData, '', environment.COMMON_URL + 'get-status-of-request-values');
    }
    getCurrencyValues(requestData) {
        return this.httpPost(requestData, '', environment.COMMON_URL + 'get-currency-possible-values');
    }
    getGroupCategoryVal(requestData) {
        return this.httpPost(requestData, '', environment.COMMON_URL + 'get-group-category-values');
    }
    getScheduleSavedReportMessage(requestData) {
        return this.httpPost(requestData, '', environment.CUSTOME_BACKEND_URL + 'schedule-saved-reports');
    }
    getDataHistoryDetails(requestData) {
        return this.httpPost(requestData, '', environment.REQUEST_URL + 'getDataforhistorydetails');
    }
    getDeleteReports(requestData) {
        return this.httpPost(requestData, '', environment.CUSTOME_BACKEND_URL + 'save-reports');
    }
    getSavedReportDelete(requestData) {
        return this.httpPost(requestData, '', environment.ROOT_BACKEND_URL + 'custom-report/save-reports');
    }
    handleAllReporttype(requestData) {
        return this.httpPost(requestData, '', environment.CUSTOME_BACKEND_URL + 'get-all-report-types');
    }
    getSavedReportDetails(requestData) {
        return this.httpPost(requestData, '', environment.CUSTOME_BACKEND_URL + 'get-saved-reports');
    }
    // CustomReport
    getAllReportsType(requestData) {
        return this.httpPost(requestData, '', environment.CUSTOME_BACKEND_URL + 'get-all-report-types');
    }
    dummyResponse(requestData) {
        var data = this.http.get(requestData);
        return data;
    }
    getAllFieldConditions(requestData, selectMenu) {
        // fieldsData  getFields
        return this.httpPost(requestData, 'get', environment.CUSTOME_BACKEND_URL +
            'get-all-fields-conditions/' +
            selectMenu);
        // return this.httpPost(
        //   requestData,
        //   '',
        //   environment.CUSTOME_BACKEND_URL + 'get-all-fields-conditions'
        // );
    }
    getMenuResponse(requestData) {
        return this.httpPost(requestData, 'get', environment.CUSTOME_BACKEND_URL + 'menu');
    }
    savedReportCreation(requestData) {
        return this.httpPost(requestData, '', environment.CUSTOME_BACKEND_URL + 'save-reports');
    }
    savedReportupdate(requestData) {
        return this.httpPost(requestData, '', environment.CUSTOME_BACKEND_URL + 'save-reports');
    }
    savedReportDelete(requestData) {
        return this.httpPost(requestData, '', environment.CUSTOME_BACKEND_URL + 'save-reports');
    }
    savedReportDeleteReqData(requestData) {
        return this.httpPost(requestData, '', environment.ROOT_BACKEND_URL + 'custom-report/save-reports');
    }
    reportUserNameType(requestData, reportName) {
        return this.httpPost(requestData, '', environment.COMMON_URL + reportName);
    }
    statusRequestService(requestData, reportName) {
        return this.httpPost(requestData, '', environment.COMMON_URL + reportName);
    }
    getDataFieldCondition(requestData, reportName) {
        return this.httpPost(requestData, '', environment.CUSTOME_BACKEND_URL +
            'get-data-for-fields-conditions' +
            '-' +
            reportName);
    }
    // Auto Complete
    autoCompleteData(requestData, reportName) {
        // return this.httpPost(requestData, '', environment.COMMON_URL + reportName);
        let url = environment.COMMON_URL + reportName;
        return this.httpPost(requestData, '', url);
    }
    // UserAction
    userActionDropDown(requestData) {
        return this.httpPost(requestData, 'POST', 'https://dev-b2bwallet.infinitisoftware.net/user-action/' +
            'drop-down-user-action-log');
    }
    userActionLog(requestData, url) {
        return this.httpPost(requestData, '', url);
    }
    // Dashboard
    revenueAnalysisRequest(requestData) {
        return this.dashboardService('revenue_analysis', requestData, '');
    }
    trendYearRequest(requestData) {
        return this.dashboardService('request_trend_year', requestData, '');
    }
    trendYearRequestComparision(requestData) {
        return this.dashboardService('request_trend_comparision', requestData, '');
    }
    // pipeline
    pipelineDepartureRequest(requestData) {
        return this.dashboardService('pipeline_departure', requestData, '');
    }
    // Dynamic Report
    authenticationAndAuthorization(requestData) {
        return this.httpPost(requestData, 'POST', environment.ROOT_BACKEND_URL + 'common/authenticate');
    }
    getReportKeyData(requestData) {
        return this.httpPost(requestData, 'GET', environment.ROOT_BACKEND_URL + 'common/routing');
    }
    getSubModuleData(requestData) {
        return this.httpPost(requestData, 'GET', environment.ROOT_BACKEND_URL + 'common/menu');
    }
    getSavedReportData() {
        return this.dummyResponse('/assets/listJSON/savedReport.json');
    }
    getAllFieldsConditions(requestData) {
        return this.httpPost(requestData, 'GET', environment.ROOT_BACKEND_URL + 'common/get-all-fields-conditions');
    }
    getMultiSelectOption(requestData, responseDetail) {
        // return this.httpPost(
        //   requestData,
        //   'GET',
        //   environment.ROOT_BACKEND_URL + responseDetail
        // );
        return this.httpPost(requestData, '', environment.COMMON_URL + responseDetail);
    }
};
AppService.ctorParameters = () => [
    { type: HttpClient }
];
AppService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AppService_Factory() { return new AppService(i0.ɵɵinject(i1.HttpClient)); }, token: AppService, providedIn: "root" });
AppService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AppService);
export { AppService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9yZXBvcnRtb2R1bGUvIiwic291cmNlcyI6WyJsaWIvYXBwL2NvcmUtbW9kdWxlL3NlcnZpY2UvYXBwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELHVDQUF1QztBQUN2QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7QUFNaEUsSUFBYSxVQUFVLEdBQXZCLE1BQWEsVUFBVTtJQTBEckIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQXpEN0Isa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIsaUJBQVksR0FBUSxTQUFTLENBQUM7UUFDOUIsbUJBQWMsR0FBUSxTQUFTLENBQUM7UUFDaEMsaUJBQVksR0FBUSxjQUFjLENBQUM7UUFDbkMsbUJBQWMsR0FBUSxlQUFlLENBQUM7UUE2QzdDLGlCQUFZLEdBQVc7WUFDckIsa0JBQWtCLEVBQUUsZUFBZTtZQUNuQyx5QkFBeUIsRUFBRSwwQkFBMEI7WUFDckQsZ0JBQWdCLEVBQUUsa0JBQWtCO1lBQ3BDLGtCQUFrQixFQUFFLG9CQUFvQjtTQUN6QyxDQUFDO0lBR3FDLENBQUM7SUFqRHhDLFVBQVUsQ0FBQyxFQUFVLEVBQUUsUUFBYTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELG9DQUFvQztJQUM3QixXQUFXLENBQUMsSUFBUyxFQUFFLGFBQXNCLElBQUk7UUFDdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxD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QjtRQUN0QyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQ2xCLFdBQVcsRUFDWCxLQUFLLEVBQ0wsV0FBVyxDQUFDLGdCQUFnQixHQUFHLGFBQWEsQ0FDN0MsQ0FBQztJQUNKLENBQUM7SUFDTSxrQkFBa0I7UUFDdkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNNLHNCQUFzQixDQUFDLFdBQWdCO1FBQzVDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FDbEIsV0FBVyxFQUNYLEtBQUssRUFDTCxXQUFXLENBQUMsZ0JBQWdCLEdBQUcsa0NBQWtDLENBQ2xFLENBQUM7SUFDSixDQUFDO0lBQ00sb0JBQW9CLENBQUMsV0FBZ0IsRUFBRSxjQUFzQjtRQUNsRSx3QkFBd0I7UUFDeEIsaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxrREFBa0Q7UUFDbEQsS0FBSztRQUNMLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FDbEIsV0FBVyxFQUNYLEVBQUUsRUFDRixXQUFXLENBQUMsVUFBVSxHQUFHLGNBQWMsQ0FDeEMsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztZQS9lMkIsVUFBVTs7O0FBMUR6QixVQUFVO0lBSHRCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxVQUFVLENBeWlCdEI7U0F6aUJZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuLy8gaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xyXG5kZWNsYXJlIGxldCBDcnlwdG9KUzogYW55O1xyXG5kZWNsYXJlIGxldCAkOiBhbnk7XHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBTZXJ2aWNlIHtcclxuICBwdWJsaWMgY3JlYXRlUmVwb3J0czogYm9vbGVhbiA9IHRydWU7XHJcbiAgcHVibGljIGlzRWRpdFJlcG9ydDogYW55ID0gdW5kZWZpbmVkO1xyXG4gIHB1YmxpYyBzaG93UmVwb3J0RGF0YTogYW55ID0gdW5kZWZpbmVkO1xyXG4gIHB1YmxpYyBzZWxlY3RlZE1lbnU6IGFueSA9ICdncm91cFJlcXVlc3QnO1xyXG4gIHB1YmxpYyBjdXJyZW50QmFzZWRPbjogYW55ID0gJ2dyb3VwLXJlcXVlc3QnO1xyXG5cclxuICBwdWJsaWMgdXBkYXRlVmFsdWU6IGFueTtcclxuXHJcbiAgZXhwYW5kTGlzdChpZDogbnVtYmVyLCBsaXN0RGF0YTogYW55KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XHJcbiAgfVxyXG4gIC8vQ29tbW9uIGxpc3Qgc2VydmljZSBmb3IgcGFnaW5hdGlvblxyXG4gIHB1YmxpYyBsaXN0U2VydmljZShsaXN0OiBhbnksIHBhZ2luYXRpb246IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICBsaXN0WydjdXJyZW50UGFnZSddID1cclxuICAgICAgbGlzdFsnY3VycmVudFBhZ2UnXSA9PSB1bmRlZmluZWQgPyAxIDogbGlzdFsnY3VycmVudFBhZ2UnXTtcclxuXHJcbiAgICBsaXN0WydsaXN0X2JvZHknXSA9IGxpc3RbJ2xpc3RfYm9keSddICE9IG51bGwgPyBsaXN0WydsaXN0X2JvZHknXSA6IFtdO1xyXG5cclxuICAgIGxpc3RbJ3RvdGFsSXRlbXMnXSA9IGxpc3RbJ2xpc3RfYm9keSddLmxlbmd0aDtcclxuXHJcbiAgICBsaXN0WydkZWZhdWx0X1Bhcm1zJ11bJ3BhZ2UnXSA9XHJcbiAgICAgIGxpc3RbJ2RlZmF1bHRfUGFybXMnXVsncGFnZSddID09IDAgPyAxIDogbGlzdFsnZGVmYXVsdF9QYXJtcyddWydwYWdlJ107XHJcblxyXG4gICAgbGlzdFsnbm9vZlBhZ2VzJ10gPSBNYXRoLmNlaWwoXHJcbiAgICAgIGxpc3RbJ2xpc3RfYm9keSddLmxlbmd0aCAvIGxpc3RbJ2RlZmF1bHRfUGFybXMnXVsnaXRlbXNQZXJQYWdlJ11cclxuICAgICk7XHJcblxyXG4gICAgbGlzdFsnY3VycmVudFBhZ2UnXSA9XHJcbiAgICAgIGxpc3RbJ2N1cnJlbnRQYWdlJ10gPiBsaXN0Wydub29mUGFnZXMnXVxyXG4gICAgICAgID8gbGlzdFsnbm9vZlBhZ2VzJ11cclxuICAgICAgICA6IGxpc3RbJ2N1cnJlbnRQYWdlJ107XHJcblxyXG4gICAgbGlzdFsnZGVmYXVsdF9QYXJtcyddWydwYWdlJ10gPVxyXG4gICAgICBsaXN0WydkZWZhdWx0X1Bhcm1zJ11bJ3BhZ2UnXSA+IGxpc3RbJ25vb2ZQYWdlcyddXHJcbiAgICAgICAgPyBsaXN0Wydub29mUGFnZXMnXVxyXG4gICAgICAgIDogbGlzdFsnZGVmYXVsdF9QYXJtcyddWydwYWdlJ107XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBwYWdpbmF0aW9uID09IHRydWUgJiZcclxuICAgICAgbGlzdFsnbGlzdF9ib2R5J10ubGVuZ3RoID4gbGlzdFsnZGVmYXVsdF9QYXJtcyddWydpdGVtc1BlclBhZ2UnXVxyXG4gICAgKVxyXG4gICAgICBsaXN0WydkZWZhdWx0X2RhdGEnXSA9IGxpc3RbJ2xpc3RfYm9keSddLnNsaWNlKFxyXG4gICAgICAgIChsaXN0WydkZWZhdWx0X1Bhcm1zJ11bJ3BhZ2UnXSAtIDEpICpcclxuICAgICAgICAgIGxpc3RbJ2RlZmF1bHRfUGFybXMnXVsnaXRlbXNQZXJQYWdlJ10sXHJcbiAgICAgICAgbGlzdFsnZGVmYXVsdF9QYXJtcyddWydwYWdlJ10gKiBsaXN0WydkZWZhdWx0X1Bhcm1zJ11bJ2l0ZW1zUGVyUGFnZSddXHJcbiAgICAgICk7XHJcbiAgICBlbHNlIGxpc3RbJ2RlZmF1bHRfZGF0YSddID0gbGlzdFsnbGlzdF9ib2R5J107XHJcbiAgICByZXR1cm4gbGlzdDtcclxuICB9XHJcbiAgY2hhcnRNb2R1bGVzOiBvYmplY3QgPSB7XHJcbiAgICByZXF1ZXN0X3RyZW5kX3llYXI6ICdyZXF1ZXN0LXRyZW5kJyxcclxuICAgIHJlcXVlc3RfdHJlbmRfY29tcGFyaXNpb246ICdyZXF1ZXN0LXRyZW5kLWNvbXBhcmlzb24nLFxyXG4gICAgcmV2ZW51ZV9hbmFseXNpczogJ3JldmVudWUtYW5hbHlzaXMnLFxyXG4gICAgcGlwZWxpbmVfZGVwYXJ0dXJlOiAncGlwZWxpbmUtZGVwYXJ0dXJlJyxcclxuICB9O1xyXG4gIGV4cGFuZEFsbDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnlcclxuICBwdWJsaWMgaHR0cFBvc3QoXHJcbiAgICBpbnB1dERhdGE6IGFueSxcclxuICAgIGFjdGlvbk5hbWU6IHN0cmluZyxcclxuICAgIHVybDogYW55XHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIC8vIEFFUyBlbmNyeXB0aW9uXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXHJcbiAgICBjb25zdCBkYXRhOiBzdHJpbmcgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoaW5wdXREYXRhKSxcclxuICAgICAgQ3J5cHRvSlMuZW5jLkJhc2U2NC5wYXJzZShlbnZpcm9ubWVudC5lbmNyeXB0aW9uS2V5KSxcclxuICAgICAgeyBtb2RlOiBDcnlwdG9KUy5tb2RlLkVDQiB9XHJcbiAgICApLnRvU3RyaW5nKCk7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdkYXRhJywgZGF0YSk7XHJcbiAgICBjb25zdCBiYWNrRW5kVVJMID0gdXJsO1xyXG4gICAgaWYgKGFjdGlvbk5hbWUgPT0gJ2dldCcgfHwgYWN0aW9uTmFtZSA9PSAnR0VUJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldChiYWNrRW5kVVJMKS5waXBlKChkYXRhKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlRGF0YTogYW55ID0ge307XHJcbiAgICAgICAgcmVzcG9uc2VEYXRhID0gZGF0YTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAucG9zdChiYWNrRW5kVVJMLCBmb3JtRGF0YSwge1xyXG4gICAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyxcclxuICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgICAgfSlcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIG1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2VEYXRhOiBhbnkgPSB7fTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlOiBhbnk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YS5ib2R5ID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKFxyXG4gICAgICAgICAgICAgICAgQ3J5cHRvSlMuQUVTLmRlY3J5cHQoXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEuYm9keS5yZXBsYWNlKC9eXCIoLiopXCIkLywgJyQxJyksXHJcbiAgICAgICAgICAgICAgICAgIENyeXB0b0pTLmVuYy5CYXNlNjQucGFyc2UoZW52aXJvbm1lbnQuZGVjcnlwdGlvbktleSksXHJcbiAgICAgICAgICAgICAgICAgIHsgbW9kZTogQ3J5cHRvSlMubW9kZS5FQ0IgfVxyXG4gICAgICAgICAgICAgICAgKS50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOClcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJlc3BvbnNlID0gZGF0YS5ib2R5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICByZXNwb25zZURhdGEuc3RhdHVzID0gZGF0YS5zdGF0dXM7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZURhdGE7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEV4cGFuZCBhbGwgbGlzdCByb3dcclxuICAgKiBAcGFyYW0gbGlzdERhdGFcclxuICAgKi9cclxuICBwdWJsaWMgZXhwYW5kQ29udGFpbmVyQWxsKGxpc3REYXRhOiBhbnkpIHtcclxuICAgIGlmICh0aGlzLmV4cGFuZEFsbC5sZW5ndGggPT0gMCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3REYXRhWydkZWZhdWx0X2RhdGEnXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBmbGFnOiBib29sZWFuID0gJCgnI2V4cGFuZENvbnRhaW5lcicgKyBpKS5oYXNDbGFzcygnZC1ub25lJylcclxuICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmV4cGFuZEFsbC5wdXNoKGZsYWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5leHBhbmRBbGwuaW5kZXhPZihmYWxzZSkgPT0gLTEpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0RGF0YVsnZGVmYXVsdF9kYXRhJ10ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLmV4cGFuZEFsbFtpXSA9IGZhbHNlO1xyXG4gICAgICAgICQoJyNleHBhbmRjbG9zZScgKyBpKVxyXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKCdpY29uLTcxLWluZm91cCcpXHJcbiAgICAgICAgICAuYWRkQ2xhc3MoJ2ljb24tNzItaW5mb2Rvd24nKTtcclxuICAgICAgfVxyXG4gICAgICAkKCcuY2xzLXN1Ymxpc3QnKS5yZW1vdmVDbGFzcygnZC1ub25lJykuYWRkQ2xhc3MoJ2QtZmxleCcpO1xyXG5cclxuICAgICAgbGlzdERhdGEuZGVmYXVsdF9QYXJtcy5leHBhbmQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLmNscy1zdWJsaXN0JykucmVtb3ZlQ2xhc3MoJ2QtZmxleCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0RGF0YVsnZGVmYXVsdF9kYXRhJ10ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLmV4cGFuZEFsbFtpXSA9IHRydWU7XHJcbiAgICAgICAgbGlzdERhdGEuZGVmYXVsdF9QYXJtcy5leHBhbmQgPSBmYWxzZTtcclxuICAgICAgICAkKCcjZXhwYW5kY2xvc2UnICsgaSlcclxuICAgICAgICAgIC5yZW1vdmVDbGFzcygnaWNvbi03Mi1pbmZvZG93bicpXHJcbiAgICAgICAgICAuYWRkQ2xhc3MoJ2ljb24tNzEtaW5mb3VwJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBkYXNoYm9hcmRTZXJ2aWNlKFxyXG4gICAgbW9kdWxlTmFtZTogc3RyaW5nLFxyXG4gICAgaW5wdXREYXRhOiBhbnksXHJcbiAgICBhY3Rpb25OYW1lOiBzdHJpbmdcclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgLy8gQUVTIGVuY3J5cHRpb25cclxuICAgIGNvbnN0IGRhdGE6IHN0cmluZyA9IENyeXB0b0pTLkFFUy5lbmNyeXB0KFxyXG4gICAgICBKU09OLnN0cmluZ2lmeShpbnB1dERhdGEpLFxyXG4gICAgICBDcnlwdG9KUy5lbmMuQmFzZTY0LnBhcnNlKGVudmlyb25tZW50LmVuY3J5cHRpb25LZXkpLFxyXG4gICAgICB7IG1vZGU6IENyeXB0b0pTLm1vZGUuRUNCIH1cclxuICAgICkudG9TdHJpbmcoKTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2RhdGEnLCBkYXRhKTtcclxuICAgIGxldCBiYWNrRW5kVVJMID1cclxuICAgICAgZW52aXJvbm1lbnQuQkFDS0VORF9VUkwgKyAnJyArIHRoaXMuY2hhcnRNb2R1bGVzW21vZHVsZU5hbWVdO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAucG9zdChiYWNrRW5kVVJMLCBmb3JtRGF0YSwge1xyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCcsXHJcbiAgICAgIH0pXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgbGV0IHJlc3BvbnNlRGF0YTogYW55ID0ge307XHJcbiAgICAgICAgICBsZXQgcmVzcG9uc2U6IGFueTtcclxuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YS5ib2R5ID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShcclxuICAgICAgICAgICAgICBDcnlwdG9KUy5BRVMuZGVjcnlwdChcclxuICAgICAgICAgICAgICAgIGRhdGEuYm9keS5yZXBsYWNlKC9eXCIoLiopXCIkLywgJyQxJyksXHJcbiAgICAgICAgICAgICAgICBDcnlwdG9KUy5lbmMuQmFzZTY0LnBhcnNlKGVudmlyb25tZW50LmRlY3J5cHRpb25LZXkpLFxyXG4gICAgICAgICAgICAgICAgeyBtb2RlOiBDcnlwdG9KUy5tb2RlLkVDQiB9XHJcbiAgICAgICAgICAgICAgKS50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gZGF0YS5ib2R5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmVzcG9uc2VEYXRhID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICByZXNwb25zZURhdGEuc3RhdHVzID0gZGF0YS5zdGF0dXM7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyBkb3dubG9hZCBzZXJ2aWNlXHJcbiAgcHVibGljIGRvd25sb2FkRXhjZWwoXHJcbiAgICBpbnB1dERhdGE6IGFueSxcclxuICAgIGFjdGlvbk5hbWU6IHN0cmluZyxcclxuICAgIHVybDogYW55LFxyXG4gICAgZmlsZU5hbWU6IHN0cmluZ1xyXG4gICk6IGFueSB7XHJcbiAgICAvLyBBRVMgZW5jcnlwdGlvblxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxyXG4gICAgY29uc3QgZGF0YTogc3RyaW5nID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KGlucHV0RGF0YSksXHJcbiAgICAgIENyeXB0b0pTLmVuYy5CYXNlNjQucGFyc2UoZW52aXJvbm1lbnQuZW5jcnlwdGlvbktleSksXHJcbiAgICAgIHsgbW9kZTogQ3J5cHRvSlMubW9kZS5FQ0IgfVxyXG4gICAgKS50b1N0cmluZygpO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZGF0YScsIGRhdGEpO1xyXG4gICAgdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KHVybCwgZm9ybURhdGEsIHsgcmVzcG9uc2VUeXBlOiAnYmxvYicgfSlcclxuICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IEJsb2IpID0+IHtcclxuICAgICAgICAvLyBzYXZlQXMocmVzcG9uc2UsIGZpbGVOYW1lICsgJy54bHN4Jyk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXRBdXRoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFBvc3QoXHJcbiAgICAgIHtcclxuICAgICAgICByZXBvcnROYW1lOiAnaW5pdC1hdXRoJyxcclxuICAgICAgICBcInJlcXVlc3RVcmxcIjpcImh0dHA6Ly9kZXYtcm0uZ3JvdXBybS5uZXQvNTliNGJhMDYwYjczMzliMjZiNzU4OWMyYzM3YWU0OWUvI3Vkc3BNeUErQlN6bENQRDZBMFVXQ3hQWWRVY1lhNmFSNVFUOExXM2g5aWJ4N1ltOXBpNEthcWNHYnhkTlNSWjdrTWZIMHZjZ0llcHVRd1Y1UWh1YnVHUW0vVVNXRHZUSWlwOE5MZXdrYmtsRFNxNk1mcFhnNlNKK216Y0JkZ1JFM2VIN1JvNTZ5NmpPL2F2Z0ROaTY0Zz09XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgJycsXHJcbiAgICAgIGVudmlyb25tZW50LkNPTU1PTl9VUkwgKyAnaW5pdC1hdXRoJ1xyXG4gICAgKS50b1Byb21pc2UoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRTdWJNb2R1bGVzKHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJ1BPU1QnLFxyXG4gICAgICBlbnZpcm9ubWVudC5ST09UX0JBQ0tFTkRfVVJMICsgJ2NvbnZlcnNpb24tcmVwb3J0L2dldC1hbGwtcmVwb3J0LXR5cGVzJ1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXREcm9wRG93bkRhdGEocmVxdWVzdERhdGE6IGFueSwgdXJsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KHJlcXVlc3REYXRhLCAnUE9TVCcsIGVudmlyb25tZW50LkNPTU1PTl9VUkwgKyB1cmwpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhbmRlbFNob3dSZXBvcnQocmVxdWVzdERhdGE6IGFueSwgdXJsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJ1BPU1QnLFxyXG4gICAgICBlbnZpcm9ubWVudC5ST09UX0JBQ0tFTkRfVVJMICsgJ2NvbnZlcnNpb24tcmVwb3J0LycgKyB1cmxcclxuICAgICk7XHJcbiAgfVxyXG4gIC8vIHVzZXIgQWN0aW9uIExvZ1xyXG4gIHB1YmxpYyB2aWV3VXNlckFjdGlvbkxvZyhyZXF1ZXN0RGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwUG9zdChcclxuICAgICAgcmVxdWVzdERhdGEsXHJcbiAgICAgICdQT1NUJyxcclxuICAgICAgJ2h0dHBzOi8vZGV2LWIyYndhbGxldC5pbmZpbml0aXNvZnR3YXJlLm5ldC91c2VyLWFjdGlvbi92aWV3LXVzZXItYWN0aW9uLWxvZydcclxuICAgICk7XHJcbiAgfVxyXG4gIC8vIENvbnZlcnNpb24gUmVwb3J0XHJcbiAgcHVibGljIGdldEFsbEZpZWxkc0NvbnZlcnNpb24ocmVxdWVzdERhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFBvc3QoXHJcbiAgICAgIHJlcXVlc3REYXRhLFxyXG4gICAgICAnUE9TVCcsXHJcbiAgICAgIGVudmlyb25tZW50LlJPT1RfQkFDS0VORF9VUkwgK1xyXG4gICAgICAgICdjb252ZXJzaW9uLXJlcG9ydC9nZXQtYWxsLWZpZWxkcy1jb25kaXRpb25zJ1xyXG4gICAgKTtcclxuICB9XHJcbiAgcHVibGljIGhhbmRlbFNhdmVSZXBvcnRDb252ZXJzaW9uKHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJycsXHJcbiAgICAgIGVudmlyb25tZW50LlJPT1RfQkFDS0VORF9VUkwgKyAnY29udmVyc2lvbi1yZXBvcnQvc2F2ZS1yZXBvcnRzJ1xyXG4gICAgKTtcclxuICB9XHJcbiAgcHVibGljIGdldFNhdmVkUmVwb3J0cyhyZXF1ZXN0RGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwUG9zdChcclxuICAgICAgcmVxdWVzdERhdGEsXHJcbiAgICAgICcnLFxyXG4gICAgICBlbnZpcm9ubWVudC5ST09UX0JBQ0tFTkRfVVJMICsgJ2N1c3RvbS1yZXBvcnQvZ2V0LXNhdmVkLXJlcG9ydHMnXHJcbiAgICApO1xyXG4gIH1cclxuICAvLyBTY2hlZHVsZSBSZXBvcnRcclxuICBwdWJsaWMgc2NoZWR1bGVTYXZlZFJlcG9ydHMocmVxdWVzdERhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFBvc3QoXHJcbiAgICAgIHJlcXVlc3REYXRhLFxyXG4gICAgICAnJyxcclxuICAgICAgZW52aXJvbm1lbnQuUk9PVF9CQUNLRU5EX1VSTCArICdjb252ZXJzaW9uLXJlcG9ydC9zY2hlZHVsZS1zYXZlZC1yZXBvcnRzJ1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRTY2hlZHVsZURyb3Bkb3duRGF0YShyZXF1ZXN0RGF0YTogYW55LCB1cmw6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFBvc3QocmVxdWVzdERhdGEsICdQT1NUJywgZW52aXJvbm1lbnQuQ09NTU9OX1VSTCArIHVybCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRUcmF2ZWxBZ2VuY3kocmVxdWVzdERhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFBvc3QoXHJcbiAgICAgIHJlcXVlc3REYXRhLFxyXG4gICAgICAnJyxcclxuICAgICAgZW52aXJvbm1lbnQuQ09NTU9OX1VSTCArICdnZXQtdHJhdmVsLWFnZW5jeS1wb3NzaWJsZS12YWx1ZXMnXHJcbiAgICApO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0VXNlclR5cGUocmVxdWVzdERhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFBvc3QoXHJcbiAgICAgIHJlcXVlc3REYXRhLFxyXG4gICAgICAnJyxcclxuICAgICAgZW52aXJvbm1lbnQuQ09NTU9OX1VSTCArICdnZXQtdXNlci10eXBlLXZhbHVlcydcclxuICAgICk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRDb3VudHJ5VmFsKHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJycsXHJcbiAgICAgIGVudmlyb25tZW50LkNPTU1PTl9VUkwgKyByZXF1ZXN0RGF0YS5yZXBvcnROYW1lXHJcbiAgICApO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0U2VjdG9yVmFsKHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJycsXHJcbiAgICAgIGVudmlyb25tZW50LkNPTU1PTl9VUkwgKyAnZ2V0LXNlY3Rvci1wb3NzaWJsZS12YWx1ZXMnXHJcbiAgICApO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0U2VjdG9yUG9zVmFsKHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJycsXHJcbiAgICAgIGVudmlyb25tZW50LkNPTU1PTl9VUkwgKyAnZ2V0LXNlY3Rvci1wb3NzaWJsZS12YWx1ZXMnXHJcbiAgICApO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0cG9zVmFsKHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJycsXHJcbiAgICAgIGVudmlyb25tZW50LkNPTU1PTl9VUkwgKyAnZ2V0LXBvcy1wb3NzaWJsZS12YWx1ZXMnXHJcbiAgICApO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0U3RhdHVzUmVxdWVzdChyZXF1ZXN0RGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwUG9zdChcclxuICAgICAgcmVxdWVzdERhdGEsXHJcbiAgICAgICcnLFxyXG4gICAgICBlbnZpcm9ubWVudC5DT01NT05fVVJMICsgJ2dldC1zdGF0dXMtb2YtcmVxdWVzdC12YWx1ZXMnXHJcbiAgICApO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0U3RhdHVzUmVxdWVzdFZhbChyZXF1ZXN0RGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwUG9zdChcclxuICAgICAgcmVxdWVzdERhdGEsXHJcbiAgICAgICcnLFxyXG4gICAgICBlbnZpcm9ubWVudC5DT01NT05fVVJMICsgJ2dldC1zdGF0dXMtb2YtcmVxdWVzdC12YWx1ZXMnXHJcbiAgICApO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0Q3VycmVuY3lWYWx1ZXMocmVxdWVzdERhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFBvc3QoXHJcbiAgICAgIHJlcXVlc3REYXRhLFxyXG4gICAgICAnJyxcclxuICAgICAgZW52aXJvbm1lbnQuQ09NTU9OX1VSTCArICdnZXQtY3VycmVuY3ktcG9zc2libGUtdmFsdWVzJ1xyXG4gICAgKTtcclxuICB9XHJcbiAgcHVibGljIGdldEdyb3VwQ2F0ZWdvcnlWYWwocmVxdWVzdERhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFBvc3QoXHJcbiAgICAgIHJlcXVlc3REYXRhLFxyXG4gICAgICAnJyxcclxuICAgICAgZW52aXJvbm1lbnQuQ09NTU9OX1VSTCArICdnZXQtZ3JvdXAtY2F0ZWdvcnktdmFsdWVzJ1xyXG4gICAgKTtcclxuICB9XHJcbiAgcHVibGljIGdldFNjaGVkdWxlU2F2ZWRSZXBvcnRNZXNzYWdlKHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJycsXHJcbiAgICAgIGVudmlyb25tZW50LkNVU1RPTUVfQkFDS0VORF9VUkwgKyAnc2NoZWR1bGUtc2F2ZWQtcmVwb3J0cydcclxuICAgICk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXREYXRhSGlzdG9yeURldGFpbHMocmVxdWVzdERhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFBvc3QoXHJcbiAgICAgIHJlcXVlc3REYXRhLFxyXG4gICAgICAnJyxcclxuICAgICAgZW52aXJvbm1lbnQuUkVRVUVTVF9VUkwgKyAnZ2V0RGF0YWZvcmhpc3RvcnlkZXRhaWxzJ1xyXG4gICAgKTtcclxuICB9XHJcbiAgcHVibGljIGdldERlbGV0ZVJlcG9ydHMocmVxdWVzdERhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFBvc3QoXHJcbiAgICAgIHJlcXVlc3REYXRhLFxyXG4gICAgICAnJyxcclxuICAgICAgZW52aXJvbm1lbnQuQ1VTVE9NRV9CQUNLRU5EX1VSTCArICdzYXZlLXJlcG9ydHMnXHJcbiAgICApO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0U2F2ZWRSZXBvcnREZWxldGUocmVxdWVzdERhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFBvc3QoXHJcbiAgICAgIHJlcXVlc3REYXRhLFxyXG4gICAgICAnJyxcclxuICAgICAgZW52aXJvbm1lbnQuUk9PVF9CQUNLRU5EX1VSTCArICdjdXN0b20tcmVwb3J0L3NhdmUtcmVwb3J0cydcclxuICAgICk7XHJcbiAgfVxyXG4gIHB1YmxpYyBoYW5kbGVBbGxSZXBvcnR0eXBlKHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJycsXHJcbiAgICAgIGVudmlyb25tZW50LkNVU1RPTUVfQkFDS0VORF9VUkwgKyAnZ2V0LWFsbC1yZXBvcnQtdHlwZXMnXHJcbiAgICApO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0U2F2ZWRSZXBvcnREZXRhaWxzKHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJycsXHJcbiAgICAgIGVudmlyb25tZW50LkNVU1RPTUVfQkFDS0VORF9VUkwgKyAnZ2V0LXNhdmVkLXJlcG9ydHMnXHJcbiAgICApO1xyXG4gIH1cclxuICAvLyBDdXN0b21SZXBvcnRcclxuICBwdWJsaWMgZ2V0QWxsUmVwb3J0c1R5cGUocmVxdWVzdERhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFBvc3QoXHJcbiAgICAgIHJlcXVlc3REYXRhLFxyXG4gICAgICAnJyxcclxuICAgICAgZW52aXJvbm1lbnQuQ1VTVE9NRV9CQUNLRU5EX1VSTCArICdnZXQtYWxsLXJlcG9ydC10eXBlcydcclxuICAgICk7XHJcbiAgfVxyXG4gIHB1YmxpYyBkdW1teVJlc3BvbnNlKHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHZhciBkYXRhID0gdGhpcy5odHRwLmdldChyZXF1ZXN0RGF0YSk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcbiAgcHVibGljIGdldEFsbEZpZWxkQ29uZGl0aW9ucyhyZXF1ZXN0RGF0YTogYW55LCBzZWxlY3RNZW51KSB7XHJcbiAgICAvLyBmaWVsZHNEYXRhICBnZXRGaWVsZHNcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJ2dldCcsXHJcbiAgICAgIGVudmlyb25tZW50LkNVU1RPTUVfQkFDS0VORF9VUkwgK1xyXG4gICAgICAgICdnZXQtYWxsLWZpZWxkcy1jb25kaXRpb25zLycgK1xyXG4gICAgICAgIHNlbGVjdE1lbnVcclxuICAgICk7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwUG9zdChcclxuICAgIC8vICAgcmVxdWVzdERhdGEsXHJcbiAgICAvLyAgICcnLFxyXG4gICAgLy8gICBlbnZpcm9ubWVudC5DVVNUT01FX0JBQ0tFTkRfVVJMICsgJ2dldC1hbGwtZmllbGRzLWNvbmRpdGlvbnMnXHJcbiAgICAvLyApO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0TWVudVJlc3BvbnNlKHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJ2dldCcsXHJcbiAgICAgIGVudmlyb25tZW50LkNVU1RPTUVfQkFDS0VORF9VUkwgKyAnbWVudSdcclxuICAgICk7XHJcbiAgfVxyXG4gIHB1YmxpYyBzYXZlZFJlcG9ydENyZWF0aW9uKHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJycsXHJcbiAgICAgIGVudmlyb25tZW50LkNVU1RPTUVfQkFDS0VORF9VUkwgKyAnc2F2ZS1yZXBvcnRzJ1xyXG4gICAgKTtcclxuICB9XHJcbiAgcHVibGljIHNhdmVkUmVwb3J0dXBkYXRlKHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJycsXHJcbiAgICAgIGVudmlyb25tZW50LkNVU1RPTUVfQkFDS0VORF9VUkwgKyAnc2F2ZS1yZXBvcnRzJ1xyXG4gICAgKTtcclxuICB9XHJcbiAgcHVibGljIHNhdmVkUmVwb3J0RGVsZXRlKHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJycsXHJcbiAgICAgIGVudmlyb25tZW50LkNVU1RPTUVfQkFDS0VORF9VUkwgKyAnc2F2ZS1yZXBvcnRzJ1xyXG4gICAgKTtcclxuICB9XHJcbiAgcHVibGljIHNhdmVkUmVwb3J0RGVsZXRlUmVxRGF0YShyZXF1ZXN0RGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwUG9zdChcclxuICAgICAgcmVxdWVzdERhdGEsXHJcbiAgICAgICcnLFxyXG4gICAgICBlbnZpcm9ubWVudC5ST09UX0JBQ0tFTkRfVVJMICsgJ2N1c3RvbS1yZXBvcnQvc2F2ZS1yZXBvcnRzJ1xyXG4gICAgKTtcclxuICB9XHJcbiAgcHVibGljIHJlcG9ydFVzZXJOYW1lVHlwZShyZXF1ZXN0RGF0YTogYW55LCByZXBvcnROYW1lOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KHJlcXVlc3REYXRhLCAnJywgZW52aXJvbm1lbnQuQ09NTU9OX1VSTCArIHJlcG9ydE5hbWUpO1xyXG4gIH1cclxuICBwdWJsaWMgc3RhdHVzUmVxdWVzdFNlcnZpY2UocmVxdWVzdERhdGE6IGFueSwgcmVwb3J0TmFtZTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwUG9zdChyZXF1ZXN0RGF0YSwgJycsIGVudmlyb25tZW50LkNPTU1PTl9VUkwgKyByZXBvcnROYW1lKTtcclxuICB9XHJcbiAgcHVibGljIGdldERhdGFGaWVsZENvbmRpdGlvbihyZXF1ZXN0RGF0YTogYW55LCByZXBvcnROYW1lOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJycsXHJcbiAgICAgIGVudmlyb25tZW50LkNVU1RPTUVfQkFDS0VORF9VUkwgK1xyXG4gICAgICAgICdnZXQtZGF0YS1mb3ItZmllbGRzLWNvbmRpdGlvbnMnICtcclxuICAgICAgICAnLScgK1xyXG4gICAgICAgIHJlcG9ydE5hbWVcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyBBdXRvIENvbXBsZXRlXHJcbiAgcHVibGljIGF1dG9Db21wbGV0ZURhdGEocmVxdWVzdERhdGE6IGFueSwgcmVwb3J0TmFtZTogYW55KSB7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwUG9zdChyZXF1ZXN0RGF0YSwgJycsIGVudmlyb25tZW50LkNPTU1PTl9VUkwgKyByZXBvcnROYW1lKTtcclxuICAgIGxldCB1cmwgPSBlbnZpcm9ubWVudC5DT01NT05fVVJMICsgcmVwb3J0TmFtZTtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KHJlcXVlc3REYXRhLCAnJywgdXJsKTtcclxuICB9XHJcbiAgLy8gVXNlckFjdGlvblxyXG4gIHB1YmxpYyB1c2VyQWN0aW9uRHJvcERvd24ocmVxdWVzdERhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFBvc3QoXHJcbiAgICAgIHJlcXVlc3REYXRhLFxyXG4gICAgICAnUE9TVCcsXHJcbiAgICAgICdodHRwczovL2Rldi1iMmJ3YWxsZXQuaW5maW5pdGlzb2Z0d2FyZS5uZXQvdXNlci1hY3Rpb24vJyArXHJcbiAgICAgICAgJ2Ryb3AtZG93bi11c2VyLWFjdGlvbi1sb2cnXHJcbiAgICApO1xyXG4gIH1cclxuICBwdWJsaWMgdXNlckFjdGlvbkxvZyhyZXF1ZXN0RGF0YTogYW55LCB1cmw6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFBvc3QocmVxdWVzdERhdGEsICcnLCB1cmwpO1xyXG4gIH1cclxuXHJcbiAgLy8gRGFzaGJvYXJkXHJcbiAgcHVibGljIHJldmVudWVBbmFseXNpc1JlcXVlc3QocmVxdWVzdERhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGFzaGJvYXJkU2VydmljZSgncmV2ZW51ZV9hbmFseXNpcycsIHJlcXVlc3REYXRhLCAnJyk7XHJcbiAgfVxyXG4gIHB1YmxpYyB0cmVuZFllYXJSZXF1ZXN0KHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmRhc2hib2FyZFNlcnZpY2UoJ3JlcXVlc3RfdHJlbmRfeWVhcicsIHJlcXVlc3REYXRhLCAnJyk7XHJcbiAgfVxyXG4gIHB1YmxpYyB0cmVuZFllYXJSZXF1ZXN0Q29tcGFyaXNpb24ocmVxdWVzdERhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGFzaGJvYXJkU2VydmljZSgncmVxdWVzdF90cmVuZF9jb21wYXJpc2lvbicsIHJlcXVlc3REYXRhLCAnJyk7XHJcbiAgfVxyXG4gIC8vIHBpcGVsaW5lXHJcbiAgcHVibGljIHBpcGVsaW5lRGVwYXJ0dXJlUmVxdWVzdChyZXF1ZXN0RGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXNoYm9hcmRTZXJ2aWNlKCdwaXBlbGluZV9kZXBhcnR1cmUnLCByZXF1ZXN0RGF0YSwgJycpO1xyXG4gIH1cclxuXHJcbiAgLy8gRHluYW1pYyBSZXBvcnRcclxuICBwdWJsaWMgYXV0aGVudGljYXRpb25BbmRBdXRob3JpemF0aW9uKHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJ1BPU1QnLFxyXG4gICAgICBlbnZpcm9ubWVudC5ST09UX0JBQ0tFTkRfVVJMICsgJ2NvbW1vbi9hdXRoZW50aWNhdGUnXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFJlcG9ydEtleURhdGEocmVxdWVzdERhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFBvc3QoXHJcbiAgICAgIHJlcXVlc3REYXRhLFxyXG4gICAgICAnR0VUJyxcclxuICAgICAgZW52aXJvbm1lbnQuUk9PVF9CQUNLRU5EX1VSTCArICdjb21tb24vcm91dGluZydcclxuICAgICk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRTdWJNb2R1bGVEYXRhKHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJ0dFVCcsXHJcbiAgICAgIGVudmlyb25tZW50LlJPT1RfQkFDS0VORF9VUkwgKyAnY29tbW9uL21lbnUnXHJcbiAgICApO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0U2F2ZWRSZXBvcnREYXRhKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZHVtbXlSZXNwb25zZSgnL2Fzc2V0cy9saXN0SlNPTi9zYXZlZFJlcG9ydC5qc29uJyk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRBbGxGaWVsZHNDb25kaXRpb25zKHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBQb3N0KFxyXG4gICAgICByZXF1ZXN0RGF0YSxcclxuICAgICAgJ0dFVCcsXHJcbiAgICAgIGVudmlyb25tZW50LlJPT1RfQkFDS0VORF9VUkwgKyAnY29tbW9uL2dldC1hbGwtZmllbGRzLWNvbmRpdGlvbnMnXHJcbiAgICApO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0TXVsdGlTZWxlY3RPcHRpb24ocmVxdWVzdERhdGE6IGFueSwgcmVzcG9uc2VEZXRhaWw6IHN0cmluZykge1xyXG4gICAgLy8gcmV0dXJuIHRoaXMuaHR0cFBvc3QoXHJcbiAgICAvLyAgIHJlcXVlc3REYXRhLFxyXG4gICAgLy8gICAnR0VUJyxcclxuICAgIC8vICAgZW52aXJvbm1lbnQuUk9PVF9CQUNLRU5EX1VSTCArIHJlc3BvbnNlRGV0YWlsXHJcbiAgICAvLyApO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFBvc3QoXHJcbiAgICAgIHJlcXVlc3REYXRhLFxyXG4gICAgICAnJyxcclxuICAgICAgZW52aXJvbm1lbnQuQ09NTU9OX1VSTCArIHJlc3BvbnNlRGV0YWlsXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=