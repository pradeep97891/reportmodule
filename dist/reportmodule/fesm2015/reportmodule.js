import { __decorate, __awaiter } from 'tslib';
import { ɵɵdefineInjectable, Injectable, ɵɵinject, Component, NgModule, Pipe, EventEmitter, Input, Output } from '@angular/core';
import { trigger, transition, query, style, group, animate } from '@angular/animations';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, DatePipe } from '@angular/common';
import { throwError } from 'rxjs';

let ReportmoduleService = class ReportmoduleService {
    constructor() { }
};
ReportmoduleService.ɵprov = ɵɵdefineInjectable({ factory: function ReportmoduleService_Factory() { return new ReportmoduleService(); }, token: ReportmoduleService, providedIn: "root" });
ReportmoduleService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ReportmoduleService);

// tslint:disable-next-line: no-any
/**
 * Author : Padma Priya CK
 * Desc : router animation
 */
const fadeAnimation = trigger('fadeAnimation', [
    transition('* <=> *', [
        query(':enter, :leave', style({ position: 'fixed', width: '90%', top: '10px' }), { optional: true }),
        group([
            query(':enter', [style({ transform: 'translateX(-100%)' }), animate('1.5s ease-out', style({ transform: 'translateX(0%)' }))], {
                optional: true,
            }),
            query(':leave', [style({ transform: 'translateX(0%)' }), animate('1.5s ease-out', style({ transform: 'translateX(100%)' }))], {
                optional: true,
            }),
        ])
    ])
]);

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    encryptionKey: '97cc+XE5NTUVhWOrdxrESw==',
    decryptionKey: '97cc+XE5NTUVhWOrdxrESw==',
    reportDataLimit: 500,
    // BACKEND_URL: 'http://dev-rm.grouprm.net/reports/dashboard/',
    // REQUEST_URL: 'http://dev-rm.grouprm.net/reports/historydetails/',
    // CUSTOME_BACKEND_URL: 'http://dev-rm.grouprm.net/reports/custom-report/',
    // COMMON_URL: 'http://dev-rm.grouprm.net/reports/common/',
    // ROOT_BACKEND_URL:"http://localhost:8000/reports/"
    userType: null,
    airlineCode: null,
    BACKEND_URL: 'https://report-development.infinitisoftware.net/reports/dashboard/',
    REQUEST_URL: 'https://report-development.infinitisoftware.net/reports/historydetails/',
    CUSTOME_BACKEND_URL: 'https://report-development.infinitisoftware.net/reports/custom-report/',
    COMMON_URL: 'https://report-development.infinitisoftware.net/reports/common/',
    ROOT_BACKEND_URL: 'https://report-development.infinitisoftware.net/reports/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

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
AppService.ɵprov = ɵɵdefineInjectable({ factory: function AppService_Factory() { return new AppService(ɵɵinject(HttpClient)); }, token: AppService, providedIn: "root" });
AppService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AppService);

let CommonService = class CommonService {
    constructor() {
        this.themeWrapper = document.querySelector('html');
        this.theme = {
            'default': {
                '--PRIMARYCOLOR': '#f3b02d',
                '--SECONDARYCOLOR': '#d22636',
                '--DARKBOXSHADOW': '#0000004d',
                '--LINK': '#007bff',
                '--BGLIGHTER': '#f2f5f8',
                '--BGDARK': '#333333',
                '--BGWHITE': '#ffffff',
                '--TXTDARK': '#666666',
                '--TXTDARKER': '#333333',
                '--TXTBLACK': '#000000',
                '--TXTLIGHT': '#8b8f97',
                '--TXTLIGHTER': '#cccccc',
                '--TXTWHITE': '#ffffff',
                '--BDRLIGHTER': '#efefef',
                '--BDRLIGHT': '#9e9e9e',
                '--BDRREGULAR': '#cccccc',
                '--PRIMARYREGULARFONT': 'OpenSans-Regular',
                '--PRIMARYLIGHTFONT': 'OpenSans-Light',
                '--PRIMARYMEDIUMFONT': 'OpenSans-Medium',
                '--PRIMARYSEMIBOLDFONT': 'OpenSans-SemiBold',
                '--PRIMARYBOLDFONT': 'OpenSans-Bold'
            },
            'MH': {
                '--PRIMARYCOLOR': '#19286e',
                '--SECONDARYCOLOR': '#19286e',
                '--DARKBOXSHADOW': '#0000004d',
                '--LINK': '#007bff',
                '--BGLIGHTER': '#f2f5f8',
                '--BGDARK': '#333333',
                '--BGWHITE': '#ffffff',
                '--TXTDARK': '#666666',
                '--TXTDARKER': '#333333',
                '--TXTBLACK': '#000000',
                '--TXTLIGHT': '#8b8f97',
                '--TXTLIGHTER': '#cccccc',
                '--TXTWHITE': '#ffffff',
                '--BDRLIGHTER': '#efefef',
                '--BDRLIGHT': '#9e9e9e',
                '--BDRREGULAR': '#cccccc',
                '--PRIMARYREGULARFONT': 'OpenSans-Regular',
                '--PRIMARYLIGHTFONT': 'OpenSans-Light',
                '--PRIMARYMEDIUMFONT': 'OpenSans-Medium',
                '--PRIMARYSEMIBOLDFONT': 'OpenSans-SemiBold',
                '--PRIMARYBOLDFONT': 'OpenSans-Bold'
            },
            'TR': {
                '--PRIMARYCOLOR': '#000000',
                '--SECONDARYCOLOR': '#ffe900',
                '--DARKBOXSHADOW': '#0000004d',
                '--LINK': '#007bff',
                '--BGLIGHTER': '#f2f5f8',
                '--BGDARK': '#333333',
                '--BGWHITE': '#ffffff',
                '--TXTDARK': '#666666',
                '--TXTDARKER': '#333333',
                '--TXTBLACK': '#000000',
                '--TXTLIGHT': '#8b8f97',
                '--TXTLIGHTER': '#cccccc',
                '--TXTWHITE': '#ffffff',
                '--BDRLIGHTER': '#efefef',
                '--BDRLIGHT': '#9e9e9e',
                '--BDRREGULAR': '#cccccc',
                '--PRIMARYREGULARFONT': 'OpenSans-Regular',
                '--PRIMARYLIGHTFONT': 'OpenSans-Light',
                '--PRIMARYMEDIUMFONT': 'OpenSans-Medium',
                '--PRIMARYSEMIBOLDFONT': 'OpenSans-SemiBold',
                '--PRIMARYBOLDFONT': 'OpenSans-Bold'
            },
            'KM': {
                '--PRIMARYCOLOR': '#dc0c23',
                '--SECONDARYCOLOR': '#299147',
                '--DARKBOXSHADOW': '#0000004d',
                '--LINK': '#007bff',
                '--BGLIGHTER': '#f2f5f8',
                '--BGDARK': '#333333',
                '--BGWHITE': '#ffffff',
                '--TXTDARK': '#666666',
                '--TXTDARKER': '#333333',
                '--TXTBLACK': '#000000',
                '--TXTLIGHT': '#8b8f97',
                '--TXTLIGHTER': '#cccccc',
                '--TXTWHITE': '#ffffff',
                '--BDRLIGHTER': '#efefef',
                '--BDRLIGHT': '#9e9e9e',
                '--BDRREGULAR': '#cccccc',
                '--PRIMARYREGULARFONT': 'OpenSans-Regular',
                '--PRIMARYLIGHTFONT': 'OpenSans-Light',
                '--PRIMARYMEDIUMFONT': 'OpenSans-Medium',
                '--PRIMARYSEMIBOLDFONT': 'OpenSans-SemiBold',
                '--PRIMARYBOLDFONT': 'OpenSans-Bold'
            },
            'WN': {
                '--PRIMARYCOLOR': '#324FB0',
                '--SECONDARYCOLOR': '#FEBE3C',
                '--DARKBOXSHADOW': '#0000004d',
                '--LINK': '#286aa4',
                '--BGLIGHTER': '#f2f5f8',
                '--BGDARK': '#333333',
                '--BGWHITE': '#ffffff',
                '--TXTDARK': '#666666',
                '--TXTDARKER': '#333333',
                '--TXTBLACK': '#000000',
                '--TXTLIGHT': '#8b8f97',
                '--TXTLIGHTER': '#cccccc',
                '--TXTWHITE': '#ffffff',
                '--BDRLIGHTER': '#efefef',
                '--BDRLIGHT': '#9e9e9e',
                '--BDRREGULAR': '#cccccc',
                '--PRIMARYREGULARFONT': 'OpenSans-Regular',
                '--PRIMARYLIGHTFONT': 'OpenSans-Light',
                '--PRIMARYMEDIUMFONT': 'OpenSans-Medium',
                '--PRIMARYSEMIBOLDFONT': 'OpenSans-SemiBold',
                '--PRIMARYBOLDFONT': 'OpenSans-Bold'
            },
            'AMAL': {
                '--PRIMARYCOLOR': '#0261B1',
                '--SECONDARYCOLOR': '#07b9e9',
                '--DARKBOXSHADOW': '#0000004d',
                '--LINK': '#007bcb',
                '--BGLIGHTER': '#e6e8e5',
                '--BGDARK': '#cccccc',
                '--BGWHITE': '#ffffff',
                '--TXTDARK': '#000000',
                '--TXTDARKER': '#333333',
                '--TXTBLACK': '#000000',
                '--TXTLIGHT': '#666666',
                '--TXTLIGHTER': '#cccccc',
                '--TXTWHITE': '#ffffff',
                '--BDRLIGHTER': '#efefef',
                '--BDRLIGHT': '#E6E6E6',
                '--BDRREGULAR': '#cccccc',
                '--PRIMARYREGULARFONT': 'OpenSans-Regular',
                '--PRIMARYLIGHTFONT': 'OpenSans-Light',
                '--PRIMARYMEDIUMFONT': 'OpenSans-Medium',
                '--PRIMARYSEMIBOLDFONT': 'OpenSans-SemiBold',
                '--PRIMARYBOLDFONT': 'OpenSans-Bold'
            },
            'CT': {
                '--PRIMARYCOLOR': '#0075CB',
                '--SECONDARYCOLOR': '#1E4FA0',
                '--DARKBOXSHADOW': '#0000004d',
                '--LINK': '#001764',
                '--BGLIGHTER': '#f2f5f8',
                '--BGDARK': '#cccccc',
                '--BGWHITE': '#ffffff',
                '--TXTDARK': '#000000',
                '--TXTDARKER': '#333333',
                '--TXTBLACK': '#000000',
                '--TXTLIGHT': '#666666',
                '--TXTLIGHTER': '#cccccc',
                '--TXTWHITE': '#ffffff',
                '--BDRLIGHTER': '#efefef',
                '--BDRLIGHT': '#E6E6E6',
                '--BDRREGULAR': '#cccccc',
                '--PRIMARYREGULARFONT': 'OpenSans-Regular',
                '--PRIMARYLIGHTFONT': 'OpenSans-Light',
                '--PRIMARYMEDIUMFONT': 'OpenSans-Medium',
                '--PRIMARYSEMIBOLDFONT': 'OpenSans-SemiBold',
                '--PRIMARYBOLDFONT': 'OpenSans-Bold'
            },
            'RM': {
                '--PRIMARYCOLOR': '#FFB70D',
                '--SECONDARYCOLOR': '#286aa4',
                '--DARKBOXSHADOW': '#0000004d',
                '--LINK': '#286aa4',
                '--BGLIGHTER': '#f2f5f8',
                '--BGDARK': '#333333',
                '--BGWHITE': '#ffffff',
                '--TXTDARK': '#666666',
                '--TXTDARKER': '#333333',
                '--TXTBLACK': '#000000',
                '--TXTLIGHT': '#8b8f97',
                '--TXTLIGHTER': '#cccccc',
                '--TXTWHITE': '#ffffff',
                '--BDRLIGHTER': '#efefef',
                '--BDRLIGHT': '#9e9e9e',
                '--BDRREGULAR': '#cccccc',
                '--PRIMARYREGULARFONT': 'OpenSans-Regular',
                '--PRIMARYLIGHTFONT': 'OpenSans-Light',
                '--PRIMARYMEDIUMFONT': 'OpenSans-Medium',
                '--PRIMARYSEMIBOLDFONT': 'OpenSans-SemiBold',
                '--PRIMARYBOLDFONT': 'OpenSans-Bold'
            },
        };
    }
    themeCall() {
        this.productType = sessionStorage.getItem("themeCode");
        console.log(this.productType);
        for (const [key, value] of Object.entries(this.theme[this.productType])) {
            this.themeWrapper.style.setProperty(key, value);
        }
    }
};
CommonService.ɵprov = ɵɵdefineInjectable({ factory: function CommonService_Factory() { return new CommonService(); }, token: CommonService, providedIn: "root" });
CommonService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CommonService);

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

const routes = [
    // {
    //   path: urlConfig.ROUTES.custom_report,
    //   loadChildren: () => import('./custom-report/custom-report.module').then(m => m.CustomReportModule),
    // },
    // {
    //   path: urlConfig.ROUTES.saved_report_list,
    //   loadChildren: () => import('./saved-reports/saved-reports.module').then(m => m.SavedReportsModule),
    // },
    // {
    //   path: urlConfig.ROUTES.report_schedule,
    //   loadChildren: () => import('./dynamic-report/components/schedule-report/schedule-report.module').then(m => m.ScheduleReportModule),
    // },
    // {
    //   path: urlConfig.ROUTES.requestHistory,
    //   loadChildren: () => import('./request-history/request-history.module').then(m=> m.RequestHistoryModule)  
    // },
    // {
    //   path: urlConfig.ROUTES.conversion_report,
    //   loadChildren: () => import('./conversion-report/conversion-report.module').then(m=> m.ConversionReportModule)
    // },
    // {
    //   path:urlConfig.ROUTES.dashboard,
    //   loadChildren: () => import('./dash-board/dash-board.module').then(m => m.DashBoardModule),
    // },
    // {
    //   path: urlConfig.ROUTES.user_actions,
    //   loadChildren: () => import('./user-action/user-action.module').then(m=>m.UserActionModule)
    // },
    // {
    //   path: urlConfig.ROUTES.error,
    //   loadChildren: () => import('./shared-module/error/error.module').then(m=>m.ErrorModule)
    // },
    // {
    //   path:urlConfig.ROUTES.reports,
    //   loadChildren:()=> import('./dynamic-report/dynamic-report.module').then(m=>m.DynamicReportModule)
    // },
    {
        path: '',
        redirectTo: 'reports',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'reports',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: "disabled" })],
        exports: [RouterModule]
    })
], AppRoutingModule);

let RequestInterceptor = class RequestInterceptor {
    constructor() { }
    intercept(request, next) {
        request = request.clone({
            body: request.body,
        });
        return next.handle(request);
    }
};
RequestInterceptor.ɵprov = ɵɵdefineInjectable({ factory: function RequestInterceptor_Factory() { return new RequestInterceptor(); }, token: RequestInterceptor, providedIn: "root" });
RequestInterceptor = __decorate([
    Injectable({
        providedIn: "root",
    })
], RequestInterceptor);

