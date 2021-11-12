import { Component, Input } from '@angular/core';
import { animate, animateChild, keyframes, query, stagger, style, transition, trigger, useAnimation } from '@angular/animations';
import { shake } from '../../animations/index';
export class MatPasswordStrengthInfoComponent {
    constructor() {
        this.enableScoreInfo = false;
        this.lowerCaseCriteriaMsg = 'contains at least one lower character';
        this.upperCaseCriteriaMsg = 'contains at least one upper character';
        this.digitsCriteriaMsg = 'contains at least one digit character';
        this.specialCharsCriteriaMsg = 'contains at least one special character';
        this.customCharsCriteriaMsg = 'contains at least one custom character';
        this.matIconDone = 'done';
        this.matIconError = 'error';
    }
    ngOnInit() {
        if (!this.minCharsCriteriaMsg) {
            this.minCharsCriteriaMsg = `contains at least ${this.passComponent.min} characters`;
        }
    }
}
MatPasswordStrengthInfoComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-password-strength-info',
                exportAs: 'matPasswordStrengthInfo',
                template: "<mat-card @list>\r\n  <mat-card-content>\r\n    <div *ngIf=\"passComponent.enableLowerCaseLetterRule\" @items class=\"info-row\">\r\n      <div *ngIf=\"passComponent.containAtLeastOneLowerCaseLetter; then done else error\" @flipY>\r\n      </div>\r\n      <ng-template #done>\r\n        <mat-icon @positiveState color=\"primary\">{{matIconDone}}</mat-icon>\r\n      </ng-template>\r\n      <ng-template #error>\r\n        <mat-icon @negativeState color=\"warn\">{{matIconError}}</mat-icon>\r\n      </ng-template>\r\n      <span>{{lowerCaseCriteriaMsg}}</span>\r\n    </div>\r\n\r\n    <div *ngIf=\"passComponent.enableUpperCaseLetterRule\" @items class=\"info-row\">\r\n      <div *ngIf=\"passComponent.containAtLeastOneUpperCaseLetter; then done else error\">\r\n      </div>\r\n      <ng-template #done>\r\n        <mat-icon @positiveState color=\"primary\">{{matIconDone}}</mat-icon>\r\n      </ng-template>\r\n      <ng-template #error>\r\n        <mat-icon @negativeState color=\"warn\">{{matIconError}}</mat-icon>\r\n      </ng-template>\r\n      <span>{{upperCaseCriteriaMsg}}</span>\r\n    </div>\r\n\r\n    <div *ngIf=\"passComponent.enableDigitRule\" @items class=\"info-row\">\r\n      <div *ngIf=\"passComponent.containAtLeastOneDigit; then done else error\">\r\n      </div>\r\n      <ng-template #done>\r\n        <mat-icon @positiveState color=\"primary\">{{matIconDone}}</mat-icon>\r\n      </ng-template>\r\n      <ng-template #error>\r\n        <mat-icon @negativeState color=\"warn\">{{matIconError}}</mat-icon>\r\n      </ng-template>\r\n      <span>{{digitsCriteriaMsg}}</span>\r\n    </div>\r\n\r\n    <div *ngIf=\"passComponent.enableSpecialCharRule\" @items class=\"info-row\">\r\n      <div *ngIf=\"passComponent.containAtLeastOneSpecialChar; then done else error\">\r\n      </div>\r\n      <ng-template #done>\r\n        <mat-icon @positiveState color=\"primary\">{{matIconDone}}</mat-icon>\r\n      </ng-template>\r\n      <ng-template #error>\r\n        <mat-icon @negativeState color=\"warn\">{{matIconError}}</mat-icon>\r\n      </ng-template>\r\n      <span>{{specialCharsCriteriaMsg}}</span>\r\n    </div>\r\n\r\n    <div *ngIf=\"passComponent.enableLengthRule\" @items class=\"info-row\">\r\n      <div *ngIf=\"passComponent.containAtLeastMinChars; then done else error\">\r\n      </div>\r\n      <ng-template #done>\r\n        <mat-icon @positiveState color=\"primary\">{{matIconDone}}</mat-icon>\r\n      </ng-template>\r\n      <ng-template #error>\r\n        <mat-icon @negativeState color=\"warn\">{{matIconError}}</mat-icon>\r\n      </ng-template>\r\n      <span>{{minCharsCriteriaMsg}}</span>\r\n    </div>\r\n\r\n    <div *ngIf=\"passComponent.customValidator\" @items class=\"info-row\">\r\n      <div *ngIf=\"passComponent.containAtCustomChars; then done else error\">\r\n      </div>\r\n      <ng-template #done>\r\n        <mat-icon @positiveState color=\"primary\">{{matIconDone}}</mat-icon>\r\n      </ng-template>\r\n      <ng-template #error>\r\n        <mat-icon @negativeState color=\"warn\">{{matIconError}}</mat-icon>\r\n      </ng-template>\r\n      <span>{{customCharsCriteriaMsg}}</span>\r\n    </div>\r\n\r\n    <div *ngIf=\"enableScoreInfo\" @items class=\"info-row\">\r\n      <div *ngIf=\"passComponent.strength === 100; then done else error\">\r\n      </div>\r\n      <ng-template #done>\r\n        <mat-icon @positiveState color=\"primary\">{{matIconDone}}</mat-icon>\r\n      </ng-template>\r\n      <ng-template #error>\r\n        <mat-icon @negativeState color=\"warn\">{{matIconError}}</mat-icon>\r\n      </ng-template>\r\n      <span>Password's strength = {{passComponent.strength}} %100</span>\r\n    </div>\r\n\r\n  </mat-card-content>\r\n</mat-card>",
                animations: [
                    // nice stagger effect when showing existing elements
                    trigger('list', [
                        transition(':enter', [
                            // child animation selector + stagger
                            query('@items', stagger(300, animateChild()))
                        ]),
                    ]),
                    trigger('items', [
                        // cubic-bezier for a tiny bouncing feel
                        transition(':enter', [
                            style({ transform: 'scale(0.5)', opacity: 0 }),
                            animate('1s cubic-bezier(.8,-0.6,0.2,1.5)', style({ transform: 'scale(1)', opacity: 1 }))
                        ]),
                        transition(':leave', [
                            style({ transform: 'scale(1)', opacity: 1, height: '*' }),
                            animate('1s cubic-bezier(.8,-0.6,0.2,1.5)', style({ transform: 'scale(0.5)', opacity: 0, height: '0px', margin: '0px' }))
                        ]),
                    ]),
                    trigger('positiveState', [
                        transition(':enter', [
                            style({ 'backface-visibility': 'visible' }),
                            animate('{{ timing }}s {{ delay }}s ease-in', keyframes([
                                style({
                                    opacity: 0,
                                    transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 90deg)',
                                    offset: 0,
                                }),
                                style({
                                    opacity: 1,
                                    transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -20deg)',
                                    offset: 0.4,
                                }),
                                style({
                                    transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 10deg)',
                                    offset: 0.6,
                                }),
                                style({
                                    transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -5deg)',
                                    offset: 0.8,
                                }),
                                style({
                                    transform: 'perspective(400px) rotate3d(0, 0, 0, 0)',
                                    offset: 1,
                                }),
                            ])),
                        ], { params: { timing: 1, delay: 0, rotateX: 1, rotateY: 0 } }),
                    ]),
                    trigger('negativeState', [
                        transition(':enter', useAnimation(shake)),
                    ]),
                ],
                styles: ["mat-card{flex:1 1 0;flex-direction:row;place-content:stretch center}mat-card,mat-card mat-card-content{align-items:stretch;box-sizing:border-box;display:flex}mat-card mat-card-content{flex-direction:column;max-width:100%;place-content:stretch flex-start}mat-card mat-card-content mat-icon{margin-right:10px}mat-card mat-card-content .info-row{align-items:center;box-sizing:border-box;display:flex;flex-direction:row}"]
            },] }
];
MatPasswordStrengthInfoComponent.propDecorators = {
    passComponent: [{ type: Input }],
    enableScoreInfo: [{ type: Input }],
    lowerCaseCriteriaMsg: [{ type: Input }],
    upperCaseCriteriaMsg: [{ type: Input }],
    digitsCriteriaMsg: [{ type: Input }],
    specialCharsCriteriaMsg: [{ type: Input }],
    customCharsCriteriaMsg: [{ type: Input }],
    minCharsCriteriaMsg: [{ type: Input }],
    matIconDone: [{ type: Input }],
    matIconError: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXBhc3N3b3JkLXN0cmVuZ3RoLWluZm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZXh0ZW5zaW9ucy9wYXNzd29yZC1zdHJlbmd0aC9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L21hdC1wYXNzd29yZC1zdHJlbmd0aC1pbmZvL21hdC1wYXNzd29yZC1zdHJlbmd0aC1pbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUV2RCxPQUFPLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUMvSCxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUF1RTdDLE1BQU0sT0FBTyxnQ0FBZ0M7SUFyRTdDO1FBMkVFLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBR3hCLHlCQUFvQixHQUFHLHVDQUF1QyxDQUFDO1FBRy9ELHlCQUFvQixHQUFHLHVDQUF1QyxDQUFDO1FBRy9ELHNCQUFpQixHQUFHLHVDQUF1QyxDQUFDO1FBRzVELDRCQUF1QixHQUFHLHlDQUF5QyxDQUFDO1FBR3BFLDJCQUFzQixHQUFHLHdDQUF3QyxDQUFDO1FBTWxFLGdCQUFXLEdBQUcsTUFBTSxDQUFDO1FBR3JCLGlCQUFZLEdBQUcsT0FBTyxDQUFDO0lBUXpCLENBQUM7SUFOQyxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM3QixJQUFJLENBQUMsbUJBQW1CLEdBQUcscUJBQXFCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxhQUFhLENBQUE7U0FDcEY7SUFDSCxDQUFDOzs7WUF6R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLHlwSEFBMEQ7Z0JBRTFELFVBQVUsRUFBRTtvQkFDVixxREFBcUQ7b0JBQ3JELE9BQU8sQ0FBQyxNQUFNLEVBQUU7d0JBQ2QsVUFBVSxDQUFDLFFBQVEsRUFBRTs0QkFDbkIscUNBQXFDOzRCQUNyQyxLQUFLLENBQUMsUUFBUSxFQUNaLE9BQU8sQ0FBQyxHQUFHLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FDN0I7eUJBQ0YsQ0FBQztxQkFDSCxDQUFDO29CQUNGLE9BQU8sQ0FBQyxPQUFPLEVBQUU7d0JBQ2Ysd0NBQXdDO3dCQUN4QyxVQUFVLENBQUMsUUFBUSxFQUFFOzRCQUNuQixLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQzs0QkFDNUMsT0FBTyxDQUFDLGtDQUFrQyxFQUN4QyxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO3lCQUM5QyxDQUFDO3dCQUNGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7NEJBQ25CLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUM7NEJBQ3ZELE9BQU8sQ0FBQyxrQ0FBa0MsRUFDeEMsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7eUJBQzlFLENBQUM7cUJBQ0gsQ0FBQztvQkFDRixPQUFPLENBQUMsZUFBZSxFQUFFO3dCQUN2QixVQUFVLENBQUMsUUFBUSxFQUFFOzRCQUNuQixLQUFLLENBQUMsRUFBQyxxQkFBcUIsRUFBRSxTQUFTLEVBQUMsQ0FBQzs0QkFDekMsT0FBTyxDQUNMLG9DQUFvQyxFQUNwQyxTQUFTLENBQUM7Z0NBQ1IsS0FBSyxDQUFDO29DQUNKLE9BQU8sRUFBRSxDQUFDO29DQUNWLFNBQVMsRUFDUCxxRUFBcUU7b0NBQ3ZFLE1BQU0sRUFBRSxDQUFDO2lDQUNWLENBQUM7Z0NBQ0YsS0FBSyxDQUFDO29DQUNKLE9BQU8sRUFBRSxDQUFDO29DQUNWLFNBQVMsRUFDUCxzRUFBc0U7b0NBQ3hFLE1BQU0sRUFBRSxHQUFHO2lDQUNaLENBQUM7Z0NBQ0YsS0FBSyxDQUFDO29DQUNKLFNBQVMsRUFDUCxxRUFBcUU7b0NBQ3ZFLE1BQU0sRUFBRSxHQUFHO2lDQUNaLENBQUM7Z0NBQ0YsS0FBSyxDQUFDO29DQUNKLFNBQVMsRUFDUCxxRUFBcUU7b0NBQ3ZFLE1BQU0sRUFBRSxHQUFHO2lDQUNaLENBQUM7Z0NBQ0YsS0FBSyxDQUFDO29DQUNKLFNBQVMsRUFBRSx5Q0FBeUM7b0NBQ3BELE1BQU0sRUFBRSxDQUFDO2lDQUNWLENBQUM7NkJBQ0gsQ0FBQyxDQUNIO3lCQUNGLEVBQUUsRUFBQyxNQUFNLEVBQUUsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLEVBQUMsQ0FBQztxQkFDNUQsQ0FBQztvQkFDRixPQUFPLENBQUMsZUFBZSxFQUFFO3dCQUN2QixVQUFVLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDMUMsQ0FBQztpQkFDSDs7YUFDRjs7OzRCQUdFLEtBQUs7OEJBR0wsS0FBSzttQ0FHTCxLQUFLO21DQUdMLEtBQUs7Z0NBR0wsS0FBSztzQ0FHTCxLQUFLO3FDQUdMLEtBQUs7a0NBR0wsS0FBSzswQkFHTCxLQUFLOzJCQUdMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TWF0UGFzc3dvcmRTdHJlbmd0aENvbXBvbmVudH0gZnJvbSAnLi4vbWF0LXBhc3N3b3JkLXN0cmVuZ3RoL21hdC1wYXNzd29yZC1zdHJlbmd0aC5jb21wb25lbnQnO1xyXG5pbXBvcnQge2FuaW1hdGUsIGFuaW1hdGVDaGlsZCwga2V5ZnJhbWVzLCBxdWVyeSwgc3RhZ2dlciwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIsIHVzZUFuaW1hdGlvbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7c2hha2V9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMvaW5kZXgnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtYXQtcGFzc3dvcmQtc3RyZW5ndGgtaW5mbycsXHJcbiAgZXhwb3J0QXM6ICdtYXRQYXNzd29yZFN0cmVuZ3RoSW5mbycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21hdC1wYXNzd29yZC1zdHJlbmd0aC1pbmZvLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tYXQtcGFzc3dvcmQtc3RyZW5ndGgtaW5mby5jb21wb25lbnQuc2NzcyddLFxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIC8vIG5pY2Ugc3RhZ2dlciBlZmZlY3Qgd2hlbiBzaG93aW5nIGV4aXN0aW5nIGVsZW1lbnRzXHJcbiAgICB0cmlnZ2VyKCdsaXN0JywgW1xyXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXHJcbiAgICAgICAgLy8gY2hpbGQgYW5pbWF0aW9uIHNlbGVjdG9yICsgc3RhZ2dlclxyXG4gICAgICAgIHF1ZXJ5KCdAaXRlbXMnLFxyXG4gICAgICAgICAgc3RhZ2dlcigzMDAsIGFuaW1hdGVDaGlsZCgpKVxyXG4gICAgICAgIClcclxuICAgICAgXSksXHJcbiAgICBdKSxcclxuICAgIHRyaWdnZXIoJ2l0ZW1zJywgW1xyXG4gICAgICAvLyBjdWJpYy1iZXppZXIgZm9yIGEgdGlueSBib3VuY2luZyBmZWVsXHJcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcclxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2NhbGUoMC41KScsIG9wYWNpdHk6IDB9KSxcclxuICAgICAgICBhbmltYXRlKCcxcyBjdWJpYy1iZXppZXIoLjgsLTAuNiwwLjIsMS41KScsXHJcbiAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2NhbGUoMSknLCBvcGFjaXR5OiAxfSkpXHJcbiAgICAgIF0pLFxyXG4gICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXHJcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NjYWxlKDEpJywgb3BhY2l0eTogMSwgaGVpZ2h0OiAnKid9KSxcclxuICAgICAgICBhbmltYXRlKCcxcyBjdWJpYy1iZXppZXIoLjgsLTAuNiwwLjIsMS41KScsXHJcbiAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2NhbGUoMC41KScsIG9wYWNpdHk6IDAsIGhlaWdodDogJzBweCcsIG1hcmdpbjogJzBweCd9KSlcclxuICAgICAgXSksXHJcbiAgICBdKSxcclxuICAgIHRyaWdnZXIoJ3Bvc2l0aXZlU3RhdGUnLCBbXHJcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcclxuICAgICAgICBzdHlsZSh7J2JhY2tmYWNlLXZpc2liaWxpdHknOiAndmlzaWJsZSd9KSxcclxuICAgICAgICBhbmltYXRlKFxyXG4gICAgICAgICAgJ3t7IHRpbWluZyB9fXMge3sgZGVsYXkgfX1zIGVhc2UtaW4nLFxyXG4gICAgICAgICAga2V5ZnJhbWVzKFtcclxuICAgICAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOlxyXG4gICAgICAgICAgICAgICAgJ3BlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCh7eyByb3RhdGVYIH19LCB7eyByb3RhdGVZIH19LCAwLCA5MGRlZyknLFxyXG4gICAgICAgICAgICAgIG9mZnNldDogMCxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTpcclxuICAgICAgICAgICAgICAgICdwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2Qoe3sgcm90YXRlWCB9fSwge3sgcm90YXRlWSB9fSwgMCwgLTIwZGVnKScsXHJcbiAgICAgICAgICAgICAgb2Zmc2V0OiAwLjQsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOlxyXG4gICAgICAgICAgICAgICAgJ3BlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCh7eyByb3RhdGVYIH19LCB7eyByb3RhdGVZIH19LCAwLCAxMGRlZyknLFxyXG4gICAgICAgICAgICAgIG9mZnNldDogMC42LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTpcclxuICAgICAgICAgICAgICAgICdwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2Qoe3sgcm90YXRlWCB9fSwge3sgcm90YXRlWSB9fSwgMCwgLTVkZWcpJyxcclxuICAgICAgICAgICAgICBvZmZzZXQ6IDAuOCxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMCwgMCwgMCknLFxyXG4gICAgICAgICAgICAgIG9mZnNldDogMSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICBdKVxyXG4gICAgICAgICksXHJcbiAgICAgIF0sIHtwYXJhbXM6IHt0aW1pbmc6IDEsIGRlbGF5OiAwLCByb3RhdGVYOiAxLCByb3RhdGVZOiAwfX0pLFxyXG4gICAgXSksXHJcbiAgICB0cmlnZ2VyKCduZWdhdGl2ZVN0YXRlJywgW1xyXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCB1c2VBbmltYXRpb24oc2hha2UpKSxcclxuICAgIF0pLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRQYXNzd29yZFN0cmVuZ3RoSW5mb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcGFzc0NvbXBvbmVudDogTWF0UGFzc3dvcmRTdHJlbmd0aENvbXBvbmVudDtcclxuXHJcbiAgQElucHV0KClcclxuICBlbmFibGVTY29yZUluZm8gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBsb3dlckNhc2VDcml0ZXJpYU1zZyA9ICdjb250YWlucyBhdCBsZWFzdCBvbmUgbG93ZXIgY2hhcmFjdGVyJztcclxuXHJcbiAgQElucHV0KClcclxuICB1cHBlckNhc2VDcml0ZXJpYU1zZyA9ICdjb250YWlucyBhdCBsZWFzdCBvbmUgdXBwZXIgY2hhcmFjdGVyJztcclxuXHJcbiAgQElucHV0KClcclxuICBkaWdpdHNDcml0ZXJpYU1zZyA9ICdjb250YWlucyBhdCBsZWFzdCBvbmUgZGlnaXQgY2hhcmFjdGVyJztcclxuXHJcbiAgQElucHV0KClcclxuICBzcGVjaWFsQ2hhcnNDcml0ZXJpYU1zZyA9ICdjb250YWlucyBhdCBsZWFzdCBvbmUgc3BlY2lhbCBjaGFyYWN0ZXInO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGN1c3RvbUNoYXJzQ3JpdGVyaWFNc2cgPSAnY29udGFpbnMgYXQgbGVhc3Qgb25lIGN1c3RvbSBjaGFyYWN0ZXInO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG1pbkNoYXJzQ3JpdGVyaWFNc2c6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBtYXRJY29uRG9uZSA9ICdkb25lJztcclxuXHJcbiAgQElucHV0KClcclxuICBtYXRJY29uRXJyb3IgPSAnZXJyb3InO1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5taW5DaGFyc0NyaXRlcmlhTXNnKSB7XHJcbiAgICAgIHRoaXMubWluQ2hhcnNDcml0ZXJpYU1zZyA9IGBjb250YWlucyBhdCBsZWFzdCAke3RoaXMucGFzc0NvbXBvbmVudC5taW59IGNoYXJhY3RlcnNgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=