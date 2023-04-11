import { OnInit, EventEmitter } from '@angular/core';
import { AppService } from '../../core-module/service/app.service';
export declare class AlertInputComponent implements OnInit {
    private appService;
    alertIpData: any;
    inputAlertInfo: EventEmitter<any>;
    userValue: string;
    constructor(appService: AppService);
    ngOnInit(): void;
    onKey(event: any): void;
    closeModal(userAction: boolean): void;
}