let ResponseInterceptor = class ResponseInterceptor {
    constructor() {
        this.retry = false;
    }
    // tslint:disable-next-line: no-any
    intercept(request, next) {
        return next.handle(request).pipe(map((event) => {
            if (event.type !== 0 && event.status === 200) {
                let response = {};
                if (event.body.size == undefined && typeof event.body == 'string') {
                    response = JSON.parse(CryptoJS.AES.decrypt(event.body.replace(/^"(.*)"$/, '$1'), CryptoJS.enc.Base64.parse(environment.decryptionKey), { mode: CryptoJS.mode.ECB }).toString(CryptoJS.enc.Utf8));
                }
                else {
                    response = event.body;
                }
                event = event.clone({
                    body: response,
                });
            }
            return event;
        }), catchError((error) => {
            let data = {};
            data = {
                reason: error && error.error.reason ? error.error.reason : '',
                status: error.error,
            };
            return throwError(data);
        }));
    }
};
ResponseInterceptor = __decorate([
    Injectable()
], ResponseInterceptor);

const routes$1 = [];
let CoreModuleRoutingModule = class CoreModuleRoutingModule {
};
CoreModuleRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes$1)],
        exports: [RouterModule]
    })
], CoreModuleRoutingModule);

const appConfig = {
    CURRENTLANGUAGE: '',
    DISPLAYlANGUAGEOPTION: false
};

var English = "English";
var Spanish = "Spanish";
var Portuguese = "Portuguese";
var adjustedAmount = "Adjusted amount";
var adultFare = "Adult fare";
var agencyAccessStatus = "Agency access status";
var agencyName = "Agency name";
var agentAcceptedFare = "Agent accepted fare";
var agentEmailId = "Agent email id";
var agentId = "Agent ID";
var agentResponseDate = "Agent response date";
var agentResponseRemarks = "Agent response remarks";
var agentResponseStatus = "Agent response status";
var agentType = "Agent type";
var airlinesRemarks = "Airline remarks";
var airlineResponseDate = "Airline response date";
var amountPaid = "Amount paid";
var approvedDepartureDate = "Approved departure date";
var approvedFlightNumber = "Approved flight number";
var approvedNoOfPax = "Approved no of pax";
var autoPilotPolicy = "Auto pilot policy";
var availableFields = "Available Fields";
var availableConditions = "Available Conditions";
var baseFare = "Base fare";
var bookedLoadFactor = "Booked load factor";
var overriddenFare = "Overridden fare";
var cabin = "Cabin";
var city = "City";
var conversionRate = "Conversion rate";
var country = "Country";
var countryOfOriginDestination = "Country of origin/destination";
var createdBy = "Created by";
var currency = "Currency";
var dateRangeOfRequests = "Date range of requests";
var approvedDepartureDateTime = "Departure date";
var departureDate = "Departure date";
var discountAmount = "Discount amount";
var displacementFareRemarks = "Displacement fare remarks";
var emailId = "Email ID";
var emailVerificationStatus = "Email verification status";
var Empty = "Empty";
var entries = "entries";
var evaluatedFare = "Evaluated fare";
var exchangeRate = "Exchange rate";
var fareExpiryDate = "Fare expiry date";
var fareOverriddenBy = "Fare overridden by";
var fareOverrideReport = "Fare Override Report";
var flightLoad = "Flight load";
var From = "From";
var fullyPaidGroups = "Fully paid groups";
var groupCategory = "Group category";
var groupFare = "Group fare";
var groupName = "Group Name";
var groupRequest = "Group Request";
var groupRequestId = "Group request id";
var iataCode = "IATA code";
var lastActionedTime = "Last actioned time (Airline)";
var mobileNumber = "Mobile number";
var negotiationApprovedDate = "Negotiation approved date";
var negotiationExpiryDate = "Negotiation expiry date";
var negotiationProcessedCount = "Negotiation processed count";
var negotiationRejectedDate = "Negotiation rejected date";
var negotiationRequestStatus = "Negotiation request status";
var negotiationRequestedDate = "Negotiation requested date";
var newRequestToProcess = "New requests to process";
var Next = "Next";
var requestedNoOfPax = "Requested No of Pax";
var noOfPaxInPNR = "No of pax in PNR";
var officeAddress = "Office address";
var Origin = "Origin";
var Destination = "Destination";
var overRiddenFare = "Overridden fare";
var paidPercentage = "Paid percentage";
var paymentValidityExpired = "Payment validity expired";
var pnr = "PNR";
var pnrStatus = "PNR status";
var pos = "POS";
var Previous = "Previous";
var Proceed = "Proceed";
var reasonForDeclining = "Reason for declining";
var referenceRequestId = "Reference request id";
var registeredAgents = "Registered Agents";
var registeredDate = "Registered date";
var registeredDateRange = "Registered date range";
var requestPendingForReviewApproval = "Request pending for review / approval";
var requestProcessedBy = "Request processed by";
var requestType = "Request type";
var requestUser = "Request user";
var requestedExpectedFare = "Requested / Expected fare";
var requestedDate = "Requested date";
var requestedDepartureDate = "Requested departure date";
var requestedFlightNumber = "Requested flight number";
var requestPendingAcceptanceDecline = "Requests pending acceptance / decline";
var requestsRejectedByAirline = "Requests rejected by airline";
var responseFareFareQuoted = "Response fare/Fare quoted";
var revenueRealized = "Revenue realized (MYR)";
var Search = "Search";
var sector = "Sector";
var Show = "Show";
var Showing = "Showing";
var ssrRevenue = "SSR revenue";
var ssrs = "SSRs";
var standardReport = "Standard Report";
var Status = "Status";
var statusOfRequest = "Status of request";
var stops = "Stops";
var tax = "Tax";
var tcBaseFare = "TC Base Fare";
var tcCount = "TC Count";
var tcTax = "TC Tax";
var ticketedConversionRate = "Ticketed Conversion Rate";
var ticketedGroups = "Ticketed groups";
var To = "To";
var totalAcceptedRequests = "Total accepted requests";
var totalGroupRequest = "Total group requests";
var transactionStatus = "Transaction status";
var trasitTime = "Transit time";
var travelAgency = "Travel agency";
var travelIataCode = "Travel IATA code";
var tripCategory = "Trip category";
var tripType = "Trip type";
var updateNameListValidity = "Update name list validity";
var userAccessStatus = "User access status";
var userName = "User name (Title, First name, Last name)";
var userRemarks = "User remarks";
var userType = "User type";
var Action = "Action";
var Go = "Go";
var Email = "Email";
var Monday = "Monday";
var Tuesday = "Tuesday";
var Wednesday = "Wednesday";
var Thursday = "Thursday";
var Friday = "Friday";
var Saturday = "Saturday";
var Sunday = "Sunday";
var DateRangeOfRequests = "DateRangeOfRequests";
var Update = "Update";
var to = "to";
var Dashboard = "Dashboard";
var Home = "Home";
var Back = "Back";
var Add = "Add";
var Conditions = "Conditions";
var Time = "Time";
var No = "No";
var Yes = "Yes";
var totalNegotiationRequestToProcess = "Total Negotiation Request To Process";
var totalPnrCreated = "Total Pnr Created";
var pnrActionReport = "Pnr Action Report";
var forecastLoadFactor = "Forecast Load Factor";
var forecastLoadFactorStatus = "Forecast Load Factor Status";
var loadFactorStatus = "Load Factor Status";
var pnrPnrActionReport = "Pnr Action Report";
var dateOfAction = "Date Of Action";
var Scheduled = "Scheduled";
var Save = "Save";
var sellingFare = "Selling Fare";
var updateNameListValidityType = "Update Name List Validity Type";
var paymentValidityExpiredType = "Payment Validity Expired Type";
var departureDateFirstSegment = "Departure date first segment";
var requestedNoOfPaxRM = "Requested no of pax RM";
var firstSegment = "First segment";
var paymentExpiry = "Payment expiry";
var paymentFOP = "Payment FOP";
var emdPayment = "Emd Payment";
var paymentReference = "Payment reference";
var balancePercentage = "Balance percentage";
var balanceAmount = "Balance amount";
var balanceExpiry = "Balance expiry";
var totalPayableAmount = "Total payable amount";
var nameOfTheBank = "Name of the bank";
var accountNumber = "Account number";
var receiptNumber = "Receipt number";
var fundVerificationStatus = "Fund verification status";
var paidBy = "Paid by";
var paidDate = "Paid date";
var fundVerificationApproveBy = "Fund verification approved by";
var fundVerificationRemarks = "Fund verification remarks";
var paymentPnr = "PNR";
var paymentTracking = "Payment Tracking";
var paymentPaidDate = "Payment paid date";
var fareType = "Fare type";
var paymentTrackingReport = "Payment tracking report";
var penaltyPaymentDate = "Penalty Payment Date";
var penaltyAmount = "Penalty Amount";
var penaltyRemark = "Penalty Remark";
var emdNumber = "Emd Number";
var penaltyValidity = "Penalty Validity";
var language = {
	English: English,
	Spanish: Spanish,
	Portuguese: Portuguese,
	adjustedAmount: adjustedAmount,
	adultFare: adultFare,
	agencyAccessStatus: agencyAccessStatus,
	"Agency Name": "Agency Name",
	agencyName: agencyName,
	agentAcceptedFare: agentAcceptedFare,
	agentEmailId: agentEmailId,
	"Agent ID": "Agent ID",
	agentId: agentId,
	agentResponseDate: agentResponseDate,
	agentResponseRemarks: agentResponseRemarks,
	agentResponseStatus: agentResponseStatus,
	agentType: agentType,
	"Airline remarks": "Airline remarks",
	airlinesRemarks: airlinesRemarks,
	airlineResponseDate: airlineResponseDate,
	amountPaid: amountPaid,
	approvedDepartureDate: approvedDepartureDate,
	approvedFlightNumber: approvedFlightNumber,
	approvedNoOfPax: approvedNoOfPax,
	autoPilotPolicy: autoPilotPolicy,
	availableFields: availableFields,
	availableConditions: availableConditions,
	baseFare: baseFare,
	bookedLoadFactor: bookedLoadFactor,
	overriddenFare: overriddenFare,
	cabin: cabin,
	city: city,
	"Condition Details": "Condition Details",
	conversionRate: conversionRate,
	country: country,
	countryOfOriginDestination: countryOfOriginDestination,
	"Create Custom Report": "Create Custom Report",
	createdBy: createdBy,
	currency: currency,
	"Date Range Of Requests": "Date Range Of Requests",
	dateRangeOfRequests: dateRangeOfRequests,
	approvedDepartureDateTime: approvedDepartureDateTime,
	departureDate: departureDate,
	discountAmount: discountAmount,
	displacementFareRemarks: displacementFareRemarks,
	"Email Id": "Email Id",
	emailId: emailId,
	"Email Verification Status": "Email Verification Status",
	emailVerificationStatus: emailVerificationStatus,
	Empty: Empty,
	entries: entries,
	evaluatedFare: evaluatedFare,
	"Evaluation Details": "Evaluation Details",
	exchangeRate: exchangeRate,
	fareExpiryDate: fareExpiryDate,
	fareOverriddenBy: fareOverriddenBy,
	fareOverrideReport: fareOverrideReport,
	flightLoad: flightLoad,
	From: From,
	fullyPaidGroups: fullyPaidGroups,
	groupCategory: groupCategory,
	groupFare: groupFare,
	groupName: groupName,
	groupRequest: groupRequest,
	groupRequestId: groupRequestId,
	iataCode: iataCode,
	lastActionedTime: lastActionedTime,
	mobileNumber: mobileNumber,
	negotiationApprovedDate: negotiationApprovedDate,
	"Negotiation Details": "Negotiation Details",
	negotiationExpiryDate: negotiationExpiryDate,
	negotiationProcessedCount: negotiationProcessedCount,
	negotiationRejectedDate: negotiationRejectedDate,
	negotiationRequestStatus: negotiationRequestStatus,
	negotiationRequestedDate: negotiationRequestedDate,
	newRequestToProcess: newRequestToProcess,
	Next: Next,
	"No data available in table": "No data available in table",
	requestedNoOfPax: requestedNoOfPax,
	noOfPaxInPNR: noOfPaxInPNR,
	officeAddress: officeAddress,
	Origin: Origin,
	Destination: Destination,
	overRiddenFare: overRiddenFare,
	paidPercentage: paidPercentage,
	"Payment and Ticketings Details": "Payment and Ticketings Details",
	paymentValidityExpired: paymentValidityExpired,
	pnr: pnr,
	pnrStatus: pnrStatus,
	pos: pos,
	Previous: Previous,
	Proceed: Proceed,
	"Quoted Details": "Quoted Details",
	reasonForDeclining: reasonForDeclining,
	referenceRequestId: referenceRequestId,
	registeredAgents: registeredAgents,
	registeredDate: registeredDate,
	registeredDateRange: registeredDateRange,
	"Request Details": "Request Details",
	requestPendingForReviewApproval: requestPendingForReviewApproval,
	requestProcessedBy: requestProcessedBy,
	requestType: requestType,
	requestUser: requestUser,
	requestedExpectedFare: requestedExpectedFare,
	requestedDate: requestedDate,
	requestedDepartureDate: requestedDepartureDate,
	requestedFlightNumber: requestedFlightNumber,
	requestPendingAcceptanceDecline: requestPendingAcceptanceDecline,
	requestsRejectedByAirline: requestsRejectedByAirline,
	responseFareFareQuoted: responseFareFareQuoted,
	"Responser Email Id": "Responser Email Id",
	revenueRealized: revenueRealized,
	"Review & Save": "Review & Save",
	"Save Reports": "Save Reports",
	"Saved Reports": "Saved Reports",
	Search: Search,
	"Search Records": "Search Records",
	sector: sector,
	"Select All": "Select All",
	"Selected Conditions": "Selected Conditions",
	"Selected Fields": "Selected Fields",
	Show: Show,
	"Show Reports": "Show Reports",
	Showing: Showing,
	ssrRevenue: ssrRevenue,
	ssrs: ssrs,
	standardReport: standardReport,
	Status: Status,
	statusOfRequest: statusOfRequest,
	stops: stops,
	"TA /RU Response details": "TA /RU Response details",
	tax: tax,
	tcBaseFare: tcBaseFare,
	tcCount: tcCount,
	tcTax: tcTax,
	ticketedConversionRate: ticketedConversionRate,
	ticketedGroups: ticketedGroups,
	To: To,
	totalAcceptedRequests: totalAcceptedRequests,
	totalGroupRequest: totalGroupRequest,
	transactionStatus: transactionStatus,
	trasitTime: trasitTime,
	travelAgency: travelAgency,
	travelIataCode: travelIataCode,
	tripCategory: tripCategory,
	tripType: tripType,
	updateNameListValidity: updateNameListValidity,
	"User Access Status": "User Access Status",
	userAccessStatus: userAccessStatus,
	"User Details": "User Details",
	userName: userName,
	userRemarks: userRemarks,
	"User Type": "User Type",
	userType: userType,
	"Report Name": "Report Name",
	"Scheduled Frequency": "Scheduled Frequency",
	"Scheduled Date Range": "Scheduled Date Range",
	Action: Action,
	"Item per page": "Item per page",
	"Go to page": "Go to page",
	Go: Go,
	"N/A": "N/A",
	"Create Report": "Create Report",
	"Saved Report": "Saved Report",
	"Scheduled Report": "Scheduled Report",
	"Select Email": "Select Email",
	Email: Email,
	"Selected Email": "Selected Email",
	"Frequency (DOW) ": "Frequency (DOW) ",
	Monday: Monday,
	Tuesday: Tuesday,
	Wednesday: Wednesday,
	Thursday: Thursday,
	Friday: Friday,
	Saturday: Saturday,
	Sunday: Sunday,
	DateRangeOfRequests: DateRangeOfRequests,
	"Start Date": "Start Date",
	"End Date": "End Date",
	"Roll For Next Day": "Roll For Next Day",
	Update: Update,
	to: to,
	"Request Trend – Period": "Request Trend – Period",
	"Request Trend – Comparison": "Request Trend – Comparison",
	"Revenue Comparison – Total Revenue in ": "Revenue Comparison – Total Revenue in ",
	"Revenue Analysis – Total Revenue in": "Revenue Analysis – Total Revenue in",
	"Pipeline Dashboard": "Pipeline Dashboard",
	Dashboard: Dashboard,
	"Pipeline Revenue – For next 6 Months": "Pipeline Revenue – For next 6 Months",
	"Pipeline Revenue – For next 6 Months Comparison": "Pipeline Revenue – For next 6 Months Comparison",
	"Pipeline Revenue – POS Wise": "Pipeline Revenue – POS Wise",
	"Pipeline Revenue – Top Sectors": "Pipeline Revenue – Top Sectors",
	"Pipeline Revenue – Top Stations": "Pipeline Revenue – Top Stations",
	"Pipeline Revenue – Travel agent wise": "Pipeline Revenue – Travel agent wise",
	Home: Home,
	"Click To Schedule": "Click To Schedule",
	"Click To Edit": "Click To Edit",
	"Click To Delete": "Click To Delete",
	Back: Back,
	Add: Add,
	Conditions: Conditions,
	"Frequency (DOW)": "Frequency (DOW)",
	"Frequency Date Range (DOW)": "Frequency Date Range (DOW)",
	Time: Time,
	"Are you sure want to delete ?": "Are you sure want to delete ?",
	No: No,
	Yes: Yes,
	"Report deleted successfully!": "Report deleted successfully!",
	"Edit Report": "Edit Report",
	"Access Denied": "Access Denied",
	"Sorry ,but you don't have permission to access this page.": "Sorry ,but you don't have permission to access this page.",
	"Report Successfully Created": "Report Successfully Created",
	"Report Successfully Updated": "Report Successfully Updated",
	"Enter All Mandatory Fields": "Enter All Mandatory Fields",
	"Please fill all mandatory details": "Please fill all mandatory details",
	"Please select atleast one condition": "Please select atleast one condition",
	"Please select atleast one field": "Please select atleast one field",
	"Report Name already exists": "Report Name already exists",
	totalNegotiationRequestToProcess: totalNegotiationRequestToProcess,
	totalPnrCreated: totalPnrCreated,
	pnrActionReport: pnrActionReport,
	forecastLoadFactor: forecastLoadFactor,
	forecastLoadFactorStatus: forecastLoadFactorStatus,
	loadFactorStatus: loadFactorStatus,
	pnrPnrActionReport: pnrPnrActionReport,
	dateOfAction: dateOfAction,
	"Not Scheduled": "Not Scheduled",
	Scheduled: Scheduled,
	"Save Report": "Save Report",
	"Max Report Name should not be 50 Characters": "Max Report Name should not be 50 Characters",
	Save: Save,
	sellingFare: sellingFare,
	updateNameListValidityType: updateNameListValidityType,
	paymentValidityExpiredType: paymentValidityExpiredType,
	departureDateFirstSegment: departureDateFirstSegment,
	requestedNoOfPaxRM: requestedNoOfPaxRM,
	firstSegment: firstSegment,
	paymentExpiry: paymentExpiry,
	paymentFOP: paymentFOP,
	emdPayment: emdPayment,
	paymentReference: paymentReference,
	balancePercentage: balancePercentage,
	balanceAmount: balanceAmount,
	balanceExpiry: balanceExpiry,
	totalPayableAmount: totalPayableAmount,
	nameOfTheBank: nameOfTheBank,
	accountNumber: accountNumber,
	receiptNumber: receiptNumber,
	fundVerificationStatus: fundVerificationStatus,
	paidBy: paidBy,
	paidDate: paidDate,
	fundVerificationApproveBy: fundVerificationApproveBy,
	fundVerificationRemarks: fundVerificationRemarks,
	paymentPnr: paymentPnr,
	paymentTracking: paymentTracking,
	paymentPaidDate: paymentPaidDate,
	fareType: fareType,
	paymentTrackingReport: paymentTrackingReport,
	penaltyPaymentDate: penaltyPaymentDate,
	penaltyAmount: penaltyAmount,
	penaltyRemark: penaltyRemark,
	emdNumber: emdNumber,
	penaltyValidity: penaltyValidity
};

