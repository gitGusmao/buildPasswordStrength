import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output, } from "@angular/core";
import { FormControl, NG_VALUE_ACCESSOR, Validators, } from "@angular/forms";
import { Colors, Criteria } from "../../enum";
import { MatPasswordStrengthValidator } from "../../validator";
import { RegExpValidator } from "../../validator/regexp.class";
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
            changes.pass.isFirstChange()) {
            return;
        }
        else if (changes.externalError && changes.externalError.currentValue) {
            this._color = Colors.warn;
            return;
        }
        else if (changes.pass.previousValue === changes.pass.currentValue &&
            !changes.pass.firstChange) {
            this.calculatePasswordStrength();
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
MatPasswordStrengthComponent.ɵfac = function MatPasswordStrengthComponent_Factory(t) { return new (t || MatPasswordStrengthComponent)(); };
MatPasswordStrengthComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MatPasswordStrengthComponent, selectors: [["mat-password-strength"]], inputs: { pass: "pass", externalError: "externalError", enableLengthRule: "enableLengthRule", enableLowerCaseLetterRule: "enableLowerCaseLetterRule", enableUpperCaseLetterRule: "enableUpperCaseLetterRule", enableDigitRule: "enableDigitRule", enableSpecialCharRule: "enableSpecialCharRule", min: "min", max: "max", customValidator: "customValidator", warnThreshold: "warnThreshold", accentThreshold: "accentThreshold" }, outputs: { onStrengthChanged: "onStrengthChanged" }, exportAs: ["matPasswordStrength"], features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => MatPasswordStrengthComponent),
                multi: true,
            },
        ]), i0.ɵɵNgOnChangesFeature], decls: 1, vars: 2, consts: [["mode", "determinate", 3, "color", "value"]], template: function MatPasswordStrengthComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-progress-bar", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("color", ctx.color)("value", ctx.strength);
    } }, directives: [i1.MatProgressBar], styles: [".green   [_nghost-%COMP%]  .mat-progress-bar.mat-primary .mat-progress-bar-fill:after{background-color:#43a047}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MatPasswordStrengthComponent, [{
        type: Component,
        args: [{
                selector: "mat-password-strength",
                exportAs: "matPasswordStrength",
                templateUrl: "./mat-password-strength.component.html",
                styleUrls: ["./mat-password-strength.component.scss"],
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => MatPasswordStrengthComponent),
                        multi: true,
                    },
                ],
            }]
    }], null, { pass: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXBhc3N3b3JkLXN0cmVuZ3RoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLW1hdGVyaWFsLWV4dGVuc2lvbnMvcGFzc3dvcmQtc3RyZW5ndGgvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9tYXQtcGFzc3dvcmQtc3RyZW5ndGgvbWF0LXBhc3N3b3JkLXN0cmVuZ3RoLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnQvbWF0LXBhc3N3b3JkLXN0cmVuZ3RoL21hdC1wYXNzd29yZC1zdHJlbmd0aC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFHTCxNQUFNLEdBRVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUVMLFdBQVcsRUFDWCxpQkFBaUIsRUFFakIsVUFBVSxHQUNYLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDOUMsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7QUFpQi9ELE1BQU0sT0FBTyw0QkFBNEI7SUFkekM7UUFvQlcscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLDhCQUF5QixHQUFHLElBQUksQ0FBQztRQUNqQyw4QkFBeUIsR0FBRyxJQUFJLENBQUM7UUFDakMsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsMEJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBRTdCLFFBQUcsR0FBRyxDQUFDLENBQUM7UUFDUixRQUFHLEdBQUcsRUFBRSxDQUFDO1FBR1Qsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsb0JBQWUsR0FBRyxFQUFFLENBQUM7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LDRCQUE0QjtjQWR4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLHdDQUF3QztnQkFDckQsU0FBUyxFQUFFLENBQUMsd0NBQXdDLENBQUM7Z0JBQ3JELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsNkJBQTZCLENBQUM7d0JBQzNELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0Y7Z0JBSVUsSUFBSTtrQkFBWixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUVHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLHlCQUF5QjtrQkFBakMsS0FBSztZQUNHLHlCQUF5QjtrQkFBakMsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxxQkFBcUI7a0JBQTdCLEtBQUs7WUFFRyxHQUFHO2tCQUFYLEtBQUs7WUFDRyxHQUFHO2tCQUFYLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBRUcsYUFBYTtrQkFBckIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFHTixpQkFBaUI7a0JBRGhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcclxuICBGb3JtQ29udHJvbCxcclxuICBOR19WQUxVRV9BQ0NFU1NPUixcclxuICBWYWxpZGF0b3JGbixcclxuICBWYWxpZGF0b3JzLFxyXG59IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBDb2xvcnMsIENyaXRlcmlhIH0gZnJvbSBcIi4uLy4uL2VudW1cIjtcclxuaW1wb3J0IHsgTWF0UGFzc3dvcmRTdHJlbmd0aFZhbGlkYXRvciB9IGZyb20gXCIuLi8uLi92YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgUmVnRXhwVmFsaWRhdG9yIH0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRvci9yZWdleHAuY2xhc3NcIjtcclxuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm1hdC1wYXNzd29yZC1zdHJlbmd0aFwiLFxyXG4gIGV4cG9ydEFzOiBcIm1hdFBhc3N3b3JkU3RyZW5ndGhcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL21hdC1wYXNzd29yZC1zdHJlbmd0aC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9tYXQtcGFzc3dvcmQtc3RyZW5ndGguY29tcG9uZW50LnNjc3NcIl0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNYXRQYXNzd29yZFN0cmVuZ3RoQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRQYXNzd29yZFN0cmVuZ3RoQ29tcG9uZW50XHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQ29udHJvbFZhbHVlQWNjZXNzb3Jcclxue1xyXG4gIEBJbnB1dCgpIHBhc3M6IHN0cmluZztcclxuICBASW5wdXQoKSBleHRlcm5hbEVycm9yOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKSBlbmFibGVMZW5ndGhSdWxlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBlbmFibGVMb3dlckNhc2VMZXR0ZXJSdWxlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBlbmFibGVVcHBlckNhc2VMZXR0ZXJSdWxlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBlbmFibGVEaWdpdFJ1bGUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGVuYWJsZVNwZWNpYWxDaGFyUnVsZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpIG1pbiA9IDg7XHJcbiAgQElucHV0KCkgbWF4ID0gMzA7XHJcbiAgQElucHV0KCkgY3VzdG9tVmFsaWRhdG9yOiBSZWdFeHA7XHJcblxyXG4gIEBJbnB1dCgpIHdhcm5UaHJlc2hvbGQgPSAyMTtcclxuICBASW5wdXQoKSBhY2NlbnRUaHJlc2hvbGQgPSA4MTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgb25TdHJlbmd0aENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjcml0ZXJpYU1hcCA9IG5ldyBNYXA8Q3JpdGVyaWEsIFJlZ0V4cD4oKTtcclxuXHJcbiAgY29udGFpbkF0TGVhc3RNaW5DaGFyczogYm9vbGVhbjtcclxuICBjb250YWluQXRMZWFzdE9uZUxvd2VyQ2FzZUxldHRlcjogYm9vbGVhbjtcclxuICBjb250YWluQXRMZWFzdE9uZVVwcGVyQ2FzZUxldHRlcjogYm9vbGVhbjtcclxuICBjb250YWluQXRMZWFzdE9uZURpZ2l0OiBib29sZWFuO1xyXG4gIGNvbnRhaW5BdExlYXN0T25lU3BlY2lhbENoYXI6IGJvb2xlYW47XHJcbiAgY29udGFpbkF0Q3VzdG9tQ2hhcnM6IGJvb2xlYW47XHJcblxyXG4gIC8vIFRPIEFDQ0VTUyBWSUEgQ09OVEVOVCBDSElMRFxyXG4gIHBhc3N3b3JkRm9ybUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XHJcbiAgcGFzc3dvcmRDb25maXJtYXRpb25Gb3JtQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcclxuXHJcbiAgdmFsaWRhdG9yc0FycmF5OiBWYWxpZGF0b3JGbltdID0gW107XHJcbiAgVmFsaWRhdG9yczogVmFsaWRhdG9yRm47XHJcbiAgbWF0UGFzc3dvcmRTdHJlbmd0aFZhbGlkYXRvciA9IG5ldyBNYXRQYXNzd29yZFN0cmVuZ3RoVmFsaWRhdG9yKCk7XHJcblxyXG4gIHByaXZhdGUgX3N0cmVuZ3RoID0gMDtcclxuXHJcbiAgZ2V0IHN0cmVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3RyZW5ndGggPyB0aGlzLl9zdHJlbmd0aCA6IDA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jb2xvcjogVGhlbWVQYWxldHRlO1xyXG5cclxuICBnZXQgY29sb3IoKTogVGhlbWVQYWxldHRlIHtcclxuICAgIGlmICh0aGlzLl9zdHJlbmd0aCA8IHRoaXMud2FyblRocmVzaG9sZCkge1xyXG4gICAgICByZXR1cm4gQ29sb3JzLndhcm47XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3N0cmVuZ3RoIDwgdGhpcy5hY2NlbnRUaHJlc2hvbGQpIHtcclxuICAgICAgcmV0dXJuIENvbG9ycy5hY2NlbnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gQ29sb3JzLnByaW1hcnk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFJ1bGVzQW5kVmFsaWRhdG9ycygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKFxyXG4gICAgICAoY2hhbmdlcy5leHRlcm5hbEVycm9yICYmIGNoYW5nZXMuZXh0ZXJuYWxFcnJvci5maXJzdENoYW5nZSkgfHxcclxuICAgICAgY2hhbmdlcy5wYXNzLmlzRmlyc3RDaGFuZ2UoKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSBpZiAoY2hhbmdlcy5leHRlcm5hbEVycm9yICYmIGNoYW5nZXMuZXh0ZXJuYWxFcnJvci5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy5fY29sb3IgPSBDb2xvcnMud2FybjtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgY2hhbmdlcy5wYXNzLnByZXZpb3VzVmFsdWUgPT09IGNoYW5nZXMucGFzcy5jdXJyZW50VmFsdWUgJiZcclxuICAgICAgIWNoYW5nZXMucGFzcy5maXJzdENoYW5nZVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlUGFzc3dvcmRTdHJlbmd0aCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wYXNzICYmIHRoaXMucGFzcy5sZW5ndGggPiAwXHJcbiAgICAgICAgPyB0aGlzLmNhbGN1bGF0ZVBhc3N3b3JkU3RyZW5ndGgoKVxyXG4gICAgICAgIDogdGhpcy5yZXNldCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcGFyc2VDdXN0b21WYWxpZGF0b3JzUmVnZXgodmFsdWU6IHN0cmluZyB8IFJlZ0V4cCA9IHRoaXMuY3VzdG9tVmFsaWRhdG9yKSB7XHJcbiAgICBpZiAodGhpcy5jdXN0b21WYWxpZGF0b3IgaW5zdGFuY2VvZiBSZWdFeHApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tVmFsaWRhdG9yO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5jdXN0b21WYWxpZGF0b3IgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgcmV0dXJuIFJlZ0V4cCh0aGlzLmN1c3RvbVZhbGlkYXRvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRSdWxlc0FuZFZhbGlkYXRvcnMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbGlkYXRvcnNBcnJheSA9IFtdO1xyXG4gICAgdGhpcy5jcml0ZXJpYU1hcCA9IG5ldyBNYXA8Q3JpdGVyaWEsIFJlZ0V4cD4oKTtcclxuICAgIHRoaXMucGFzc3dvcmRDb25maXJtYXRpb25Gb3JtQ29udHJvbC5zZXRWYWxpZGF0b3JzKFxyXG4gICAgICBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgdGhpcy5tYXRQYXNzd29yZFN0cmVuZ3RoVmFsaWRhdG9yLmNvbmZpcm0odGhpcy5wYXNzKSxcclxuICAgICAgXSlcclxuICAgICk7XHJcbiAgICB0aGlzLnZhbGlkYXRvcnNBcnJheS5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG4gICAgaWYgKHRoaXMuZW5hYmxlTGVuZ3RoUnVsZSkge1xyXG4gICAgICB0aGlzLmNyaXRlcmlhTWFwLnNldChcclxuICAgICAgICBDcml0ZXJpYS5hdF9sZWFzdF9laWdodF9jaGFycyxcclxuICAgICAgICBSZWdFeHAoYF4ueyR7dGhpcy5taW59LCR7dGhpcy5tYXh9fSRgKVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnZhbGlkYXRvcnNBcnJheS5wdXNoKFZhbGlkYXRvcnMubWluTGVuZ3RoKHRoaXMubWluKSk7XHJcbiAgICAgIHRoaXMudmFsaWRhdG9yc0FycmF5LnB1c2goVmFsaWRhdG9ycy5tYXhMZW5ndGgodGhpcy5tYXgpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmVuYWJsZUxvd2VyQ2FzZUxldHRlclJ1bGUpIHtcclxuICAgICAgdGhpcy5jcml0ZXJpYU1hcC5zZXQoXHJcbiAgICAgICAgQ3JpdGVyaWEuYXRfbGVhc3Rfb25lX2xvd2VyX2Nhc2VfY2hhcixcclxuICAgICAgICBSZWdFeHBWYWxpZGF0b3IubG93ZXJDYXNlXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMudmFsaWRhdG9yc0FycmF5LnB1c2goVmFsaWRhdG9ycy5wYXR0ZXJuKFJlZ0V4cFZhbGlkYXRvci5sb3dlckNhc2UpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmVuYWJsZVVwcGVyQ2FzZUxldHRlclJ1bGUpIHtcclxuICAgICAgdGhpcy5jcml0ZXJpYU1hcC5zZXQoXHJcbiAgICAgICAgQ3JpdGVyaWEuYXRfbGVhc3Rfb25lX3VwcGVyX2Nhc2VfY2hhcixcclxuICAgICAgICBSZWdFeHBWYWxpZGF0b3IudXBwZXJDYXNlXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMudmFsaWRhdG9yc0FycmF5LnB1c2goVmFsaWRhdG9ycy5wYXR0ZXJuKFJlZ0V4cFZhbGlkYXRvci51cHBlckNhc2UpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmVuYWJsZURpZ2l0UnVsZSkge1xyXG4gICAgICB0aGlzLmNyaXRlcmlhTWFwLnNldChcclxuICAgICAgICBDcml0ZXJpYS5hdF9sZWFzdF9vbmVfZGlnaXRfY2hhcixcclxuICAgICAgICBSZWdFeHBWYWxpZGF0b3IuZGlnaXRcclxuICAgICAgKTtcclxuICAgICAgdGhpcy52YWxpZGF0b3JzQXJyYXkucHVzaChWYWxpZGF0b3JzLnBhdHRlcm4oUmVnRXhwVmFsaWRhdG9yLmRpZ2l0KSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5lbmFibGVTcGVjaWFsQ2hhclJ1bGUpIHtcclxuICAgICAgdGhpcy5jcml0ZXJpYU1hcC5zZXQoXHJcbiAgICAgICAgQ3JpdGVyaWEuYXRfbGVhc3Rfb25lX3NwZWNpYWxfY2hhcixcclxuICAgICAgICBSZWdFeHBWYWxpZGF0b3Iuc3BlY2lhbENoYXJcclxuICAgICAgKTtcclxuICAgICAgdGhpcy52YWxpZGF0b3JzQXJyYXkucHVzaChcclxuICAgICAgICBWYWxpZGF0b3JzLnBhdHRlcm4oUmVnRXhwVmFsaWRhdG9yLnNwZWNpYWxDaGFyKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY3VzdG9tVmFsaWRhdG9yKSB7XHJcbiAgICAgIHRoaXMuY3JpdGVyaWFNYXAuc2V0KFxyXG4gICAgICAgIENyaXRlcmlhLmF0X2N1c3RvbV9jaGFycyxcclxuICAgICAgICB0aGlzLnBhcnNlQ3VzdG9tVmFsaWRhdG9yc1JlZ2V4KClcclxuICAgICAgKTtcclxuICAgICAgdGhpcy52YWxpZGF0b3JzQXJyYXkucHVzaChcclxuICAgICAgICBWYWxpZGF0b3JzLnBhdHRlcm4odGhpcy5wYXJzZUN1c3RvbVZhbGlkYXRvcnNSZWdleCgpKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY3JpdGVyaWFNYXAuZm9yRWFjaCgodmFsdWU6IGFueSwga2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgdGhpcy52YWxpZGF0b3JzQXJyYXkucHVzaChcclxuICAgICAgICB0aGlzLm1hdFBhc3N3b3JkU3RyZW5ndGhWYWxpZGF0b3IudmFsaWRhdGUoa2V5LCB2YWx1ZSlcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucGFzc3dvcmRGb3JtQ29udHJvbC5zZXRWYWxpZGF0b3JzKFxyXG4gICAgICBWYWxpZGF0b3JzLmNvbXBvc2UoWy4uLnRoaXMudmFsaWRhdG9yc0FycmF5XSlcclxuICAgICk7XHJcbiAgICB0aGlzLlZhbGlkYXRvcnMgPSBWYWxpZGF0b3JzLmNvbXBvc2UoWy4uLnRoaXMudmFsaWRhdG9yc0FycmF5XSk7XHJcbiAgfVxyXG5cclxuICBjYWxjdWxhdGVQYXNzd29yZFN0cmVuZ3RoKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVxdWlyZW1lbnRzOiBBcnJheTxib29sZWFuPiA9IFtdO1xyXG4gICAgY29uc3QgdW5pdCA9IDEwMCAvIHRoaXMuY3JpdGVyaWFNYXAuc2l6ZTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygndGhpcy5jcml0ZXJpYU1hcC5zaXplID0gJywgdGhpcy5jcml0ZXJpYU1hcC5zaXplKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCd1bml0ID0gJywgdW5pdCk7XHJcblxyXG4gICAgcmVxdWlyZW1lbnRzLnB1c2goXHJcbiAgICAgIHRoaXMuZW5hYmxlTGVuZ3RoUnVsZSA/IHRoaXMuX2NvbnRhaW5BdExlYXN0TWluQ2hhcnMoKSA6IGZhbHNlLFxyXG4gICAgICB0aGlzLmVuYWJsZUxvd2VyQ2FzZUxldHRlclJ1bGVcclxuICAgICAgICA/IHRoaXMuX2NvbnRhaW5BdExlYXN0T25lTG93ZXJDYXNlTGV0dGVyKClcclxuICAgICAgICA6IGZhbHNlLFxyXG4gICAgICB0aGlzLmVuYWJsZVVwcGVyQ2FzZUxldHRlclJ1bGVcclxuICAgICAgICA/IHRoaXMuX2NvbnRhaW5BdExlYXN0T25lVXBwZXJDYXNlTGV0dGVyKClcclxuICAgICAgICA6IGZhbHNlLFxyXG4gICAgICB0aGlzLmVuYWJsZURpZ2l0UnVsZSA/IHRoaXMuX2NvbnRhaW5BdExlYXN0T25lRGlnaXQoKSA6IGZhbHNlLFxyXG4gICAgICB0aGlzLmVuYWJsZVNwZWNpYWxDaGFyUnVsZSA/IHRoaXMuX2NvbnRhaW5BdExlYXN0T25lU3BlY2lhbENoYXIoKSA6IGZhbHNlLFxyXG4gICAgICB0aGlzLmN1c3RvbVZhbGlkYXRvciA/IHRoaXMuX2NvbnRhaW5DdXN0b21DaGFycygpIDogZmFsc2VcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5fc3RyZW5ndGggPSByZXF1aXJlbWVudHMuZmlsdGVyKCh2KSA9PiB2KS5sZW5ndGggKiB1bml0O1xyXG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5zdHJlbmd0aCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnbGVuZ3RoID0gJywgdGhpcy5fc3RyZW5ndGggLyB1bml0KTtcclxuICAgIHRoaXMub25TdHJlbmd0aENoYW5nZWQuZW1pdCh0aGlzLnN0cmVuZ3RoKTtcclxuICAgIHRoaXMuc2V0UnVsZXNBbmRWYWxpZGF0b3JzKCk7XHJcbiAgfVxyXG5cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMuX3N0cmVuZ3RoID0gMDtcclxuICAgIHRoaXMuY29udGFpbkF0TGVhc3RNaW5DaGFycyA9XHJcbiAgICAgIHRoaXMuY29udGFpbkF0TGVhc3RPbmVMb3dlckNhc2VMZXR0ZXIgPVxyXG4gICAgICB0aGlzLmNvbnRhaW5BdExlYXN0T25lVXBwZXJDYXNlTGV0dGVyID1cclxuICAgICAgdGhpcy5jb250YWluQXRMZWFzdE9uZURpZ2l0ID1cclxuICAgICAgdGhpcy5jb250YWluQXRDdXN0b21DaGFycyA9XHJcbiAgICAgIHRoaXMuY29udGFpbkF0TGVhc3RPbmVTcGVjaWFsQ2hhciA9XHJcbiAgICAgICAgZmFsc2U7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XHJcbiAgICBpZiAob2JqKSB7XHJcbiAgICAgIHRoaXMuX3N0cmVuZ3RoID0gb2JqO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NvbnRhaW5BdExlYXN0TWluQ2hhcnMoKTogYm9vbGVhbiB7XHJcbiAgICB0aGlzLmNvbnRhaW5BdExlYXN0TWluQ2hhcnMgPSB0aGlzLnBhc3MubGVuZ3RoID49IHRoaXMubWluO1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbkF0TGVhc3RNaW5DaGFycztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NvbnRhaW5BdExlYXN0T25lTG93ZXJDYXNlTGV0dGVyKCk6IGJvb2xlYW4ge1xyXG4gICAgdGhpcy5jb250YWluQXRMZWFzdE9uZUxvd2VyQ2FzZUxldHRlciA9IHRoaXMuY3JpdGVyaWFNYXBcclxuICAgICAgLmdldChDcml0ZXJpYS5hdF9sZWFzdF9vbmVfbG93ZXJfY2FzZV9jaGFyKVxyXG4gICAgICAudGVzdCh0aGlzLnBhc3MpO1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbkF0TGVhc3RPbmVMb3dlckNhc2VMZXR0ZXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jb250YWluQXRMZWFzdE9uZVVwcGVyQ2FzZUxldHRlcigpOiBib29sZWFuIHtcclxuICAgIHRoaXMuY29udGFpbkF0TGVhc3RPbmVVcHBlckNhc2VMZXR0ZXIgPSB0aGlzLmNyaXRlcmlhTWFwXHJcbiAgICAgIC5nZXQoQ3JpdGVyaWEuYXRfbGVhc3Rfb25lX3VwcGVyX2Nhc2VfY2hhcilcclxuICAgICAgLnRlc3QodGhpcy5wYXNzKTtcclxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5BdExlYXN0T25lVXBwZXJDYXNlTGV0dGVyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY29udGFpbkF0TGVhc3RPbmVEaWdpdCgpOiBib29sZWFuIHtcclxuICAgIHRoaXMuY29udGFpbkF0TGVhc3RPbmVEaWdpdCA9IHRoaXMuY3JpdGVyaWFNYXBcclxuICAgICAgLmdldChDcml0ZXJpYS5hdF9sZWFzdF9vbmVfZGlnaXRfY2hhcilcclxuICAgICAgLnRlc3QodGhpcy5wYXNzKTtcclxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5BdExlYXN0T25lRGlnaXQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jb250YWluQXRMZWFzdE9uZVNwZWNpYWxDaGFyKCk6IGJvb2xlYW4ge1xyXG4gICAgdGhpcy5jb250YWluQXRMZWFzdE9uZVNwZWNpYWxDaGFyID0gdGhpcy5jcml0ZXJpYU1hcFxyXG4gICAgICAuZ2V0KENyaXRlcmlhLmF0X2xlYXN0X29uZV9zcGVjaWFsX2NoYXIpXHJcbiAgICAgIC50ZXN0KHRoaXMucGFzcyk7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWluQXRMZWFzdE9uZVNwZWNpYWxDaGFyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY29udGFpbkN1c3RvbUNoYXJzKCk6IGJvb2xlYW4ge1xyXG4gICAgdGhpcy5jb250YWluQXRDdXN0b21DaGFycyA9IHRoaXMuY3JpdGVyaWFNYXBcclxuICAgICAgLmdldChDcml0ZXJpYS5hdF9jdXN0b21fY2hhcnMpXHJcbiAgICAgIC50ZXN0KHRoaXMucGFzcyk7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWluQXRDdXN0b21DaGFycztcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBhc3MpIHtcclxuICAgICAgdGhpcy5jYWxjdWxhdGVQYXNzd29yZFN0cmVuZ3RoKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxtYXQtcHJvZ3Jlc3MtYmFyIFtjb2xvcl09XCJjb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJzdHJlbmd0aFwiXHJcbiAgICAgICAgICAgICAgICAgIG1vZGU9XCJkZXRlcm1pbmF0ZVwiPlxyXG48L21hdC1wcm9ncmVzcy1iYXI+XHJcbiJdfQ==