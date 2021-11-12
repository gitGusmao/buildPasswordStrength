import { Component, ViewEncapsulation, Input, EventEmitter, ChangeDetectionStrategy, forwardRef, Output, NgModule } from '@angular/core';
import { FormControl, Validators, NG_VALUE_ACCESSOR } from '@angular/forms';
import { animation, style, animate, keyframes, trigger, transition, query, stagger, animateChild, useAnimation } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

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

class MatPasswordStrengthModule {
    static forRoot() {
        return {
            ngModule: MatPasswordStrengthModule,
            providers: []
        };
    }
}
MatPasswordStrengthModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

/*
 * Public API Surface of password-strength
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Colors, Criteria, MatPassToggleVisibilityComponent, MatPasswordStrengthComponent, MatPasswordStrengthInfoComponent, MatPasswordStrengthModule, MatPasswordStrengthValidator, RegExpValidator, flipIn, flipInX, flipInY, shake, shake as ɵa };
//# sourceMappingURL=angular-material-extensions-password-strength.js.map