var english = /*#__PURE__*/Object.freeze({
    __proto__: null,
    English: English,
    Spanish: Spanish,
    Portuguese: Portuguese,
    adjustedAmount: adjustedAmount,
    adultFare: adultFare,
    agencyAccessStatus: agencyAccessStatus,
    agencyName: agencyName,
    agentAcceptedFare: agentAcceptedFare,
    agentEmailId: agentEmailId,
    agentId: agentId,
    agentResponseDate: agentResponseDate,
    agentResponseRemarks: agentResponseRemarks,
    agentResponseStatus: agentResponseStatus,
    agentType: agentType,
    airlinesRemarks: airlinesRemarks,
    airlineResponseDate: airlineResponseDate,
    amountPaid: amountPaid,
    approvedDepartureDate: approvedDepartureDate,
    approvedFlightNumber: approvedFlightNumber,
    approvedNoOfPax: approvedNoOfPax,
    autoPilotPolicy: autoPilotPolicy,
    availableFields: availableFields,
    availableConditions: availableConditions,
    baseFare: baseFare,
    bookedLoadFactor: bookedLoadFactor,
    overriddenFare: overriddenFare,
    cabin: cabin,
    city: city,
    conversionRate: conversionRate,
    country: country,
    countryOfOriginDestination: countryOfOriginDestination,
    createdBy: createdBy,
    currency: currency,
    dateRangeOfRequests: dateRangeOfRequests,
    approvedDepartureDateTime: approvedDepartureDateTime,
    departureDate: departureDate,
    discountAmount: discountAmount,
    displacementFareRemarks: displacementFareRemarks,
    emailId: emailId,
    emailVerificationStatus: emailVerificationStatus,
    Empty: Empty,
    entries: entries,
    evaluatedFare: evaluatedFare,
    exchangeRate: exchangeRate,
    fareExpiryDate: fareExpiryDate,
    fareOverriddenBy: fareOverriddenBy,
    fareOverrideReport: fareOverrideReport,
    flightLoad: flightLoad,
    From: From,
    fullyPaidGroups: fullyPaidGroups,
    groupCategory: groupCategory,
    groupFare: groupFare,
    groupName: groupName,
    groupRequest: groupRequest,
    groupRequestId: groupRequestId,
    iataCode: iataCode,
    lastActionedTime: lastActionedTime,
    mobileNumber: mobileNumber,
    negotiationApprovedDate: negotiationApprovedDate,
    negotiationExpiryDate: negotiationExpiryDate,
    negotiationProcessedCount: negotiationProcessedCount,
    negotiationRejectedDate: negotiationRejectedDate,
    negotiationRequestStatus: negotiationRequestStatus,
    negotiationRequestedDate: negotiationRequestedDate,
    newRequestToProcess: newRequestToProcess,
    Next: Next,
    requestedNoOfPax: requestedNoOfPax,
    noOfPaxInPNR: noOfPaxInPNR,
    officeAddress: officeAddress,
    Origin: Origin,
    Destination: Destination,
    overRiddenFare: overRiddenFare,
    paidPercentage: paidPercentage,
    paymentValidityExpired: paymentValidityExpired,
    pnr: pnr,
    pnrStatus: pnrStatus,
    pos: pos,
    Previous: Previous,
    Proceed: Proceed,
    reasonForDeclining: reasonForDeclining,
    referenceRequestId: referenceRequestId,
    registeredAgents: registeredAgents,
    registeredDate: registeredDate,
    registeredDateRange: registeredDateRange,
    requestPendingForReviewApproval: requestPendingForReviewApproval,
    requestProcessedBy: requestProcessedBy,
    requestType: requestType,
    requestUser: requestUser,
    requestedExpectedFare: requestedExpectedFare,
    requestedDate: requestedDate,
    requestedDepartureDate: requestedDepartureDate,
    requestedFlightNumber: requestedFlightNumber,
    requestPendingAcceptanceDecline: requestPendingAcceptanceDecline,
    requestsRejectedByAirline: requestsRejectedByAirline,
    responseFareFareQuoted: responseFareFareQuoted,
    revenueRealized: revenueRealized,
    Search: Search,
    sector: sector,
    Show: Show,
    Showing: Showing,
    ssrRevenue: ssrRevenue,
    ssrs: ssrs,
    standardReport: standardReport,
    Status: Status,
    statusOfRequest: statusOfRequest,
    stops: stops,
    tax: tax,
    tcBaseFare: tcBaseFare,
    tcCount: tcCount,
    tcTax: tcTax,
    ticketedConversionRate: ticketedConversionRate,
    ticketedGroups: ticketedGroups,
    To: To,
    totalAcceptedRequests: totalAcceptedRequests,
    totalGroupRequest: totalGroupRequest,
    transactionStatus: transactionStatus,
    trasitTime: trasitTime,
    travelAgency: travelAgency,
    travelIataCode: travelIataCode,
    tripCategory: tripCategory,
    tripType: tripType,
    updateNameListValidity: updateNameListValidity,
    userAccessStatus: userAccessStatus,
    userName: userName,
    userRemarks: userRemarks,
    userType: userType,
    Action: Action,
    Go: Go,
    Email: Email,
    Monday: Monday,
    Tuesday: Tuesday,
    Wednesday: Wednesday,
    Thursday: Thursday,
    Friday: Friday,
    Saturday: Saturday,
    Sunday: Sunday,
    DateRangeOfRequests: DateRangeOfRequests,
    Update: Update,
    to: to,
    Dashboard: Dashboard,
    Home: Home,
    Back: Back,
    Add: Add,
    Conditions: Conditions,
    Time: Time,
    No: No,
    Yes: Yes,
    totalNegotiationRequestToProcess: totalNegotiationRequestToProcess,
    totalPnrCreated: totalPnrCreated,
    pnrActionReport: pnrActionReport,
    forecastLoadFactor: forecastLoadFactor,
    forecastLoadFactorStatus: forecastLoadFactorStatus,
    loadFactorStatus: loadFactorStatus,
    pnrPnrActionReport: pnrPnrActionReport,
    dateOfAction: dateOfAction,
    Scheduled: Scheduled,
    Save: Save,
    sellingFare: sellingFare,
    updateNameListValidityType: updateNameListValidityType,
    paymentValidityExpiredType: paymentValidityExpiredType,
    departureDateFirstSegment: departureDateFirstSegment,
    requestedNoOfPaxRM: requestedNoOfPaxRM,
    firstSegment: firstSegment,
    paymentExpiry: paymentExpiry,
    paymentFOP: paymentFOP,
    emdPayment: emdPayment,
    paymentReference: paymentReference,
    balancePercentage: balancePercentage,
    balanceAmount: balanceAmount,
    balanceExpiry: balanceExpiry,
    totalPayableAmount: totalPayableAmount,
    nameOfTheBank: nameOfTheBank,
    accountNumber: accountNumber,
    receiptNumber: receiptNumber,
    fundVerificationStatus: fundVerificationStatus,
    paidBy: paidBy,
    paidDate: paidDate,
    fundVerificationApproveBy: fundVerificationApproveBy,
    fundVerificationRemarks: fundVerificationRemarks,
    paymentPnr: paymentPnr,
    paymentTracking: paymentTracking,
    paymentPaidDate: paymentPaidDate,
    fareType: fareType,
    paymentTrackingReport: paymentTrackingReport,
    penaltyPaymentDate: penaltyPaymentDate,
    penaltyAmount: penaltyAmount,
    penaltyRemark: penaltyRemark,
    emdNumber: emdNumber,
    penaltyValidity: penaltyValidity,
    'default': language
});

