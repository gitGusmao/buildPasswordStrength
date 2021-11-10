import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPassToggleVisibilityComponent, MatPasswordStrengthComponent, MatPasswordStrengthInfoComponent } from './component';
import * as i0 from "@angular/core";
// Export module's public API
// export {MatPasswordStrengthComponent} from './component/mat-password-strength/mat-password-strength.component';
// export {
//   MatPasswordStrengthInfoComponent
// } from './component/mat-password-strength-info/mat-password-strength-info.component';
// export {MatPassToggleVisibilityComponent} from './component/mat-pass-toggle-visibility/mat-pass-toggle-visibility.component';
// export {MatPasswordStrengthValidator} from './validator/mat-password-strength-validator';
// validator
export { RegExpValidator } from './validator/regexp.class';
export class MatPasswordStrengthModule {
    static forRoot() {
        return {
            ngModule: MatPasswordStrengthModule,
            providers: []
        };
    }
}
MatPasswordStrengthModule.ɵfac = function MatPasswordStrengthModule_Factory(t) { return new (t || MatPasswordStrengthModule)(); };
MatPasswordStrengthModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: MatPasswordStrengthModule });
MatPasswordStrengthModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatProgressBarModule,
            MatCardModule,
            MatIconModule,
            MatRippleModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatPasswordStrengthModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatProgressBarModule,
                    MatCardModule,
                    MatIconModule,
                    MatRippleModule
                ],
                exports: [
                    MatPasswordStrengthComponent,
                    MatPasswordStrengthInfoComponent,
                    MatPassToggleVisibilityComponent
                ],
                declarations: [
                    MatPasswordStrengthComponent,
                    MatPasswordStrengthInfoComponent,
                    MatPassToggleVisibilityComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MatPasswordStrengthModule, { declarations: [MatPasswordStrengthComponent,
        MatPasswordStrengthInfoComponent,
        MatPassToggleVisibilityComponent], imports: [CommonModule,
        MatProgressBarModule,
        MatCardModule,
        MatIconModule,
        MatRippleModule], exports: [MatPasswordStrengthComponent,
        MatPasswordStrengthInfoComponent,
        MatPassToggleVisibilityComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXBhc3N3b3JkLXN0cmVuZ3RoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZXh0ZW5zaW9ucy9wYXNzd29yZC1zdHJlbmd0aC9zcmMvbGliL21hdC1wYXNzd29yZC1zdHJlbmd0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBc0IsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBRXJELE9BQU8sRUFBQyxnQ0FBZ0MsRUFBRSw0QkFBNEIsRUFBRSxnQ0FBZ0MsRUFBQyxNQUFNLGFBQWEsQ0FBQzs7QUFHN0gsNkJBQTZCO0FBQzdCLGtIQUFrSDtBQUNsSCxXQUFXO0FBQ1gscUNBQXFDO0FBQ3JDLHdGQUF3RjtBQUN4RixnSUFBZ0k7QUFDaEksNEZBQTRGO0FBQzVGLFlBQVk7QUFDWixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFxQnpELE1BQU0sT0FBTyx5QkFBeUI7SUFDcEMsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7SUFDSixDQUFDOztrR0FOVSx5QkFBeUI7MkVBQXpCLHlCQUF5QjsrRUFsQjNCO1lBQ1AsWUFBWTtZQUNaLG9CQUFvQjtZQUNwQixhQUFhO1lBQ2IsYUFBYTtZQUNiLGVBQWU7U0FDaEI7dUZBWVUseUJBQXlCO2NBbkJyQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osb0JBQW9CO29CQUNwQixhQUFhO29CQUNiLGFBQWE7b0JBQ2IsZUFBZTtpQkFDaEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLDRCQUE0QjtvQkFDNUIsZ0NBQWdDO29CQUNoQyxnQ0FBZ0M7aUJBQ2pDO2dCQUNELFlBQVksRUFBRTtvQkFDWiw0QkFBNEI7b0JBQzVCLGdDQUFnQztvQkFDaEMsZ0NBQWdDO2lCQUNqQzthQUNGOzt3RkFDWSx5QkFBeUIsbUJBTGxDLDRCQUE0QjtRQUM1QixnQ0FBZ0M7UUFDaEMsZ0NBQWdDLGFBZGhDLFlBQVk7UUFDWixvQkFBb0I7UUFDcEIsYUFBYTtRQUNiLGFBQWE7UUFDYixlQUFlLGFBR2YsNEJBQTRCO1FBQzVCLGdDQUFnQztRQUNoQyxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TWF0UHJvZ3Jlc3NCYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XHJcbmltcG9ydCB7TWF0UmlwcGxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHtNYXRDYXJkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcclxuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuXHJcbmltcG9ydCB7TWF0UGFzc1RvZ2dsZVZpc2liaWxpdHlDb21wb25lbnQsIE1hdFBhc3N3b3JkU3RyZW5ndGhDb21wb25lbnQsIE1hdFBhc3N3b3JkU3RyZW5ndGhJbmZvQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudCc7XHJcblxyXG5cclxuLy8gRXhwb3J0IG1vZHVsZSdzIHB1YmxpYyBBUElcclxuLy8gZXhwb3J0IHtNYXRQYXNzd29yZFN0cmVuZ3RoQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudC9tYXQtcGFzc3dvcmQtc3RyZW5ndGgvbWF0LXBhc3N3b3JkLXN0cmVuZ3RoLmNvbXBvbmVudCc7XHJcbi8vIGV4cG9ydCB7XHJcbi8vICAgTWF0UGFzc3dvcmRTdHJlbmd0aEluZm9Db21wb25lbnRcclxuLy8gfSBmcm9tICcuL2NvbXBvbmVudC9tYXQtcGFzc3dvcmQtc3RyZW5ndGgtaW5mby9tYXQtcGFzc3dvcmQtc3RyZW5ndGgtaW5mby5jb21wb25lbnQnO1xyXG4vLyBleHBvcnQge01hdFBhc3NUb2dnbGVWaXNpYmlsaXR5Q29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudC9tYXQtcGFzcy10b2dnbGUtdmlzaWJpbGl0eS9tYXQtcGFzcy10b2dnbGUtdmlzaWJpbGl0eS5jb21wb25lbnQnO1xyXG4vLyBleHBvcnQge01hdFBhc3N3b3JkU3RyZW5ndGhWYWxpZGF0b3J9IGZyb20gJy4vdmFsaWRhdG9yL21hdC1wYXNzd29yZC1zdHJlbmd0aC12YWxpZGF0b3InO1xyXG4vLyB2YWxpZGF0b3JcclxuZXhwb3J0IHtSZWdFeHBWYWxpZGF0b3J9IGZyb20gJy4vdmFsaWRhdG9yL3JlZ2V4cC5jbGFzcyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG4gICAgTWF0Q2FyZE1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBNYXRSaXBwbGVNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE1hdFBhc3N3b3JkU3RyZW5ndGhDb21wb25lbnQsXHJcbiAgICBNYXRQYXNzd29yZFN0cmVuZ3RoSW5mb0NvbXBvbmVudCxcclxuICAgIE1hdFBhc3NUb2dnbGVWaXNpYmlsaXR5Q29tcG9uZW50XHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE1hdFBhc3N3b3JkU3RyZW5ndGhDb21wb25lbnQsXHJcbiAgICBNYXRQYXNzd29yZFN0cmVuZ3RoSW5mb0NvbXBvbmVudCxcclxuICAgIE1hdFBhc3NUb2dnbGVWaXNpYmlsaXR5Q29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0UGFzc3dvcmRTdHJlbmd0aE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxNYXRQYXNzd29yZFN0cmVuZ3RoTW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTWF0UGFzc3dvcmRTdHJlbmd0aE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19