import { PipeTransform } from '@angular/core';
/**
 * Author: Sudhakar M
 * Desc: pipe to transfor linear array to 2D array implemented in custom reports review page
 */
export declare class ToMatrixPipe implements PipeTransform {
    transform(arr: number[], n: number): number[][];
}