var English$1 = "inglés";
var Spanish$1 = "Español";
var Portuguese$1 = "portugués";
var adjustedAmount$1 = "monto ajustado";
var adultFare$1 = "tarifa de adulto";
var agencyAccessStatus$1 = "estado de acceso Agencia";
var agencyName$1 = "Nombre de agencia";
var agentAcceptedFare$1 = "Agente de tarifas aceptada";
var agentEmailId$1 = "Agente de correo electrónico de identificación";
var agentId$1 = "ID de agente";
var agentResponseDate$1 = "fecha de respuesta agente";
var agentResponseRemarks$1 = "observaciones de respuesta del agente";
var agentResponseStatus$1 = "Agente estado de respuesta";
var agentType$1 = "tipo de agente";
var airlinesRemarks$1 = "observaciones de avión";
var airlineResponseDate$1 = "fecha de la respuesta de la aerolínea";
var amountPaid$1 = "Cantidad pagada";
var approvedDepartureDate$1 = "fecha de salida aprobado";
var approvedFlightNumber$1 = "Número de vuelo aprobado";
var approvedNoOfPax$1 = "No aprobada de personas";
var autoPilotPolicy$1 = "política de piloto automático";
var availableFields$1 = "Campos disponibles";
var availableConditions$1 = "disponible";
var baseFare$1 = "Tarifa base";
var overriddenFare$1 = "Tarifa anulada";
var bookedLoadFactor$1 = "factor de carga de reserva";
var cabin$1 = "Cabina";
var city$1 = "Ciudad";
var conversionRate$1 = "Tasa de conversión";
var country$1 = "País";
var countryOfOriginDestination$1 = "País de origen / destino";
var createdBy$1 = "Creado por";
var currency$1 = "Divisa";
var dateRangeOfRequests$1 = "Fecha gama de solicitudes";
var approvedDepartureDateTime$1 = "Fecha de salida";
var departureDate$1 = "Fecha de salida";
var discountAmount$1 = "Importe de descuento";
var displacementFareRemarks$1 = "observaciones de tarifas de desplazamiento";
var emailId$1 = "Identificación de correo";
var emailVerificationStatus$1 = "estado de verificación de correo electrónico";
var Empty$1 = "Vacío";
var entries$1 = "entradas";
var evaluatedFare$1 = "tarifa evaluado";
var exchangeRate$1 = "Tipo de cambio";
var fareExpiryDate$1 = "fecha de caducidad de tarifas";
var fareOverriddenBy$1 = "Tarifa reemplazado por";
var fareOverrideReport$1 = "Informe de anulación de tarifas";
var flightLoad$1 = "de carga en vuelo";
var From$1 = "De";
var fullyPaidGroups$1 = "grupos totalmente pagadas";
var groupCategory$1 = "categoría de grupo";
var groupFare$1 = "grupo de tarifas";
var groupName$1 = "Nombre del grupo";
var groupRequest$1 = "solicitud de grupo";
var groupRequestId$1 = "Identificación del grupo de solicitudes";
var iataCode$1 = "El código IATA";
var lastActionedTime$1 = "La última vez accionado (línea aérea)";
var mobileNumber$1 = "Número de teléfono móvil";
var negotiationApprovedDate$1 = "Negociación fecha aprobada";
var negotiationExpiryDate$1 = "Negociación fecha de caducidad";
var negotiationProcessedCount$1 = "Negociación recuento procesado";
var negotiationRejectedDate$1 = "Negociación fecha rechazada";
var negotiationRequestStatus$1 = "estado de la solicitud de negociación";
var negotiationRequestedDate$1 = "Negociación fecha solicitada";
var newRequestToProcess$1 = "Nuevas peticiones al proceso de";
var Next$1 = "próximo";
var requestedNoOfPax$1 = "Nº de pax / viajeros";
var noOfPaxInPNR$1 = "Nº de personas en el PNR";
var officeAddress$1 = "Dirección de la oficina";
var Origin$1 = "Origen";
var Destination$1 = "Destino";
var overRiddenFare$1 = "tarifa reemplazado";
var paidPercentage$1 = "porcentaje pagado";
var paymentValidityExpired$1 = "validez expiró el pago";
var pnr$1 = "PNR";
var pnrStatus$1 = "estado PNR";
var pos$1 = "POS";
var Previous$1 = "Anterior";
var Proceed$1 = "Continuar";
var reasonForDeclining$1 = "Razón por la disminución";
var referenceRequestId$1 = "solicitud de referencia Identificación";
var registeredAgents$1 = "Agentes registrados";
var registeredDate$1 = "La fecha registrada";
var registeredDateRange$1 = "rango de fechas registrada";
var requestPendingForReviewApproval$1 = "Solicitud pendiente de revisión / aprobación";
var requestProcessedBy$1 = "Solicitud procesada por";
var requestType$1 = "Tipo de solicitud";
var requestUser$1 = "solicitud del usuario";
var requestedExpectedFare$1 = "la tarifa solicitada / esperada";
var requestedDate$1 = "Fecha solicitada";
var requestedDepartureDate$1 = "fecha de salida solicitado";
var requestedFlightNumber$1 = "Número de vuelo solicitado";
var requestPendingAcceptanceDecline$1 = "Solicitudes pendientes de aceptación / descenso";
var requestsRejectedByAirline$1 = "Peticiones rechazadas por aerolínea";
var responseFareFareQuoted$1 = "Respuesta tarifa / tarifa cotizada";
var revenueRealized$1 = "Los ingresos obtenidos (MYR)";
var Search$1 = "Buscar";
var sector$1 = "Sector";
var Show$1 = "Show";
var Showing$1 = "Demostración";
var ssrRevenue$1 = "los ingresos SSR";
var ssrs$1 = "SSR";
var standardReport$1 = "Informe estándar";
var Status$1 = "Estado";
var statusOfRequest$1 = "El estado de la solicitud";
var stops$1 = "paradas";
var tax$1 = "Impuesto";
var tcBaseFare$1 = "Tarifa Base TC";
var tcCount$1 = "Conde TC";
var tcTax$1 = "Impuesto TC";
var ticketedConversionRate$1 = "Boleto de la conversión del";
var ticketedGroups$1 = "grupos con boleto";
var To$1 = "A";
var totalAcceptedRequests$1 = "Total de solicitudes aceptadas";
var totalGroupRequest$1 = "solicitudes totales del grupo";
var transactionStatus$1 = "Estado de la transacción";
var trasitTime$1 = "El tiempo de tránsito";
var travelAgency$1 = "Agencia de viajes";
var travelIataCode$1 = "Código de Viajes IATA";
var tripCategory$1 = "la categoría de viaje";
var tripType$1 = "tipo de viaje";
var updateNameListValidity$1 = "Actualización de la lista de nombres de validez";
var userAccessStatus$1 = "el estado de acceso de los usuarios";
var userName$1 = "Nombre de usuario (Título, Nombre, Apellido)";
var userRemarks$1 = "comentarios de los usuarios";
var userType$1 = "Tipo de usuario";
var Action$1 = "Acción";
var Go$1 = "Ir";
var Email$1 = "Correo electrónico";
var Monday$1 = "lunes";
var Tuesday$1 = "martes";
var Wednesday$1 = "miércoles";
var Thursday$1 = "jueves";
var Friday$1 = "viernes";
var Saturday$1 = "sábado";
var Sunday$1 = "domingo";
var DateRangeOfRequests$1 = "DateRangeOfRequests";
var Update$1 = "Actualizar";
var to$1 = "a";
var Dashboard$1 = "Tablero";
var Home$1 = "Casa";
var Back$1 = "atrás";
var Add$1 = "Agregar";
var Conditions$1 = "Condiciones";
var Time$1 = "Hora";
var No$1 = "No";
var Yes$1 = "sí";
var totalNegotiationRequestToProcess$1 = "Solicitud de negociación total para procesar";
var totalPnrCreated$1 = "Total Pnr Creado";
var pnrActionReport$1 = "Informe de acción de Pnr";
var forecastLoadFactor$1 = "Factor de carga de previsión";
var forecastLoadFactorStatus$1 = "Estado del factor de carga previsto";
var loadFactorStatus$1 = "Estado del factor de carga";
var pnrPnrActionReport$1 = "Informe de acción de Pnr";
var dateOfAction$1 = "Fecha de acción";
var Scheduled$1 = "Programado";
var Save$1 = "Ahorrar";
var sellingFare$1 = "venta de tarifa";
var updateNameListValidityType$1 = "Actualizar el tipo de validez de la lista de nombres";
var paymentValidityExpiredType$1 = "Tipo de validez de pago caducada";
var departureDateFirstSegment$1 = "Fecha de salida primer segmento";
var requestedNoOfPaxRM$1 = "Solicitado no de pax RM";
var firstSegment$1 = "primer segmento";
var paymentExpiry$1 = "Caducidad del pago";
var paymentFOP$1 = "Forma de Pago";
var emdPayment$1 = "pago emd";
var paymentReference$1 = "Referencia de pago";
var balancePercentage$1 = "Porcentaje de saldo";
var balanceAmount$1 = "Balance total";
var balanceExpiry$1 = "Caducidad del saldo";
var totalPayableAmount$1 = "Importe total a pagar";
var nameOfTheBank$1 = "nombre del banco";
var accountNumber$1 = "Número de cuenta";
var receiptNumber$1 = "Número de recibo";
var fundVerificationStatus$1 = "Estado de verificación de fondos";
var paidBy$1 = "Pagado por";
var paidDate$1 = "fecha de pago";
var fundVerificationApproveBy$1 = "Verificación de fondos aprobada por";
var fundVerificationRemarks$1 = "Comentarios de verificación de fondos";
var paymentPnr$1 = "Precio de pago";
var paymentTracking$1 = "pagoSeguimiento";
var paymentPaidDate$1 = "Pago Fecha de pago";
var fareType$1 = "Tipo de tarifa";
var paymentTrackingReport$1 = "Informe de seguimiento de pagos";
var penaltyPaymentDate$1 = "Fecha de pago de la multa";
var penaltyAmount$1 = "Importe de la sanción";
var penaltyRemark$1 = "Penalización Observación";
var emdNumber$1 = "Número de envío";
var penaltyValidity$1 = "penaValidez";
var language$1 = {
	English: English$1,
	Spanish: Spanish$1,
	Portuguese: Portuguese$1,
	adjustedAmount: adjustedAmount$1,
	adultFare: adultFare$1,
	agencyAccessStatus: agencyAccessStatus$1,
	"Agency Name": "Nombre de agencia",
	agencyName: agencyName$1,
	agentAcceptedFare: agentAcceptedFare$1,
	agentEmailId: agentEmailId$1,
	"Agent ID": "ID de agente",
	agentId: agentId$1,
	agentResponseDate: agentResponseDate$1,
	agentResponseRemarks: agentResponseRemarks$1,
	agentResponseStatus: agentResponseStatus$1,
	agentType: agentType$1,
	"Airline remarks": "observaciones de avión",
	airlinesRemarks: airlinesRemarks$1,
	airlineResponseDate: airlineResponseDate$1,
	amountPaid: amountPaid$1,
	approvedDepartureDate: approvedDepartureDate$1,
	approvedFlightNumber: approvedFlightNumber$1,
	approvedNoOfPax: approvedNoOfPax$1,
	autoPilotPolicy: autoPilotPolicy$1,
	availableFields: availableFields$1,
	availableConditions: availableConditions$1,
	baseFare: baseFare$1,
	overriddenFare: overriddenFare$1,
	bookedLoadFactor: bookedLoadFactor$1,
	cabin: cabin$1,
	city: city$1,
	"Condition Details": "condición Detalles",
	conversionRate: conversionRate$1,
	country: country$1,
	countryOfOriginDestination: countryOfOriginDestination$1,
	"Create Custom Report": "Crear informe personalizado",
	createdBy: createdBy$1,
	currency: currency$1,
	"Date Range Of Requests": "Rango de fechas de las solicitudes",
	dateRangeOfRequests: dateRangeOfRequests$1,
	approvedDepartureDateTime: approvedDepartureDateTime$1,
	departureDate: departureDate$1,
	discountAmount: discountAmount$1,
	displacementFareRemarks: displacementFareRemarks$1,
	"Email Id": "Identificación de correo",
	emailId: emailId$1,
	"Email Verification Status": "Correo electrónico de verificación de estado",
	emailVerificationStatus: emailVerificationStatus$1,
	Empty: Empty$1,
	entries: entries$1,
	evaluatedFare: evaluatedFare$1,
	"Evaluation Details": "Detalles de la evaluación",
	exchangeRate: exchangeRate$1,
	fareExpiryDate: fareExpiryDate$1,
	fareOverriddenBy: fareOverriddenBy$1,
	fareOverrideReport: fareOverrideReport$1,
	flightLoad: flightLoad$1,
	From: From$1,
	fullyPaidGroups: fullyPaidGroups$1,
	groupCategory: groupCategory$1,
	groupFare: groupFare$1,
	groupName: groupName$1,
	groupRequest: groupRequest$1,
	groupRequestId: groupRequestId$1,
	iataCode: iataCode$1,
	lastActionedTime: lastActionedTime$1,
	mobileNumber: mobileNumber$1,
	negotiationApprovedDate: negotiationApprovedDate$1,
	"Negotiation Details": "Detalles de la negociación",
	negotiationExpiryDate: negotiationExpiryDate$1,
	negotiationProcessedCount: negotiationProcessedCount$1,
	negotiationRejectedDate: negotiationRejectedDate$1,
	negotiationRequestStatus: negotiationRequestStatus$1,
	negotiationRequestedDate: negotiationRequestedDate$1,
	newRequestToProcess: newRequestToProcess$1,
	Next: Next$1,
	"No data available in table": "No hay datos disponibles en la tabla",
	requestedNoOfPax: requestedNoOfPax$1,
	noOfPaxInPNR: noOfPaxInPNR$1,
	officeAddress: officeAddress$1,
	Origin: Origin$1,
	Destination: Destination$1,
	overRiddenFare: overRiddenFare$1,
	paidPercentage: paidPercentage$1,
	"Payment and Ticketings Details": "Pago y Ticketings detalles",
	paymentValidityExpired: paymentValidityExpired$1,
	pnr: pnr$1,
	pnrStatus: pnrStatus$1,
	pos: pos$1,
	Previous: Previous$1,
	Proceed: Proceed$1,
	"Quoted Details": "Detalles citados",
	reasonForDeclining: reasonForDeclining$1,
	referenceRequestId: referenceRequestId$1,
	registeredAgents: registeredAgents$1,
	registeredDate: registeredDate$1,
	registeredDateRange: registeredDateRange$1,
	"Request Details": "Pedir detalles",
	requestPendingForReviewApproval: requestPendingForReviewApproval$1,
	requestProcessedBy: requestProcessedBy$1,
	requestType: requestType$1,
	requestUser: requestUser$1,
	requestedExpectedFare: requestedExpectedFare$1,
	requestedDate: requestedDate$1,
	requestedDepartureDate: requestedDepartureDate$1,
	requestedFlightNumber: requestedFlightNumber$1,
	requestPendingAcceptanceDecline: requestPendingAcceptanceDecline$1,
	requestsRejectedByAirline: requestsRejectedByAirline$1,
	responseFareFareQuoted: responseFareFareQuoted$1,
	"Responser Email Id": "Responser Identificación del email",
	revenueRealized: revenueRealized$1,
	"Review & Save": "Revisión y Guardar",
	"Save Reports": "guardar los informes",
	"Saved Reports": "Informes guardados",
	Search: Search$1,
	"Search Records": "Buscar Registros",
	sector: sector$1,
	"Select All": "Seleccionar todo",
	"Selected Conditions": "Condiciones seleccionados",
	"Selected Fields": "Los campos seleccionados",
	Show: Show$1,
	"Show Reports": "Mostrar informes",
	Showing: Showing$1,
	ssrRevenue: ssrRevenue$1,
	ssrs: ssrs$1,
	standardReport: standardReport$1,
	Status: Status$1,
	statusOfRequest: statusOfRequest$1,
	stops: stops$1,
	"TA /RU Response details": "detalles TA / RU de respuesta",
	tax: tax$1,
	tcBaseFare: tcBaseFare$1,
	tcCount: tcCount$1,
	tcTax: tcTax$1,
	ticketedConversionRate: ticketedConversionRate$1,
	ticketedGroups: ticketedGroups$1,
	To: To$1,
	totalAcceptedRequests: totalAcceptedRequests$1,
	totalGroupRequest: totalGroupRequest$1,
	transactionStatus: transactionStatus$1,
	trasitTime: trasitTime$1,
	travelAgency: travelAgency$1,
	travelIataCode: travelIataCode$1,
	tripCategory: tripCategory$1,
	tripType: tripType$1,
	updateNameListValidity: updateNameListValidity$1,
	"User Access Status": "Acceso usuario Status",
	userAccessStatus: userAccessStatus$1,
	"User Details": "Detalles de usuario",
	userName: userName$1,
	userRemarks: userRemarks$1,
	"User Type": "Tipo de usuario",
	userType: userType$1,
	"Report Name": "Reportar nombre",
	"Scheduled Frequency": "Frecuencia programada",
	"Scheduled Date Range": "Programado intervalo de fechas",
	Action: Action$1,
	"Item per page": "Artículo por página",
	"Go to page": "Ir a la página",
	Go: Go$1,
	"N/A": "N / A",
	"Create Report": "Crear reporte",
	"Saved Report": "informe guardado",
	"Scheduled Report": "informe planificado",
	"Select Email": "Seleccione Correo electrónico",
	Email: Email$1,
	"Selected Email": "Email seleccionada",
	"Frequency (DOW) ": "Frecuencia (DOW)",
	Monday: Monday$1,
	Tuesday: Tuesday$1,
	Wednesday: Wednesday$1,
	Thursday: Thursday$1,
	Friday: Friday$1,
	Saturday: Saturday$1,
	Sunday: Sunday$1,
	DateRangeOfRequests: DateRangeOfRequests$1,
	"Start Date": "Fecha de inicio",
	"End Date": "Fecha final",
	"Roll For Next Day": "Para el día siguiente rollo",
	Update: Update$1,
	to: to$1,
	"Request Trend – Period": "Solicitud de curva - Período",
	"Request Trend – Comparison": "Solicitud de curva - Comparación",
	"Revenue Comparison – Total Revenue in ": "Comparación de los ingresos - Los ingresos totales en",
	"Revenue Analysis – Total Revenue in": "Análisis de ingresos - Los ingresos totales en",
	"Pipeline Dashboard": "Tablero de instrumentos de tuberías",
	Dashboard: Dashboard$1,
	"Pipeline Revenue – For next 6 Months": "Pipeline ingresos - para los próximos 6 meses",
	"Pipeline Revenue – For next 6 Months Comparison": "Pipeline Ingresos - Para el próximo 6 Meses Comparación",
	"Pipeline Revenue – POS Wise": "Pipeline ingresos - POS Wise",
	"Pipeline Revenue – Top Sectors": "Ducto de ingresos - Los sectores principales",
	"Pipeline Revenue – Top Stations": "Pipeline ingresos - Radios Top",
	"Pipeline Revenue – Travel agent wise": "Pipeline ingresos - Agente de viajes sabia",
	Home: Home$1,
	"Click To Schedule": "Haga clic para programar",
	"Click To Edit": "Haz click para editar",
	"Click To Delete": "Haga clic para eliminar",
	Back: Back$1,
	Add: Add$1,
	Conditions: Conditions$1,
	"Frequency (DOW)": "Frecuencia (DOW)",
	"Frequency Date Range (DOW)": "Rango de fecha de frecuencia (DOW)",
	Time: Time$1,
	"Are you sure want to delete ?": "¿Estás segura de que quieres eliminar?",
	No: No$1,
	Yes: Yes$1,
	"Report deleted successfully!": "¡Informe eliminado correctamente!",
	"Edit Report": "Editar informe",
	"Access Denied": "Acceso denegado",
	"Sorry ,but you don't have permission to access this page.": "Lo siento, pero no tienes permiso para acceder a esta página.",
	"Report Successfully Created": "Informe creado correctamente",
	"Report Successfully Updated": "Informe actualizado con éxito",
	"Enter All Mandatory Fields": "Ingrese todos los campos obligatorios",
	"Please fill all mandatory details": "Por favor complete todos los detalles obligatorios",
	"Please select atleast one condition": "Seleccione al menos una condición",
	"Please select atleast one field": "Seleccione al menos un campo",
	"Report Name already exists": "El nombre del informe ya existe",
	totalNegotiationRequestToProcess: totalNegotiationRequestToProcess$1,
	totalPnrCreated: totalPnrCreated$1,
	pnrActionReport: pnrActionReport$1,
	forecastLoadFactor: forecastLoadFactor$1,
	forecastLoadFactorStatus: forecastLoadFactorStatus$1,
	loadFactorStatus: loadFactorStatus$1,
	pnrPnrActionReport: pnrPnrActionReport$1,
	dateOfAction: dateOfAction$1,
	"Not Scheduled": "No programada",
	Scheduled: Scheduled$1,
	"Save Report": "Guardar reporte",
	"Max Report Name should not be 50 Characters": "El nombre máximo del informe no debe tener 50 caracteres",
	Save: Save$1,
	sellingFare: sellingFare$1,
	updateNameListValidityType: updateNameListValidityType$1,
	paymentValidityExpiredType: paymentValidityExpiredType$1,
	departureDateFirstSegment: departureDateFirstSegment$1,
	requestedNoOfPaxRM: requestedNoOfPaxRM$1,
	firstSegment: firstSegment$1,
	paymentExpiry: paymentExpiry$1,
	paymentFOP: paymentFOP$1,
	emdPayment: emdPayment$1,
	paymentReference: paymentReference$1,
	balancePercentage: balancePercentage$1,
	balanceAmount: balanceAmount$1,
	balanceExpiry: balanceExpiry$1,
	totalPayableAmount: totalPayableAmount$1,
	nameOfTheBank: nameOfTheBank$1,
	accountNumber: accountNumber$1,
	receiptNumber: receiptNumber$1,
	fundVerificationStatus: fundVerificationStatus$1,
	paidBy: paidBy$1,
	paidDate: paidDate$1,
	fundVerificationApproveBy: fundVerificationApproveBy$1,
	fundVerificationRemarks: fundVerificationRemarks$1,
	paymentPnr: paymentPnr$1,
	paymentTracking: paymentTracking$1,
	paymentPaidDate: paymentPaidDate$1,
	fareType: fareType$1,
	paymentTrackingReport: paymentTrackingReport$1,
	penaltyPaymentDate: penaltyPaymentDate$1,
	penaltyAmount: penaltyAmount$1,
	penaltyRemark: penaltyRemark$1,
	emdNumber: emdNumber$1,
	penaltyValidity: penaltyValidity$1
};

