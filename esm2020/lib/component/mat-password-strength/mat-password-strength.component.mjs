import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Colors, Criteria } from '../../enum';
import { MatPasswordStrengthValidator } from '../../validator';
import { RegExpValidator } from '../../validator/regexp.class';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/progress-bar";
export class MatPasswordStrengthComponent {
    constructor() {
        this.enableLengthRule = true;
        this.enableLowerCaseLetterRule = true;
        this.enableUpperCaseLetterRule = true;
        this.enableDigitRule = true;
        this.enableSpecialCharRule = true;
        this.min = 8;
        this.max = 30;
        this.warnThreshold = 21;
        this.accentThreshold = 81;
        this.onStrengthChanged = new EventEmitter();
        this.criteriaMap = new Map();
        // TO ACCESS VIA CONTENT CHILD
        this.passwordFormControl = new FormControl();
        this.passwordConfirmationFormControl = new FormControl();
        this.validatorsArray = [];
        this.matPasswordStrengthValidator = new MatPasswordStrengthValidator();
        this._strength = 0;
        this.propagateChange = (_) => {
        };
    }
    get strength() {
        return this._strength ? this._strength : 0;
    }
    get color() {
        if (this._strength < this.warnThreshold) {
            return Colors.warn;
        }
        else if (this._strength < this.accentThreshold) {
            return Colors.accent;
        }
        else {
            return Colors.primary;
        }
    }
    ngOnInit() {
        this.setRulesAndValidators();
    }
    ngOnChanges(changes) {
        if ((changes.externalError && changes.externalError.firstChange) || changes.password.isFirstChange()) {
            return;
        }
        else if (changes.externalError && changes.externalError.currentValue) {
            this._color = Colors.warn;
            return;
        }
        else if (changes.password.previousValue === changes.password.currentValue && !changes.password.firstChange) {
            this.calculatePasswordStrength();
        }
        else {
            this.password && this.password.length > 0 ?
                this.calculatePasswordStrength() : this.reset();
        }
    }
    parseCustomValidatorsRegex(value = this.customValidator) {
        if (this.customValidator instanceof RegExp) {
            return this.customValidator;
        }
        else if (typeof this.customValidator === 'string') {
            return RegExp(this.customValidator);
        }
    }
    setRulesAndValidators() {
        this.validatorsArray = [];
        this.criteriaMap = new Map();
        this.passwordConfirmationFormControl
            .setValidators(Validators.compose([
            Validators.required, this.matPasswordStrengthValidator.confirm(this.password)
        ]));
        this.validatorsArray.push(Validators.required);
        if (this.enableLengthRule) {
            this.criteriaMap.set(Criteria.at_least_eight_chars, RegExp(`^.{${this.min},${this.max}}$`));
            this.validatorsArray.push(Validators.minLength(this.min));
            this.validatorsArray.push(Validators.maxLength(this.max));
        }
        if (this.enableLowerCaseLetterRule) {
            this.criteriaMap.set(Criteria.at_least_one_lower_case_char, RegExpValidator.lowerCase);
            this.validatorsArray.push(Validators.pattern(RegExpValidator.lowerCase));
        }
        if (this.enableUpperCaseLetterRule) {
            this.criteriaMap.set(Criteria.at_least_one_upper_case_char, RegExpValidator.upperCase);
            this.validatorsArray.push(Validators.pattern(RegExpValidator.upperCase));
        }
        if (this.enableDigitRule) {
            this.criteriaMap.set(Criteria.at_least_one_digit_char, RegExpValidator.digit);
            this.validatorsArray.push(Validators.pattern(RegExpValidator.digit));
        }
        if (this.enableSpecialCharRule) {
            this.criteriaMap.set(Criteria.at_least_one_special_char, RegExpValidator.specialChar);
            this.validatorsArray.push(Validators.pattern(RegExpValidator.specialChar));
        }
        if (this.customValidator) {
            this.criteriaMap.set(Criteria.at_custom_chars, this.parseCustomValidatorsRegex());
            this.validatorsArray.push(Validators.pattern(this.parseCustomValidatorsRegex()));
        }
        this.criteriaMap.forEach((value, key) => {
            this.validatorsArray.push(this.matPasswordStrengthValidator.validate(key, value));
        });
        this.passwordFormControl.setValidators(Validators.compose([...this.validatorsArray]));
        this.Validators = Validators.compose([...this.validatorsArray]);
    }
    calculatePasswordStrength() {
        const requirements = [];
        const unit = 100 / this.criteriaMap.size;
        // console.log('this.criteriaMap.size = ', this.criteriaMap.size);
        // console.log('unit = ', unit);
        requirements.push(this.enableLengthRule ? this._containAtLeastMinChars() : false, this.enableLowerCaseLetterRule ? this._containAtLeastOneLowerCaseLetter() : false, this.enableUpperCaseLetterRule ? this._containAtLeastOneUpperCaseLetter() : false, this.enableDigitRule ? this._containAtLeastOneDigit() : false, this.enableSpecialCharRule ? this._containAtLeastOneSpecialChar() : false, this.customValidator ? this._containCustomChars() : false);
        this._strength = requirements.filter(v => v).length * unit;
        this.propagateChange(this.strength);
        // console.log('length = ', this._strength / unit);
        this.onStrengthChanged.emit(this.strength);
        this.setRulesAndValidators();
    }
    reset() {
        this._strength = 0;
        this.containAtLeastMinChars =
            this.containAtLeastOneLowerCaseLetter =
                this.containAtLeastOneUpperCaseLetter =
                    this.containAtLeastOneDigit =
                        this.containAtCustomChars =
                            this.containAtLeastOneSpecialChar = false;
    }
    writeValue(obj) {
        if (obj) {
            this._strength = obj;
        }
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        // throw new Error("Method not implemented.");
    }
    setDisabledState(isDisabled) {
        // throw new Error("Method not implemented.");
    }
    _containAtLeastMinChars() {
        this.containAtLeastMinChars = this.password.length >= this.min;
        return this.containAtLeastMinChars;
    }
    _containAtLeastOneLowerCaseLetter() {
        this.containAtLeastOneLowerCaseLetter =
            this.criteriaMap
                .get(Criteria.at_least_one_lower_case_char)
                .test(this.password);
        return this.containAtLeastOneLowerCaseLetter;
    }
    _containAtLeastOneUpperCaseLetter() {
        this.containAtLeastOneUpperCaseLetter =
            this.criteriaMap
                .get(Criteria.at_least_one_upper_case_char)
                .test(this.password);
        return this.containAtLeastOneUpperCaseLetter;
    }
    _containAtLeastOneDigit() {
        this.containAtLeastOneDigit =
            this.criteriaMap
                .get(Criteria.at_least_one_digit_char)
                .test(this.password);
        return this.containAtLeastOneDigit;
    }
    _containAtLeastOneSpecialChar() {
        this.containAtLeastOneSpecialChar =
            this.criteriaMap
                .get(Criteria.at_least_one_special_char)
                .test(this.password);
        return this.containAtLeastOneSpecialChar;
    }
    _containCustomChars() {
        this.containAtCustomChars =
            this.criteriaMap
                .get(Criteria.at_custom_chars)
                .test(this.password);
        return this.containAtCustomChars;
    }
    ngAfterContentChecked() {
        if (this.password) {
            this.calculatePasswordStrength();
        }
    }
}
MatPasswordStrengthComponent.ɵfac = function MatPasswordStrengthComponent_Factory(t) { return new (t || MatPasswordStrengthComponent)(); };
MatPasswordStrengthComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MatPasswordStrengthComponent, selectors: [["mat-password-strength"]], inputs: { password: "password", externalError: "externalError", enableLengthRule: "enableLengthRule", enableLowerCaseLetterRule: "enableLowerCaseLetterRule", enableUpperCaseLetterRule: "enableUpperCaseLetterRule", enableDigitRule: "enableDigitRule", enableSpecialCharRule: "enableSpecialCharRule", min: "min", max: "max", customValidator: "customValidator", warnThreshold: "warnThreshold", accentThreshold: "accentThreshold" }, outputs: { onStrengthChanged: "onStrengthChanged" }, exportAs: ["matPasswordStrength"], features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => MatPasswordStrengthComponent),
                multi: true
            }
        ]), i0.ɵɵNgOnChangesFeature], decls: 1, vars: 2, consts: [["mode", "determinate", 3, "color", "value"]], template: function MatPasswordStrengthComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-progress-bar", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("color", ctx.color)("value", ctx.strength);
    } }, directives: [i1.MatProgressBar], styles: [".green   [_nghost-%COMP%]  .mat-progress-bar.mat-primary .mat-progress-bar-fill:after{background-color:#43a047}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatPasswordStrengthComponent, [{
        type: Component,
        args: [{ selector: 'mat-password-strength', exportAs: 'matPasswordStrength', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => MatPasswordStrengthComponent),
                        multi: true
                    }
                ], template: "<mat-progress-bar [color]=\"color\"\r\n                  [value]=\"strength\"\r\n                  mode=\"determinate\">\r\n</mat-progress-bar>\r\n", styles: [".green :host::ng-deep .mat-progress-bar.mat-primary .mat-progress-bar-fill:after{background-color:#43a047}\n"] }]
    }], null, { password: [{
            type: Input
        }], externalError: [{
            type: Input
        }], enableLengthRule: [{
            type: Input
        }], enableLowerCaseLetterRule: [{
            type: Input
        }], enableUpperCaseLetterRule: [{
            type: Input
        }], enableDigitRule: [{
            type: Input
        }], enableSpecialCharRule: [{
            type: Input
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], customValidator: [{
            type: Input
        }], warnThreshold: [{
            type: Input
        }], accentThreshold: [{
            type: Input
        }], onStrengthChanged: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXBhc3N3b3JkLXN0cmVuZ3RoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZXh0ZW5zaW9ucy9wYXNzd29yZC1zdHJlbmd0aC9zcmMvbGliL2NvbXBvbmVudC9tYXQtcGFzc3dvcmQtc3RyZW5ndGgvbWF0LXBhc3N3b3JkLXN0cmVuZ3RoLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZXh0ZW5zaW9ucy9wYXNzd29yZC1zdHJlbmd0aC9zcmMvbGliL2NvbXBvbmVudC9tYXQtcGFzc3dvcmQtc3RyZW5ndGgvbWF0LXBhc3N3b3JkLXN0cmVuZ3RoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUdMLE1BQU0sRUFFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXVCLFdBQVcsRUFBRSxpQkFBaUIsRUFBZSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RyxPQUFPLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUM1QyxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sOEJBQThCLENBQUM7OztBQWtCN0QsTUFBTSxPQUFPLDRCQUE0QjtJQWR6QztRQW1CVyxxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDeEIsOEJBQXlCLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLDhCQUF5QixHQUFHLElBQUksQ0FBQztRQUNqQyxvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QiwwQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFFN0IsUUFBRyxHQUFH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Z0JBQzNELEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjtRQy9CSCxzQ0FHbUI7O1FBSEQsaUNBQWUsdUJBQUE7O3VGRGlDcEIsNEJBQTRCO2NBZHhDLFNBQVM7MkJBQ0UsdUJBQXVCLFlBQ3ZCLHFCQUFxQixtQkFHZCx1QkFBdUIsQ0FBQyxNQUFNLGFBQ3BDO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLDZCQUE2QixDQUFDO3dCQUMzRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjtnQkFJUSxRQUFRO2tCQUFoQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUVHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLHlCQUF5QjtrQkFBakMsS0FBSztZQUNHLHlCQUF5QjtrQkFBakMsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxxQkFBcUI7a0JBQTdCLEtBQUs7WUFFRyxHQUFHO2tCQUFYLEtBQUs7WUFDRyxHQUFHO2tCQUFYLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBRUcsYUFBYTtrQkFBckIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFHTixpQkFBaUI7a0JBRGhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wsIE5HX1ZBTFVFX0FDQ0VTU09SLCBWYWxpZGF0b3JGbiwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge0NvbG9ycywgQ3JpdGVyaWF9IGZyb20gJy4uLy4uL2VudW0nO1xyXG5pbXBvcnQge01hdFBhc3N3b3JkU3RyZW5ndGhWYWxpZGF0b3J9IGZyb20gJy4uLy4uL3ZhbGlkYXRvcic7XHJcbmltcG9ydCB7UmVnRXhwVmFsaWRhdG9yfSBmcm9tICcuLi8uLi92YWxpZGF0b3IvcmVnZXhwLmNsYXNzJztcclxuaW1wb3J0IHtUaGVtZVBhbGV0dGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWF0LXBhc3N3b3JkLXN0cmVuZ3RoJyxcclxuICBleHBvcnRBczogJ21hdFBhc3N3b3JkU3RyZW5ndGgnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXQtcGFzc3dvcmQtc3RyZW5ndGguY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21hdC1wYXNzd29yZC1zdHJlbmd0aC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWF0UGFzc3dvcmRTdHJlbmd0aENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0UGFzc3dvcmRTdHJlbmd0aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRDaGVja2VkLCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gIEBJbnB1dCgpIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZXh0ZXJuYWxFcnJvcjogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCkgZW5hYmxlTGVuZ3RoUnVsZSA9IHRydWU7XHJcbiAgQElucHV0KCkgZW5hYmxlTG93ZXJDYXNlTGV0dGVyUnVsZSA9IHRydWU7XHJcbiAgQElucHV0KCkgZW5hYmxlVXBwZXJDYXNlTGV0dGVyUnVsZSA9IHRydWU7XHJcbiAgQElucHV0KCkgZW5hYmxlRGlnaXRSdWxlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBlbmFibGVTcGVjaWFsQ2hhclJ1bGUgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKSBtaW4gPSA4O1xyXG4gIEBJbnB1dCgpIG1heCA9IDMwO1xyXG4gIEBJbnB1dCgpIGN1c3RvbVZhbGlkYXRvcjogUmVnRXhwO1xyXG5cclxuICBASW5wdXQoKSB3YXJuVGhyZXNob2xkID0gMjE7XHJcbiAgQElucHV0KCkgYWNjZW50VGhyZXNob2xkID0gODE7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIG9uU3RyZW5ndGhDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY3JpdGVyaWFNYXAgPSBuZXcgTWFwPENyaXRlcmlhLCBSZWdFeHA+KCk7XHJcblxyXG4gIGNvbnRhaW5BdExlYXN0TWluQ2hhcnM6IGJvb2xlYW47XHJcbiAgY29udGFpbkF0TGVhc3RPbmVMb3dlckNhc2VMZXR0ZXI6IGJvb2xlYW47XHJcbiAgY29udGFpbkF0TGVhc3RPbmVVcHBlckNhc2VMZXR0ZXI6IGJvb2xlYW47XHJcbiAgY29udGFpbkF0TGVhc3RPbmVEaWdpdDogYm9vbGVhbjtcclxuICBjb250YWluQXRMZWFzdE9uZVNwZWNpYWxDaGFyOiBib29sZWFuO1xyXG4gIGNvbnRhaW5BdEN1c3RvbUNoYXJzOiBib29sZWFuO1xyXG5cclxuICAvLyBUTyBBQ0NFU1MgVklBIENPTlRFTlQgQ0hJTERcclxuICBwYXNzd29yZEZvcm1Db250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xyXG4gIHBhc3N3b3JkQ29uZmlybWF0aW9uRm9ybUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XHJcblxyXG4gIHZhbGlkYXRvcnNBcnJheTogVmFsaWRhdG9yRm5bXSA9IFtdO1xyXG4gIFZhbGlkYXRvcnM6IFZhbGlkYXRvckZuO1xyXG4gIG1hdFBhc3N3b3JkU3RyZW5ndGhWYWxpZGF0b3IgPSBuZXcgTWF0UGFzc3dvcmRTdHJlbmd0aFZhbGlkYXRvcigpO1xyXG5cclxuICBwcml2YXRlIF9zdHJlbmd0aCA9IDA7XHJcblxyXG4gIGdldCBzdHJlbmd0aCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0cmVuZ3RoID8gdGhpcy5fc3RyZW5ndGggOiAwO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY29sb3I6IFRoZW1lUGFsZXR0ZTtcclxuXHJcbiAgZ2V0IGNvbG9yKCk6IFRoZW1lUGFsZXR0ZSB7XHJcblxyXG4gICAgaWYgKHRoaXMuX3N0cmVuZ3RoIDwgdGhpcy53YXJuVGhyZXNob2xkKSB7XHJcbiAgICAgIHJldHVybiBDb2xvcnMud2FybjtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5fc3RyZW5ndGggPCB0aGlzLmFjY2VudFRocmVzaG9sZCkge1xyXG4gICAgICByZXR1cm4gQ29sb3JzLmFjY2VudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBDb2xvcnMucHJpbWFyeTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHtcclxuICB9O1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0UnVsZXNBbmRWYWxpZGF0b3JzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoKGNoYW5nZXMuZXh0ZXJuYWxFcnJvciAmJiBjaGFuZ2VzLmV4dGVybmFsRXJyb3IuZmlyc3RDaGFuZ2UpIHx8IGNoYW5nZXMucGFzc3dvcmQuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSBpZiAoY2hhbmdlcy5leHRlcm5hbEVycm9yICYmIGNoYW5nZXMuZXh0ZXJuYWxFcnJvci5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy5fY29sb3IgPSBDb2xvcnMud2FybjtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIGlmIChjaGFuZ2VzLnBhc3N3b3JkLnByZXZpb3VzVmFsdWUgPT09IGNoYW5nZXMucGFzc3dvcmQuY3VycmVudFZhbHVlICYmICFjaGFuZ2VzLnBhc3N3b3JkLmZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlUGFzc3dvcmRTdHJlbmd0aCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wYXNzd29yZCAmJiB0aGlzLnBhc3N3b3JkLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUGFzc3dvcmRTdHJlbmd0aCgpIDogdGhpcy5yZXNldCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcGFyc2VDdXN0b21WYWxpZGF0b3JzUmVnZXgodmFsdWU6IHN0cmluZyB8IFJlZ0V4cCA9IHRoaXMuY3VzdG9tVmFsaWRhdG9yKSB7XHJcbiAgICBpZiAodGhpcy5jdXN0b21WYWxpZGF0b3IgaW5zdGFuY2VvZiBSZWdFeHApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tVmFsaWRhdG9yO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5jdXN0b21WYWxpZGF0b3IgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiBSZWdFeHAodGhpcy5jdXN0b21WYWxpZGF0b3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0UnVsZXNBbmRWYWxpZGF0b3JzKCk6IHZvaWQge1xyXG4gICAgdGhpcy52YWxpZGF0b3JzQXJyYXkgPSBbXTtcclxuICAgIHRoaXMuY3JpdGVyaWFNYXAgPSBuZXcgTWFwPENyaXRlcmlhLCBSZWdFeHA+KCk7XHJcbiAgICB0aGlzLnBhc3N3b3JkQ29uZmlybWF0aW9uRm9ybUNvbnRyb2xcclxuICAgICAgLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLCB0aGlzLm1hdFBhc3N3b3JkU3RyZW5ndGhWYWxpZGF0b3IuY29uZmlybSh0aGlzLnBhc3N3b3JkKVxyXG4gICAgICBdKSk7XHJcbiAgICB0aGlzLnZhbGlkYXRvcnNBcnJheS5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG4gICAgaWYgKHRoaXMuZW5hYmxlTGVuZ3RoUnVsZSkge1xyXG4gICAgICB0aGlzLmNyaXRlcmlhTWFwLnNldChDcml0ZXJpYS5hdF9sZWFzdF9laWdodF9jaGFycywgUmVnRXhwKGBeLnske3RoaXMubWlufSwke3RoaXMubWF4fX0kYCkpO1xyXG4gICAgICB0aGlzLnZhbGlkYXRvcnNBcnJheS5wdXNoKFZhbGlkYXRvcnMubWluTGVuZ3RoKHRoaXMubWluKSk7XHJcbiAgICAgIHRoaXMudmFsaWRhdG9yc0FycmF5LnB1c2goVmFsaWRhdG9ycy5tYXhMZW5ndGgodGhpcy5tYXgpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmVuYWJsZUxvd2VyQ2FzZUxldHRlclJ1bGUpIHtcclxuICAgICAgdGhpcy5jcml0ZXJpYU1hcC5zZXQoQ3JpdGVyaWEuYXRfbGVhc3Rfb25lX2xvd2VyX2Nhc2VfY2hhciwgUmVnRXhwVmFsaWRhdG9yLmxvd2VyQ2FzZSk7XHJcbiAgICAgIHRoaXMudmFsaWRhdG9yc0FycmF5LnB1c2goVmFsaWRhdG9ycy5wYXR0ZXJuKFJlZ0V4cFZhbGlkYXRvci5sb3dlckNhc2UpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmVuYWJsZVVwcGVyQ2FzZUxldHRlclJ1bGUpIHtcclxuICAgICAgdGhpcy5jcml0ZXJpYU1hcC5zZXQoQ3JpdGVyaWEuYXRfbGVhc3Rfb25lX3VwcGVyX2Nhc2VfY2hhciwgUmVnRXhwVmFsaWRhdG9yLnVwcGVyQ2FzZSk7XHJcbiAgICAgIHRoaXMudmFsaWRhdG9yc0FycmF5LnB1c2goVmFsaWRhdG9ycy5wYXR0ZXJuKFJlZ0V4cFZhbGlkYXRvci51cHBlckNhc2UpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmVuYWJsZURpZ2l0UnVsZSkge1xyXG4gICAgICB0aGlzLmNyaXRlcmlhTWFwLnNldChDcml0ZXJpYS5hdF9sZWFzdF9vbmVfZGlnaXRfY2hhciwgUmVnRXhwVmFsaWRhdG9yLmRpZ2l0KTtcclxuICAgICAgdGhpcy52YWxpZGF0b3JzQXJyYXkucHVzaChWYWxpZGF0b3JzLnBhdHRlcm4oUmVnRXhwVmFsaWRhdG9yLmRpZ2l0KSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5lbmFibGVTcGVjaWFsQ2hhclJ1bGUpIHtcclxuICAgICAgdGhpcy5jcml0ZXJpYU1hcC5zZXQoQ3JpdGVyaWEuYXRfbGVhc3Rfb25lX3NwZWNpYWxfY2hhciwgUmVnRXhwVmFsaWRhdG9yLnNwZWNpYWxDaGFyKTtcclxuICAgICAgdGhpcy52YWxpZGF0b3JzQXJyYXkucHVzaChWYWxpZGF0b3JzLnBhdHRlcm4oUmVnRXhwVmFsaWRhdG9yLnNwZWNpYWxDaGFyKSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jdXN0b21WYWxpZGF0b3IpIHtcclxuICAgICAgdGhpcy5jcml0ZXJpYU1hcC5zZXQoQ3JpdGVyaWEuYXRfY3VzdG9tX2NoYXJzLCB0aGlzLnBhcnNlQ3VzdG9tVmFsaWRhdG9yc1JlZ2V4KCkpO1xyXG4gICAgICB0aGlzLnZhbGlkYXRvcnNBcnJheS5wdXNoKFZhbGlkYXRvcnMucGF0dGVybih0aGlzLnBhcnNlQ3VzdG9tVmFsaWRhdG9yc1JlZ2V4KCkpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNyaXRlcmlhTWFwLmZvckVhY2goKHZhbHVlOiBhbnksIGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHRoaXMudmFsaWRhdG9yc0FycmF5LnB1c2godGhpcy5tYXRQYXNzd29yZFN0cmVuZ3RoVmFsaWRhdG9yLnZhbGlkYXRlKGtleSwgdmFsdWUpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucGFzc3dvcmRGb3JtQ29udHJvbC5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMuY29tcG9zZShbLi4udGhpcy52YWxpZGF0b3JzQXJyYXldKSk7XHJcbiAgICB0aGlzLlZhbGlkYXRvcnMgPSBWYWxpZGF0b3JzLmNvbXBvc2UoWy4uLnRoaXMudmFsaWRhdG9yc0FycmF5XSk7XHJcblxyXG4gIH1cclxuXHJcbiAgY2FsY3VsYXRlUGFzc3dvcmRTdHJlbmd0aCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlcXVpcmVtZW50czogQXJyYXk8Ym9vbGVhbj4gPSBbXTtcclxuICAgIGNvbnN0IHVuaXQgPSAxMDAgLyB0aGlzLmNyaXRlcmlhTWFwLnNpemU7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coJ3RoaXMuY3JpdGVyaWFNYXAuc2l6ZSA9ICcsIHRoaXMuY3JpdGVyaWFNYXAuc2l6ZSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygndW5pdCA9ICcsIHVuaXQpO1xyXG5cclxuICAgIHJlcXVpcmVtZW50cy5wdXNoKFxyXG4gICAgICB0aGlzLmVuYWJsZUxlbmd0aFJ1bGUgPyB0aGlzLl9jb250YWluQXRMZWFzdE1pbkNoYXJzKCkgOiBmYWxzZSxcclxuICAgICAgdGhpcy5lbmFibGVMb3dlckNhc2VMZXR0ZXJSdWxlID8gdGhpcy5fY29udGFpbkF0TGVhc3RPbmVMb3dlckNhc2VMZXR0ZXIoKSA6IGZhbHNlLFxyXG4gICAgICB0aGlzLmVuYWJsZVVwcGVyQ2FzZUxldHRlclJ1bGUgPyB0aGlzLl9jb250YWluQXRMZWFzdE9uZVVwcGVyQ2FzZUxldHRlcigpIDogZmFsc2UsXHJcbiAgICAgIHRoaXMuZW5hYmxlRGlnaXRSdWxlID8gdGhpcy5fY29udGFpbkF0TGVhc3RPbmVEaWdpdCgpIDogZmFsc2UsXHJcbiAgICAgIHRoaXMuZW5hYmxlU3BlY2lhbENoYXJSdWxlID8gdGhpcy5fY29udGFpbkF0TGVhc3RPbmVTcGVjaWFsQ2hhcigpIDogZmFsc2UsXHJcbiAgICAgIHRoaXMuY3VzdG9tVmFsaWRhdG9yID8gdGhpcy5fY29udGFpbkN1c3RvbUNoYXJzKCkgOiBmYWxzZVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLl9zdHJlbmd0aCA9IHJlcXVpcmVtZW50cy5maWx0ZXIodiA9PiB2KS5sZW5ndGggKiB1bml0O1xyXG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5zdHJlbmd0aCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnbGVuZ3RoID0gJywgdGhpcy5fc3RyZW5ndGggLyB1bml0KTtcclxuICAgIHRoaXMub25TdHJlbmd0aENoYW5nZWQuZW1pdCh0aGlzLnN0cmVuZ3RoKTtcclxuICAgIHRoaXMuc2V0UnVsZXNBbmRWYWxpZGF0b3JzKCk7XHJcbiAgfVxyXG5cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMuX3N0cmVuZ3RoID0gMDtcclxuICAgIHRoaXMuY29udGFpbkF0TGVhc3RNaW5DaGFycyA9XHJcbiAgICAgIHRoaXMuY29udGFpbkF0TGVhc3RPbmVMb3dlckNhc2VMZXR0ZXIgPVxyXG4gICAgICAgIHRoaXMuY29udGFpbkF0TGVhc3RPbmVVcHBlckNhc2VMZXR0ZXIgPVxyXG4gICAgICAgICAgdGhpcy5jb250YWluQXRMZWFzdE9uZURpZ2l0ID1cclxuICAgICAgICAgICAgdGhpcy5jb250YWluQXRDdXN0b21DaGFycyA9XHJcbiAgICAgICAgICAgICAgdGhpcy5jb250YWluQXRMZWFzdE9uZVNwZWNpYWxDaGFyID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XHJcbiAgICBpZiAob2JqKSB7XHJcbiAgICAgIHRoaXMuX3N0cmVuZ3RoID0gb2JqO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NvbnRhaW5BdExlYXN0TWluQ2hhcnMoKTogYm9vbGVhbiB7XHJcbiAgICB0aGlzLmNvbnRhaW5BdExlYXN0TWluQ2hhcnMgPSB0aGlzLnBhc3N3b3JkLmxlbmd0aCA+PSB0aGlzLm1pbjtcclxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5BdExlYXN0TWluQ2hhcnM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jb250YWluQXRMZWFzdE9uZUxvd2VyQ2FzZUxldHRlcigpOiBib29sZWFuIHtcclxuICAgIHRoaXMuY29udGFpbkF0TGVhc3RPbmVMb3dlckNhc2VMZXR0ZXIgPVxyXG4gICAgICB0aGlzLmNyaXRlcmlhTWFwXHJcbiAgICAgICAgLmdldChDcml0ZXJpYS5hdF9sZWFzdF9vbmVfbG93ZXJfY2FzZV9jaGFyKVxyXG4gICAgICAgIC50ZXN0KHRoaXMucGFzc3dvcmQpO1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbkF0TGVhc3RPbmVMb3dlckNhc2VMZXR0ZXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jb250YWluQXRMZWFzdE9uZVVwcGVyQ2FzZUxldHRlcigpOiBib29sZWFuIHtcclxuICAgIHRoaXMuY29udGFpbkF0TGVhc3RPbmVVcHBlckNhc2VMZXR0ZXIgPVxyXG4gICAgICB0aGlzLmNyaXRlcmlhTWFwXHJcbiAgICAgICAgLmdldChDcml0ZXJpYS5hdF9sZWFzdF9vbmVfdXBwZXJfY2FzZV9jaGFyKVxyXG4gICAgICAgIC50ZXN0KHRoaXMucGFzc3dvcmQpO1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbkF0TGVhc3RPbmVVcHBlckNhc2VMZXR0ZXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jb250YWluQXRMZWFzdE9uZURpZ2l0KCk6IGJvb2xlYW4ge1xyXG4gICAgdGhpcy5jb250YWluQXRMZWFzdE9uZURpZ2l0ID1cclxuICAgICAgdGhpcy5jcml0ZXJpYU1hcFxyXG4gICAgICAgIC5nZXQoQ3JpdGVyaWEuYXRfbGVhc3Rfb25lX2RpZ2l0X2NoYXIpXHJcbiAgICAgICAgLnRlc3QodGhpcy5wYXNzd29yZCk7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWluQXRMZWFzdE9uZURpZ2l0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY29udGFpbkF0TGVhc3RPbmVTcGVjaWFsQ2hhcigpOiBib29sZWFuIHtcclxuICAgIHRoaXMuY29udGFpbkF0TGVhc3RPbmVTcGVjaWFsQ2hhciA9XHJcbiAgICAgIHRoaXMuY3JpdGVyaWFNYXBcclxuICAgICAgICAuZ2V0KENyaXRlcmlhLmF0X2xlYXN0X29uZV9zcGVjaWFsX2NoYXIpXHJcbiAgICAgICAgLnRlc3QodGhpcy5wYXNzd29yZCk7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWluQXRMZWFzdE9uZVNwZWNpYWxDaGFyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY29udGFpbkN1c3RvbUNoYXJzKCk6IGJvb2xlYW4ge1xyXG4gICAgdGhpcy5jb250YWluQXRDdXN0b21DaGFycyA9XHJcbiAgICAgIHRoaXMuY3JpdGVyaWFNYXBcclxuICAgICAgICAuZ2V0KENyaXRlcmlhLmF0X2N1c3RvbV9jaGFycylcclxuICAgICAgICAudGVzdCh0aGlzLnBhc3N3b3JkKTtcclxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5BdEN1c3RvbUNoYXJzO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGFzc3dvcmQpIHtcclxuICAgICAgdGhpcy5jYWxjdWxhdGVQYXNzd29yZFN0cmVuZ3RoKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxtYXQtcHJvZ3Jlc3MtYmFyIFtjb2xvcl09XCJjb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJzdHJlbmd0aFwiXHJcbiAgICAgICAgICAgICAgICAgIG1vZGU9XCJkZXRlcm1pbmF0ZVwiPlxyXG48L21hdC1wcm9ncmVzcy1iYXI+XHJcbiJdfQ==