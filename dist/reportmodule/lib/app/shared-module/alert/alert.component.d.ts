import { OnInit, EventEmitter } from '@angular/core';
/**
 * Author : Naveen
 * Desc :  alert
 */
export declare class AlertComponent implements OnInit {
    /**
     * get image path
     */
    userInput: any;
    /**
    * output data
    */
    choosedVal: EventEmitter<boolean>;
    /**
    * Desc: on closing alert add class close design
    */
    toClose: boolean;
    constructor();
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    /**
     * close modal
     */
    closeModal(val: boolean): void;
    /**
    * removeError
    */
    removeError(): void;
}
