import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let CommonLoaderComponent = class CommonLoaderComponent {
    constructor() {
        this.loader = '';
        this.home = false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        let loader = this.loader ? this.loader : '23470-loading.json';
        //Dynamic id name from parent component  
        let id = "loader" + this.idVal;
        // bodymovin.loadAnimation({
        //   container: document.getElementById(id),
        //   renderer: "svg",
        //   loop: true,
        //   autoplay: true,
        //   path: `./assets/loading/${loader}`
        // });
    }
};
__decorate([
    Input()
], CommonLoaderComponent.prototype, "idVal", void 0);
__decorate([
    Input()
], CommonLoaderComponent.prototype, "loader", void 0);
__decorate([
    Input()
], CommonLoaderComponent.prototype, "home", void 0);
CommonLoaderComponent = __decorate([
    Component({
        selector: 'app-common-loader',
        template: "<div class=\"cls-loader-bg\">\r\n    <div class=\"cls-loader text-center\" [ngClass]=\"{'home-loader':home}\" id=\"loader{{idVal}}\"></div>\r\n</div>",
        styles: [".cls-loader-bg{top:0;right:0;left:0;bottom:0;border-radius:5px;background-image:linear-gradient(120deg,#fdfbfb 0,#ebedee 100%);position:absolute;z-index:5;display:flex;align-items:center;justify-content:center}.cls-loader-bg .cls-loader{width:150px;height:auto;text-align:center}.cls-loader-bg .cls-loader svg{width:100px}.cls-loader-bg .cls-loader.home-loader{width:20%}:host(.cls-ldr) .cls-loader-bg{height:260px}:host(.cls-list-loader) .cls-loader-bg{height:280px;top:30px;right:20px}"]
    })
], CommonLoaderComponent);
export { CommonLoaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9yZXBvcnRtb2R1bGUvIiwic291cmNlcyI6WyJsaWIvYXBwL3NoYXJlZC1tb2R1bGUvY29tbW9uLWxvYWRlci9jb21tb24tbG9hZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFTekQsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFLaEM7UUFIUyxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFNBQUksR0FBWSxLQUFLLENBQUM7SUFFZixDQUFDO0lBRWpCLFFBQVE7SUFFUixDQUFDO0lBQ0QsZUFBZTtRQUViLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDO1FBRTlELHlDQUF5QztRQUN6QyxJQUFJLEVBQUUsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMvQiw0QkFBNEI7UUFDNUIsNENBQTRDO1FBQzVDLHFCQUFxQjtRQUNyQixnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLHVDQUF1QztRQUN2QyxNQUFNO0lBQ1IsQ0FBQztDQUVGLENBQUE7QUF4QlU7SUFBUixLQUFLLEVBQUU7b0RBQWU7QUFDZDtJQUFSLEtBQUssRUFBRTtxREFBcUI7QUFDcEI7SUFBUixLQUFLLEVBQUU7bURBQXVCO0FBSHBCLHFCQUFxQjtJQUxqQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLGlLQUE2Qzs7S0FFOUMsQ0FBQztHQUNXLHFCQUFxQixDQXlCakM7U0F6QlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyBkZWNsYXJlIHZhciBib2R5bW92aW46IGFueTtcclxuZGVjbGFyZSB2YXIgJDogYW55O1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1jb21tb24tbG9hZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tbW9uLWxvYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29tbW9uLWxvYWRlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21tb25Mb2FkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGlkVmFsOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbG9hZGVyOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBob21lOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICB9XHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG5cclxuICAgIGxldCBsb2FkZXIgPSB0aGlzLmxvYWRlciA/IHRoaXMubG9hZGVyIDogJzIzNDcwLWxvYWRpbmcuanNvbic7XHJcblxyXG4gICAgLy9EeW5hbWljIGlkIG5hbWUgZnJvbSBwYXJlbnQgY29tcG9uZW50ICBcclxuICAgIGxldCBpZCA9IFwibG9hZGVyXCIgKyB0aGlzLmlkVmFsO1xyXG4gICAgLy8gYm9keW1vdmluLmxvYWRBbmltYXRpb24oe1xyXG4gICAgLy8gICBjb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSxcclxuICAgIC8vICAgcmVuZGVyZXI6IFwic3ZnXCIsXHJcbiAgICAvLyAgIGxvb3A6IHRydWUsXHJcbiAgICAvLyAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgLy8gICBwYXRoOiBgLi9hc3NldHMvbG9hZGluZy8ke2xvYWRlcn1gXHJcbiAgICAvLyB9KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==