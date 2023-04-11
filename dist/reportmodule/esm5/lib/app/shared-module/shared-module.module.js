import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SharedModuleRoutingModule } from './shared-module-routing.module';
import { AlertComponent } from './alert/alert.component';
import { LanguageComponent } from './language/language.component';
import { CoreModuleModule } from '../core-module/core-module.module';
import { AlertInputComponent } from './alert-input/alert-input.component';
import { ThemeComponent } from './theme/theme.component';
import { CommonLoaderComponent } from './common-loader/common-loader.component';
var SharedModuleModule = /** @class */ (function () {
    function SharedModuleModule() {
    }
    SharedModuleModule = __decorate([
        NgModule({
            declarations: [AlertComponent, LanguageComponent, AlertInputComponent, ThemeComponent, CommonLoaderComponent],
            imports: [
                CommonModule,
                SharedModuleRoutingModule,
                CoreModuleModule
            ],
            providers: [DatePipe],
            exports: [
                AlertComponent,
                LanguageComponent,
                AlertInputComponent,
                ThemeComponent,
                CommonLoaderComponent
            ]
        })
    ], SharedModuleModule);
    return SharedModuleModule;
}());
export { SharedModuleModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLW1vZHVsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9yZXBvcnRtb2R1bGUvIiwic291cmNlcyI6WyJsaWIvYXBwL3NoYXJlZC1tb2R1bGUvc2hhcmVkLW1vZHVsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBb0JoRjtJQUFBO0lBQWtDLENBQUM7SUFBdEIsa0JBQWtCO1FBaEI5QixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLHFCQUFxQixDQUFDO1lBQzdHLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLHlCQUF5QjtnQkFDekIsZ0JBQWdCO2FBQ2pCO1lBQ0QsU0FBUyxFQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3BCLE9BQU8sRUFBRTtnQkFDUCxjQUFjO2dCQUNkLGlCQUFpQjtnQkFDakIsbUJBQW1CO2dCQUNuQixjQUFjO2dCQUNkLHFCQUFxQjthQUN0QjtTQUNGLENBQUM7T0FDVyxrQkFBa0IsQ0FBSTtJQUFELHlCQUFDO0NBQUEsQUFBbkMsSUFBbUM7U0FBdEIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGVSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9zaGFyZWQtbW9kdWxlLXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgQWxlcnRDb21wb25lbnQgfSBmcm9tICcuL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExhbmd1YWdlQ29tcG9uZW50IH0gZnJvbSAnLi9sYW5ndWFnZS9sYW5ndWFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlTW9kdWxlIH0gZnJvbSAnLi4vY29yZS1tb2R1bGUvY29yZS1tb2R1bGUubW9kdWxlJztcclxuaW1wb3J0IHsgQWxlcnRJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vYWxlcnQtaW5wdXQvYWxlcnQtaW5wdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGhlbWVDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lL3RoZW1lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbW1vbkxvYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tbW9uLWxvYWRlci9jb21tb24tbG9hZGVyLmNvbXBvbmVudCc7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbQWxlcnRDb21wb25lbnQsIExhbmd1YWdlQ29tcG9uZW50LCBBbGVydElucHV0Q29tcG9uZW50LCBUaGVtZUNvbXBvbmVudCwgQ29tbW9uTG9hZGVyQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBTaGFyZWRNb2R1bGVSb3V0aW5nTW9kdWxlLFxyXG4gICAgQ29yZU1vZHVsZU1vZHVsZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOltEYXRlUGlwZV0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQWxlcnRDb21wb25lbnQsXHJcbiAgICBMYW5ndWFnZUNvbXBvbmVudCxcclxuICAgIEFsZXJ0SW5wdXRDb21wb25lbnQsXHJcbiAgICBUaGVtZUNvbXBvbmVudCxcclxuICAgIENvbW1vbkxvYWRlckNvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZU1vZHVsZSB7IH1cclxuIl19