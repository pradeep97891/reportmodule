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
export { CoreModuleModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS1tb2R1bGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcmVwb3J0bW9kdWxlLyIsInNvdXJjZXMiOlsibGliL2FwcC9jb3JlLW1vZHVsZS9jb3JlLW1vZHVsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUF1QnRFLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0NBQUksQ0FBQTtBQUFwQixnQkFBZ0I7SUFyQjVCLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxDQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsb0JBQW9CLENBQUM7UUFDbEUsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQix1QkFBdUI7U0FDeEI7UUFDRCxTQUFTLEVBQUU7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixLQUFLLEVBQUUsSUFBSTthQUNaO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGO1FBQ0QsT0FBTyxFQUFFLENBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxvQkFBb0IsQ0FBQztLQUM5RCxDQUFDO0dBQ1csZ0JBQWdCLENBQUk7U0FBcEIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSwgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgUmVxdWVzdEludGVyY2VwdG9yIH0gZnJvbSBcIi4vaW50ZXJjZXB0b3JzL3JlcXVlc3QuaW50ZXJjZXB0b3JcIjtcclxuaW1wb3J0IHsgUmVzcG9uc2VJbnRlcmNlcHRvciB9IGZyb20gXCIuL2ludGVyY2VwdG9ycy9yZXNwb25zZS5pbnRlcmNlcHRvclwiO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vY29yZS1tb2R1bGUtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnLi9waXBlcy90cmFuc2xhdGUucGlwZSc7XHJcbmltcG9ydCB7IFRvTWF0cml4UGlwZSB9IGZyb20gJy4vcGlwZXMvdG8tbWF0cml4LnBpcGUnO1xyXG5pbXBvcnQgeyBSZW1vdmVVbmRlcnNjb3JlUGlwZSB9IGZyb20gJy4vcGlwZXMvcmVtb3ZlLXVuZGVyc2NvcmUucGlwZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogWyBUcmFuc2xhdGVQaXBlLCBUb01hdHJpeFBpcGUsIFJlbW92ZVVuZGVyc2NvcmVQaXBlXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgQ29yZU1vZHVsZVJvdXRpbmdNb2R1bGVcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuICAgICAgdXNlQ2xhc3M6IFJlcXVlc3RJbnRlcmNlcHRvcixcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuICAgICAgdXNlQ2xhc3M6IFJlc3BvbnNlSW50ZXJjZXB0b3IsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfVxyXG4gIF0sXHJcbiAgZXhwb3J0czogWyBUcmFuc2xhdGVQaXBlLCBUb01hdHJpeFBpcGUsIFJlbW92ZVVuZGVyc2NvcmVQaXBlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZU1vZHVsZSB7IH1cclxuIl19