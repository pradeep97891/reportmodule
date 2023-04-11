import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RequestInterceptor } from "./interceptors/request.interceptor";
import { ResponseInterceptor } from "./interceptors/response.interceptor";
import { CoreModuleRoutingModule } from './core-module-routing.module';
import { TranslatePipe } from './pipes/translate.pipe';
import { ToMatrixPipe } from './pipes/to-matrix.pipe';
import { RemoveUnderscorePipe } from './pipes/remove-underscore.pipe';
var CoreModuleModule = /** @class */ (function () {
    function CoreModuleModule() {
    }
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
    return CoreModuleModule;
}());
export { CoreModuleModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS1tb2R1bGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcmVwb3J0bW9kdWxlLyIsInNvdXJjZXMiOlsibGliL2FwcC9jb3JlLW1vZHVsZS9jb3JlLW1vZHVsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUF1QnRFO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFyQjVCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsb0JBQW9CLENBQUM7WUFDbEUsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osZ0JBQWdCO2dCQUNoQix1QkFBdUI7YUFDeEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtZQUNELE9BQU8sRUFBRSxDQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsb0JBQW9CLENBQUM7U0FDOUQsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztTQUFwQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlLCBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBSZXF1ZXN0SW50ZXJjZXB0b3IgfSBmcm9tIFwiLi9pbnRlcmNlcHRvcnMvcmVxdWVzdC5pbnRlcmNlcHRvclwiO1xyXG5pbXBvcnQgeyBSZXNwb25zZUludGVyY2VwdG9yIH0gZnJvbSBcIi4vaW50ZXJjZXB0b3JzL3Jlc3BvbnNlLmludGVyY2VwdG9yXCI7XHJcbmltcG9ydCB7IENvcmVNb2R1bGVSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9jb3JlLW1vZHVsZS1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICcuL3BpcGVzL3RyYW5zbGF0ZS5waXBlJztcclxuaW1wb3J0IHsgVG9NYXRyaXhQaXBlIH0gZnJvbSAnLi9waXBlcy90by1tYXRyaXgucGlwZSc7XHJcbmltcG9ydCB7IFJlbW92ZVVuZGVyc2NvcmVQaXBlIH0gZnJvbSAnLi9waXBlcy9yZW1vdmUtdW5kZXJzY29yZS5waXBlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbIFRyYW5zbGF0ZVBpcGUsIFRvTWF0cml4UGlwZSwgUmVtb3ZlVW5kZXJzY29yZVBpcGVdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBDb3JlTW9kdWxlUm91dGluZ01vZHVsZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG4gICAgICB1c2VDbGFzczogUmVxdWVzdEludGVyY2VwdG9yLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG4gICAgICB1c2VDbGFzczogUmVzcG9uc2VJbnRlcmNlcHRvcixcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9XHJcbiAgXSxcclxuICBleHBvcnRzOiBbIFRyYW5zbGF0ZVBpcGUsIFRvTWF0cml4UGlwZSwgUmVtb3ZlVW5kZXJzY29yZVBpcGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlTW9kdWxlIHsgfVxyXG4iXX0=