var spanish = /*#__PURE__*/Object.freeze({
    __proto__: null,
    English: English$1,
    Spanish: Spanish$1,
    Portuguese: Portuguese$1,
    adjustedAmount: adjustedAmount$1,
    adultFare: adultFare$1,
    agencyAccessStatus: agencyAccessStatus$1,
    agencyName: agencyName$1,
    agentAcceptedFare: agentAcceptedFare$1,
    agentEmailId: agentEmailId$1,
    agentId: agentId$1,
    agentResponseDate: agentResponseDate$1,
    agentResponseRemarks: agentResponseRemarks$1,
    agentResponseStatus: agentResponseStatus$1,
    agentType: agentType$1,
    airlinesRemarks: airlinesRemarks$1,
    airlineResponseDate: airlineResponseDate$1,
    amountPaid: amountPaid$1,
    approvedDepartureDate: approvedDepartureDate$1,
    approvedFlightNumber: approvedFlightNumber$1,
    approvedNoOfPax: approvedNoOfPax$1,
    autoPilotPolicy: autoPilotPolicy$1,
    availableFields: availableFields$1,
    availableConditions: availableConditions$1,
    baseFare: baseFare$1,
    overriddenFare: overriddenFare$1,
    bookedLoadFactor: bookedLoadFactor$1,
    cabin: cabin$1,
    city: city$1,
    conversionRate: conversionRate$1,
    country: country$1,
    countryOfOriginDestination: countryOfOriginDestination$1,
    createdBy: createdBy$1,
    currency: currency$1,
    dateRangeOfRequests: dateRangeOfRequests$1,
    approvedDepartureDateTime: approvedDepartureDateTime$1,
    departureDate: departureDate$1,
    discountAmount: discountAmount$1,
    displacementFareRemarks: displacementFareRemarks$1,
    emailId: emailId$1,
    emailVerificationStatus: emailVerificationStatus$1,
    Empty: Empty$1,
    entries: entries$1,
    evaluatedFare: evaluatedFare$1,
    exchangeRate: exchangeRate$1,
    fareExpiryDate: fareExpiryDate$1,
    fareOverriddenBy: fareOverriddenBy$1,
    fareOverrideReport: fareOverrideReport$1,
    flightLoad: flightLoad$1,
    From: From$1,
    fullyPaidGroups: fullyPaidGroups$1,
    groupCategory: groupCategory$1,
    groupFare: groupFare$1,
    groupName: groupName$1,
    groupRequest: groupRequest$1,
    groupRequestId: groupRequestId$1,
    iataCode: iataCode$1,
    lastActionedTime: lastActionedTime$1,
    mobileNumber: mobileNumber$1,
    negotiationApprovedDate: negotiationApprovedDate$1,
    negotiationExpiryDate: negotiationExpiryDate$1,
    negotiationProcessedCount: negotiationProcessedCount$1,
    negotiationRejectedDate: negotiationRejectedDate$1,
    negotiationRequestStatus: negotiationRequestStatus$1,
    negotiationRequestedDate: negotiationRequestedDate$1,
    newRequestToProcess: newRequestToProcess$1,
    Next: Next$1,
    requestedNoOfPax: requestedNoOfPax$1,
    noOfPaxInPNR: noOfPaxInPNR$1,
    officeAddress: officeAddress$1,
    Origin: Origin$1,
    Destination: Destination$1,
    overRiddenFare: overRiddenFare$1,
    paidPercentage: paidPercentage$1,
    paymentValidityExpired: paymentValidityExpired$1,
    pnr: pnr$1,
    pnrStatus: pnrStatus$1,
    pos: pos$1,
    Previous: Previous$1,
    Proceed: Proceed$1,
    reasonForDeclining: reasonForDeclining$1,
    referenceRequestId: referenceRequestId$1,
    registeredAgents: registeredAgents$1,
    registeredDate: registeredDate$1,
    registeredDateRange: registeredDateRange$1,
    requestPendingForReviewApproval: requestPendingForReviewApproval$1,
    requestProcessedBy: requestProcessedBy$1,
    requestType: requestType$1,
    requestUser: requestUser$1,
    requestedExpectedFare: requestedExpectedFare$1,
    requestedDate: requestedDate$1,
    requestedDepartureDate: requestedDepartureDate$1,
    requestedFlightNumber: requestedFlightNumber$1,
    requestPendingAcceptanceDecline: requestPendingAcceptanceDecline$1,
    requestsRejectedByAirline: requestsRejectedByAirline$1,
    responseFareFareQuoted: responseFareFareQuoted$1,
    revenueRealized: revenueRealized$1,
    Search: Search$1,
    sector: sector$1,
    Show: Show$1,
    Showing: Showing$1,
    ssrRevenue: ssrRevenue$1,
    ssrs: ssrs$1,
    standardReport: standardReport$1,
    Status: Status$1,
    statusOfRequest: statusOfRequest$1,
    stops: stops$1,
    tax: tax$1,
    tcBaseFare: tcBaseFare$1,
    tcCount: tcCount$1,
    tcTax: tcTax$1,
    ticketedConversionRate: ticketedConversionRate$1,
    ticketedGroups: ticketedGroups$1,
    To: To$1,
    totalAcceptedRequests: totalAcceptedRequests$1,
    totalGroupRequest: totalGroupRequest$1,
    transactionStatus: transactionStatus$1,
    trasitTime: trasitTime$1,
    travelAgency: travelAgency$1,
    travelIataCode: travelIataCode$1,
    tripCategory: tripCategory$1,
    tripType: tripType$1,
    updateNameListValidity: updateNameListValidity$1,
    userAccessStatus: userAccessStatus$1,
    userName: userName$1,
    userRemarks: userRemarks$1,
    userType: userType$1,
    Action: Action$1,
    Go: Go$1,
    Email: Email$1,
    Monday: Monday$1,
    Tuesday: Tuesday$1,
    Wednesday: Wednesday$1,
    Thursday: Thursday$1,
    Friday: Friday$1,
    Saturday: Saturday$1,
    Sunday: Sunday$1,
    DateRangeOfRequests: DateRangeOfRequests$1,
    Update: Update$1,
    to: to$1,
    Dashboard: Dashboard$1,
    Home: Home$1,
    Back: Back$1,
    Add: Add$1,
    Conditions: Conditions$1,
    Time: Time$1,
    No: No$1,
    Yes: Yes$1,
    totalNegotiationRequestToProcess: totalNegotiationRequestToProcess$1,
    totalPnrCreated: totalPnrCreated$1,
    pnrActionReport: pnrActionReport$1,
    forecastLoadFactor: forecastLoadFactor$1,
    forecastLoadFactorStatus: forecastLoadFactorStatus$1,
    loadFactorStatus: loadFactorStatus$1,
    pnrPnrActionReport: pnrPnrActionReport$1,
    dateOfAction: dateOfAction$1,
    Scheduled: Scheduled$1,
    Save: Save$1,
    sellingFare: sellingFare$1,
    updateNameListValidityType: updateNameListValidityType$1,
    paymentValidityExpiredType: paymentValidityExpiredType$1,
    departureDateFirstSegment: departureDateFirstSegment$1,
    requestedNoOfPaxRM: requestedNoOfPaxRM$1,
    firstSegment: firstSegment$1,
    paymentExpiry: paymentExpiry$1,
    paymentFOP: paymentFOP$1,
    emdPayment: emdPayment$1,
    paymentReference: paymentReference$1,
    balancePercentage: balancePercentage$1,
    balanceAmount: balanceAmount$1,
    balanceExpiry: balanceExpiry$1,
    totalPayableAmount: totalPayableAmount$1,
    nameOfTheBank: nameOfTheBank$1,
    accountNumber: accountNumber$1,
    receiptNumber: receiptNumber$1,
    fundVerificationStatus: fundVerificationStatus$1,
    paidBy: paidBy$1,
    paidDate: paidDate$1,
    fundVerificationApproveBy: fundVerificationApproveBy$1,
    fundVerificationRemarks: fundVerificationRemarks$1,
    paymentPnr: paymentPnr$1,
    paymentTracking: paymentTracking$1,
    paymentPaidDate: paymentPaidDate$1,
    fareType: fareType$1,
    paymentTrackingReport: paymentTrackingReport$1,
    penaltyPaymentDate: penaltyPaymentDate$1,
    penaltyAmount: penaltyAmount$1,
    penaltyRemark: penaltyRemark$1,
    emdNumber: emdNumber$1,
    penaltyValidity: penaltyValidity$1,
    'default': language$1
});

