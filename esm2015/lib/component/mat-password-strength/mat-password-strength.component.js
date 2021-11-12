import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Colors, Criteria } from '../../enum';
import { MatPasswordStrengthValidator } from '../../validator';
import { RegExpValidator } from '../../validator/regexp.class';
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
            this.pass && this.pass.length > 0 ?
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
            Validators.required, this.matPasswordStrengthValidator.confirm(this.pass)
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
        this.containAtLeastMinChars = this.pass.length >= this.min;
        return this.containAtLeastMinChars;
    }
    _containAtLeastOneLowerCaseLetter() {
        this.containAtLeastOneLowerCaseLetter =
            this.criteriaMap
                .get(Criteria.at_least_one_lower_case_char)
                .test(this.pass);
        return this.containAtLeastOneLowerCaseLetter;
    }
    _containAtLeastOneUpperCaseLetter() {
        this.containAtLeastOneUpperCaseLetter =
            this.criteriaMap
                .get(Criteria.at_least_one_upper_case_char)
                .test(this.pass);
        return this.containAtLeastOneUpperCaseLetter;
    }
    _containAtLeastOneDigit() {
        this.containAtLeastOneDigit =
            this.criteriaMap
                .get(Criteria.at_least_one_digit_char)
                .test(this.pass);
        return this.containAtLeastOneDigit;
    }
    _containAtLeastOneSpecialChar() {
        this.containAtLeastOneSpecialChar =
            this.criteriaMap
                .get(Criteria.at_least_one_special_char)
                .test(this.pass);
        return this.containAtLeastOneSpecialChar;
    }
    _containCustomChars() {
        this.containAtCustomChars =
            this.criteriaMap
                .get(Criteria.at_custom_chars)
                .test(this.pass);
        return this.containAtCustomChars;
    }
    ngAfterContentChecked() {
        if (this.pass) {
            this.calculatePasswordStrength();
        }
    }
}
MatPasswordStrengthComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-password-strength',
                exportAs: 'matPasswordStrength',
                template: "<mat-progress-bar [color]=\"color\"\r\n                  [value]=\"strength\"\r\n                  mode=\"determinate\">\r\n</mat-progress-bar>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => MatPasswordStrengthComponent),
                        multi: true
                    }
                ],
                styles: [".green :host::ng-deep .mat-progress-bar.mat-primary .mat-progress-bar-fill:after{background-color:#43a047}"]
            },] }
];
MatPasswordStrengthComponent.propDecorators = {
    pass: [{ type: Input }],
    externalError: [{ type: Input }],
    enableLengthRule: [{ type: Input }],
    enableLowerCaseLetterRule: [{ type: Input }],
    enableUpperCaseLetterRule: [{ type: Input }],
    enableDigitRule: [{ type: Input }],
    enableSpecialCharRule: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    customValidator: [{ type: Input }],
    warnThreshold: [{ type: Input }],
    accentThreshold: [{ type: Input }],
    onStrengthChanged: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXBhc3N3b3JkLXN0cmVuZ3RoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLW1hdGVyaWFsLWV4dGVuc2lvbnMvcGFzc3dvcmQtc3RyZW5ndGgvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9tYXQtcGFzc3dvcmQtc3RyZW5ndGgvbWF0LXBhc3N3b3JkLXN0cmVuZ3RoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFHTCxNQUFNLEVBRVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF1QixXQUFXLEVBQUUsaUJBQWlCLEVBQWUsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0csT0FBTyxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDNUMsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBa0I3RCxNQUFNLE9BQU8sNEJBQTRCO0lBZHpDO1FBbUJXLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4Qiw4QkFBeUIsR0FBRyxJQUFJLENBQUM7UUFDakMsOEJBQXlCLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLDBCQUFxQixHQUFHLElBQUksQ0FBQztRQUU3QixRQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUdULGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBRzlCLHNCQUFpQixHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTdELGdCQUFXLEdBQUcsSUFBSSxHQUFHLEVBQW9CLENBQUM7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TCxLQUFLO3dDQUNMLEtBQUs7d0NBQ0wsS0FBSzs4QkFDTCxLQUFLO29DQUNMLEtBQUs7a0JBRUwsS0FBSztrQkFDTCxLQUFLOzhCQUNMLEtBQUs7NEJBRUwsS0FBSzs4QkFDTCxLQUFLO2dDQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wsIE5HX1ZBTFVFX0FDQ0VTU09SLCBWYWxpZGF0b3JGbiwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge0NvbG9ycywgQ3JpdGVyaWF9IGZyb20gJy4uLy4uL2VudW0nO1xyXG5pbXBvcnQge01hdFBhc3N3b3JkU3RyZW5ndGhWYWxpZGF0b3J9IGZyb20gJy4uLy4uL3ZhbGlkYXRvcic7XHJcbmltcG9ydCB7UmVnRXhwVmFsaWRhdG9yfSBmcm9tICcuLi8uLi92YWxpZGF0b3IvcmVnZXhwLmNsYXNzJztcclxuaW1wb3J0IHtUaGVtZVBhbGV0dGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWF0LXBhc3N3b3JkLXN0cmVuZ3RoJyxcclxuICBleHBvcnRBczogJ21hdFBhc3N3b3JkU3RyZW5ndGgnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXQtcGFzc3dvcmQtc3RyZW5ndGguY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21hdC1wYXNzd29yZC1zdHJlbmd0aC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWF0UGFzc3dvcmRTdHJlbmd0aENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0UGFzc3dvcmRTdHJlbmd0aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRDaGVja2VkLCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gIEBJbnB1dCgpIHBhc3M6IHN0cmluZztcclxuICBASW5wdXQoKSBleHRlcm5hbEVycm9yOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKSBlbmFibGVMZW5ndGhSdWxlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBlbmFibGVMb3dlckNhc2VMZXR0ZXJSdWxlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBlbmFibGVVcHBlckNhc2VMZXR0ZXJSdWxlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBlbmFibGVEaWdpdFJ1bGUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGVuYWJsZVNwZWNpYWxDaGFyUnVsZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpIG1pbiA9IDg7XHJcbiAgQElucHV0KCkgbWF4ID0gMzA7XHJcbiAgQElucHV0KCkgY3VzdG9tVmFsaWRhdG9yOiBSZWdFeHA7XHJcblxyXG4gIEBJbnB1dCgpIHdhcm5UaHJlc2hvbGQgPSAyMTtcclxuICBASW5wdXQoKSBhY2NlbnRUaHJlc2hvbGQgPSA4MTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgb25TdHJlbmd0aENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjcml0ZXJpYU1hcCA9IG5ldyBNYXA8Q3JpdGVyaWEsIFJlZ0V4cD4oKTtcclxuXHJcbiAgY29udGFpbkF0TGVhc3RNaW5DaGFyczogYm9vbGVhbjtcclxuICBjb250YWluQXRMZWFzdE9uZUxvd2VyQ2FzZUxldHRlcjogYm9vbGVhbjtcclxuICBjb250YWluQXRMZWFzdE9uZVVwcGVyQ2FzZUxldHRlcjogYm9vbGVhbjtcclxuICBjb250YWluQXRMZWFzdE9uZURpZ2l0OiBib29sZWFuO1xyXG4gIGNvbnRhaW5BdExlYXN0T25lU3BlY2lhbENoYXI6IGJvb2xlYW47XHJcbiAgY29udGFpbkF0Q3VzdG9tQ2hhcnM6IGJvb2xlYW47XHJcblxyXG4gIC8vIFRPIEFDQ0VTUyBWSUEgQ09OVEVOVCBDSElMRFxyXG4gIHBhc3N3b3JkRm9ybUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XHJcbiAgcGFzc3dvcmRDb25maXJtYXRpb25Gb3JtQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcclxuXHJcbiAgdmFsaWRhdG9yc0FycmF5OiBWYWxpZGF0b3JGbltdID0gW107XHJcbiAgVmFsaWRhdG9yczogVmFsaWRhdG9yRm47XHJcbiAgbWF0UGFzc3dvcmRTdHJlbmd0aFZhbGlkYXRvciA9IG5ldyBNYXRQYXNzd29yZFN0cmVuZ3RoVmFsaWRhdG9yKCk7XHJcblxyXG4gIHByaXZhdGUgX3N0cmVuZ3RoID0gMDtcclxuXHJcbiAgZ2V0IHN0cmVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3RyZW5ndGggPyB0aGlzLl9zdHJlbmd0aCA6IDA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jb2xvcjogVGhlbWVQYWxldHRlO1xyXG5cclxuICBnZXQgY29sb3IoKTogVGhlbWVQYWxldHRlIHtcclxuXHJcbiAgICBpZiAodGhpcy5fc3RyZW5ndGggPCB0aGlzLndhcm5UaHJlc2hvbGQpIHtcclxuICAgICAgcmV0dXJuIENvbG9ycy53YXJuO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLl9zdHJlbmd0aCA8IHRoaXMuYWNjZW50VGhyZXNob2xkKSB7XHJcbiAgICAgIHJldHVybiBDb2xvcnMuYWNjZW50O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIENvbG9ycy5wcmltYXJ5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvcGFnYXRlQ2hhbmdlID0gKF86IGFueSkgPT4ge1xyXG4gIH07XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRSdWxlc0FuZFZhbGlkYXRvcnMoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmICgoY2hhbmdlcy5leHRlcm5hbEVycm9yICYmIGNoYW5nZXMuZXh0ZXJuYWxFcnJvci5maXJzdENoYW5nZSkgfHwgY2hhbmdlcy5wYXNzd29yZC5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIGlmIChjaGFuZ2VzLmV4dGVybmFsRXJyb3IgJiYgY2hhbmdlcy5leHRlcm5hbEVycm9yLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICB0aGlzLl9jb2xvciA9IENvbG9ycy53YXJuO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2UgaWYgKGNoYW5nZXMucGFzc3dvcmQucHJldmlvdXNWYWx1ZSA9PT0gY2hhbmdlcy5wYXNzd29yZC5jdXJyZW50VmFsdWUgJiYgIWNoYW5nZXMucGFzc3dvcmQuZmlyc3RDaGFuZ2UpIHtcclxuICAgICAgdGhpcy5jYWxjdWxhdGVQYXNzd29yZFN0cmVuZ3RoKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnBhc3MgJiYgdGhpcy5wYXNzLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUGFzc3dvcmRTdHJlbmd0aCgpIDogdGhpcy5yZXNldCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcGFyc2VDdXN0b21WYWxpZGF0b3JzUmVnZXgodmFsdWU6IHN0cmluZyB8IFJlZ0V4cCA9IHRoaXMuY3VzdG9tVmFsaWRhdG9yKSB7XHJcbiAgICBpZiAodGhpcy5jdXN0b21WYWxpZGF0b3IgaW5zdGFuY2VvZiBSZWdFeHApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tVmFsaWRhdG9yO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5jdXN0b21WYWxpZGF0b3IgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiBSZWdFeHAodGhpcy5jdXN0b21WYWxpZGF0b3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0UnVsZXNBbmRWYWxpZGF0b3JzKCk6IHZvaWQge1xyXG4gICAgdGhpcy52YWxpZGF0b3JzQXJyYXkgPSBbXTtcclxuICAgIHRoaXMuY3JpdGVyaWFNYXAgPSBuZXcgTWFwPENyaXRlcmlhLCBSZWdFeHA+KCk7XHJcbiAgICB0aGlzLnBhc3N3b3JkQ29uZmlybWF0aW9uRm9ybUNvbnRyb2xcclxuICAgICAgLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLCB0aGlzLm1hdFBhc3N3b3JkU3RyZW5ndGhWYWxpZGF0b3IuY29uZmlybSh0aGlzLnBhc3MpXHJcbiAgICAgIF0pKTtcclxuICAgIHRoaXMudmFsaWRhdG9yc0FycmF5LnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XHJcbiAgICBpZiAodGhpcy5lbmFibGVMZW5ndGhSdWxlKSB7XHJcbiAgICAgIHRoaXMuY3JpdGVyaWFNYXAuc2V0KENyaXRlcmlhLmF0X2xlYXN0X2VpZ2h0X2NoYXJzLCBSZWdFeHAoYF4ueyR7dGhpcy5taW59LCR7dGhpcy5tYXh9fSRgKSk7XHJcbiAgICAgIHRoaXMudmFsaWRhdG9yc0FycmF5LnB1c2goVmFsaWRhdG9ycy5taW5MZW5ndGgodGhpcy5taW4pKTtcclxuICAgICAgdGhpcy52YWxpZGF0b3JzQXJyYXkucHVzaChWYWxpZGF0b3JzLm1heExlbmd0aCh0aGlzLm1heCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZW5hYmxlTG93ZXJDYXNlTGV0dGVyUnVsZSkge1xyXG4gICAgICB0aGlzLmNyaXRlcmlhTWFwLnNldChDcml0ZXJpYS5hdF9sZWFzdF9vbmVfbG93ZXJfY2FzZV9jaGFyLCBSZWdFeHBWYWxpZGF0b3IubG93ZXJDYXNlKTtcclxuICAgICAgdGhpcy52YWxpZGF0b3JzQXJyYXkucHVzaChWYWxpZGF0b3JzLnBhdHRlcm4oUmVnRXhwVmFsaWRhdG9yLmxvd2VyQ2FzZSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZW5hYmxlVXBwZXJDYXNlTGV0dGVyUnVsZSkge1xyXG4gICAgICB0aGlzLmNyaXRlcmlhTWFwLnNldChDcml0ZXJpYS5hdF9sZWFzdF9vbmVfdXBwZXJfY2FzZV9jaGFyLCBSZWdFeHBWYWxpZGF0b3IudXBwZXJDYXNlKTtcclxuICAgICAgdGhpcy52YWxpZGF0b3JzQXJyYXkucHVzaChWYWxpZGF0b3JzLnBhdHRlcm4oUmVnRXhwVmFsaWRhdG9yLnVwcGVyQ2FzZSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZW5hYmxlRGlnaXRSdWxlKSB7XHJcbiAgICAgIHRoaXMuY3JpdGVyaWFNYXAuc2V0KENyaXRlcmlhLmF0X2xlYXN0X29uZV9kaWdpdF9jaGFyLCBSZWdFeHBWYWxpZGF0b3IuZGlnaXQpO1xyXG4gICAgICB0aGlzLnZhbGlkYXRvcnNBcnJheS5wdXNoKFZhbGlkYXRvcnMucGF0dGVybihSZWdFeHBWYWxpZGF0b3IuZGlnaXQpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmVuYWJsZVNwZWNpYWxDaGFyUnVsZSkge1xyXG4gICAgICB0aGlzLmNyaXRlcmlhTWFwLnNldChDcml0ZXJpYS5hdF9sZWFzdF9vbmVfc3BlY2lhbF9jaGFyLCBSZWdFeHBWYWxpZGF0b3Iuc3BlY2lhbENoYXIpO1xyXG4gICAgICB0aGlzLnZhbGlkYXRvcnNBcnJheS5wdXNoKFZhbGlkYXRvcnMucGF0dGVybihSZWdFeHBWYWxpZGF0b3Iuc3BlY2lhbENoYXIpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmN1c3RvbVZhbGlkYXRvcikge1xyXG4gICAgICB0aGlzLmNyaXRlcmlhTWFwLnNldChDcml0ZXJpYS5hdF9jdXN0b21fY2hhcnMsIHRoaXMucGFyc2VDdXN0b21WYWxpZGF0b3JzUmVnZXgoKSk7XHJcbiAgICAgIHRoaXMudmFsaWRhdG9yc0FycmF5LnB1c2goVmFsaWRhdG9ycy5wYXR0ZXJuKHRoaXMucGFyc2VDdXN0b21WYWxpZGF0b3JzUmVnZXgoKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY3JpdGVyaWFNYXAuZm9yRWFjaCgodmFsdWU6IGFueSwga2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgdGhpcy52YWxpZGF0b3JzQXJyYXkucHVzaCh0aGlzLm1hdFBhc3N3b3JkU3RyZW5ndGhWYWxpZGF0b3IudmFsaWRhdGUoa2V5LCB2YWx1ZSkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5wYXNzd29yZEZvcm1Db250cm9sLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5jb21wb3NlKFsuLi50aGlzLnZhbGlkYXRvcnNBcnJheV0pKTtcclxuICAgIHRoaXMuVmFsaWRhdG9ycyA9IFZhbGlkYXRvcnMuY29tcG9zZShbLi4udGhpcy52YWxpZGF0b3JzQXJyYXldKTtcclxuXHJcbiAgfVxyXG5cclxuICBjYWxjdWxhdGVQYXNzd29yZFN0cmVuZ3RoKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVxdWlyZW1lbnRzOiBBcnJheTxib29sZWFuPiA9IFtdO1xyXG4gICAgY29uc3QgdW5pdCA9IDEwMCAvIHRoaXMuY3JpdGVyaWFNYXAuc2l6ZTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygndGhpcy5jcml0ZXJpYU1hcC5zaXplID0gJywgdGhpcy5jcml0ZXJpYU1hcC5zaXplKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCd1bml0ID0gJywgdW5pdCk7XHJcblxyXG4gICAgcmVxdWlyZW1lbnRzLnB1c2goXHJcbiAgICAgIHRoaXMuZW5hYmxlTGVuZ3RoUnVsZSA/IHRoaXMuX2NvbnRhaW5BdExlYXN0TWluQ2hhcnMoKSA6IGZhbHNlLFxyXG4gICAgICB0aGlzLmVuYWJsZUxvd2VyQ2FzZUxldHRlclJ1bGUgPyB0aGlzLl9jb250YWluQXRMZWFzdE9uZUxvd2VyQ2FzZUxldHRlcigpIDogZmFsc2UsXHJcbiAgICAgIHRoaXMuZW5hYmxlVXBwZXJDYXNlTGV0dGVyUnVsZSA/IHRoaXMuX2NvbnRhaW5BdExlYXN0T25lVXBwZXJDYXNlTGV0dGVyKCkgOiBmYWxzZSxcclxuICAgICAgdGhpcy5lbmFibGVEaWdpdFJ1bGUgPyB0aGlzLl9jb250YWluQXRMZWFzdE9uZURpZ2l0KCkgOiBmYWxzZSxcclxuICAgICAgdGhpcy5lbmFibGVTcGVjaWFsQ2hhclJ1bGUgPyB0aGlzLl9jb250YWluQXRMZWFzdE9uZVNwZWNpYWxDaGFyKCkgOiBmYWxzZSxcclxuICAgICAgdGhpcy5jdXN0b21WYWxpZGF0b3IgPyB0aGlzLl9jb250YWluQ3VzdG9tQ2hhcnMoKSA6IGZhbHNlXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuX3N0cmVuZ3RoID0gcmVxdWlyZW1lbnRzLmZpbHRlcih2ID0+IHYpLmxlbmd0aCAqIHVuaXQ7XHJcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSh0aGlzLnN0cmVuZ3RoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdsZW5ndGggPSAnLCB0aGlzLl9zdHJlbmd0aCAvIHVuaXQpO1xyXG4gICAgdGhpcy5vblN0cmVuZ3RoQ2hhbmdlZC5lbWl0KHRoaXMuc3RyZW5ndGgpO1xyXG4gICAgdGhpcy5zZXRSdWxlc0FuZFZhbGlkYXRvcnMoKTtcclxuICB9XHJcblxyXG4gIHJlc2V0KCkge1xyXG4gICAgdGhpcy5fc3RyZW5ndGggPSAwO1xyXG4gICAgdGhpcy5jb250YWluQXRMZWFzdE1pbkNoYXJzID1cclxuICAgICAgdGhpcy5jb250YWluQXRMZWFzdE9uZUxvd2VyQ2FzZUxldHRlciA9XHJcbiAgICAgICAgdGhpcy5jb250YWluQXRMZWFzdE9uZVVwcGVyQ2FzZUxldHRlciA9XHJcbiAgICAgICAgICB0aGlzLmNvbnRhaW5BdExlYXN0T25lRGlnaXQgPVxyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5BdEN1c3RvbUNoYXJzID1cclxuICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5BdExlYXN0T25lU3BlY2lhbENoYXIgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmIChvYmopIHtcclxuICAgICAgdGhpcy5fc3RyZW5ndGggPSBvYmo7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY29udGFpbkF0TGVhc3RNaW5DaGFycygpOiBib29sZWFuIHtcclxuICAgIHRoaXMuY29udGFpbkF0TGVhc3RNaW5DaGFycyA9IHRoaXMucGFzcy5sZW5ndGggPj0gdGhpcy5taW47XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWluQXRMZWFzdE1pbkNoYXJzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY29udGFpbkF0TGVhc3RPbmVMb3dlckNhc2VMZXR0ZXIoKTogYm9vbGVhbiB7XHJcbiAgICB0aGlzLmNvbnRhaW5BdExlYXN0T25lTG93ZXJDYXNlTGV0dGVyID1cclxuICAgICAgdGhpcy5jcml0ZXJpYU1hcFxyXG4gICAgICAgIC5nZXQoQ3JpdGVyaWEuYXRfbGVhc3Rfb25lX2xvd2VyX2Nhc2VfY2hhcilcclxuICAgICAgICAudGVzdCh0aGlzLnBhc3MpO1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbkF0TGVhc3RPbmVMb3dlckNhc2VMZXR0ZXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jb250YWluQXRMZWFzdE9uZVVwcGVyQ2FzZUxldHRlcigpOiBib29sZWFuIHtcclxuICAgIHRoaXMuY29udGFpbkF0TGVhc3RPbmVVcHBlckNhc2VMZXR0ZXIgPVxyXG4gICAgICB0aGlzLmNyaXRlcmlhTWFwXHJcbiAgICAgICAgLmdldChDcml0ZXJpYS5hdF9sZWFzdF9vbmVfdXBwZXJfY2FzZV9jaGFyKVxyXG4gICAgICAgIC50ZXN0KHRoaXMucGFzcyk7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWluQXRMZWFzdE9uZVVwcGVyQ2FzZUxldHRlcjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NvbnRhaW5BdExlYXN0T25lRGlnaXQoKTogYm9vbGVhbiB7XHJcbiAgICB0aGlzLmNvbnRhaW5BdExlYXN0T25lRGlnaXQgPVxyXG4gICAgICB0aGlzLmNyaXRlcmlhTWFwXHJcbiAgICAgICAgLmdldChDcml0ZXJpYS5hdF9sZWFzdF9vbmVfZGlnaXRfY2hhcilcclxuICAgICAgICAudGVzdCh0aGlzLnBhc3MpO1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbkF0TGVhc3RPbmVEaWdpdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NvbnRhaW5BdExlYXN0T25lU3BlY2lhbENoYXIoKTogYm9vbGVhbiB7XHJcbiAgICB0aGlzLmNvbnRhaW5BdExlYXN0T25lU3BlY2lhbENoYXIgPVxyXG4gICAgICB0aGlzLmNyaXRlcmlhTWFwXHJcbiAgICAgICAgLmdldChDcml0ZXJpYS5hdF9sZWFzdF9vbmVfc3BlY2lhbF9jaGFyKVxyXG4gICAgICAgIC50ZXN0KHRoaXMucGFzcyk7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWluQXRMZWFzdE9uZVNwZWNpYWxDaGFyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY29udGFpbkN1c3RvbUNoYXJzKCk6IGJvb2xlYW4ge1xyXG4gICAgdGhpcy5jb250YWluQXRDdXN0b21DaGFycyA9XHJcbiAgICAgIHRoaXMuY3JpdGVyaWFNYXBcclxuICAgICAgICAuZ2V0KENyaXRlcmlhLmF0X2N1c3RvbV9jaGFycylcclxuICAgICAgICAudGVzdCh0aGlzLnBhc3MpO1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbkF0Q3VzdG9tQ2hhcnM7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wYXNzKSB7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlUGFzc3dvcmRTdHJlbmd0aCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=