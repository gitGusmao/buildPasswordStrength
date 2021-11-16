import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPasswordStrengthComponent } from './component/mat-password-strength/mat-password-strength.component';
import { MatPasswordStrengthInfoComponent } from './component/mat-password-strength-info/mat-password-strength-info.component';
import { MatPassToggleVisibilityComponent } from './component/mat-pass-toggle-visibility/mat-pass-toggle-visibility.component';
import * as i0 from "@angular/core";
// Export module's public API
export { MatPasswordStrengthComponent } from './component/mat-password-strength/mat-password-strength.component';
export { MatPasswordStrengthInfoComponent } from './component/mat-password-strength-info/mat-password-strength-info.component';
export { MatPassToggleVisibilityComponent } from './component/mat-pass-toggle-visibility/mat-pass-toggle-visibility.component';
export { MatPasswordStrengthValidator } from './validator/mat-password-strength-validator';
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
MatPasswordStrengthModule.ɵmod = i0.ɵɵdefineNgModule({ type: MatPasswordStrengthModule });
MatPasswordStrengthModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MatPasswordStrengthModule_Factory(t) { return new (t || MatPasswordStrengthModule)(); }, imports: [[
            CommonModule,
            MatProgressBarModule,
            MatCardModule,
            MatIconModule,
            MatRippleModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MatPasswordStrengthModule, { declarations: [MatPasswordStrengthComponent,
        MatPasswordStrengthInfoComponent,
        MatPassToggleVisibilityComponent], imports: [CommonModule,
        MatProgressBarModule,
        MatCardModule,
        MatIconModule,
        MatRippleModule], exports: [MatPasswordStrengthComponent,
        MatPasswordStrengthInfoComponent,
        MatPassToggleVisibilityComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MatPasswordStrengthModule, [{
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
                ],
                entryComponents: [MatPassToggleVisibilityComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXBhc3N3b3JkLXN0cmVuZ3RoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLW1hdGVyaWFsLWV4dGVuc2lvbnMvcGFzc3dvcmQtc3RyZW5ndGgvc3JjLyIsInNvdXJjZXMiOlsibGliL21hdC1wYXNzd29yZC1zdHJlbmd0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBc0IsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBRXJELE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLG1FQUFtRSxDQUFDO0FBQy9HLE9BQU8sRUFBQyxnQ0FBZ0MsRUFBQyxNQUFNLDZFQUE2RSxDQUFDO0FBQzdILE9BQU8sRUFBQyxnQ0FBZ0MsRUFBQyxNQUFNLDZFQUE2RSxDQUFDOztBQUc3SCw2QkFBNkI7QUFDN0IsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sbUVBQW1FLENBQUM7QUFDL0csT0FBTyxFQUNMLGdDQUFnQyxFQUNqQyxNQUFNLDZFQUE2RSxDQUFDO0FBQ3JGLE9BQU8sRUFBQyxnQ0FBZ0MsRUFBQyxNQUFNLDZFQUE2RSxDQUFDO0FBQzdILE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ3pGLFlBQVk7QUFDWixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFzQnpELE1BQU0sT0FBTyx5QkFBeUI7SUFDcEMsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7SUFDSixDQUFDOzs2REFOVSx5QkFBeUI7aUlBQXpCLHlCQUF5QixrQkFuQjNCO1lBQ1AsWUFBWTtZQUNaLG9CQUFvQjtZQUNwQixhQUFhO1lBQ2IsYUFBYTtZQUNiLGVBQWU7U0FDaEI7d0ZBYVUseUJBQXlCLG1CQU5sQyw0QkFBNEI7UUFDNUIsZ0NBQWdDO1FBQ2hDLGdDQUFnQyxhQWRoQyxZQUFZO1FBQ1osb0JBQW9CO1FBQ3BCLGFBQWE7UUFDYixhQUFhO1FBQ2IsZUFBZSxhQUdmLDRCQUE0QjtRQUM1QixnQ0FBZ0M7UUFDaEMsZ0NBQWdDO2tEQVN2Qix5QkFBeUI7Y0FwQnJDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixvQkFBb0I7b0JBQ3BCLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYixlQUFlO2lCQUNoQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsNEJBQTRCO29CQUM1QixnQ0FBZ0M7b0JBQ2hDLGdDQUFnQztpQkFDakM7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLDRCQUE0QjtvQkFDNUIsZ0NBQWdDO29CQUNoQyxnQ0FBZ0M7aUJBQ2pDO2dCQUNELGVBQWUsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2FBQ3BEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01hdFByb2dyZXNzQmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQge01hdFJpcHBsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7TWF0Q2FyZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XHJcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcblxyXG5pbXBvcnQge01hdFBhc3N3b3JkU3RyZW5ndGhDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50L21hdC1wYXNzd29yZC1zdHJlbmd0aC9tYXQtcGFzc3dvcmQtc3RyZW5ndGguY29tcG9uZW50JztcclxuaW1wb3J0IHtNYXRQYXNzd29yZFN0cmVuZ3RoSW5mb0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnQvbWF0LXBhc3N3b3JkLXN0cmVuZ3RoLWluZm8vbWF0LXBhc3N3b3JkLXN0cmVuZ3RoLWluZm8uY29tcG9uZW50JztcclxuaW1wb3J0IHtNYXRQYXNzVG9nZ2xlVmlzaWJpbGl0eUNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnQvbWF0LXBhc3MtdG9nZ2xlLXZpc2liaWxpdHkvbWF0LXBhc3MtdG9nZ2xlLXZpc2liaWxpdHkuY29tcG9uZW50JztcclxuXHJcblxyXG4vLyBFeHBvcnQgbW9kdWxlJ3MgcHVibGljIEFQSVxyXG5leHBvcnQge01hdFBhc3N3b3JkU3RyZW5ndGhDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50L21hdC1wYXNzd29yZC1zdHJlbmd0aC9tYXQtcGFzc3dvcmQtc3RyZW5ndGguY29tcG9uZW50JztcclxuZXhwb3J0IHtcclxuICBNYXRQYXNzd29yZFN0cmVuZ3RoSW5mb0NvbXBvbmVudFxyXG59IGZyb20gJy4vY29tcG9uZW50L21hdC1wYXNzd29yZC1zdHJlbmd0aC1pbmZvL21hdC1wYXNzd29yZC1zdHJlbmd0aC1pbmZvLmNvbXBvbmVudCc7XHJcbmV4cG9ydCB7TWF0UGFzc1RvZ2dsZVZpc2liaWxpdHlDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50L21hdC1wYXNzLXRvZ2dsZS12aXNpYmlsaXR5L21hdC1wYXNzLXRvZ2dsZS12aXNpYmlsaXR5LmNvbXBvbmVudCc7XHJcbmV4cG9ydCB7TWF0UGFzc3dvcmRTdHJlbmd0aFZhbGlkYXRvcn0gZnJvbSAnLi92YWxpZGF0b3IvbWF0LXBhc3N3b3JkLXN0cmVuZ3RoLXZhbGlkYXRvcic7XHJcbi8vIHZhbGlkYXRvclxyXG5leHBvcnQge1JlZ0V4cFZhbGlkYXRvcn0gZnJvbSAnLi92YWxpZGF0b3IvcmVnZXhwLmNsYXNzJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcbiAgICBNYXRDYXJkTW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZSxcclxuICAgIE1hdFJpcHBsZU1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTWF0UGFzc3dvcmRTdHJlbmd0aENvbXBvbmVudCxcclxuICAgIE1hdFBhc3N3b3JkU3RyZW5ndGhJbmZvQ29tcG9uZW50LFxyXG4gICAgTWF0UGFzc1RvZ2dsZVZpc2liaWxpdHlDb21wb25lbnRcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTWF0UGFzc3dvcmRTdHJlbmd0aENvbXBvbmVudCxcclxuICAgIE1hdFBhc3N3b3JkU3RyZW5ndGhJbmZvQ29tcG9uZW50LFxyXG4gICAgTWF0UGFzc1RvZ2dsZVZpc2liaWxpdHlDb21wb25lbnRcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW01hdFBhc3NUb2dnbGVWaXNpYmlsaXR5Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0UGFzc3dvcmRTdHJlbmd0aE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxNYXRQYXNzd29yZFN0cmVuZ3RoTW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTWF0UGFzc3dvcmRTdHJlbmd0aE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19