var English$2 = "inglês";
var Spanish$2 = "espanhol";
var Portuguese$2 = "português";
var adjustedAmount$2 = "montante ajustado";
var adultFare$2 = "tarifa de adulto";
var agencyAccessStatus$2 = "status de acesso Agência";
var agencyName$2 = "Nome da Agência";
var agentAcceptedFare$2 = "Agente tarifa aceita";
var agentEmailId$2 = "Agente de ID de e-mail";
var agentId$2 = "agente de ID";
var agentResponseDate$2 = "data resposta Agent";
var agentResponseRemarks$2 = "observações de resposta de agente";
var agentResponseStatus$2 = "status de resposta Agent";
var agentType$2 = "tipo de agente";
var airlinesRemarks$2 = "observações aéreas";
var airlineResponseDate$2 = "data resposta companhia aérea";
var amountPaid$2 = "Quantia paga";
var approvedDepartureDate$2 = "data de partida aprovado";
var approvedFlightNumber$2 = "número de voo aprovado";
var approvedNoOfPax$2 = "Aprovado há de pax";
var autoPilotPolicy$2 = "política de piloto automático";
var availableFields$2 = "Campos disponibles";
var availableConditions$2 = "Condições disponíveis";
var baseFare$2 = "tarifa básica";
var overriddenFare$2 = "Tarifa substituída";
var bookedLoadFactor$2 = "A taxa de ocupação reservado";
var cabin$2 = "Cabine";
var city$2 = "Cidade";
var conversionRate$2 = "Taxa de conversão";
var country$2 = "País";
var countryOfOriginDestination$2 = "País de origem / destino";
var createdBy$2 = "Criado por";
var currency$2 = "Moeda";
var dateRangeOfRequests$2 = "intervalo de datas de pedidos";
var approvedDepartureDateTime$2 = "Data de partida";
var departureDate$2 = "Data de partida";
var discountAmount$2 = "valor do desconto";
var displacementFareRemarks$2 = "observações tarifa de deslocamento";
var emailId$2 = "Identificação do email";
var emailVerificationStatus$2 = "status de verificação de e-mail";
var Empty$2 = "Vazio";
var entries$2 = "entradas";
var evaluatedFare$2 = "fare avaliado";
var exchangeRate$2 = "Taxa de câmbio";
var fareExpiryDate$2 = "data de validade Fare";
var fareOverriddenBy$2 = "Fare substituído por";
var fareOverrideReport$2 = "Relatório Override Fare";
var flightLoad$2 = "carga vôo";
var From$2 = "A partir de";
var fullyPaidGroups$2 = "grupos totalmente pagos";
var groupCategory$2 = "categoria de grupo";
var groupFare$2 = "fare grupo";
var groupName$2 = "Nome do grupo";
var groupRequest$2 = "Pedido grupo";
var groupRequestId$2 = "Grupo ID do pedido";
var iataCode$2 = "código IATA";
var lastActionedTime$2 = "A última vez Actioned (Linha Aérea)";
var mobileNumber$2 = "Número de telemóvel";
var negotiationApprovedDate$2 = "Negociação data aprovada";
var negotiationExpiryDate$2 = "data de validade negociação";
var negotiationProcessedCount$2 = "contagem processados ​​negociação";
var negotiationRejectedDate$2 = "Negociação data rejeitado";
var negotiationRequestStatus$2 = "status da solicitação de negociação";
var negotiationRequestedDate$2 = "Negociação data solicitada";
var newRequestToProcess$2 = "Novas solicitações ao processo";
var Next$2 = "Próximo";
var requestedNoOfPax$2 = "Nenhum de pax / viajantes";
var noOfPaxInPNR$2 = "No of pax no PNR";
var officeAddress$2 = "Endereço do escritório";
var Origin$2 = "Origem";
var Destination$2 = "Destino";
var overRiddenFare$2 = "fare Overridden";
var paidPercentage$2 = "percentual pago";
var paymentValidityExpired$2 = "validade de pagamento expirou";
var pnr$2 = "PNR";
var pnrStatus$2 = "Status PNR";
var pos$2 = "POS";
var Previous$2 = "Anterior";
var Proceed$2 = "Continuar";
var reasonForDeclining$2 = "Razão para recusar";
var referenceRequestId$2 = "Referência ID de pedido";
var registeredAgents$2 = "Agentes registrados";
var registeredDate$2 = "data de registro";
var registeredDateRange$2 = "intervalo de datas Registered";
var requestPendingForReviewApproval$2 = "Solicitação pendente para revisão / aprovação";
var requestProcessedBy$2 = "Pedido processado por";
var requestType$2 = "Tipo de solicitação";
var requestUser$2 = "usuário de solicitação";
var requestedExpectedFare$2 = "Solicitado / fare esperado";
var requestedDate$2 = "data solicitada";
var requestedDepartureDate$2 = "data da partida solicitado";
var requestedFlightNumber$2 = "número de voo solicitado";
var requestPendingAcceptanceDecline$2 = "Pedidos pendentes de aceitação / declínio";
var requestsRejectedByAirline$2 = "Os pedidos rejeitados por companhia aérea";
var responseFareFareQuoted$2 = "fare resposta / tarifa cotada";
var revenueRealized$2 = "Receita realizada (MYR)";
var Search$2 = "Procurar";
var sector$2 = "Setor";
var Show$2 = "mostrar";
var Showing$2 = "mostrando";
var ssrRevenue$2 = "A receita SSR";
var ssrs$2 = "SSRs";
var standardReport$2 = "Relatório padrão";
var Status$2 = "Status";
var statusOfRequest$2 = "Situação da solicitação";
var stops$2 = "stops";
var tax$2 = "imposto";
var tcBaseFare$2 = "Tarifa TC Base de Dados";
var tcCount$2 = "Conde TC";
var tcTax$2 = "TC Tax";
var ticketedConversionRate$2 = "Ticketed Taxa de Conversão";
var ticketedGroups$2 = "grupos com ingresso";
var To$2 = "Para";
var totalAcceptedRequests$2 = "Total de pedidos aceitos";
var totalGroupRequest$2 = "pedidos totais do grupo";
var transactionStatus$2 = "status da transação";
var trasitTime$2 = "O tempo de trânsito";
var travelAgency$2 = "Agência de viagens";
var travelIataCode$2 = "Código de viagem IATA";
var tripCategory$2 = "categoria de viagem";
var tripType$2 = "tipo de viagem";
var updateNameListValidity$2 = "Atualização validade lista de nomes";
var userAccessStatus$2 = "status de acesso de usuário";
var userName$2 = "Nome de usuário (título, nome, sobrenome)";
var userRemarks$2 = "observações de usuários";
var userType$2 = "Tipo de usuário";
var Action$2 = "Açao";
var Go$2 = "Vai";
var Email$2 = "E-mail";
var Monday$2 = "Segunda-feira";
var Tuesday$2 = "terça";
var Wednesday$2 = "quarta-feira";
var Thursday$2 = "quinta-feira";
var Friday$2 = "sexta-feira";
var Saturday$2 = "sábado";
var Sunday$2 = "Domigo";
var DateRangeOfRequests$2 = "DateRangeOfRequests";
var Update$2 = "Atualizar";
var to$2 = "para";
var Dashboard$2 = "Painel";
var Home$2 = "Casa";
var Back$2 = "Voltar";
var Add$2 = "Adicionar";
var Conditions$2 = "Condições";
var Time$2 = "Tempo";
var No$2 = "Não";
var Yes$2 = "sim";
var totalNegotiationRequestToProcess$2 = "Pedido total de negociação para processar";
var totalPnrCreated$2 = "Pnr total criado";
var pnrActionReport$2 = "Relatório de Ação Pnr";
var forecastLoadFactor$2 = "Fator de carga previsto";
var forecastLoadFactorStatus$2 = "Status do fator de carga previsto";
var loadFactorStatus$2 = "Status do fator de carga";
var pnrPnrActionReport$2 = "Relatório de Ação Pnr";
var dateOfAction$2 = "Data de Ação";
var Scheduled$2 = "Agendado";
var Save$2 = "Salve";
var sellingFare$2 = "vendendo tarifa";
var updateNameListValidityType$2 = "Atualizar Tipo de Validade da Lista de Nomes";
var paymentValidityExpiredType$2 = "Tipo Expirado de Validade de Pagamento";
var departureDateFirstSegment$2 = "Data de partida primeiro segmento";
var requestedNoOfPaxRM$2 = "No solicitado de pax RM";
var firstSegment$2 = "Primeiro segmento";
var paymentExpiry$2 = "Expiração do pagamento";
var paymentFOP$2 = "Pagamento FOP";
var emdPayment$2 = "Pagamento Emd";
var paymentReference$2 = "Referência de pagamento";
var balancePercentage$2 = "Porcentagem do saldo";
var balanceAmount$2 = "Valor do saldo";
var balanceExpiry$2 = "vencimento do saldo";
var totalPayableAmount$2 = "Valor total a pagar";
var nameOfTheBank$2 = "Nome do banco";
var accountNumber$2 = "Número de conta";
var receiptNumber$2 = "Número do Recibo";
var fundVerificationStatus$2 = "Status de verificação de fundos";
var paidBy$2 = "Pago pelo";
var paidDate$2 = "data de pagamento";
var fundVerificationApproveBy$2 = "Verificação de fundos aprovada por";
var fundVerificationRemarks$2 = "Observações de verificação de fundos";
var paymentPnr$2 = "Nº de pagamento";
var paymentTracking$2 = "rastreamento de pagamento";
var paymentPaidDate$2 = "Data de pagamento do pagamento";
var fareType$2 = "Tipo de tarifa";
var paymentTrackingReport$2 = "Relatório de rastreamento de pagamentos";
var penaltyPaymentDate$2 = "Data de Pagamento da Multa";
var penaltyAmount$2 = "Valor da penalidade";
var penaltyRemark$2 = "Observação de penalidade";
var emdNumber$2 = "Número de Emd";
var penaltyValidity$2 = "Validade da pena";
var language$2 = {
	English: English$2,
	Spanish: Spanish$2,
	Portuguese: Portuguese$2,
	adjustedAmount: adjustedAmount$2,
	adultFare: adultFare$2,
	agencyAccessStatus: agencyAccessStatus$2,
	"Agency Name": "Nome da Agência",
	agencyName: agencyName$2,
	agentAcceptedFare: agentAcceptedFare$2,
	agentEmailId: agentEmailId$2,
	"Agent ID": "agente de ID",
	agentId: agentId$2,
	agentResponseDate: agentResponseDate$2,
	agentResponseRemarks: agentResponseRemarks$2,
	agentResponseStatus: agentResponseStatus$2,
	agentType: agentType$2,
	"Airline remarks": "observações aéreas",
	airlinesRemarks: airlinesRemarks$2,
	airlineResponseDate: airlineResponseDate$2,
	amountPaid: amountPaid$2,
	approvedDepartureDate: approvedDepartureDate$2,
	approvedFlightNumber: approvedFlightNumber$2,
	approvedNoOfPax: approvedNoOfPax$2,
	autoPilotPolicy: autoPilotPolicy$2,
	availableFields: availableFields$2,
	availableConditions: availableConditions$2,
	baseFare: baseFare$2,
	overriddenFare: overriddenFare$2,
	bookedLoadFactor: bookedLoadFactor$2,
	cabin: cabin$2,
	city: city$2,
	"Condition Details": "condição Detalhes",
	conversionRate: conversionRate$2,
	country: country$2,
	countryOfOriginDestination: countryOfOriginDestination$2,
	"Create Custom Report": "Criar relatório personalizado",
	createdBy: createdBy$2,
	currency: currency$2,
	"Date Range Of Requests": "Período de pedidos",
	dateRangeOfRequests: dateRangeOfRequests$2,
	approvedDepartureDateTime: approvedDepartureDateTime$2,
	departureDate: departureDate$2,
	discountAmount: discountAmount$2,
	displacementFareRemarks: displacementFareRemarks$2,
	"Email Id": "Identificação do email",
	emailId: emailId$2,
	"Email Verification Status": "-Mail de verificação de status",
	emailVerificationStatus: emailVerificationStatus$2,
	Empty: Empty$2,
	entries: entries$2,
	evaluatedFare: evaluatedFare$2,
	"Evaluation Details": "Detalhes avaliação",
	exchangeRate: exchangeRate$2,
	fareExpiryDate: fareExpiryDate$2,
	fareOverriddenBy: fareOverriddenBy$2,
	fareOverrideReport: fareOverrideReport$2,
	flightLoad: flightLoad$2,
	From: From$2,
	fullyPaidGroups: fullyPaidGroups$2,
	groupCategory: groupCategory$2,
	groupFare: groupFare$2,
	groupName: groupName$2,
	groupRequest: groupRequest$2,
	groupRequestId: groupRequestId$2,
	iataCode: iataCode$2,
	lastActionedTime: lastActionedTime$2,
	mobileNumber: mobileNumber$2,
	negotiationApprovedDate: negotiationApprovedDate$2,
	"Negotiation Details": "Detalhes da negociação",
	negotiationExpiryDate: negotiationExpiryDate$2,
	negotiationProcessedCount: negotiationProcessedCount$2,
	negotiationRejectedDate: negotiationRejectedDate$2,
	negotiationRequestStatus: negotiationRequestStatus$2,
	negotiationRequestedDate: negotiationRequestedDate$2,
	newRequestToProcess: newRequestToProcess$2,
	Next: Next$2,
	"No data available in table": "Sem dados disponíveis na tabela",
	requestedNoOfPax: requestedNoOfPax$2,
	noOfPaxInPNR: noOfPaxInPNR$2,
	officeAddress: officeAddress$2,
	Origin: Origin$2,
	Destination: Destination$2,
	overRiddenFare: overRiddenFare$2,
	paidPercentage: paidPercentage$2,
	"Payment and Ticketings Details": "Pagamento e Ticketings Detalhes",
	paymentValidityExpired: paymentValidityExpired$2,
	pnr: pnr$2,
	pnrStatus: pnrStatus$2,
	pos: pos$2,
	Previous: Previous$2,
	Proceed: Proceed$2,
	"Quoted Details": "Detalhes cotados",
	reasonForDeclining: reasonForDeclining$2,
	referenceRequestId: referenceRequestId$2,
	registeredAgents: registeredAgents$2,
	registeredDate: registeredDate$2,
	registeredDateRange: registeredDateRange$2,
	"Request Details": "Pedir detalhes",
	requestPendingForReviewApproval: requestPendingForReviewApproval$2,
	requestProcessedBy: requestProcessedBy$2,
	requestType: requestType$2,
	requestUser: requestUser$2,
	requestedExpectedFare: requestedExpectedFare$2,
	requestedDate: requestedDate$2,
	requestedDepartureDate: requestedDepartureDate$2,
	requestedFlightNumber: requestedFlightNumber$2,
	requestPendingAcceptanceDecline: requestPendingAcceptanceDecline$2,
	requestsRejectedByAirline: requestsRejectedByAirline$2,
	responseFareFareQuoted: responseFareFareQuoted$2,
	"Responser Email Id": "Responser Id-mail",
	revenueRealized: revenueRealized$2,
	"Review & Save": "Revisão & Save",
	"Save Reports": "salvar relatórios",
	"Saved Reports": "Relatórios salvos",
	Search: Search$2,
	"Search Records": "pesquisa de Registros",
	sector: sector$2,
	"Select All": "Selecionar tudo",
	"Selected Conditions": "Condições selecionados",
	"Selected Fields": "Campos selecionados",
	Show: Show$2,
	"Show Reports": "Mostrar Relatórios",
	Showing: Showing$2,
	ssrRevenue: ssrRevenue$2,
	ssrs: ssrs$2,
	standardReport: standardReport$2,
	Status: Status$2,
	statusOfRequest: statusOfRequest$2,
	stops: stops$2,
	"TA /RU Response details": "detalhes TA / RU Response",
	tax: tax$2,
	tcBaseFare: tcBaseFare$2,
	tcCount: tcCount$2,
	tcTax: tcTax$2,
	ticketedConversionRate: ticketedConversionRate$2,
	ticketedGroups: ticketedGroups$2,
	To: To$2,
	totalAcceptedRequests: totalAcceptedRequests$2,
	totalGroupRequest: totalGroupRequest$2,
	transactionStatus: transactionStatus$2,
	trasitTime: trasitTime$2,
	travelAgency: travelAgency$2,
	travelIataCode: travelIataCode$2,
	tripCategory: tripCategory$2,
	tripType: tripType$2,
	updateNameListValidity: updateNameListValidity$2,
	"User Access Status": "Acesso do Usuário Estado",
	userAccessStatus: userAccessStatus$2,
	"User Details": "Detalhes do usuario",
	userName: userName$2,
	userRemarks: userRemarks$2,
	"User Type": "Tipo de usuário",
	userType: userType$2,
	"Report Name": "Nome do relatório",
	"Scheduled Frequency": "Frequência programada",
	"Scheduled Date Range": "Data prevista para a Faixa",
	Action: Action$2,
	"Item per page": "Item por página",
	"Go to page": "Vá para página",
	Go: Go$2,
	"N/A": "N / D",
	"Create Report": "Criar relatório",
	"Saved Report": "relatório salvo",
	"Scheduled Report": "agendada Relatório",
	"Select Email": "Selecione E-mail",
	Email: Email$2,
	"Selected Email": "Email selecionado",
	"Frequency (DOW) ": "Frequência (DOW)",
	Monday: Monday$2,
	Tuesday: Tuesday$2,
	Wednesday: Wednesday$2,
	Thursday: Thursday$2,
	Friday: Friday$2,
	Saturday: Saturday$2,
	Sunday: Sunday$2,
	DateRangeOfRequests: DateRangeOfRequests$2,
	"Start Date": "Data de início",
	"End Date": "Data final",
	"Roll For Next Day": "Rolo Para Next Day",
	Update: Update$2,
	to: to$2,
	"Request Trend – Period": "Solicitar tendência - Período",
	"Request Trend – Comparison": "Solicitar tendência - Comparação",
	"Revenue Comparison – Total Revenue in ": "Receita Comparação - Receita total em",
	"Revenue Analysis – Total Revenue in": "Análise da Receita - A receita total em",
	"Pipeline Dashboard": "Pipeline Painel",
	Dashboard: Dashboard$2,
	"Pipeline Revenue – For next 6 Months": "Pipeline Receita - Por próximos 6 meses",
	"Pipeline Revenue – For next 6 Months Comparison": "Pipeline Receita - Para o próximo 6 Meses Comparação",
	"Pipeline Revenue – POS Wise": "Pipeline Receita - POS Sábio",
	"Pipeline Revenue – Top Sectors": "Pipeline Receita - Principais Setores",
	"Pipeline Revenue – Top Stations": "Pipeline Receita - Top Stations",
	"Pipeline Revenue – Travel agent wise": "Pipeline Receita - Agente de viagens sábio",
	Home: Home$2,
	"Click To Schedule": "Clique para agendar",
	"Click To Edit": "Clique para editar",
	"Click To Delete": "Clique para excluir",
	Back: Back$2,
	Add: Add$2,
	Conditions: Conditions$2,
	"Frequency (DOW)": "Frequência (DOW)",
	"Frequency Date Range (DOW)": "Intervalo de datas de frequência (DOW)",
	Time: Time$2,
	"Are you sure want to delete ?": "Tem certeza que deseja excluir?",
	No: No$2,
	Yes: Yes$2,
	"Report deleted successfully!": "Relatório excluído com sucesso!",
	"Edit Report": "Editar Relatório",
	"Access Denied": "Acesso negado",
	"Sorry ,but you don't have permission to access this page.": "Desculpe, mas você não tem permissão para acessar esta página.",
	"Report Successfully Created": "Relatório criado com sucesso",
	"Report Successfully Updated": "Relatório atualizado com sucesso",
	"Enter All Mandatory Fields": "Insira todos os campos obrigatórios",
	"Please fill all mandatory details": "Por favor, preencha todos os detalhes obrigatórios",
	"Please select atleast one condition": "Selecione pelo menos uma condição",
	"Please select atleast one field": "Selecione pelo menos um campo",
	"Report Name already exists": "Nome do relatório já existe",
	totalNegotiationRequestToProcess: totalNegotiationRequestToProcess$2,
	totalPnrCreated: totalPnrCreated$2,
	pnrActionReport: pnrActionReport$2,
	forecastLoadFactor: forecastLoadFactor$2,
	forecastLoadFactorStatus: forecastLoadFactorStatus$2,
	loadFactorStatus: loadFactorStatus$2,
	pnrPnrActionReport: pnrPnrActionReport$2,
	dateOfAction: dateOfAction$2,
	"Not Scheduled": "Não agendado",
	Scheduled: Scheduled$2,
	"Save Report": "Salvar o relatorio",
	"Max Report Name should not be 50 Characters": "O nome máximo do relatório não deve ter 50 caracteres",
	Save: Save$2,
	sellingFare: sellingFare$2,
	updateNameListValidityType: updateNameListValidityType$2,
	paymentValidityExpiredType: paymentValidityExpiredType$2,
	departureDateFirstSegment: departureDateFirstSegment$2,
	requestedNoOfPaxRM: requestedNoOfPaxRM$2,
	firstSegment: firstSegment$2,
	paymentExpiry: paymentExpiry$2,
	paymentFOP: paymentFOP$2,
	emdPayment: emdPayment$2,
	paymentReference: paymentReference$2,
	balancePercentage: balancePercentage$2,
	balanceAmount: balanceAmount$2,
	balanceExpiry: balanceExpiry$2,
	totalPayableAmount: totalPayableAmount$2,
	nameOfTheBank: nameOfTheBank$2,
	accountNumber: accountNumber$2,
	receiptNumber: receiptNumber$2,
	fundVerificationStatus: fundVerificationStatus$2,
	paidBy: paidBy$2,
	paidDate: paidDate$2,
	fundVerificationApproveBy: fundVerificationApproveBy$2,
	fundVerificationRemarks: fundVerificationRemarks$2,
	paymentPnr: paymentPnr$2,
	paymentTracking: paymentTracking$2,
	paymentPaidDate: paymentPaidDate$2,
	fareType: fareType$2,
	paymentTrackingReport: paymentTrackingReport$2,
	penaltyPaymentDate: penaltyPaymentDate$2,
	penaltyAmount: penaltyAmount$2,
	penaltyRemark: penaltyRemark$2,
	emdNumber: emdNumber$2,
	penaltyValidity: penaltyValidity$2
};

