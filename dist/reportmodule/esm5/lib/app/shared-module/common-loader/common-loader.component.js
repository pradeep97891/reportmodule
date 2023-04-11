import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
var CommonLoaderComponent = /** @class */ (function () {
    function CommonLoaderComponent() {
        this.loader = '';
        this.home = false;
    }
    CommonLoaderComponent.prototype.ngOnInit = function () {
    };
    CommonLoaderComponent.prototype.ngAfterViewInit = function () {
        var loader = this.loader ? this.loader : '23470-loading.json';
        //Dynamic id name from parent component  
        var id = "loader" + this.idVal;
        // bodymovin.loadAnimation({
        //   container: document.getElementById(id),
        //   renderer: "svg",
        //   loop: true,
        //   autoplay: true,
        //   path: `./assets/loading/${loader}`
        // });
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
    return CommonLoaderComponent;
}());
export { CommonLoaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9yZXBvcnRtb2R1bGUvIiwic291cmNlcyI6WyJsaWIvYXBwL3NoYXJlZC1tb2R1bGUvY29tbW9uLWxvYWRlci9jb21tb24tbG9hZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFTekQ7SUFLRTtRQUhTLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsU0FBSSxHQUFZLEtBQUssQ0FBQztJQUVmLENBQUM7SUFFakIsd0NBQVEsR0FBUjtJQUVBLENBQUM7SUFDRCwrQ0FBZSxHQUFmO1FBRUUsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUM7UUFFOUQseUNBQXlDO1FBQ3pDLElBQUksRUFBRSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQy9CLDRCQUE0QjtRQUM1Qiw0Q0FBNEM7UUFDNUMscUJBQXFCO1FBQ3JCLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIsdUNBQXVDO1FBQ3ZDLE1BQU07SUFDUixDQUFDO0lBdEJRO1FBQVIsS0FBSyxFQUFFO3dEQUFlO0lBQ2Q7UUFBUixLQUFLLEVBQUU7eURBQXFCO0lBQ3BCO1FBQVIsS0FBSyxFQUFFO3VEQUF1QjtJQUhwQixxQkFBcUI7UUFMakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixpS0FBNkM7O1NBRTlDLENBQUM7T0FDVyxxQkFBcUIsQ0F5QmpDO0lBQUQsNEJBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQXpCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8vIGRlY2xhcmUgdmFyIGJvZHltb3ZpbjogYW55O1xyXG5kZWNsYXJlIHZhciAkOiBhbnk7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWNvbW1vbi1sb2FkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21tb24tbG9hZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb21tb24tbG9hZGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbW1vbkxvYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgaWRWYWw6IG51bWJlcjtcclxuICBASW5wdXQoKSBsb2FkZXI6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGhvbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcblxyXG4gICAgbGV0IGxvYWRlciA9IHRoaXMubG9hZGVyID8gdGhpcy5sb2FkZXIgOiAnMjM0NzAtbG9hZGluZy5qc29uJztcclxuXHJcbiAgICAvL0R5bmFtaWMgaWQgbmFtZSBmcm9tIHBhcmVudCBjb21wb25lbnQgIFxyXG4gICAgbGV0IGlkID0gXCJsb2FkZXJcIiArIHRoaXMuaWRWYWw7XHJcbiAgICAvLyBib2R5bW92aW4ubG9hZEFuaW1hdGlvbih7XHJcbiAgICAvLyAgIGNvbnRhaW5lcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLFxyXG4gICAgLy8gICByZW5kZXJlcjogXCJzdmdcIixcclxuICAgIC8vICAgbG9vcDogdHJ1ZSxcclxuICAgIC8vICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAvLyAgIHBhdGg6IGAuL2Fzc2V0cy9sb2FkaW5nLyR7bG9hZGVyfWBcclxuICAgIC8vIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19