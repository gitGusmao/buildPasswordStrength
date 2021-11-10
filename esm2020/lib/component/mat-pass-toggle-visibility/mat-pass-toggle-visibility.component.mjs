import { Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/core";
import * as i2 from "@angular/material/icon";
export class MatPassToggleVisibilityComponent {
    constructor() {
        this._type = 'text';
    }
    get type() {
        return this.isVisible ? 'text' : 'password';
    }
}
MatPassToggleVisibilityComponent.ɵfac = function MatPassToggleVisibilityComponent_Factory(t) { return new (t || MatPassToggleVisibilityComponent)(); };
MatPassToggleVisibilityComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MatPassToggleVisibilityComponent, selectors: [["mat-pass-toggle-visibility"]], inputs: { isVisible: "isVisible" }, decls: 3, vars: 1, consts: [["mat-icon-button", "", "matRipple", "", "matRippleCentered", "true", "type", "button", 1, "mat-icon-button", "cdk-focused", "cdk-mouse-focused", 3, "click"]], template: function MatPassToggleVisibilityComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function MatPassToggleVisibilityComponent_Template_button_click_0_listener() { return ctx.isVisible = !ctx.isVisible; });
        i0.ɵɵelementStart(1, "mat-icon");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.isVisible ? "visibility" : "visibility_off");
    } }, directives: [i1.MatRipple, i2.MatIcon], styles: [""], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatPassToggleVisibilityComponent, [{
        type: Component,
        args: [{ selector: 'mat-pass-toggle-visibility', encapsulation: ViewEncapsulation.None, template: "<button (click)=\"isVisible = !isVisible\"\r\n        class=\"mat-icon-button cdk-focused cdk-mouse-focused\"\r\n        mat-icon-button matRipple\r\n        matRippleCentered=\"true\"\r\n        type=\"button\">\r\n  <mat-icon>{{isVisible ? 'visibility' : 'visibility_off' }}</mat-icon>\r\n</button>\r\n\r\n", styles: [""] }]
    }], null, { isVisible: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXBhc3MtdG9nZ2xlLXZpc2liaWxpdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1tYXRlcmlhbC1leHRlbnNpb25zL3Bhc3N3b3JkLXN0cmVuZ3RoL3NyYy9saWIvY29tcG9uZW50L21hdC1wYXNzLXRvZ2dsZS12aXNpYmlsaXR5L21hdC1wYXNzLXRvZ2dsZS12aXNpYmlsaXR5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZXh0ZW5zaW9ucy9wYXNzd29yZC1zdHJlbmd0aC9zcmMvbGliL2NvbXBvbmVudC9tYXQtcGFzcy10b2dnbGUtdmlzaWJpbGl0eS9tYXQtcGFzcy10b2dnbGUtdmlzaWJpbGl0eS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQVVsRSxNQUFNLE9BQU8sZ0NBQWdDO0lBTjdDO1FBV0UsVUFBSyxHQUFTLE1BQU0sQ0FBQztLQU10QjtJQUpDLElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDOUMsQ0FBQzs7Z0hBVFUsZ0NBQWdDO21GQUFoQyxnQ0FBZ0M7UUNWN0MsaUNBSXNCO1FBSmQsK0lBQWdDO1FBS3RDLGdDQUFVO1FBQUEsWUFBZ0Q7UUFBQSxpQkFBVztRQUN2RSxpQkFBUzs7UUFERyxlQUFnRDtRQUFoRCxxRUFBZ0Q7O3VGREsvQyxnQ0FBZ0M7Y0FONUMsU0FBUzsyQkFDRSw0QkFBNEIsaUJBR3ZCLGlCQUFpQixDQUFDLElBQUk7Z0JBS3JDLFNBQVM7a0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxudHlwZSBUeXBlID0gJ3RleHQnIHwgJ3Bhc3N3b3JkJyA7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21hdC1wYXNzLXRvZ2dsZS12aXNpYmlsaXR5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWF0LXBhc3MtdG9nZ2xlLXZpc2liaWxpdHkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21hdC1wYXNzLXRvZ2dsZS12aXNpYmlsaXR5LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0UGFzc1RvZ2dsZVZpc2liaWxpdHlDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGlzVmlzaWJsZTogYm9vbGVhbjtcclxuXHJcbiAgX3R5cGU6IFR5cGUgPSAndGV4dCc7XHJcblxyXG4gIGdldCB0eXBlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWaXNpYmxlID8gJ3RleHQnIDogJ3Bhc3N3b3JkJztcclxuICB9XHJcblxyXG59XHJcbiIsIjxidXR0b24gKGNsaWNrKT1cImlzVmlzaWJsZSA9ICFpc1Zpc2libGVcIlxyXG4gICAgICAgIGNsYXNzPVwibWF0LWljb24tYnV0dG9uIGNkay1mb2N1c2VkIGNkay1tb3VzZS1mb2N1c2VkXCJcclxuICAgICAgICBtYXQtaWNvbi1idXR0b24gbWF0UmlwcGxlXHJcbiAgICAgICAgbWF0UmlwcGxlQ2VudGVyZWQ9XCJ0cnVlXCJcclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgPG1hdC1pY29uPnt7aXNWaXNpYmxlID8gJ3Zpc2liaWxpdHknIDogJ3Zpc2liaWxpdHlfb2ZmJyB9fTwvbWF0LWljb24+XHJcbjwvYnV0dG9uPlxyXG5cclxuIl19