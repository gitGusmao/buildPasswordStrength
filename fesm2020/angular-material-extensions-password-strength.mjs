import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, Input, EventEmitter, forwardRef, ChangeDetectionStrategy, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/material/core';
import { MatRippleModule } from '@angular/material/core';
import * as i2 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, Validators, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i1$1 from '@angular/material/progress-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { animation, style, animate, keyframes, trigger, transition, query, stagger, animateChild, useAnimation } from '@angular/animations';
import * as i1$2 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i2$1 from '@angular/common';
import { CommonModule } from '@angular/common';

var Colors;
(function (Colors) {
    Colors["primary"] = "primary";
    Colors["accent"] = "accent";
    Colors["warn"] = "warn";
})(Colors || (Colors = {}));

var Criteria;
(function (Criteria) {
    Criteria["at_least_eight_chars"] = "minChar";
    Criteria["at_least_one_lower_case_char"] = "lowerCase";
    Criteria["at_least_one_upper_case_char"] = "upperCase";
    Criteria["at_least_one_digit_char"] = "digit";
    Criteria["at_least_one_special_char"] = " specialChar";
    Criteria["at_custom_chars"] = "customChars";
})(Criteria || (Criteria = {}));

class MatPassToggleVisibilityComponent {
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

class MatPasswordStrengthValidator {
    isUndefinedOrEmpty(control) {
        if (!control || !control.value || control.value.length === 0) {
            return undefined;
        }
    }
    validate(criteria, regex) {
        const validator = (control) => {
            this.isUndefinedOrEmpty(control);
            if (!regex.test(control.value)) {
                const failed = {};
                failed[criteria] = {
                    actualValue: control.value,
                    requiredPattern: regex
                };
                return failed;
            }
            return undefined;
        };
        return validator;
    }
    confirm(password) {
        const validator = (control) => {
            this.isUndefinedOrEmpty(control);
            if (control.value !== password) {
                return {
                    notConfirmed: {
                        password: password,
                        passwordConfirmation: control.value
                    }
                };
            }
            return undefined;
        };
        return validator;
    }
}

const RegExpValidator = {
    'lowerCase': RegExp(/^(?=.*?[a-z])/),
    'upperCase': RegExp(/^(?=.*?[A-Z])/),
    'digit': RegExp(/^(?=.*?[0-9])/),
    'specialChar': RegExp(/^(?=.*?[" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"])/),
};

class MatPasswordStrengthComponent {
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
MatPasswordStrengthComponent.ɵfac = function MatPasswordStrengthComponent_Factory(t) { return new (t || MatPasswordStrengthComponent)(); };
MatPasswordStrengthComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MatPasswordStrengthComponent, selectors: [["mat-password-strength"]], inputs: { pass: "pass", externalError: "externalError", enableLengthRule: "enableLengthRule", enableLowerCaseLetterRule: "enableLowerCaseLetterRule", enableUpperCaseLetterRule: "enableUpperCaseLetterRule", enableDigitRule: "enableDigitRule", enableSpecialCharRule: "enableSpecialCharRule", min: "min", max: "max", customValidator: "customValidator", warnThreshold: "warnThreshold", accentThreshold: "accentThreshold" }, outputs: { onStrengthChanged: "onStrengthChanged" }, exportAs: ["matPasswordStrength"], features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => MatPasswordStrengthComponent),
                multi: true
            }
        ]), i0.ɵɵNgOnChangesFeature], decls: 1, vars: 2, consts: [["mode", "determinate", 3, "color", "value"]], template: function MatPasswordStrengthComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-progress-bar", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("color", ctx.color)("value", ctx.strength);
    } }, directives: [i1$1.MatProgressBar], styles: [".green   [_nghost-%COMP%]  .mat-progress-bar.mat-primary .mat-progress-bar-fill:after{background-color:#43a047}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatPasswordStrengthComponent, [{
        type: Component,
        args: [{ selector: 'mat-password-strength', exportAs: 'matPasswordStrength', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => MatPasswordStrengthComponent),
                        multi: true
                    }
                ], template: "<mat-progress-bar [color]=\"color\"\r\n                  [value]=\"strength\"\r\n                  mode=\"determinate\">\r\n</mat-progress-bar>\r\n", styles: [".green :host::ng-deep .mat-progress-bar.mat-primary .mat-progress-bar-fill:after{background-color:#43a047}\n"] }]
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

