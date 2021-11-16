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
MatPassToggleVisibilityComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MatPassToggleVisibilityComponent, selectors: [["mat-pass-toggle-visibility"]], inputs: { isVisible: "isVisible" }, decls: 3, vars: 1, consts: [["mat-icon-button", "", "matRipple", "", "matRippleCentered", "true", "type", "button", 1, "mat-icon-button", "cdk-focused", "cdk-mouse-focused", 3, "click"]], template: function MatPassToggleVisibilityComponent_Template(rf, ctx) { if (rf & 1) {
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MatPassToggleVisibilityComponent, [{
        type: Component,
        args: [{
                selector: 'mat-pass-toggle-visibility',
                templateUrl: './mat-pass-toggle-visibility.component.html',
                styleUrls: ['./mat-pass-toggle-visibility.component.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], null, { isVisible: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXBhc3MtdG9nZ2xlLXZpc2liaWxpdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZXh0ZW5zaW9ucy9wYXNzd29yZC1zdHJlbmd0aC9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L21hdC1wYXNzLXRvZ2dsZS12aXNpYmlsaXR5L21hdC1wYXNzLXRvZ2dsZS12aXNpYmlsaXR5LmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnQvbWF0LXBhc3MtdG9nZ2xlLXZpc2liaWxpdHkvbWF0LXBhc3MtdG9nZ2xlLXZpc2liaWxpdHkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFVbEUsTUFBTSxPQUFPLGdDQUFnQztJQU43QztRQVdFLFVBQUssR0FBUyxNQUFNLENBQUM7S0FNdEI7SUFKQyxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQzlDLENBQUM7O2dIQVRVLGdDQUFnQztxRUFBaEMsZ0NBQWdDO1FDVjdDLGlDQUtFO1FBTE0sK0lBQWdDO1FBS3RDLGdDQUFVO1FBQUEsWUFBZ0Q7UUFBQSxpQkFBVztRQUN2RSxpQkFBUzs7UUFERyxlQUFnRDtRQUFoRCxxRUFBZ0Q7O2tEREsvQyxnQ0FBZ0M7Y0FONUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFdBQVcsRUFBRSw2Q0FBNkM7Z0JBQzFELFNBQVMsRUFBRSxDQUFDLDZDQUE2QyxDQUFDO2dCQUMxRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0QztnQkFJQyxTQUFTO2tCQURSLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbnR5cGUgVHlwZSA9ICd0ZXh0JyB8ICdwYXNzd29yZCcgO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtYXQtcGFzcy10b2dnbGUtdmlzaWJpbGl0eScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21hdC1wYXNzLXRvZ2dsZS12aXNpYmlsaXR5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tYXQtcGFzcy10b2dnbGUtdmlzaWJpbGl0eS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdFBhc3NUb2dnbGVWaXNpYmlsaXR5Q29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KClcclxuICBpc1Zpc2libGU6IGJvb2xlYW47XHJcblxyXG4gIF90eXBlOiBUeXBlID0gJ3RleHQnO1xyXG5cclxuICBnZXQgdHlwZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmlzaWJsZSA/ICd0ZXh0JyA6ICdwYXNzd29yZCc7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8YnV0dG9uIChjbGljayk9XCJpc1Zpc2libGUgPSAhaXNWaXNpYmxlXCJcclxuICAgICAgICBjbGFzcz1cIm1hdC1pY29uLWJ1dHRvbiBjZGstZm9jdXNlZCBjZGstbW91c2UtZm9jdXNlZFwiXHJcbiAgICAgICAgbWF0LWljb24tYnV0dG9uIG1hdFJpcHBsZVxyXG4gICAgICAgIG1hdFJpcHBsZUNlbnRlcmVkPVwidHJ1ZVwiXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiPlxyXG4gIDxtYXQtaWNvbj57e2lzVmlzaWJsZSA/ICd2aXNpYmlsaXR5JyA6ICd2aXNpYmlsaXR5X29mZicgfX08L21hdC1pY29uPlxyXG48L2J1dHRvbj5cclxuXHJcbiJdfQ==