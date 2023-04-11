import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
/**
 * Author: Sudhakar M
 * Desc: pipe to transfor linear array to 2D array implemented in custom reports review page
 */
var ToMatrixPipe = /** @class */ (function () {
    function ToMatrixPipe() {
    }
    ToMatrixPipe.prototype.transform = function (arr, n) {
        var validArr = [];
        arr.map(function (data) {
            if (data.status === 'Y') {
                validArr.push(data);
            }
        });
        var rows = Array.from({ length: Math.ceil(validArr.length / n) }, function (_, i) { return i; });
        return rows.map(function (idx) { return validArr === null || validArr === void 0 ? void 0 : validArr.slice(idx * n, idx * n + n); });
    };
    ToMatrixPipe = __decorate([
        Pipe({
            name: 'toMatrix'
        })
    ], ToMatrixPipe);
    return ToMatrixPipe;
}());
export { ToMatrixPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG8tbWF0cml4LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9yZXBvcnRtb2R1bGUvIiwic291cmNlcyI6WyJsaWIvYXBwL2NvcmUtbW9kdWxlL3BpcGVzL3RvLW1hdHJpeC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRDs7O0dBR0c7QUFJSDtJQUFBO0lBYUEsQ0FBQztJQVhDLGdDQUFTLEdBQVQsVUFBVSxHQUFhLEVBQUUsQ0FBUztRQUNoQyxJQUFJLFFBQVEsR0FBTyxFQUFFLENBQUM7UUFDdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQVE7WUFDZixJQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFDO2dCQUNyQixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsRUFBRCxDQUFDLENBQUMsQ0FBQztRQUNqRixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLFdBQUksUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBWFUsWUFBWTtRQUh4QixJQUFJLENBQUM7WUFDSixJQUFJLEVBQUUsVUFBVTtTQUNqQixDQUFDO09BQ1csWUFBWSxDQWF4QjtJQUFELG1CQUFDO0NBQUEsQUFiRCxJQWFDO1NBYlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLyoqXHJcbiAqIEF1dGhvcjogU3VkaGFrYXIgTVxyXG4gKiBEZXNjOiBwaXBlIHRvIHRyYW5zZm9yIGxpbmVhciBhcnJheSB0byAyRCBhcnJheSBpbXBsZW1lbnRlZCBpbiBjdXN0b20gcmVwb3J0cyByZXZpZXcgcGFnZVxyXG4gKi9cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICd0b01hdHJpeCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvTWF0cml4UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICB0cmFuc2Zvcm0oYXJyOiBudW1iZXJbXSwgbjogbnVtYmVyKTogbnVtYmVyW11bXSB7XHJcbiAgICBsZXQgdmFsaWRBcnI6YW55ID0gW107XHJcbiAgICBhcnIubWFwKChkYXRhOmFueSkgPT4ge1xyXG4gICAgICBpZihkYXRhLnN0YXR1cyA9PT0gJ1knKXtcclxuICAgICAgICB2YWxpZEFyci5wdXNoKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJvd3MgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBNYXRoLmNlaWwodmFsaWRBcnIubGVuZ3RoIC8gbikgfSwgKF8sIGkpID0+IGkpO1xyXG4gICAgcmV0dXJuIHJvd3MubWFwKGlkeCA9PiB2YWxpZEFycj8uc2xpY2UoaWR4ICogbiwgaWR4ICogbiArIG4pKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==