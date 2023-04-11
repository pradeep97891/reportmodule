import { PipeTransform } from '@angular/core';
/**
 * Author: Shailesh R
 * Desc: pipe to perform pipe transform that performs language translation
 */
export declare class TranslatePipe implements PipeTransform {
    /**
      * Author: Shailesh R
      * Desc: Translate language based on JSON key
      */
    transform(key: string): string;
}
