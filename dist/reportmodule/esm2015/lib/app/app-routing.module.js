import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
const routes = [
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
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: "disabled" })],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcmVwb3J0bW9kdWxlLyIsInNvdXJjZXMiOlsibGliL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFVLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSXZELE1BQU0sTUFBTSxHQUFXO0lBR3JCLElBQUk7SUFDSiwwQ0FBMEM7SUFDMUMsd0dBQXdHO0lBQ3hHLEtBQUs7SUFDTCxJQUFJO0lBQ0osOENBQThDO0lBQzlDLHdHQUF3RztJQUN4RyxLQUFLO0lBQ0wsSUFBSTtJQUNKLDRDQUE0QztJQUM1Qyx3SUFBd0k7SUFDeEksS0FBSztJQUNMLElBQUk7SUFDSiwyQ0FBMkM7SUFDM0MsOEdBQThHO0lBQzlHLEtBQUs7SUFDTCxJQUFJO0lBQ0osOENBQThDO0lBQzlDLGtIQUFrSDtJQUNsSCxLQUFLO0lBR0wsSUFBSTtJQUNKLHFDQUFxQztJQUNyQywrRkFBK0Y7SUFDL0YsS0FBSztJQUNMLElBQUk7SUFDSix5Q0FBeUM7SUFDekMsK0ZBQStGO0lBQy9GLEtBQUs7SUFDTCxJQUFJO0lBQ0osa0NBQWtDO0lBQ2xDLDRGQUE0RjtJQUM1RixLQUFLO0lBQ0wsSUFBSTtJQUNKLG1DQUFtQztJQUNuQyxzR0FBc0c7SUFDdEcsS0FBSztJQUNMO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsU0FBUztRQUNyQixTQUFTLEVBQUUsTUFBTTtLQUNsQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLElBQUk7UUFDVixVQUFVLEVBQUUsU0FBUztRQUNyQixTQUFTLEVBQUUsTUFBTTtLQUNsQjtDQUNGLENBQUM7QUFNRixJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtDQUFJLENBQUE7QUFBcEIsZ0JBQWdCO0lBSjVCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQ3pGLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztLQUN4QixDQUFDO0dBQ1csZ0JBQWdCLENBQUk7U0FBcEIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1cmxDb25maWcgfSBmcm9tICcuL2NvcmUtbW9kdWxlL2NvbmZpZy91cmwnXHJcblxyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgXHJcbiAgXHJcbiAgLy8ge1xyXG4gIC8vICAgcGF0aDogdXJsQ29uZmlnLlJPVVRFUy5jdXN0b21fcmVwb3J0LFxyXG4gIC8vICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vY3VzdG9tLXJlcG9ydC9jdXN0b20tcmVwb3J0Lm1vZHVsZScpLnRoZW4obSA9PiBtLkN1c3RvbVJlcG9ydE1vZHVsZSksXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICBwYXRoOiB1cmxDb25maWcuUk9VVEVTLnNhdmVkX3JlcG9ydF9saXN0LFxyXG4gIC8vICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vc2F2ZWQtcmVwb3J0cy9zYXZlZC1yZXBvcnRzLm1vZHVsZScpLnRoZW4obSA9PiBtLlNhdmVkUmVwb3J0c01vZHVsZSksXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICBwYXRoOiB1cmxDb25maWcuUk9VVEVTLnJlcG9ydF9zY2hlZHVsZSxcclxuICAvLyAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL2R5bmFtaWMtcmVwb3J0L2NvbXBvbmVudHMvc2NoZWR1bGUtcmVwb3J0L3NjaGVkdWxlLXJlcG9ydC5tb2R1bGUnKS50aGVuKG0gPT4gbS5TY2hlZHVsZVJlcG9ydE1vZHVsZSksXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICBwYXRoOiB1cmxDb25maWcuUk9VVEVTLnJlcXVlc3RIaXN0b3J5LFxyXG4gIC8vICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vcmVxdWVzdC1oaXN0b3J5L3JlcXVlc3QtaGlzdG9yeS5tb2R1bGUnKS50aGVuKG09PiBtLlJlcXVlc3RIaXN0b3J5TW9kdWxlKSAgXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICBwYXRoOiB1cmxDb25maWcuUk9VVEVTLmNvbnZlcnNpb25fcmVwb3J0LFxyXG4gIC8vICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vY29udmVyc2lvbi1yZXBvcnQvY29udmVyc2lvbi1yZXBvcnQubW9kdWxlJykudGhlbihtPT4gbS5Db252ZXJzaW9uUmVwb3J0TW9kdWxlKVxyXG4gIC8vIH0sXHJcblxyXG4gIFxyXG4gIC8vIHtcclxuICAvLyAgIHBhdGg6dXJsQ29uZmlnLlJPVVRFUy5kYXNoYm9hcmQsXHJcbiAgLy8gICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi9kYXNoLWJvYXJkL2Rhc2gtYm9hcmQubW9kdWxlJykudGhlbihtID0+IG0uRGFzaEJvYXJkTW9kdWxlKSxcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIHBhdGg6IHVybENvbmZpZy5ST1VURVMudXNlcl9hY3Rpb25zLFxyXG4gIC8vICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vdXNlci1hY3Rpb24vdXNlci1hY3Rpb24ubW9kdWxlJykudGhlbihtPT5tLlVzZXJBY3Rpb25Nb2R1bGUpXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICBwYXRoOiB1cmxDb25maWcuUk9VVEVTLmVycm9yLFxyXG4gIC8vICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vc2hhcmVkLW1vZHVsZS9lcnJvci9lcnJvci5tb2R1bGUnKS50aGVuKG09Pm0uRXJyb3JNb2R1bGUpXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICBwYXRoOnVybENvbmZpZy5ST1VURVMucmVwb3J0cyxcclxuICAvLyAgIGxvYWRDaGlsZHJlbjooKT0+IGltcG9ydCgnLi9keW5hbWljLXJlcG9ydC9keW5hbWljLXJlcG9ydC5tb2R1bGUnKS50aGVuKG09Pm0uRHluYW1pY1JlcG9ydE1vZHVsZSlcclxuICAvLyB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcnLFxyXG4gICAgcmVkaXJlY3RUbzogJ3JlcG9ydHMnLFxyXG4gICAgcGF0aE1hdGNoOiAnZnVsbCdcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcqKicsXHJcbiAgICByZWRpcmVjdFRvOiAncmVwb3J0cycsXHJcbiAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xyXG4gIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcywgeyB1c2VIYXNoOiB0cnVlLCBpbml0aWFsTmF2aWdhdGlvbjogXCJkaXNhYmxlZFwiIH0pXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cclxuIl19