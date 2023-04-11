import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
var RemoveUnderscorePipe = /** @class */ (function () {
    function RemoveUnderscorePipe() {
    }
    RemoveUnderscorePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.replace(/_/g, ' ');
    };
    RemoveUnderscorePipe = __decorate([
        Pipe({
            name: 'removeUnderscore'
        })
    ], RemoveUnderscorePipe);
    return RemoveUnderscorePipe;
}());
export { RemoveUnderscorePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLXVuZGVyc2NvcmUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3JlcG9ydG1vZHVsZS8iLCJzb3VyY2VzIjpbImxpYi9hcHAvY29yZS1tb2R1bGUvcGlwZXMvcmVtb3ZlLXVuZGVyc2NvcmUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFLcEQ7SUFBQTtJQU1BLENBQUM7SUFKQyx3Q0FBUyxHQUFULFVBQVUsS0FBVTtRQUFFLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsNkJBQWM7O1FBQ2xDLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUpVLG9CQUFvQjtRQUhoQyxJQUFJLENBQUM7WUFDSixJQUFJLEVBQUUsa0JBQWtCO1NBQ3pCLENBQUM7T0FDVyxvQkFBb0IsQ0FNaEM7SUFBRCwyQkFBQztDQUFBLEFBTkQsSUFNQztTQU5ZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAncmVtb3ZlVW5kZXJzY29yZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlbW92ZVVuZGVyc2NvcmVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvXy9nLCAnICcpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19