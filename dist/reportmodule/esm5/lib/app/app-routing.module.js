import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    // {
    //   path: urlConfig.ROUTES.custom_report,
    //   loadChildren: () => import('./custom-report/custom-report.module').then(m => m.CustomReportModule),
    // },
    // {
    //   path: urlConfig.ROUTES.saved_report_list,
    //   loadChildren: () => import('./saved-reports/saved-reports.module').then(m => m.SavedReportsModule),
    // },
    // {
    //   path: urlConfig.ROUTES.report_schedule,
    //   loadChildren: () => import('./dynamic-report/components/schedule-report/schedule-report.module').then(m => m.ScheduleReportModule),
    // },
    // {
    //   path: urlConfig.ROUTES.requestHistory,
    //   loadChildren: () => import('./request-history/request-history.module').then(m=> m.RequestHistoryModule)  
    // },
    // {
    //   path: urlConfig.ROUTES.conversion_report,
    //   loadChildren: () => import('./conversion-report/conversion-report.module').then(m=> m.ConversionReportModule)
    // },
    // {
    //   path:urlConfig.ROUTES.dashboard,
    //   loadChildren: () => import('./dash-board/dash-board.module').then(m => m.DashBoardModule),
    // },
    // {
    //   path: urlConfig.ROUTES.user_actions,
    //   loadChildren: () => import('./user-action/user-action.module').then(m=>m.UserActionModule)
    // },
    // {
    //   path: urlConfig.ROUTES.error,
    //   loadChildren: () => import('./shared-module/error/error.module').then(m=>m.ErrorModule)
    // },
    // {
    //   path:urlConfig.ROUTES.reports,
    //   loadChildren:()=> import('./dynamic-report/dynamic-report.module').then(m=>m.DynamicReportModule)
    // },
    {
        path: '',
        redirectTo: 'reports',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'reports',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: "disabled" })],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcmVwb3J0bW9kdWxlLyIsInNvdXJjZXMiOlsibGliL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFVLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSXZELElBQU0sTUFBTSxHQUFXO0lBR3JCLElBQUk7SUFDSiwwQ0FBMEM7SUFDMUMsd0dBQXdHO0lBQ3hHLEtBQUs7SUFDTCxJQUFJO0lBQ0osOENBQThDO0lBQzlDLHdHQUF3RztJQUN4RyxLQUFLO0lBQ0wsSUFBSTtJQUNKLDRDQUE0QztJQUM1Qyx3SUFBd0k7SUFDeEksS0FBSztJQUNMLElBQUk7SUFDSiwyQ0FBMkM7SUFDM0MsOEdBQThHO0lBQzlHLEtBQUs7SUFDTCxJQUFJO0lBQ0osOENBQThDO0lBQzlDLGtIQUFrSDtJQUNsSCxLQUFLO0lBR0wsSUFBSTtJQUNKLHFDQUFxQztJQUNyQywrRkFBK0Y7SUFDL0YsS0FBSztJQUNMLElBQUk7SUFDSix5Q0FBeUM7SUFDekMsK0ZBQStGO0lBQy9GLEtBQUs7SUFDTCxJQUFJO0lBQ0osa0NBQWtDO0lBQ2xDLDRGQUE0RjtJQUM1RixLQUFLO0lBQ0wsSUFBSTtJQUNKLG1DQUFtQztJQUNuQyxzR0FBc0c7SUFDdEcsS0FBSztJQUNMO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsU0FBUztRQUNyQixTQUFTLEVBQUUsTUFBTTtLQUNsQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLElBQUk7UUFDVixVQUFVLEVBQUUsU0FBUztRQUNyQixTQUFTLEVBQUUsTUFBTTtLQUNsQjtDQUNGLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1lBQ3pGLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztTQUN4QixDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO1NBQXBCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgdXJsQ29uZmlnIH0gZnJvbSAnLi9jb3JlLW1vZHVsZS9jb25maWcvdXJsJ1xyXG5cclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIFxyXG4gIFxyXG4gIC8vIHtcclxuICAvLyAgIHBhdGg6IHVybENvbmZpZy5ST1VURVMuY3VzdG9tX3JlcG9ydCxcclxuICAvLyAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL2N1c3RvbS1yZXBvcnQvY3VzdG9tLXJlcG9ydC5tb2R1bGUnKS50aGVuKG0gPT4gbS5DdXN0b21SZXBvcnRNb2R1bGUpLFxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgcGF0aDogdXJsQ29uZmlnLlJPVVRFUy5zYXZlZF9yZXBvcnRfbGlzdCxcclxuICAvLyAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL3NhdmVkLXJlcG9ydHMvc2F2ZWQtcmVwb3J0cy5tb2R1bGUnKS50aGVuKG0gPT4gbS5TYXZlZFJlcG9ydHNNb2R1bGUpLFxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgcGF0aDogdXJsQ29uZmlnLlJPVVRFUy5yZXBvcnRfc2NoZWR1bGUsXHJcbiAgLy8gICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi9keW5hbWljLXJlcG9ydC9jb21wb25lbnRzL3NjaGVkdWxlLXJlcG9ydC9zY2hlZHVsZS1yZXBvcnQubW9kdWxlJykudGhlbihtID0+IG0uU2NoZWR1bGVSZXBvcnRNb2R1bGUpLFxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgcGF0aDogdXJsQ29uZmlnLlJPVVRFUy5yZXF1ZXN0SGlzdG9yeSxcclxuICAvLyAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL3JlcXVlc3QtaGlzdG9yeS9yZXF1ZXN0LWhpc3RvcnkubW9kdWxlJykudGhlbihtPT4gbS5SZXF1ZXN0SGlzdG9yeU1vZHVsZSkgIFxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgcGF0aDogdXJsQ29uZmlnLlJPVVRFUy5jb252ZXJzaW9uX3JlcG9ydCxcclxuICAvLyAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL2NvbnZlcnNpb24tcmVwb3J0L2NvbnZlcnNpb24tcmVwb3J0Lm1vZHVsZScpLnRoZW4obT0+IG0uQ29udmVyc2lvblJlcG9ydE1vZHVsZSlcclxuICAvLyB9LFxyXG5cclxuICBcclxuICAvLyB7XHJcbiAgLy8gICBwYXRoOnVybENvbmZpZy5ST1VURVMuZGFzaGJvYXJkLFxyXG4gIC8vICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vZGFzaC1ib2FyZC9kYXNoLWJvYXJkLm1vZHVsZScpLnRoZW4obSA9PiBtLkRhc2hCb2FyZE1vZHVsZSksXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICBwYXRoOiB1cmxDb25maWcuUk9VVEVTLnVzZXJfYWN0aW9ucyxcclxuICAvLyAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL3VzZXItYWN0aW9uL3VzZXItYWN0aW9uLm1vZHVsZScpLnRoZW4obT0+bS5Vc2VyQWN0aW9uTW9kdWxlKVxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgcGF0aDogdXJsQ29uZmlnLlJPVVRFUy5lcnJvcixcclxuICAvLyAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL3NoYXJlZC1tb2R1bGUvZXJyb3IvZXJyb3IubW9kdWxlJykudGhlbihtPT5tLkVycm9yTW9kdWxlKVxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgcGF0aDp1cmxDb25maWcuUk9VVEVTLnJlcG9ydHMsXHJcbiAgLy8gICBsb2FkQ2hpbGRyZW46KCk9PiBpbXBvcnQoJy4vZHluYW1pYy1yZXBvcnQvZHluYW1pYy1yZXBvcnQubW9kdWxlJykudGhlbihtPT5tLkR5bmFtaWNSZXBvcnRNb2R1bGUpXHJcbiAgLy8gfSxcclxuICB7XHJcbiAgICBwYXRoOiAnJyxcclxuICAgIHJlZGlyZWN0VG86ICdyZXBvcnRzJyxcclxuICAgIHBhdGhNYXRjaDogJ2Z1bGwnXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnKionLFxyXG4gICAgcmVkaXJlY3RUbzogJ3JlcG9ydHMnLFxyXG4gICAgcGF0aE1hdGNoOiAnZnVsbCdcclxuICB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMsIHsgdXNlSGFzaDogdHJ1ZSwgaW5pdGlhbE5hdmlnYXRpb246IFwiZGlzYWJsZWRcIiB9KV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==