function flipIn(timing, rotateX, rotateY) {
    const params = { timing: timing, delay: 0, rotateX, rotateY };
    return animation([
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
    ], { params });
}
const flipInX = flipIn(1, 1, 0);
const flipInY = flipIn(1, 0, 1);
const shake = animation(animate('{{ timing }}s {{ delay }}s', keyframes([
    style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
    style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.1 }),
    style({ transform: 'translate3d(10px, 0, 0)', offset: 0.2 }),
    style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.3 }),
    style({ transform: 'translate3d(10px, 0, 0)', offset: 0.4 }),
    style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.5 }),
    style({ transform: 'translate3d(10px, 0, 0)', offset: 0.6 }),
    style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.7 }),
    style({ transform: 'translate3d(10px, 0, 0)', offset: 0.8 }),
    style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.9 }),
    style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
])), { params: { timing: 1, delay: 0 } });

function MatPasswordStrengthInfoComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} if (rf & 2) {
    i0.ɵɵproperty("@flipY", undefined);
} }
function MatPasswordStrengthInfoComponent_div_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@positiveState", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r9.matIconDone);
} }
function MatPasswordStrengthInfoComponent_div_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@negativeState", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r11.matIconError);
} }
function MatPasswordStrengthInfoComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, MatPasswordStrengthInfoComponent_div_2_div_1_Template, 1, 1, "div", 2);
    i0.ɵɵtemplate(2, MatPasswordStrengthInfoComponent_div_2_ng_template_2_Template, 2, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, MatPasswordStrengthInfoComponent_div_2_ng_template_4_Template, 2, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r8 = i0.ɵɵreference(3);
    const _r10 = i0.ɵɵreference(5);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@items", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.passComponent.containAtLeastOneLowerCaseLetter)("ngIfThen", _r8)("ngIfElse", _r10);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.lowerCaseCriteriaMsg);
} }
function MatPasswordStrengthInfoComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
function MatPasswordStrengthInfoComponent_div_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@positiveState", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r14.matIconDone);
} }
function MatPasswordStrengthInfoComponent_div_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@negativeState", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r16.matIconError);
} }
function MatPasswordStrengthInfoComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, MatPasswordStrengthInfoComponent_div_3_div_1_Template, 1, 0, "div", 2);
    i0.ɵɵtemplate(2, MatPasswordStrengthInfoComponent_div_3_ng_template_2_Template, 2, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, MatPasswordStrengthInfoComponent_div_3_ng_template_4_Template, 2, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r13 = i0.ɵɵreference(3);
    const _r15 = i0.ɵɵreference(5);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@items", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.passComponent.containAtLeastOneUpperCaseLetter)("ngIfThen", _r13)("ngIfElse", _r15);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.upperCaseCriteriaMsg);
} }
function MatPasswordStrengthInfoComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
function MatPasswordStrengthInfoComponent_div_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@positiveState", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r19.matIconDone);
} }
function MatPasswordStrengthInfoComponent_div_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@negativeState", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r21.matIconError);
} }
function MatPasswordStrengthInfoComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, MatPasswordStrengthInfoComponent_div_4_div_1_Template, 1, 0, "div", 2);
    i0.ɵɵtemplate(2, MatPasswordStrengthInfoComponent_div_4_ng_template_2_Template, 2, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, MatPasswordStrengthInfoComponent_div_4_ng_template_4_Template, 2, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r18 = i0.ɵɵreference(3);
    const _r20 = i0.ɵɵreference(5);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@items", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.passComponent.containAtLeastOneDigit)("ngIfThen", _r18)("ngIfElse", _r20);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r2.digitsCriteriaMsg);
} }
function MatPasswordStrengthInfoComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
function MatPasswordStrengthInfoComponent_div_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@positiveState", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r24.matIconDone);
} }
function MatPasswordStrengthInfoComponent_div_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@negativeState", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r26.matIconError);
} }
function MatPasswordStrengthInfoComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, MatPasswordStrengthInfoComponent_div_5_div_1_Template, 1, 0, "div", 2);
    i0.ɵɵtemplate(2, MatPasswordStrengthInfoComponent_div_5_ng_template_2_Template, 2, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, MatPasswordStrengthInfoComponent_div_5_ng_template_4_Template, 2, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r23 = i0.ɵɵreference(3);
    const _r25 = i0.ɵɵreference(5);
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@items", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.passComponent.containAtLeastOneSpecialChar)("ngIfThen", _r23)("ngIfElse", _r25);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r3.specialCharsCriteriaMsg);
} }
function MatPasswordStrengthInfoComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
function MatPasswordStrengthInfoComponent_div_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r29 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@positiveState", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r29.matIconDone);
} }
function MatPasswordStrengthInfoComponent_div_6_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r31 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@negativeState", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r31.matIconError);
} }
function MatPasswordStrengthInfoComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, MatPasswordStrengthInfoComponent_div_6_div_1_Template, 1, 0, "div", 2);
    i0.ɵɵtemplate(2, MatPasswordStrengthInfoComponent_div_6_ng_template_2_Template, 2, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, MatPasswordStrengthInfoComponent_div_6_ng_template_4_Template, 2, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r28 = i0.ɵɵreference(3);
    const _r30 = i0.ɵɵreference(5);
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@items", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.passComponent.containAtLeastMinChars)("ngIfThen", _r28)("ngIfElse", _r30);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r4.minCharsCriteriaMsg);
} }
function MatPasswordStrengthInfoComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
function MatPasswordStrengthInfoComponent_div_7_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r34 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@positiveState", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r34.matIconDone);
} }
function MatPasswordStrengthInfoComponent_div_7_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r36 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@negativeState", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r36.matIconError);
} }
function MatPasswordStrengthInfoComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, MatPasswordStrengthInfoComponent_div_7_div_1_Template, 1, 0, "div", 2);
    i0.ɵɵtemplate(2, MatPasswordStrengthInfoComponent_div_7_ng_template_2_Template, 2, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, MatPasswordStrengthInfoComponent_div_7_ng_template_4_Template, 2, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r33 = i0.ɵɵreference(3);
    const _r35 = i0.ɵɵreference(5);
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@items", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.passComponent.containAtCustomChars)("ngIfThen", _r33)("ngIfElse", _r35);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r5.customCharsCriteriaMsg);
} }
function MatPasswordStrengthInfoComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
function MatPasswordStrengthInfoComponent_div_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@positiveState", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r39.matIconDone);
} }
function MatPasswordStrengthInfoComponent_div_8_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r41 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@negativeState", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r41.matIconError);
} }
function MatPasswordStrengthInfoComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, MatPasswordStrengthInfoComponent_div_8_div_1_Template, 1, 0, "div", 2);
    i0.ɵɵtemplate(2, MatPasswordStrengthInfoComponent_div_8_ng_template_2_Template, 2, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, MatPasswordStrengthInfoComponent_div_8_ng_template_4_Template, 2, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r38 = i0.ɵɵreference(3);
    const _r40 = i0.ɵɵreference(5);
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@items", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.passComponent.strength === 100)("ngIfThen", _r38)("ngIfElse", _r40);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("Password's strength = ", ctx_r6.passComponent.strength, " %100");
} }
class MatPasswordStrengthInfoComponent {
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
MatPasswordStrengthInfoComponent.ɵfac = function MatPasswordStrengthInfoComponent_Factory(t) { return new (t || MatPasswordStrengthInfoComponent)(); };
MatPasswordStrengthInfoComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MatPasswordStrengthInfoComponent, selectors: [["mat-password-strength-info"]], inputs: { passComponent: "passComponent", enableScoreInfo: "enableScoreInfo", lowerCaseCriteriaMsg: "lowerCaseCriteriaMsg", upperCaseCriteriaMsg: "upperCaseCriteriaMsg", digitsCriteriaMsg: "digitsCriteriaMsg", specialCharsCriteriaMsg: "specialCharsCriteriaMsg", customCharsCriteriaMsg: "customCharsCriteriaMsg", minCharsCriteriaMsg: "minCharsCriteriaMsg", matIconDone: "matIconDone", matIconError: "matIconError" }, exportAs: ["matPasswordStrengthInfo"], decls: 9, vars: 8, consts: [["class", "info-row", 4, "ngIf"], [1, "info-row"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["done", ""], ["error", ""], ["color", "primary"], ["color", "warn"]], template: function MatPasswordStrengthInfoComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card");
        i0.ɵɵelementStart(1, "mat-card-content");
        i0.ɵɵtemplate(2, MatPasswordStrengthInfoComponent_div_2_Template, 8, 5, "div", 0);
        i0.ɵɵtemplate(3, MatPasswordStrengthInfoComponent_div_3_Template, 8, 5, "div", 0);
        i0.ɵɵtemplate(4, MatPasswordStrengthInfoComponent_div_4_Template, 8, 5, "div", 0);
        i0.ɵɵtemplate(5, MatPasswordStrengthInfoComponent_div_5_Template, 8, 5, "div", 0);
        i0.ɵɵtemplate(6, MatPasswordStrengthInfoComponent_div_6_Template, 8, 5, "div", 0);
        i0.ɵɵtemplate(7, MatPasswordStrengthInfoComponent_div_7_Template, 8, 5, "div", 0);
        i0.ɵɵtemplate(8, MatPasswordStrengthInfoComponent_div_8_Template, 8, 5, "div", 0);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("@list", undefined);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.passComponent.enableLowerCaseLetterRule);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.passComponent.enableUpperCaseLetterRule);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.passComponent.enableDigitRule);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.passComponent.enableSpecialCharRule);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.passComponent.enableLengthRule);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.passComponent.customValidator);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.enableScoreInfo);
    } }, directives: [i1$2.MatCard, i1$2.MatCardContent, i2$1.NgIf, i2.MatIcon], styles: ["mat-card[_ngcontent-%COMP%]{flex-direction:row;box-sizing:border-box;display:flex;place-content:stretch center;align-items:stretch;flex:1 1 0}mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{flex-direction:column;box-sizing:border-box;display:flex;max-width:100%;place-content:stretch flex-start;align-items:stretch}mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]{flex-direction:row;box-sizing:border-box;display:flex;align-items:center}"], data: { animation: [
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
        ] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatPasswordStrengthInfoComponent, [{
        type: Component,
        args: [{ selector: 'mat-password-strength-info', exportAs: 'matPasswordStrengthInfo', animations: [
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
                ], template: "<mat-card @list>\r\n  <mat-card-content>\r\n    <div *ngIf=\"passComponent.enableLowerCaseLetterRule\" @items class=\"info-row\">\r\n      <div *ngIf=\"passComponent.containAtLeastOneLowerCaseLetter; then done else error\" @flipY>\r\n      </div>\r\n      <ng-template #done>\r\n        <mat-icon @positiveState color=\"primary\">{{matIconDone}}</mat-icon>\r\n      </ng-template>\r\n      <ng-template #error>\r\n        <mat-icon @negativeState color=\"warn\">{{matIconError}}</mat-icon>\r\n      </ng-template>\r\n      <span>{{lowerCaseCriteriaMsg}}</span>\r\n    </div>\r\n\r\n    <div *ngIf=\"passComponent.enableUpperCaseLetterRule\" @items class=\"info-row\">\r\n      <div *ngIf=\"passComponent.containAtLeastOneUpperCaseLetter; then done else error\">\r\n      </div>\r\n      <ng-template #done>\r\n        <mat-icon @positiveState color=\"primary\">{{matIconDone}}</mat-icon>\r\n      </ng-template>\r\n      <ng-template #error>\r\n        <mat-icon @negativeState color=\"warn\">{{matIconError}}</mat-icon>\r\n      </ng-template>\r\n      <span>{{upperCaseCriteriaMsg}}</span>\r\n    </div>\r\n\r\n    <div *ngIf=\"passComponent.enableDigitRule\" @items class=\"info-row\">\r\n      <div *ngIf=\"passComponent.containAtLeastOneDigit; then done else error\">\r\n      </div>\r\n      <ng-template #done>\r\n        <mat-icon @positiveState color=\"primary\">{{matIconDone}}</mat-icon>\r\n      </ng-template>\r\n      <ng-template #error>\r\n        <mat-icon @negativeState color=\"warn\">{{matIconError}}</mat-icon>\r\n      </ng-template>\r\n      <span>{{digitsCriteriaMsg}}</span>\r\n    </div>\r\n\r\n    <div *ngIf=\"passComponent.enableSpecialCharRule\" @items class=\"info-row\">\r\n      <div *ngIf=\"passComponent.containAtLeastOneSpecialChar; then done else error\">\r\n      </div>\r\n      <ng-template #done>\r\n        <mat-icon @positiveState color=\"primary\">{{matIconDone}}</mat-icon>\r\n      </ng-template>\r\n      <ng-template #error>\r\n        <mat-icon @negativeState color=\"warn\">{{matIconError}}</mat-icon>\r\n      </ng-template>\r\n      <span>{{specialCharsCriteriaMsg}}</span>\r\n    </div>\r\n\r\n    <div *ngIf=\"passComponent.enableLengthRule\" @items class=\"info-row\">\r\n      <div *ngIf=\"passComponent.containAtLeastMinChars; then done else error\">\r\n      </div>\r\n      <ng-template #done>\r\n        <mat-icon @positiveState color=\"primary\">{{matIconDone}}</mat-icon>\r\n      </ng-template>\r\n      <ng-template #error>\r\n        <mat-icon @negativeState color=\"warn\">{{matIconError}}</mat-icon>\r\n      </ng-template>\r\n      <span>{{minCharsCriteriaMsg}}</span>\r\n    </div>\r\n\r\n    <div *ngIf=\"passComponent.customValidator\" @items class=\"info-row\">\r\n      <div *ngIf=\"passComponent.containAtCustomChars; then done else error\">\r\n      </div>\r\n      <ng-template #done>\r\n        <mat-icon @positiveState color=\"primary\">{{matIconDone}}</mat-icon>\r\n      </ng-template>\r\n      <ng-template #error>\r\n        <mat-icon @negativeState color=\"warn\">{{matIconError}}</mat-icon>\r\n      </ng-template>\r\n      <span>{{customCharsCriteriaMsg}}</span>\r\n    </div>\r\n\r\n    <div *ngIf=\"enableScoreInfo\" @items class=\"info-row\">\r\n      <div *ngIf=\"passComponent.strength === 100; then done else error\">\r\n      </div>\r\n      <ng-template #done>\r\n        <mat-icon @positiveState color=\"primary\">{{matIconDone}}</mat-icon>\r\n      </ng-template>\r\n      <ng-template #error>\r\n        <mat-icon @negativeState color=\"warn\">{{matIconError}}</mat-icon>\r\n      </ng-template>\r\n      <span>Password's strength = {{passComponent.strength}} %100</span>\r\n    </div>\r\n\r\n  </mat-card-content>\r\n</mat-card>", styles: ["mat-card{flex-direction:row;box-sizing:border-box;display:flex;place-content:stretch center;align-items:stretch;flex:1 1 0}mat-card mat-card-content{flex-direction:column;box-sizing:border-box;display:flex;max-width:100%;place-content:stretch flex-start;align-items:stretch}mat-card mat-card-content mat-icon{margin-right:10px}mat-card mat-card-content .info-row{flex-direction:row;box-sizing:border-box;display:flex;align-items:center}\n"] }]
    }], null, { passComponent: [{
            type: Input
        }], enableScoreInfo: [{
            type: Input
        }], lowerCaseCriteriaMsg: [{
            type: Input
        }], upperCaseCriteriaMsg: [{
            type: Input
        }], digitsCriteriaMsg: [{
            type: Input
        }], specialCharsCriteriaMsg: [{
            type: Input
        }], customCharsCriteriaMsg: [{
            type: Input
        }], minCharsCriteriaMsg: [{
            type: Input
        }], matIconDone: [{
            type: Input
        }], matIconError: [{
            type: Input
        }] }); })();

class MatPasswordStrengthModule {
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

/*
 * Public API Surface of password-strength
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Colors, Criteria, MatPassToggleVisibilityComponent, MatPasswordStrengthComponent, MatPasswordStrengthInfoComponent, MatPasswordStrengthModule, MatPasswordStrengthValidator, RegExpValidator, flipIn, flipInX, flipInY, shake };
//# sourceMappingURL=angular-material-extensions-password-strength.mjs.map