var portuguese = /*#__PURE__*/Object.freeze({
    __proto__: null,
    English: English$2,
    Spanish: Spanish$2,
    Portuguese: Portuguese$2,
    adjustedAmount: adjustedAmount$2,
    adultFare: adultFare$2,
    agencyAccessStatus: agencyAccessStatus$2,
    agencyName: agencyName$2,
    agentAcceptedFare: agentAcceptedFare$2,
    agentEmailId: agentEmailId$2,
    agentId: agentId$2,
    agentResponseDate: agentResponseDate$2,
    agentResponseRemarks: agentResponseRemarks$2,
    agentResponseStatus: agentResponseStatus$2,
    agentType: agentType$2,
    airlinesRemarks: airlinesRemarks$2,
    airlineResponseDate: airlineResponseDate$2,
    amountPaid: amountPaid$2,
    approvedDepartureDate: approvedDepartureDate$2,
    approvedFlightNumber: approvedFlightNumber$2,
    approvedNoOfPax: approvedNoOfPax$2,
    autoPilotPolicy: autoPilotPolicy$2,
    availableFields: availableFields$2,
    availableConditions: availableConditions$2,
    baseFare: baseFare$2,
    overriddenFare: overriddenFare$2,
    bookedLoadFactor: bookedLoadFactor$2,
    cabin: cabin$2,
    city: city$2,
    conversionRate: conversionRate$2,
    country: country$2,
    countryOfOriginDestination: countryOfOriginDestination$2,
    createdBy: createdBy$2,
    currency: currency$2,
    dateRangeOfRequests: dateRangeOfRequests$2,
    approvedDepartureDateTime: approvedDepartureDateTime$2,
    departureDate: departureDate$2,
    discountAmount: discountAmount$2,
    displacementFareRemarks: displacementFareRemarks$2,
    emailId: emailId$2,
    emailVerificationStatus: emailVerificationStatus$2,
    Empty: Empty$2,
    entries: entries$2,
    evaluatedFare: evaluatedFare$2,
    exchangeRate: exchangeRate$2,
    fareExpiryDate: fareExpiryDate$2,
    fareOverriddenBy: fareOverriddenBy$2,
    fareOverrideReport: fareOverrideReport$2,
    flightLoad: flightLoad$2,
    From: From$2,
    fullyPaidGroups: fullyPaidGroups$2,
    groupCategory: groupCategory$2,
    groupFare: groupFare$2,
    groupName: groupName$2,
    groupRequest: groupRequest$2,
    groupRequestId: groupRequestId$2,
    iataCode: iataCode$2,
    lastActionedTime: lastActionedTime$2,
    mobileNumber: mobileNumber$2,
    negotiationApprovedDate: negotiationApprovedDate$2,
    negotiationExpiryDate: negotiationExpiryDate$2,
    negotiationProcessedCount: negotiationProcessedCount$2,
    negotiationRejectedDate: negotiationRejectedDate$2,
    negotiationRequestStatus: negotiationRequestStatus$2,
    negotiationRequestedDate: negotiationRequestedDate$2,
    newRequestToProcess: newRequestToProcess$2,
    Next: Next$2,
    requestedNoOfPax: requestedNoOfPax$2,
    noOfPaxInPNR: noOfPaxInPNR$2,
    officeAddress: officeAddress$2,
    Origin: Origin$2,
    Destination: Destination$2,
    overRiddenFare: overRiddenFare$2,
    paidPercentage: paidPercentage$2,
    paymentValidityExpired: paymentValidityExpired$2,
    pnr: pnr$2,
    pnrStatus: pnrStatus$2,
    pos: pos$2,
    Previous: Previous$2,
    Proceed: Proceed$2,
    reasonForDeclining: reasonForDeclining$2,
    referenceRequestId: referenceRequestId$2,
    registeredAgents: registeredAgents$2,
    registeredDate: registeredDate$2,
    registeredDateRange: registeredDateRange$2,
    requestPendingForReviewApproval: requestPendingForReviewApproval$2,
    requestProcessedBy: requestProcessedBy$2,
    requestType: requestType$2,
    requestUser: requestUser$2,
    requestedExpectedFare: requestedExpectedFare$2,
    requestedDate: requestedDate$2,
    requestedDepartureDate: requestedDepartureDate$2,
    requestedFlightNumber: requestedFlightNumber$2,
    requestPendingAcceptanceDecline: requestPendingAcceptanceDecline$2,
    requestsRejectedByAirline: requestsRejectedByAirline$2,
    responseFareFareQuoted: responseFareFareQuoted$2,
    revenueRealized: revenueRealized$2,
    Search: Search$2,
    sector: sector$2,
    Show: Show$2,
    Showing: Showing$2,
    ssrRevenue: ssrRevenue$2,
    ssrs: ssrs$2,
    standardReport: standardReport$2,
    Status: Status$2,
    statusOfRequest: statusOfRequest$2,
    stops: stops$2,
    tax: tax$2,
    tcBaseFare: tcBaseFare$2,
    tcCount: tcCount$2,
    tcTax: tcTax$2,
    ticketedConversionRate: ticketedConversionRate$2,
    ticketedGroups: ticketedGroups$2,
    To: To$2,
    totalAcceptedRequests: totalAcceptedRequests$2,
    totalGroupRequest: totalGroupRequest$2,
    transactionStatus: transactionStatus$2,
    trasitTime: trasitTime$2,
    travelAgency: travelAgency$2,
    travelIataCode: travelIataCode$2,
    tripCategory: tripCategory$2,
    tripType: tripType$2,
    updateNameListValidity: updateNameListValidity$2,
    userAccessStatus: userAccessStatus$2,
    userName: userName$2,
    userRemarks: userRemarks$2,
    userType: userType$2,
    Action: Action$2,
    Go: Go$2,
    Email: Email$2,
    Monday: Monday$2,
    Tuesday: Tuesday$2,
    Wednesday: Wednesday$2,
    Thursday: Thursday$2,
    Friday: Friday$2,
    Saturday: Saturday$2,
    Sunday: Sunday$2,
    DateRangeOfRequests: DateRangeOfRequests$2,
    Update: Update$2,
    to: to$2,
    Dashboard: Dashboard$2,
    Home: Home$2,
    Back: Back$2,
    Add: Add$2,
    Conditions: Conditions$2,
    Time: Time$2,
    No: No$2,
    Yes: Yes$2,
    totalNegotiationRequestToProcess: totalNegotiationRequestToProcess$2,
    totalPnrCreated: totalPnrCreated$2,
    pnrActionReport: pnrActionReport$2,
    forecastLoadFactor: forecastLoadFactor$2,
    forecastLoadFactorStatus: forecastLoadFactorStatus$2,
    loadFactorStatus: loadFactorStatus$2,
    pnrPnrActionReport: pnrPnrActionReport$2,
    dateOfAction: dateOfAction$2,
    Scheduled: Scheduled$2,
    Save: Save$2,
    sellingFare: sellingFare$2,
    updateNameListValidityType: updateNameListValidityType$2,
    paymentValidityExpiredType: paymentValidityExpiredType$2,
    departureDateFirstSegment: departureDateFirstSegment$2,
    requestedNoOfPaxRM: requestedNoOfPaxRM$2,
    firstSegment: firstSegment$2,
    paymentExpiry: paymentExpiry$2,
    paymentFOP: paymentFOP$2,
    emdPayment: emdPayment$2,
    paymentReference: paymentReference$2,
    balancePercentage: balancePercentage$2,
    balanceAmount: balanceAmount$2,
    balanceExpiry: balanceExpiry$2,
    totalPayableAmount: totalPayableAmount$2,
    nameOfTheBank: nameOfTheBank$2,
    accountNumber: accountNumber$2,
    receiptNumber: receiptNumber$2,
    fundVerificationStatus: fundVerificationStatus$2,
    paidBy: paidBy$2,
    paidDate: paidDate$2,
    fundVerificationApproveBy: fundVerificationApproveBy$2,
    fundVerificationRemarks: fundVerificationRemarks$2,
    paymentPnr: paymentPnr$2,
    paymentTracking: paymentTracking$2,
    paymentPaidDate: paymentPaidDate$2,
    fareType: fareType$2,
    paymentTrackingReport: paymentTrackingReport$2,
    penaltyPaymentDate: penaltyPaymentDate$2,
    penaltyAmount: penaltyAmount$2,
    penaltyRemark: penaltyRemark$2,
    emdNumber: emdNumber$2,
    penaltyValidity: penaltyValidity$2,
    'default': language$2
});

// tslint:disable-next-line: no-any
const lang = {
    EN: english,
    AR: spanish,
    PT: portuguese
};
/**
 * Author: Shailesh R
 * Desc: pipe to perform pipe transform that performs language translation
 */
let TranslatePipe = class TranslatePipe {
    /**
      * Author: Shailesh R
      * Desc: Translate language based on JSON key
      */
    transform(key) {
        return lang[appConfig.CURRENTLANGUAGE] !== undefined ? lang[appConfig.CURRENTLANGUAGE].default[key] || key : key;
    }
};
TranslatePipe = __decorate([
    Pipe({
        name: 'translate',
        pure: false
    })
], TranslatePipe);

/**
 * Author: Sudhakar M
 * Desc: pipe to transfor linear array to 2D array implemented in custom reports review page
 */
let ToMatrixPipe = class ToMatrixPipe {
    transform(arr, n) {
        let validArr = [];
        arr.map((data) => {
            if (data.status === 'Y') {
                validArr.push(data);
            }
        });
        const rows = Array.from({ length: Math.ceil(validArr.length / n) }, (_, i) => i);
        return rows.map(idx => validArr === null || validArr === void 0 ? void 0 : validArr.slice(idx * n, idx * n + n));
    }
};
ToMatrixPipe = __decorate([
    Pipe({
        name: 'toMatrix'
    })
], ToMatrixPipe);

let RemoveUnderscorePipe = class RemoveUnderscorePipe {
    transform(value, ...args) {
        return value.replace(/_/g, ' ');
    }
};
RemoveUnderscorePipe = __decorate([
    Pipe({
        name: 'removeUnderscore'
    })
], RemoveUnderscorePipe);

let CoreModuleModule = class CoreModuleModule {
};
CoreModuleModule = __decorate([
    NgModule({
        declarations: [TranslatePipe, ToMatrixPipe, RemoveUnderscorePipe],
        imports: [
            CommonModule,
            HttpClientModule,
            CoreModuleRoutingModule
        ],
        providers: [
            {
                provide: HTTP_INTERCEPTORS,
                useClass: RequestInterceptor,
                multi: true,
            },
            {
                provide: HTTP_INTERCEPTORS,
                useClass: ResponseInterceptor,
                multi: true,
            }
        ],
        exports: [TranslatePipe, ToMatrixPipe, RemoveUnderscorePipe]
    })
], CoreModuleModule);

const routes$2 = [];
let SharedModuleRoutingModule = class SharedModuleRoutingModule {
};
SharedModuleRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes$2)],
        exports: [RouterModule]
    })
], SharedModuleRoutingModule);

/**
 * Author : Naveen
 * Desc :  alert
 */
