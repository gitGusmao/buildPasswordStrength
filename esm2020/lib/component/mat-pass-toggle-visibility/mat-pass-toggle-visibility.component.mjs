import { Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/core";
import * as i2 from "@angular/material/icon";
export class MatPassToggleVisibilityComponent {
    get type() {
        return this.isVisible ? 'text' : 'password';
    }
}
MatPassToggleVisibilityComponent.ɵfac = function MatPassToggleVisibilityComponent_Factory(t) { return new (t || MatPassToggleVisibilityComponent)(); };
MatPassToggleVisibilityComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MatPassToggleVisibilityComponent, selectors: [["mat-pass-toggle-visibility"]], inputs: { isVisible: "isVisible", tabindex: "tabindex" }, decls: 3, vars: 2, consts: [["mat-icon-button", "", "matRipple", "", "matRippleCentered", "true", "matRipple", "", "type", "button", 1, "mat-icon-button", "cdk-focused", "cdk-mouse-focused", 3, "click"]], template: function MatPassToggleVisibilityComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function MatPassToggleVisibilityComponent_Template_button_click_0_listener() { return ctx.isVisible = !ctx.isVisible; });
        i0.ɵɵelementStart(1, "mat-icon");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵattribute("tabindex", ctx.tabindex ? ctx.tabindex : null);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.isVisible ? "visibility" : "visibility_off");
    } }, directives: [i1.MatRipple, i2.MatIcon], styles: [""], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatPassToggleVisibilityComponent, [{
        type: Component,
        args: [{ selector: 'mat-pass-toggle-visibility', encapsulation: ViewEncapsulation.None, template: "<button\r\n  (click)=\"isVisible = !isVisible\"\r\n  class=\"mat-icon-button cdk-focused cdk-mouse-focused\"\r\n  mat-icon-button\r\n  matRipple\r\n  matRippleCentered=\"true\"\r\n  matRipple\r\n  [attr.tabindex]=\"tabindex ? tabindex : null\"\r\n  type=\"button\"\r\n>\r\n  <mat-icon>{{ isVisible ? \"visibility\" : \"visibility_off\" }}</mat-icon>\r\n</button>\r\n", styles: [""] }]
    }], null, { isVisible: [{
            type: Input
        }], tabindex: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXBhc3MtdG9nZ2xlLXZpc2liaWxpdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1tYXRlcmlhbC1leHRlbnNpb25zL3Bhc3N3b3JkLXN0cmVuZ3RoL3NyYy9saWIvY29tcG9uZW50L21hdC1wYXNzLXRvZ2dsZS12aXNpYmlsaXR5L21hdC1wYXNzLXRvZ2dsZS12aXNpYmlsaXR5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZXh0ZW5zaW9ucy9wYXNzd29yZC1zdHJlbmd0aC9zcmMvbGliL2NvbXBvbmVudC9tYXQtcGFzcy10b2dnbGUtdmlzaWJpbGl0eS9tYXQtcGFzcy10b2dnbGUtdmlzaWJpbGl0eS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQVFsRSxNQUFNLE9BQU8sZ0NBQWdDO0lBUTNDLElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDOUMsQ0FBQzs7Z0hBVlUsZ0NBQWdDO21GQUFoQyxnQ0FBZ0M7UUNSN0MsaUNBU0M7UUFSQywrSUFBZ0M7UUFTaEMsZ0NBQVU7UUFBQSxZQUFpRDtRQUFBLGlCQUFXO1FBQ3hFLGlCQUFTOztRQUpQLDhEQUE0QztRQUdsQyxlQUFpRDtRQUFqRCxxRUFBaUQ7O3VGREZoRCxnQ0FBZ0M7Y0FONUMsU0FBUzsyQkFDRSw0QkFBNEIsaUJBR3ZCLGlCQUFpQixDQUFDLElBQUk7Z0JBS3JDLFNBQVM7a0JBRFIsS0FBSztZQUlOLFFBQVE7a0JBRFAsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtYXQtcGFzcy10b2dnbGUtdmlzaWJpbGl0eScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21hdC1wYXNzLXRvZ2dsZS12aXNpYmlsaXR5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tYXQtcGFzcy10b2dnbGUtdmlzaWJpbGl0eS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdFBhc3NUb2dnbGVWaXNpYmlsaXR5Q29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KClcclxuICBpc1Zpc2libGU6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgdGFiaW5kZXg/OiBzdHJpbmc7XHJcblxyXG4gIGdldCB0eXBlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWaXNpYmxlID8gJ3RleHQnIDogJ3Bhc3N3b3JkJztcclxuICB9XHJcblxyXG59XHJcbiIsIjxidXR0b25cclxuICAoY2xpY2spPVwiaXNWaXNpYmxlID0gIWlzVmlzaWJsZVwiXHJcbiAgY2xhc3M9XCJtYXQtaWNvbi1idXR0b24gY2RrLWZvY3VzZWQgY2RrLW1vdXNlLWZvY3VzZWRcIlxyXG4gIG1hdC1pY29uLWJ1dHRvblxyXG4gIG1hdFJpcHBsZVxyXG4gIG1hdFJpcHBsZUNlbnRlcmVkPVwidHJ1ZVwiXHJcbiAgbWF0UmlwcGxlXHJcbiAgW2F0dHIudGFiaW5kZXhdPVwidGFiaW5kZXggPyB0YWJpbmRleCA6IG51bGxcIlxyXG4gIHR5cGU9XCJidXR0b25cIlxyXG4+XHJcbiAgPG1hdC1pY29uPnt7IGlzVmlzaWJsZSA/IFwidmlzaWJpbGl0eVwiIDogXCJ2aXNpYmlsaXR5X29mZlwiIH19PC9tYXQtaWNvbj5cclxuPC9idXR0b24+XHJcbiJdfQ==