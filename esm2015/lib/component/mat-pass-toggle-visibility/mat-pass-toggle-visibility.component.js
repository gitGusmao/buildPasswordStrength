import { Component, Input, ViewEncapsulation } from '@angular/core';
export class MatPassToggleVisibilityComponent {
    constructor() {
        this._type = 'text';
    }
    get type() {
        return this.isVisible ? 'text' : 'password';
    }
}
MatPassToggleVisibilityComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-pass-toggle-visibility',
                template: "<button (click)=\"isVisible = !isVisible\"\r\n        class=\"mat-icon-button cdk-focused cdk-mouse-focused\"\r\n        mat-icon-button matRipple\r\n        matRippleCentered=\"true\"\r\n        type=\"button\">\r\n  <mat-icon>{{isVisible ? 'visibility' : 'visibility_off' }}</mat-icon>\r\n</button>\r\n\r\n",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            },] }
];
MatPassToggleVisibilityComponent.propDecorators = {
    isVisible: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXBhc3MtdG9nZ2xlLXZpc2liaWxpdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZXh0ZW5zaW9ucy9wYXNzd29yZC1zdHJlbmd0aC9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L21hdC1wYXNzLXRvZ2dsZS12aXNpYmlsaXR5L21hdC1wYXNzLXRvZ2dsZS12aXNpYmlsaXR5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQVVsRSxNQUFNLE9BQU8sZ0NBQWdDO0lBTjdDO1FBV0UsVUFBSyxHQUFTLE1BQU0sQ0FBQztJQU12QixDQUFDO0lBSkMsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUM5QyxDQUFDOzs7WUFmRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsZ1VBQTBEO2dCQUUxRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozt3QkFHRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG50eXBlIFR5cGUgPSAndGV4dCcgfCAncGFzc3dvcmQnIDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWF0LXBhc3MtdG9nZ2xlLXZpc2liaWxpdHknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXQtcGFzcy10b2dnbGUtdmlzaWJpbGl0eS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbWF0LXBhc3MtdG9nZ2xlLXZpc2liaWxpdHkuY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRQYXNzVG9nZ2xlVmlzaWJpbGl0eUNvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaXNWaXNpYmxlOiBib29sZWFuO1xyXG5cclxuICBfdHlwZTogVHlwZSA9ICd0ZXh0JztcclxuXHJcbiAgZ2V0IHR5cGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1Zpc2libGUgPyAndGV4dCcgOiAncGFzc3dvcmQnO1xyXG4gIH1cclxuXHJcbn1cclxuIl19