let AlertComponent = class AlertComponent {
    constructor() {
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
    ngOnInit() {
        $('body').css("overflow", "hidden");
    }
    ngOnChanges() {
    }
    ngAfterViewInit() {
        feather.replace();
    }
    /**
     * close modal
     */
    closeModal(val) {
        const dataVal = {
            flag: val
        };
        this.toClose = true;
        // $('.cls-popup').addClass('close-ani');
        $('#fn-background').removeClass('cls-background');
        $('body').css("overflow", "auto");
        setTimeout(() => {
            this.choosedVal.emit(dataVal);
        }, 400);
    }
    /**
    * removeError
    */
    removeError() {
        if ($('#reason').val().length > 0) {
            $('#reason').removeClass('cls-error');
        }
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

let ThemeComponent = class ThemeComponent {
    // private themeWrapper: any = document.querySelector('html');
    // private productType : string='default';
    constructor() {
        // this.productType=sessionStorage.getItem("themeCode");
    }
    // theme = {
    //   'default': {
    //     '--PRIMARYCOLOR' : '#f3b02d',
    //     '--SECONDARYCOLOR' : '#d22636',
    //     '--DARKBOXSHADOW' : '#0000004d',  
    //     '--LINK' : '#007bff',   
    //     '--BGLIGHTER' : '#f2f5f8',
    //     '--BGDARK' : '#333333',
    //     '--BGWHITE' : '#ffffff',
    //     '--TXTDARK' : '#666666',
    //     '--TXTDARKER' : '#333333',
    //     '--TXTBLACK' : '#000000',
    //     '--TXTLIGHT' : '#8b8f97',
    //     '--TXTLIGHTER' : '#cccccc',
    //     '--TXTWHITE' : '#ffffff',  
    //     '--BDRLIGHTER' : '#efefef',
    //     '--BDRLIGHT' : '#9e9e9e',
    //     '--BDRREGULAR':'#cccccc',
    //     '--PRIMARYREGULARFONT':'OpenSans-Regular',
    //     '--PRIMARYLIGHTFONT':'OpenSans-Light',
    //     '--PRIMARYMEDIUMFONT':'OpenSans-Medium',
    //     '--PRIMARYSEMIBOLDFONT':'OpenSans-SemiBold',
    //     '--PRIMARYBOLDFONT':'OpenSans-Bold'      
    //   },
    //   'MH': {
    //     '--PRIMARYCOLOR' : '#19286e',
    //     '--SECONDARYCOLOR' : '#19286e',
    //     '--DARKBOXSHADOW' : '#0000004d',  
    //     '--LINK' : '#007bff',   
    //     '--BGLIGHTER' : '#f2f5f8',
    //     '--BGDARK' : '#333333',
    //     '--BGWHITE' : '#ffffff',
    //     '--TXTDARK' : '#666666',
    //     '--TXTDARKER' : '#333333',
    //     '--TXTBLACK' : '#000000',
    //     '--TXTLIGHT' : '#8b8f97',
    //     '--TXTLIGHTER' : '#cccccc',
    //     '--TXTWHITE' : '#ffffff',  
    //     '--BDRLIGHTER' : '#efefef',
    //     '--BDRLIGHT' : '#9e9e9e',
    //     '--BDRREGULAR':'#cccccc',
    //     '--PRIMARYREGULARFONT':'OpenSans-Regular',
    //     '--PRIMARYLIGHTFONT':'OpenSans-Light',
    //     '--PRIMARYMEDIUMFONT':'OpenSans-Medium',
    //     '--PRIMARYSEMIBOLDFONT':'OpenSans-SemiBold',
    //     '--PRIMARYBOLDFONT':'OpenSans-Bold'      
    //   },
    //   'TR': {
    //     '--PRIMARYCOLOR' : '#000000',
    //     '--SECONDARYCOLOR' : '#ffe900',
    //     '--DARKBOXSHADOW' : '#0000004d',  
    //     '--LINK' : '#007bff',   
    //     '--BGLIGHTER' : '#f2f5f8',
    //     '--BGDARK' : '#333333',
    //     '--BGWHITE' : '#ffffff',
    //     '--TXTDARK' : '#666666',
    //     '--TXTDARKER' : '#333333',
    //     '--TXTBLACK' : '#000000',
    //     '--TXTLIGHT' : '#8b8f97',
    //     '--TXTLIGHTER' : '#cccccc',
    //     '--TXTWHITE' : '#ffffff',  
    //     '--BDRLIGHTER' : '#efefef',
    //     '--BDRLIGHT' : '#9e9e9e',
    //     '--BDRREGULAR':'#cccccc',
    //     '--PRIMARYREGULARFONT':'OpenSans-Regular',
    //     '--PRIMARYLIGHTFONT':'OpenSans-Light',
    //     '--PRIMARYMEDIUMFONT':'OpenSans-Medium',
    //     '--PRIMARYSEMIBOLDFONT':'OpenSans-SemiBold',
    //     '--PRIMARYBOLDFONT':'OpenSans-Bold'    
    //   },
    //   'KM': {
    //     '--PRIMARYCOLOR' : '#dc0c23',
    //     '--SECONDARYCOLOR' : '#299147',
    //     '--DARKBOXSHADOW' : '#0000004d',  
    //     '--LINK' : '#007bff',   
    //     '--BGLIGHTER' : '#f2f5f8',
    //     '--BGDARK' : '#333333',
    //     '--BGWHITE' : '#ffffff',
    //     '--TXTDARK' : '#666666',
    //     '--TXTDARKER' : '#333333',
    //     '--TXTBLACK' : '#000000',
    //     '--TXTLIGHT' : '#8b8f97',
    //     '--TXTLIGHTER' : '#cccccc',
    //     '--TXTWHITE' : '#ffffff',  
    //     '--BDRLIGHTER' : '#efefef',
    //     '--BDRLIGHT' : '#9e9e9e',
    //     '--BDRREGULAR':'#cccccc',
    //     '--PRIMARYREGULARFONT':'OpenSans-Regular',
    //     '--PRIMARYLIGHTFONT':'OpenSans-Light',
    //     '--PRIMARYMEDIUMFONT':'OpenSans-Medium',
    //     '--PRIMARYSEMIBOLDFONT':'OpenSans-SemiBold',
    //     '--PRIMARYBOLDFONT':'OpenSans-Bold'    
    //   },
    //      'WN': {
    //     '--PRIMARYCOLOR' : '#324FB0',
    //     '--SECONDARYCOLOR' : '#FEBE3C',
    //     '--DARKBOXSHADOW' : '#0000004d',  
    //     '--LINK' : '#286aa4',   
    //     '--BGLIGHTER' : '#f2f5f8',
    //     '--BGDARK' : '#333333',
    //     '--BGWHITE' : '#ffffff',
    //     '--TXTDARK' : '#666666',
    //     '--TXTDARKER' : '#333333',
    //     '--TXTBLACK' : '#000000',
    //     '--TXTLIGHT' : '#8b8f97',
    //     '--TXTLIGHTER' : '#cccccc',
    //     '--TXTWHITE' : '#ffffff',  
    //     '--BDRLIGHTER' : '#efefef',
    //     '--BDRLIGHT' : '#9e9e9e',
    //     '--BDRREGULAR':'#cccccc',
    //     '--PRIMARYREGULARFONT':'OpenSans-Regular',
    //     '--PRIMARYLIGHTFONT':'OpenSans-Light',
    //     '--PRIMARYMEDIUMFONT':'OpenSans-Medium',
    //     '--PRIMARYSEMIBOLDFONT':'OpenSans-SemiBold',
    //     '--PRIMARYBOLDFONT':'OpenSans-Bold'    
    //   },
    //   'AMAL': {
    //     '--PRIMARYCOLOR' : '#0261B1',
    //     '--SECONDARYCOLOR' : '#07b9e9',
    //     '--DARKBOXSHADOW' : '#0000004d',  
    //     '--LINK' : '#007bcb',   
    //     '--BGLIGHTER' : '#e6e8e5',
    //     '--BGDARK' : '#cccccc',
    //     '--BGWHITE' : '#ffffff',
    //     '--TXTDARK' : '#000000',
    //     '--TXTDARKER' : '#333333',
    //     '--TXTBLACK' : '#000000',
    //     '--TXTLIGHT' : '#666666',
    //     '--TXTLIGHTER' : '#cccccc',
    //     '--TXTWHITE' : '#ffffff',  
    //     '--BDRLIGHTER' : '#efefef',
    //     '--BDRLIGHT' : '#E6E6E6',
    //     '--BDRREGULAR':'#cccccc',
    //     '--PRIMARYREGULARFONT':'OpenSans-Regular',
    //     '--PRIMARYLIGHTFONT':'OpenSans-Light',
    //     '--PRIMARYMEDIUMFONT':'OpenSans-Medium',
    //     '--PRIMARYSEMIBOLDFONT':'OpenSans-SemiBold',
    //     '--PRIMARYBOLDFONT':'OpenSans-Bold'    
    //   },
    //   'CT': {
    //     '--PRIMARYCOLOR' : '#0075CB',
    //     '--SECONDARYCOLOR' : '#1E4FA0',
    //     '--DARKBOXSHADOW' : '#0000004d',  
    //     '--LINK' : '#001764',   
    //     '--BGLIGHTER' : '#f2f5f8',
    //     '--BGDARK' : '#cccccc',
    //     '--BGWHITE' : '#ffffff',
    //     '--TXTDARK' : '#000000',
    //     '--TXTDARKER' : '#333333',
    //     '--TXTBLACK' : '#000000',
    //     '--TXTLIGHT' : '#666666',
    //     '--TXTLIGHTER' : '#cccccc',
    //     '--TXTWHITE' : '#ffffff',  
    //     '--BDRLIGHTER' : '#efefef',
    //     '--BDRLIGHT' : '#E6E6E6',
    //     '--BDRREGULAR':'#cccccc',
    //     '--PRIMARYREGULARFONT':'OpenSans-Regular',
    //     '--PRIMARYLIGHTFONT':'OpenSans-Light',
    //     '--PRIMARYMEDIUMFONT':'OpenSans-Medium',
    //     '--PRIMARYSEMIBOLDFONT':'OpenSans-SemiBold',
    //     '--PRIMARYBOLDFONT':'OpenSans-Bold'    
    //   },
    //   'RM': {
    //     '--PRIMARYCOLOR' : '#FFB70D',
    //     '--SECONDARYCOLOR' : '#286aa4',
    //     '--DARKBOXSHADOW' : '#0000004d',  
    //     '--LINK' : '#286aa4',   
    //     '--BGLIGHTER' : '#f2f5f8',
    //     '--BGDARK' : '#333333',
    //     '--BGWHITE' : '#ffffff',
    //     '--TXTDARK' : '#666666',
    //     '--TXTDARKER' : '#333333',
    //     '--TXTBLACK' : '#000000',
    //     '--TXTLIGHT' : '#8b8f97',
    //     '--TXTLIGHTER' : '#cccccc',
    //     '--TXTWHITE' : '#ffffff',  
    //     '--BDRLIGHTER' : '#efefef',
    //     '--BDRLIGHT' : '#9e9e9e',
    //     '--BDRREGULAR':'#cccccc',
    //     '--PRIMARYREGULARFONT':'OpenSans-Regular',
    //     '--PRIMARYLIGHTFONT':'OpenSans-Light',
    //     '--PRIMARYMEDIUMFONT':'OpenSans-Medium',
    //     '--PRIMARYSEMIBOLDFONT':'OpenSans-SemiBold',
    //     '--PRIMARYBOLDFONT':'OpenSans-Bold'    
    //   },
    // }
    ngOnInit() {
        // const response: Load = await this.service.initAuth();
        // this.productType=sessionStorage.getItem("themeCode");
        // console.log(this.productType)
        // for (const [key, value] of Object.entries(this.theme[this.productType])) {
        //   this.themeWrapper.style.setProperty(key, value);
        // }
    }
};
ThemeComponent = __decorate([
    Component({
        selector: 'app-theme',
        template: "\r\n",
        styles: [""]
    })
], ThemeComponent);

let CommonLoaderComponent = class CommonLoaderComponent {
    constructor() {
        this.loader = '';
        this.home = false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        let loader = this.loader ? this.loader : '23470-loading.json';
        //Dynamic id name from parent component  
        let id = "loader" + this.idVal;
        // bodymovin.loadAnimation({
        //   container: document.getElementById(id),
        //   renderer: "svg",
        //   loop: true,
        //   autoplay: true,
        //   path: `./assets/loading/${loader}`
        // });
    }
};
__decorate([
    Input()
], CommonLoaderComponent.prototype, "idVal", void 0);
__decorate([
    Input()
], CommonLoaderComponent.prototype, "loader", void 0);
__decorate([
    Input()
], CommonLoaderComponent.prototype, "home", void 0);
CommonLoaderComponent = __decorate([
    Component({
        selector: 'app-common-loader',
        template: "<div class=\"cls-loader-bg\">\r\n    <div class=\"cls-loader text-center\" [ngClass]=\"{'home-loader':home}\" id=\"loader{{idVal}}\"></div>\r\n</div>",
        styles: [".cls-loader-bg{top:0;right:0;left:0;bottom:0;border-radius:5px;background-image:linear-gradient(120deg,#fdfbfb 0,#ebedee 100%);position:absolute;z-index:5;display:flex;align-items:center;justify-content:center}.cls-loader-bg .cls-loader{width:150px;height:auto;text-align:center}.cls-loader-bg .cls-loader svg{width:100px}.cls-loader-bg .cls-loader.home-loader{width:20%}:host(.cls-ldr) .cls-loader-bg{height:260px}:host(.cls-list-loader) .cls-loader-bg{height:280px;top:30px;right:20px}"]
    })
], CommonLoaderComponent);

let SharedModuleModule = class SharedModuleModule {
};
SharedModuleModule = __decorate([
    NgModule({
        declarations: [AlertComponent, LanguageComponent, AlertInputComponent, ThemeComponent, CommonLoaderComponent],
        imports: [
            CommonModule,
            SharedModuleRoutingModule,
            CoreModuleModule
        ],
        providers: [DatePipe],
        exports: [
            AlertComponent,
            LanguageComponent,
            AlertInputComponent,
            ThemeComponent,
            CommonLoaderComponent
        ]
    })
], SharedModuleModule);

let ReportmoduleModule = class ReportmoduleModule {
};
ReportmoduleModule = __decorate([
    NgModule({
        declarations: [
            ReportmoduleComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            BrowserAnimationsModule,
            CoreModuleModule,
            SharedModuleModule
        ],
        exports: [ReportmoduleComponent],
        providers: [
            DatePipe,
        ],
        bootstrap: [ReportmoduleComponent]
    })
], ReportmoduleModule);

/*
 * Public API Surface of reportmodule
 */
var publicApi = {
    input: 'src',
    output: {
        dir: 'dist',
        format: 'esm',
        inlineDynamicImports: true
    }
};

/**
 * Generated bundle index. Do not edit.
 */

export { ReportmoduleComponent, ReportmoduleModule, ReportmoduleService, fadeAnimation as ɵa, AppService as ɵb, CommonService as ɵc, AppRoutingModule as ɵd, CoreModuleModule as ɵe, TranslatePipe as ɵf, ToMatrixPipe as ɵg, RemoveUnderscorePipe as ɵh, CoreModuleRoutingModule as ɵi, RequestInterceptor as ɵj, ResponseInterceptor as ɵk, SharedModuleModule as ɵl, AlertComponent as ɵm, LanguageComponent as ɵn, AlertInputComponent as ɵo, ThemeComponent as ɵp, CommonLoaderComponent as ɵq, SharedModuleRoutingModule as ɵr };
//# sourceMappingURL=reportmodule.js.map
