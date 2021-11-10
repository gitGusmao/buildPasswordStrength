import { AfterContentChecked, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormControl, ValidatorFn } from '@angular/forms';
import { Criteria } from '../../enum';
import { MatPasswordStrengthValidator } from '../../validator';
import { ThemePalette } from '@angular/material/core';
import * as i0 from "@angular/core";
export declare class MatPasswordStrengthComponent implements OnInit, OnChanges, AfterContentChecked, ControlValueAccessor {
    password: string;
    externalError: boolean;
    enableLengthRule: boolean;
    enableLowerCaseLetterRule: boolean;
    enableUpperCaseLetterRule: boolean;
    enableDigitRule: boolean;
    enableSpecialCharRule: boolean;
    min: number;
    max: number;
    customValidator: RegExp;
    warnThreshold: number;
    accentThreshold: number;
    onStrengthChanged: EventEmitter<number>;
    criteriaMap: Map<Criteria, RegExp>;
    containAtLeastMinChars: boolean;
    containAtLeastOneLowerCaseLetter: boolean;
    containAtLeastOneUpperCaseLetter: boolean;
    containAtLeastOneDigit: boolean;
    containAtLeastOneSpecialChar: boolean;
    containAtCustomChars: boolean;
    passwordFormControl: FormControl;
    passwordConfirmationFormControl: FormControl;
    validatorsArray: ValidatorFn[];
    Validators: ValidatorFn;
    matPasswordStrengthValidator: MatPasswordStrengthValidator;
    private _strength;
    get strength(): number;
    private _color;
    get color(): ThemePalette;
    propagateChange: (_: any) => void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    parseCustomValidatorsRegex(value?: string | RegExp): RegExp;
    setRulesAndValidators(): void;
    calculatePasswordStrength(): void;
    reset(): void;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    private _containAtLeastMinChars;
    private _containAtLeastOneLowerCaseLetter;
    private _containAtLeastOneUpperCaseLetter;
    private _containAtLeastOneDigit;
    private _containAtLeastOneSpecialChar;
    private _containCustomChars;
    ngAfterContentChecked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatPasswordStrengthComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MatPasswordStrengthComponent, "mat-password-strength", ["matPasswordStrength"], { "password": "password"; "externalError": "externalError"; "enableLengthRule": "enableLengthRule"; "enableLowerCaseLetterRule": "enableLowerCaseLetterRule"; "enableUpperCaseLetterRule": "enableUpperCaseLetterRule"; "enableDigitRule": "enableDigitRule"; "enableSpecialCharRule": "enableSpecialCharRule"; "min": "min"; "max": "max"; "customValidator": "customValidator"; "warnThreshold": "warnThreshold"; "accentThreshold": "accentThreshold"; }, { "onStrengthChanged": "onStrengthChanged"; }, never, never>;
}
