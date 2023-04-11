import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModuleModule } from './app/core-module/core-module.module';
import { SharedModuleModule } from './app/shared-module/shared-module.module';
import { DatePipe } from '@angular/common';
import { ReportmoduleComponent } from './reportmodule.component';
var ReportmoduleModule = /** @class */ (function () {
    function ReportmoduleModule() {
    }
    ReportmoduleModule = __decorate([
        NgModule({
            declarations: [
                ReportmoduleComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                HttpClientModule,
                BrowserAnimationsModule,
                CoreModuleModule,
                SharedModuleModule
            ],
            exports: [ReportmoduleComponent],
            providers: [
                DatePipe,
            ],
            bootstrap: [ReportmoduleComponent]
        })
    ], ReportmoduleModule);
    return ReportmoduleModule;
}());
export { ReportmoduleModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0bW9kdWxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3JlcG9ydG1vZHVsZS8iLCJzb3VyY2VzIjpbImxpYi9yZXBvcnRtb2R1bGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFtQmpFO0lBQUE7SUFBa0MsQ0FBQztJQUF0QixrQkFBa0I7UUFsQjlCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWixxQkFBcUI7YUFDdEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsYUFBYTtnQkFDYixnQkFBZ0I7Z0JBQ2hCLGdCQUFnQjtnQkFDaEIsdUJBQXVCO2dCQUN2QixnQkFBZ0I7Z0JBQ2hCLGtCQUFrQjthQUNuQjtZQUNELE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ2hDLFNBQVMsRUFBRTtnQkFDVCxRQUFRO2FBQ1g7WUFDQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNuQyxDQUFDO09BQ1csa0JBQWtCLENBQUk7SUFBRCx5QkFBQztDQUFBLEFBQW5DLElBQW1DO1NBQXRCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDb3JlTW9kdWxlTW9kdWxlIH0gZnJvbSAnLi9hcHAvY29yZS1tb2R1bGUvY29yZS1tb2R1bGUubW9kdWxlJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZU1vZHVsZSB9IGZyb20gJy4vYXBwL3NoYXJlZC1tb2R1bGUvc2hhcmVkLW1vZHVsZS5tb2R1bGUnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVwb3J0bW9kdWxlQ29tcG9uZW50IH0gZnJvbSAnLi9yZXBvcnRtb2R1bGUuY29tcG9uZW50JztcbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFJlcG9ydG1vZHVsZUNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gICAgQ29yZU1vZHVsZU1vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGVNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1JlcG9ydG1vZHVsZUNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW1xuICAgIERhdGVQaXBlLFxuXSxcbiAgYm9vdHN0cmFwOiBbUmVwb3J0bW9kdWxlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBSZXBvcnRtb2R1bGVNb2R1bGUgeyB9XG4iXX0=