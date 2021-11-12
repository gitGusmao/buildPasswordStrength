import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output, } from "@angular/core";
import { FormControl, NG_VALUE_ACCESSOR, Validators, } from "@angular/forms";
import { Colors, Criteria } from "../../enum";
import { MatPasswordStrengthValidator } from "../../validator";
import { RegExpValidator } from "../../validator/regexp.class";
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
        this.propagateChange = (_) => { };
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
        if ((changes.externalError && changes.externalError.firstChange) ||
            changes.password.isFirstChange()) {
            return;
        }
        else if (changes.externalError && changes.externalError.currentValue) {
            this._color = Colors.warn;
            return;
        }
        else {
            this.pass && this.pass.length > 0
                ? this.calculatePasswordStrength()
                : this.reset();
        }
    }
    parseCustomValidatorsRegex(value = this.customValidator) {
        if (this.customValidator instanceof RegExp) {
            return this.customValidator;
        }
        else if (typeof this.customValidator === "string") {
            return RegExp(this.customValidator);
        }
    }
    setRulesAndValidators() {
        this.validatorsArray = [];
        this.criteriaMap = new Map();
        this.passwordConfirmationFormControl.setValidators(Validators.compose([
            Validators.required,
            this.matPasswordStrengthValidator.confirm(this.pass),
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
        requirements.push(this.enableLengthRule ? this._containAtLeastMinChars() : false, this.enableLowerCaseLetterRule
            ? this._containAtLeastOneLowerCaseLetter()
            : false, this.enableUpperCaseLetterRule
            ? this._containAtLeastOneUpperCaseLetter()
            : false, this.enableDigitRule ? this._containAtLeastOneDigit() : false, this.enableSpecialCharRule ? this._containAtLeastOneSpecialChar() : false, this.customValidator ? this._containCustomChars() : false);
        this._strength = requirements.filter((v) => v).length * unit;
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
                            this.containAtLeastOneSpecialChar =
                                false;
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
        this.containAtLeastOneLowerCaseLetter = this.criteriaMap
            .get(Criteria.at_least_one_lower_case_char)
            .test(this.pass);
        return this.containAtLeastOneLowerCaseLetter;
    }
    _containAtLeastOneUpperCaseLetter() {
        this.containAtLeastOneUpperCaseLetter = this.criteriaMap
            .get(Criteria.at_least_one_upper_case_char)
            .test(this.pass);
        return this.containAtLeastOneUpperCaseLetter;
    }
    _containAtLeastOneDigit() {
        this.containAtLeastOneDigit = this.criteriaMap
            .get(Criteria.at_least_one_digit_char)
            .test(this.pass);
        return this.containAtLeastOneDigit;
    }
    _containAtLeastOneSpecialChar() {
        this.containAtLeastOneSpecialChar = this.criteriaMap
            .get(Criteria.at_least_one_special_char)
            .test(this.pass);
        return this.containAtLeastOneSpecialChar;
    }
    _containCustomChars() {
        this.containAtCustomChars = this.criteriaMap
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
                selector: "mat-password-strength",
                exportAs: "matPasswordStrength",
                template: "<mat-progress-bar [color]=\"color\"\r\n                  [value]=\"strength\"\r\n                  mode=\"determinate\">\r\n</mat-progress-bar>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => MatPasswordStrengthComponent),
                        multi: true,
                    },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXBhc3N3b3JkLXN0cmVuZ3RoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLW1hdGVyaWFsLWV4dGVuc2lvbnMvcGFzc3dvcmQtc3RyZW5ndGgvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9tYXQtcGFzc3dvcmQtc3RyZW5ndGgvbWF0LXBhc3N3b3JkLXN0cmVuZ3RoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFHTCxNQUFNLEdBRVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUVMLFdBQVcsRUFDWCxpQkFBaUIsRUFFakIsVUFBVSxHQUNYLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDOUMsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBaUIvRCxNQUFNLE9BQU8sNEJBQTRCO0lBZHpDO1FBb0JXLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4Qiw4QkFBeUIsR0FBRyxJQUFJLENBQUM7UUFDakMsOEJBQXlCLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLDBCQUFxQixHQUFHLElBQUksQ0FBQztRQUU3QixRQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUdULGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBRzlCLHNCQUFpQixHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTdELGdCQUFXLEdBQUcsSUFBSSxHQUFHLEVBQW9CLENBQUM7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Q29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcclxuICBGb3JtQ29udHJvbCxcclxuICBOR19WQUxVRV9BQ0NFU1NPUixcclxuICBWYWxpZGF0b3JGbixcclxuICBWYWxpZGF0b3JzLFxyXG59IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBDb2xvcnMsIENyaXRlcmlhIH0gZnJvbSBcIi4uLy4uL2VudW1cIjtcclxuaW1wb3J0IHsgTWF0UGFzc3dvcmRTdHJlbmd0aFZhbGlkYXRvciB9IGZyb20gXCIuLi8uLi92YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgUmVnRXhwVmFsaWRhdG9yIH0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRvci9yZWdleHAuY2xhc3NcIjtcclxuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm1hdC1wYXNzd29yZC1zdHJlbmd0aFwiLFxyXG4gIGV4cG9ydEFzOiBcIm1hdFBhc3N3b3JkU3RyZW5ndGhcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL21hdC1wYXNzd29yZC1zdHJlbmd0aC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9tYXQtcGFzc3dvcmQtc3RyZW5ndGguY29tcG9uZW50LnNjc3NcIl0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNYXRQYXNzd29yZFN0cmVuZ3RoQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRQYXNzd29yZFN0cmVuZ3RoQ29tcG9uZW50XHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQ29udHJvbFZhbHVlQWNjZXNzb3Jcclxue1xyXG4gIEBJbnB1dCgpIHBhc3M6IHN0cmluZztcclxuICBASW5wdXQoKSBleHRlcm5hbEVycm9yOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKSBlbmFibGVMZW5ndGhSdWxlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBlbmFibGVMb3dlckNhc2VMZXR0ZXJSdWxlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBlbmFibGVVcHBlckNhc2VMZXR0ZXJSdWxlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBlbmFibGVEaWdpdFJ1bGUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGVuYWJsZVNwZWNpYWxDaGFyUnVsZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpIG1pbiA9IDg7XHJcbiAgQElucHV0KCkgbWF4ID0gMzA7XHJcbiAgQElucHV0KCkgY3VzdG9tVmFsaWRhdG9yOiBSZWdFeHA7XHJcblxyXG4gIEBJbnB1dCgpIHdhcm5UaHJlc2hvbGQgPSAyMTtcclxuICBASW5wdXQoKSBhY2NlbnRUaHJlc2hvbGQgPSA4MTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgb25TdHJlbmd0aENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjcml0ZXJpYU1hcCA9IG5ldyBNYXA8Q3JpdGVyaWEsIFJlZ0V4cD4oKTtcclxuXHJcbiAgY29udGFpbkF0TGVhc3RNaW5DaGFyczogYm9vbGVhbjtcclxuICBjb250YWluQXRMZWFzdE9uZUxvd2VyQ2FzZUxldHRlcjogYm9vbGVhbjtcclxuICBjb250YWluQXRMZWFzdE9uZVVwcGVyQ2FzZUxldHRlcjogYm9vbGVhbjtcclxuICBjb250YWluQXRMZWFzdE9uZURpZ2l0OiBib29sZWFuO1xyXG4gIGNvbnRhaW5BdExlYXN0T25lU3BlY2lhbENoYXI6IGJvb2xlYW47XHJcbiAgY29udGFpbkF0Q3VzdG9tQ2hhcnM6IGJvb2xlYW47XHJcblxyXG4gIC8vIFRPIEFDQ0VTUyBWSUEgQ09OVEVOVCBDSElMRFxyXG4gIHBhc3N3b3JkRm9ybUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XHJcbiAgcGFzc3dvcmRDb25maXJtYXRpb25Gb3JtQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcclxuXHJcbiAgdmFsaWRhdG9yc0FycmF5OiBWYWxpZGF0b3JGbltdID0gW107XHJcbiAgVmFsaWRhdG9yczogVmFsaWRhdG9yRm47XHJcbiAgbWF0UGFzc3dvcmRTdHJlbmd0aFZhbGlkYXRvciA9IG5ldyBNYXRQYXNzd29yZFN0cmVuZ3RoVmFsaWRhdG9yKCk7XHJcblxyXG4gIHByaXZhdGUgX3N0cmVuZ3RoID0gMDtcclxuXHJcbiAgZ2V0IHN0cmVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3RyZW5ndGggPyB0aGlzLl9zdHJlbmd0aCA6IDA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jb2xvcjogVGhlbWVQYWxldHRlO1xyXG5cclxuICBnZXQgY29sb3IoKTogVGhlbWVQYWxldHRlIHtcclxuICAgIGlmICh0aGlzLl9zdHJlbmd0aCA8IHRoaXMud2FyblRocmVzaG9sZCkge1xyXG4gICAgICByZXR1cm4gQ29sb3JzLndhcm47XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3N0cmVuZ3RoIDwgdGhpcy5hY2NlbnRUaHJlc2hvbGQpIHtcclxuICAgICAgcmV0dXJuIENvbG9ycy5hY2NlbnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gQ29sb3JzLnByaW1hcnk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFJ1bGVzQW5kVmFsaWRhdG9ycygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKFxyXG4gICAgICAoY2hhbmdlcy5leHRlcm5hbEVycm9yICYmIGNoYW5nZXMuZXh0ZXJuYWxFcnJvci5maXJzdENoYW5nZSkgfHxcclxuICAgICAgY2hhbmdlcy5wYXNzd29yZC5pc0ZpcnN0Q2hhbmdlKClcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2UgaWYgKGNoYW5nZXMuZXh0ZXJuYWxFcnJvciAmJiBjaGFuZ2VzLmV4dGVybmFsRXJyb3IuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2NvbG9yID0gQ29sb3JzLndhcm47XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucGFzcyAmJiB0aGlzLnBhc3MubGVuZ3RoID4gMFxyXG4gICAgICAgID8gdGhpcy5jYWxjdWxhdGVQYXNzd29yZFN0cmVuZ3RoKClcclxuICAgICAgICA6IHRoaXMucmVzZXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBhcnNlQ3VzdG9tVmFsaWRhdG9yc1JlZ2V4KHZhbHVlOiBzdHJpbmcgfCBSZWdFeHAgPSB0aGlzLmN1c3RvbVZhbGlkYXRvcikge1xyXG4gICAgaWYgKHRoaXMuY3VzdG9tVmFsaWRhdG9yIGluc3RhbmNlb2YgUmVnRXhwKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmN1c3RvbVZhbGlkYXRvcjtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuY3VzdG9tVmFsaWRhdG9yID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIHJldHVybiBSZWdFeHAodGhpcy5jdXN0b21WYWxpZGF0b3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0UnVsZXNBbmRWYWxpZGF0b3JzKCk6IHZvaWQge1xyXG4gICAgdGhpcy52YWxpZGF0b3JzQXJyYXkgPSBbXTtcclxuICAgIHRoaXMuY3JpdGVyaWFNYXAgPSBuZXcgTWFwPENyaXRlcmlhLCBSZWdFeHA+KCk7XHJcbiAgICB0aGlzLnBhc3N3b3JkQ29uZmlybWF0aW9uRm9ybUNvbnRyb2wuc2V0VmFsaWRhdG9ycyhcclxuICAgICAgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgIHRoaXMubWF0UGFzc3dvcmRTdHJlbmd0aFZhbGlkYXRvci5jb25maXJtKHRoaXMucGFzcyksXHJcbiAgICAgIF0pXHJcbiAgICApO1xyXG4gICAgdGhpcy52YWxpZGF0b3JzQXJyYXkucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuICAgIGlmICh0aGlzLmVuYWJsZUxlbmd0aFJ1bGUpIHtcclxuICAgICAgdGhpcy5jcml0ZXJpYU1hcC5zZXQoXHJcbiAgICAgICAgQ3JpdGVyaWEuYXRfbGVhc3RfZWlnaHRfY2hhcnMsXHJcbiAgICAgICAgUmVnRXhwKGBeLnske3RoaXMubWlufSwke3RoaXMubWF4fX0kYClcclxuICAgICAgKTtcclxuICAgICAgdGhpcy52YWxpZGF0b3JzQXJyYXkucHVzaChWYWxpZGF0b3JzLm1pbkxlbmd0aCh0aGlzLm1pbikpO1xyXG4gICAgICB0aGlzLnZhbGlkYXRvcnNBcnJheS5wdXNoKFZhbGlkYXRvcnMubWF4TGVuZ3RoKHRoaXMubWF4KSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5lbmFibGVMb3dlckNhc2VMZXR0ZXJSdWxlKSB7XHJcbiAgICAgIHRoaXMuY3JpdGVyaWFNYXAuc2V0KFxyXG4gICAgICAgIENyaXRlcmlhLmF0X2xlYXN0X29uZV9sb3dlcl9jYXNlX2NoYXIsXHJcbiAgICAgICAgUmVnRXhwVmFsaWRhdG9yLmxvd2VyQ2FzZVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnZhbGlkYXRvcnNBcnJheS5wdXNoKFZhbGlkYXRvcnMucGF0dGVybihSZWdFeHBWYWxpZGF0b3IubG93ZXJDYXNlKSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5lbmFibGVVcHBlckNhc2VMZXR0ZXJSdWxlKSB7XHJcbiAgICAgIHRoaXMuY3JpdGVyaWFNYXAuc2V0KFxyXG4gICAgICAgIENyaXRlcmlhLmF0X2xlYXN0X29uZV91cHBlcl9jYXNlX2NoYXIsXHJcbiAgICAgICAgUmVnRXhwVmFsaWRhdG9yLnVwcGVyQ2FzZVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnZhbGlkYXRvcnNBcnJheS5wdXNoKFZhbGlkYXRvcnMucGF0dGVybihSZWdFeHBWYWxpZGF0b3IudXBwZXJDYXNlKSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5lbmFibGVEaWdpdFJ1bGUpIHtcclxuICAgICAgdGhpcy5jcml0ZXJpYU1hcC5zZXQoXHJcbiAgICAgICAgQ3JpdGVyaWEuYXRfbGVhc3Rfb25lX2RpZ2l0X2NoYXIsXHJcbiAgICAgICAgUmVnRXhwVmFsaWRhdG9yLmRpZ2l0XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMudmFsaWRhdG9yc0FycmF5LnB1c2goVmFsaWRhdG9ycy5wYXR0ZXJuKFJlZ0V4cFZhbGlkYXRvci5kaWdpdCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZW5hYmxlU3BlY2lhbENoYXJSdWxlKSB7XHJcbiAgICAgIHRoaXMuY3JpdGVyaWFNYXAuc2V0KFxyXG4gICAgICAgIENyaXRlcmlhLmF0X2xlYXN0X29uZV9zcGVjaWFsX2NoYXIsXHJcbiAgICAgICAgUmVnRXhwVmFsaWRhdG9yLnNwZWNpYWxDaGFyXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMudmFsaWRhdG9yc0FycmF5LnB1c2goXHJcbiAgICAgICAgVmFsaWRhdG9ycy5wYXR0ZXJuKFJlZ0V4cFZhbGlkYXRvci5zcGVjaWFsQ2hhcilcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmN1c3RvbVZhbGlkYXRvcikge1xyXG4gICAgICB0aGlzLmNyaXRlcmlhTWFwLnNldChcclxuICAgICAgICBDcml0ZXJpYS5hdF9jdXN0b21fY2hhcnMsXHJcbiAgICAgICAgdGhpcy5wYXJzZUN1c3RvbVZhbGlkYXRvcnNSZWdleCgpXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMudmFsaWRhdG9yc0FycmF5LnB1c2goXHJcbiAgICAgICAgVmFsaWRhdG9ycy5wYXR0ZXJuKHRoaXMucGFyc2VDdXN0b21WYWxpZGF0b3JzUmVnZXgoKSlcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNyaXRlcmlhTWFwLmZvckVhY2goKHZhbHVlOiBhbnksIGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHRoaXMudmFsaWRhdG9yc0FycmF5LnB1c2goXHJcbiAgICAgICAgdGhpcy5tYXRQYXNzd29yZFN0cmVuZ3RoVmFsaWRhdG9yLnZhbGlkYXRlKGtleSwgdmFsdWUpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnBhc3N3b3JkRm9ybUNvbnRyb2wuc2V0VmFsaWRhdG9ycyhcclxuICAgICAgVmFsaWRhdG9ycy5jb21wb3NlKFsuLi50aGlzLnZhbGlkYXRvcnNBcnJheV0pXHJcbiAgICApO1xyXG4gICAgdGhpcy5WYWxpZGF0b3JzID0gVmFsaWRhdG9ycy5jb21wb3NlKFsuLi50aGlzLnZhbGlkYXRvcnNBcnJheV0pO1xyXG4gIH1cclxuXHJcbiAgY2FsY3VsYXRlUGFzc3dvcmRTdHJlbmd0aCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlcXVpcmVtZW50czogQXJyYXk8Ym9vbGVhbj4gPSBbXTtcclxuICAgIGNvbnN0IHVuaXQgPSAxMDAgLyB0aGlzLmNyaXRlcmlhTWFwLnNpemU7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coJ3RoaXMuY3JpdGVyaWFNYXAuc2l6ZSA9ICcsIHRoaXMuY3JpdGVyaWFNYXAuc2l6ZSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygndW5pdCA9ICcsIHVuaXQpO1xyXG5cclxuICAgIHJlcXVpcmVtZW50cy5wdXNoKFxyXG4gICAgICB0aGlzLmVuYWJsZUxlbmd0aFJ1bGUgPyB0aGlzLl9jb250YWluQXRMZWFzdE1pbkNoYXJzKCkgOiBmYWxzZSxcclxuICAgICAgdGhpcy5lbmFibGVMb3dlckNhc2VMZXR0ZXJSdWxlXHJcbiAgICAgICAgPyB0aGlzLl9jb250YWluQXRMZWFzdE9uZUxvd2VyQ2FzZUxldHRlcigpXHJcbiAgICAgICAgOiBmYWxzZSxcclxuICAgICAgdGhpcy5lbmFibGVVcHBlckNhc2VMZXR0ZXJSdWxlXHJcbiAgICAgICAgPyB0aGlzLl9jb250YWluQXRMZWFzdE9uZVVwcGVyQ2FzZUxldHRlcigpXHJcbiAgICAgICAgOiBmYWxzZSxcclxuICAgICAgdGhpcy5lbmFibGVEaWdpdFJ1bGUgPyB0aGlzLl9jb250YWluQXRMZWFzdE9uZURpZ2l0KCkgOiBmYWxzZSxcclxuICAgICAgdGhpcy5lbmFibGVTcGVjaWFsQ2hhclJ1bGUgPyB0aGlzLl9jb250YWluQXRMZWFzdE9uZVNwZWNpYWxDaGFyKCkgOiBmYWxzZSxcclxuICAgICAgdGhpcy5jdXN0b21WYWxpZGF0b3IgPyB0aGlzLl9jb250YWluQ3VzdG9tQ2hhcnMoKSA6IGZhbHNlXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuX3N0cmVuZ3RoID0gcmVxdWlyZW1lbnRzLmZpbHRlcigodikgPT4gdikubGVuZ3RoICogdW5pdDtcclxuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMuc3RyZW5ndGgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2xlbmd0aCA9ICcsIHRoaXMuX3N0cmVuZ3RoIC8gdW5pdCk7XHJcbiAgICB0aGlzLm9uU3RyZW5ndGhDaGFuZ2VkLmVtaXQodGhpcy5zdHJlbmd0aCk7XHJcbiAgICB0aGlzLnNldFJ1bGVzQW5kVmFsaWRhdG9ycygpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLl9zdHJlbmd0aCA9IDA7XHJcbiAgICB0aGlzLmNvbnRhaW5BdExlYXN0TWluQ2hhcnMgPVxyXG4gICAgICB0aGlzLmNvbnRhaW5BdExlYXN0T25lTG93ZXJDYXNlTGV0dGVyID1cclxuICAgICAgdGhpcy5jb250YWluQXRMZWFzdE9uZVVwcGVyQ2FzZUxldHRlciA9XHJcbiAgICAgIHRoaXMuY29udGFpbkF0TGVhc3RPbmVEaWdpdCA9XHJcbiAgICAgIHRoaXMuY29udGFpbkF0Q3VzdG9tQ2hhcnMgPVxyXG4gICAgICB0aGlzLmNvbnRhaW5BdExlYXN0T25lU3BlY2lhbENoYXIgPVxyXG4gICAgICAgIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKG9iaikge1xyXG4gICAgICB0aGlzLl9zdHJlbmd0aCA9IG9iajtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jb250YWluQXRMZWFzdE1pbkNoYXJzKCk6IGJvb2xlYW4ge1xyXG4gICAgdGhpcy5jb250YWluQXRMZWFzdE1pbkNoYXJzID0gdGhpcy5wYXNzLmxlbmd0aCA+PSB0aGlzLm1pbjtcclxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5BdExlYXN0TWluQ2hhcnM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jb250YWluQXRMZWFzdE9uZUxvd2VyQ2FzZUxldHRlcigpOiBib29sZWFuIHtcclxuICAgIHRoaXMuY29udGFpbkF0TGVhc3RPbmVMb3dlckNhc2VMZXR0ZXIgPSB0aGlzLmNyaXRlcmlhTWFwXHJcbiAgICAgIC5nZXQoQ3JpdGVyaWEuYXRfbGVhc3Rfb25lX2xvd2VyX2Nhc2VfY2hhcilcclxuICAgICAgLnRlc3QodGhpcy5wYXNzKTtcclxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5BdExlYXN0T25lTG93ZXJDYXNlTGV0dGVyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY29udGFpbkF0TGVhc3RPbmVVcHBlckNhc2VMZXR0ZXIoKTogYm9vbGVhbiB7XHJcbiAgICB0aGlzLmNvbnRhaW5BdExlYXN0T25lVXBwZXJDYXNlTGV0dGVyID0gdGhpcy5jcml0ZXJpYU1hcFxyXG4gICAgICAuZ2V0KENyaXRlcmlhLmF0X2xlYXN0X29uZV91cHBlcl9jYXNlX2NoYXIpXHJcbiAgICAgIC50ZXN0KHRoaXMucGFzcyk7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWluQXRMZWFzdE9uZVVwcGVyQ2FzZUxldHRlcjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NvbnRhaW5BdExlYXN0T25lRGlnaXQoKTogYm9vbGVhbiB7XHJcbiAgICB0aGlzLmNvbnRhaW5BdExlYXN0T25lRGlnaXQgPSB0aGlzLmNyaXRlcmlhTWFwXHJcbiAgICAgIC5nZXQoQ3JpdGVyaWEuYXRfbGVhc3Rfb25lX2RpZ2l0X2NoYXIpXHJcbiAgICAgIC50ZXN0KHRoaXMucGFzcyk7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWluQXRMZWFzdE9uZURpZ2l0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY29udGFpbkF0TGVhc3RPbmVTcGVjaWFsQ2hhcigpOiBib29sZWFuIHtcclxuICAgIHRoaXMuY29udGFpbkF0TGVhc3RPbmVTcGVjaWFsQ2hhciA9IHRoaXMuY3JpdGVyaWFNYXBcclxuICAgICAgLmdldChDcml0ZXJpYS5hdF9sZWFzdF9vbmVfc3BlY2lhbF9jaGFyKVxyXG4gICAgICAudGVzdCh0aGlzLnBhc3MpO1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbkF0TGVhc3RPbmVTcGVjaWFsQ2hhcjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NvbnRhaW5DdXN0b21DaGFycygpOiBib29sZWFuIHtcclxuICAgIHRoaXMuY29udGFpbkF0Q3VzdG9tQ2hhcnMgPSB0aGlzLmNyaXRlcmlhTWFwXHJcbiAgICAgIC5nZXQoQ3JpdGVyaWEuYXRfY3VzdG9tX2NoYXJzKVxyXG4gICAgICAudGVzdCh0aGlzLnBhc3MpO1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbkF0Q3VzdG9tQ2hhcnM7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wYXNzKSB7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlUGFzc3dvcmRTdHJlbmd0aCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=