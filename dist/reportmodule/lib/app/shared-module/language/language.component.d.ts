import { OnInit } from '@angular/core';
/******
 * component : language component
 * created : 17-06-2021
 * Author : Benita Shiny P.
 */
export declare class LanguageComponent implements OnInit {
    /**
     * languages list
     */
    languageData: {
        code: string;
        name: string;
    }[];
    /**
     * Desc: Language value
     */
    choosenLanguage: string;
    /**
     * display language option
     */
    displayOption: boolean;
    constructor();
    ngOnInit(): void;
    ngOnChanges(): void;
    /**
    * Author: Shailesh R
    * Desc: Set language for the application
    * @param: lang: Language name
    */
    setLanguage(index: number): void;
}
