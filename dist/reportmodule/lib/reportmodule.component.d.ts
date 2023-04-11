import { OnInit } from '@angular/core';
import { AppService } from './app/core-module/service/app.service';
import { Router } from '@angular/router';
import { CommonService } from './app/core-module/service/common.service';
export declare class ReportmoduleComponent implements OnInit {
    private router;
    private service;
    private commonService;
    title: string;
    themeType: boolean;
    activeRoute: string;
    private animation;
    loader: boolean;
    language: string;
    constructor(router: Router, service: AppService, commonService: CommonService);
    ngOnInit(): void;
    private authUrl;
    getRouterOutletState(outlet: any): any;
}
