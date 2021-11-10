import { Component, Input } from '@angular/core';
import { animate, animateChild, keyframes, query, stagger, style, transition, trigger, useAnimation } from '@angular/animations';
import { shake } from '../../animations/index';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/icon";
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
    i0.ɵɵproperty("ngIf", ctx_r0.passwordComponent.containAtLeastOneLowerCaseLetter)("ngIfThen", _r8)("ngIfElse", _r10);
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
    i0.ɵɵproperty("ngIf", ctx_r1.passwordComponent.containAtLeastOneUpperCaseLetter)("ngIfThen", _r13)("ngIfElse", _r15);
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
    i0.ɵɵproperty("ngIf", ctx_r2.passwordComponent.containAtLeastOneDigit)("ngIfThen", _r18)("ngIfElse", _r20);
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
    i0.ɵɵproperty("ngIf", ctx_r3.passwordComponent.containAtLeastOneSpecialChar)("ngIfThen", _r23)("ngIfElse", _r25);
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
    i0.ɵɵproperty("ngIf", ctx_r4.passwordComponent.containAtLeastMinChars)("ngIfThen", _r28)("ngIfElse", _r30);
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
    i0.ɵɵproperty("ngIf", ctx_r5.passwordComponent.containAtCustomChars)("ngIfThen", _r33)("ngIfElse", _r35);
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
    i0.ɵɵproperty("ngIf", ctx_r6.passwordComponent.strength === 100)("ngIfThen", _r38)("ngIfElse", _r40);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("Password's strength = ", ctx_r6.passwordComponent.strength, " %100");
} }
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
            this.minCharsCriteriaMsg = `contains at least ${this.passwordComponent.min} characters`;
        }
    }
}
MatPasswordStrengthInfoComponent.ɵfac = function MatPasswordStrengthInfoComponent_Factory(t) { return new (t || MatPasswordStrengthInfoComponent)(); };
MatPasswordStrengthInfoComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MatPasswordStrengthInfoComponent, selectors: [["mat-password-strength-info"]], inputs: { passwordComponent: "passwordComponent", enableScoreInfo: "enableScoreInfo", lowerCaseCriteriaMsg: "lowerCaseCriteriaMsg", upperCaseCriteriaMsg: "upperCaseCriteriaMsg", digitsCriteriaMsg: "digitsCriteriaMsg", specialCharsCriteriaMsg: "specialCharsCriteriaMsg", customCharsCriteriaMsg: "customCharsCriteriaMsg", minCharsCriteriaMsg: "minCharsCriteriaMsg", matIconDone: "matIconDone", matIconError: "matIconError" }, exportAs: ["matPasswordStrengthInfo"], decls: 9, vars: 8, consts: [["class", "info-row", 4, "ngIf"], [1, "info-row"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["done", ""], ["error", ""], ["color", "primary"], ["color", "warn"]], template: function MatPasswordStrengthInfoComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵproperty("ngIf", ctx.passwordComponent.enableLowerCaseLetterRule);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.passwordComponent.enableUpperCaseLetterRule);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.passwordComponent.enableDigitRule);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.passwordComponent.enableSpecialCharRule);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.passwordComponent.enableLengthRule);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.passwordComponent.customValidator);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.enableScoreInfo);
    } }, directives: [i1.MatCard, i1.MatCardContent, i2.NgIf, i3.MatIcon], styles: ["mat-card[_ngcontent-%COMP%]{flex-direction:row;box-sizing:border-box;display:flex;place-content:stretch center;align-items:stretch;flex:1 1 0}mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{flex-direction:column;box-sizing:border-box;display:flex;max-width:100%;place-content:stretch flex-start;align-items:stretch}mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]{flex-direction:row;box-sizing:border-box;display:flex;align-items:center}"], data: { animation: [
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
                ], template: "<mat-card @list>\r\n  <mat-card-content>\r\n    <div *ngIf=\"passwordComponent.enableLowerCaseLetterRule\" @items class=\"info-row\">\r\n      <div *ngIf=\"passwordComponent.containAtLeastOneLowerCaseLetter; then done else error\" @flipY>\r\n      </div>\r\n      <ng-template #done>\r\n        <mat-icon @positiveState color=\"primary\">{{matIconDone}}</mat-icon>\r\n      </ng-template>\r\n      <ng-template #error>\r\n        <mat-icon @negativeState color=\"warn\">{{matIconError}}</mat-icon>\r\n      </ng-template>\r\n      <span>{{lowerCaseCriteriaMsg}}</span>\r\n    </div>\r\n\r\n    <div *ngIf=\"passwordComponent.enableUpperCaseLetterRule\" @items class=\"info-row\">\r\n      <div *ngIf=\"passwordComponent.containAtLeastOneUpperCaseLetter; then done else error\">\r\n      </div>\r\n      <ng-template #done>\r\n        <mat-icon @positiveState color=\"primary\">{{matIconDone}}</mat-icon>\r\n      </ng-template>\r\n      <ng-template #error>\r\n        <mat-icon @negativeState color=\"warn\">{{matIconError}}</mat-icon>\r\n      </ng-template>\r\n      <span>{{upperCaseCriteriaMsg}}</span>\r\n    </div>\r\n\r\n    <div *ngIf=\"passwordComponent.enableDigitRule\" @items class=\"info-row\">\r\n      <div *ngIf=\"passwordComponent.containAtLeastOneDigit; then done else error\">\r\n      </div>\r\n      <ng-template #done>\r\n        <mat-icon @positiveState color=\"primary\">{{matIconDone}}</mat-icon>\r\n      </ng-template>\r\n      <ng-template #error>\r\n        <mat-icon @negativeState color=\"warn\">{{matIconError}}</mat-icon>\r\n      </ng-template>\r\n      <span>{{digitsCriteriaMsg}}</span>\r\n    </div>\r\n\r\n    <div *ngIf=\"passwordComponent.enableSpecialCharRule\" @items class=\"info-row\">\r\n      <div *ngIf=\"passwordComponent.containAtLeastOneSpecialChar; then done else error\">\r\n      </div>\r\n      <ng-template #done>\r\n        <mat-icon @positiveState color=\"primary\">{{matIconDone}}</mat-icon>\r\n      </ng-template>\r\n      <ng-template #error>\r\n        <mat-icon @negativeState color=\"warn\">{{matIconError}}</mat-icon>\r\n      </ng-template>\r\n      <span>{{specialCharsCriteriaMsg}}</span>\r\n    </div>\r\n\r\n    <div *ngIf=\"passwordComponent.enableLengthRule\" @items class=\"info-row\">\r\n      <div *ngIf=\"passwordComponent.containAtLeastMinChars; then done else error\">\r\n      </div>\r\n      <ng-template #done>\r\n        <mat-icon @positiveState color=\"primary\">{{matIconDone}}</mat-icon>\r\n      </ng-template>\r\n      <ng-template #error>\r\n        <mat-icon @negativeState color=\"warn\">{{matIconError}}</mat-icon>\r\n      </ng-template>\r\n      <span>{{minCharsCriteriaMsg}}</span>\r\n    </div>\r\n\r\n    <div *ngIf=\"passwordComponent.customValidator\" @items class=\"info-row\">\r\n      <div *ngIf=\"passwordComponent.containAtCustomChars; then done else error\">\r\n      </div>\r\n      <ng-template #done>\r\n        <mat-icon @positiveState color=\"primary\">{{matIconDone}}</mat-icon>\r\n      </ng-template>\r\n      <ng-template #error>\r\n        <mat-icon @negativeState color=\"warn\">{{matIconError}}</mat-icon>\r\n      </ng-template>\r\n      <span>{{customCharsCriteriaMsg}}</span>\r\n    </div>\r\n\r\n    <div *ngIf=\"enableScoreInfo\" @items class=\"info-row\">\r\n      <div *ngIf=\"passwordComponent.strength === 100; then done else error\">\r\n      </div>\r\n      <ng-template #done>\r\n        <mat-icon @positiveState color=\"primary\">{{matIconDone}}</mat-icon>\r\n      </ng-template>\r\n      <ng-template #error>\r\n        <mat-icon @negativeState color=\"warn\">{{matIconError}}</mat-icon>\r\n      </ng-template>\r\n      <span>Password's strength = {{passwordComponent.strength}} %100</span>\r\n    </div>\r\n\r\n  </mat-card-content>\r\n</mat-card>", styles: ["mat-card{flex-direction:row;box-sizing:border-box;display:flex;place-content:stretch center;align-items:stretch;flex:1 1 0}mat-card mat-card-content{flex-direction:column;box-sizing:border-box;display:flex;max-width:100%;place-content:stretch flex-start;align-items:stretch}mat-card mat-card-content mat-icon{margin-right:10px}mat-card mat-card-content .info-row{flex-direction:row;box-sizing:border-box;display:flex;align-items:center}\n"] }]
    }], null, { passwordComponent: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXBhc3N3b3JkLXN0cmVuZ3RoLWluZm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1tYXRlcmlhbC1leHRlbnNpb25zL3Bhc3N3b3JkLXN0cmVuZ3RoL3NyYy9saWIvY29tcG9uZW50L21hdC1wYXNzd29yZC1zdHJlbmd0aC1pbmZvL21hdC1wYXNzd29yZC1zdHJlbmd0aC1pbmZvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZXh0ZW5zaW9ucy9wYXNzd29yZC1zdHJlbmd0aC9zcmMvbGliL2NvbXBvbmVudC9tYXQtcGFzc3dvcmQtc3RyZW5ndGgtaW5mby9tYXQtcGFzc3dvcmQtc3RyZW5ndGgtaW5mby5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUV2RCxPQUFPLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUMvSCxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7Ozs7OztJQ0F2QyxzQkFDTTs7SUFEZ0Ysa0NBQU07OztJQUcxRixtQ0FBeUM7SUFBQSxZQUFlO0lBQUEsaUJBQVc7OztJQUF6RCwwQ0FBYztJQUFpQixlQUFlO0lBQWYsd0NBQWU7OztJQUd4RCxtQ0FBc0M7SUFBQSxZQUFnQjtJQUFBLGlCQUFXOzs7SUFBdkQsMENBQWM7SUFBYyxlQUFnQjtJQUFoQiwwQ0FBZ0I7OztJQVAxRCw4QkFBaUY7SUFDL0UsdUZBQ007SUFDTix3SUFFYztJQUNkLHdJQUVjO0lBQ2QsNEJBQU07SUFBQSxZ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SixTQUFTLEVBQ1AscUVBQXFFO29DQUN2RSxNQUFNLEVBQUUsR0FBRztpQ0FDWixDQUFDO2dDQUNGLEtBQUssQ0FBQztvQ0FDSixTQUFTLEVBQ1AscUVBQXFFO29DQUN2RSxNQUFNLEVBQUUsR0FBRztpQ0FDWixDQUFDO2dDQUNGLEtBQUssQ0FBQztvQ0FDSixTQUFTLEVBQUUseUNBQXlDO29DQUNwRCxNQUFNLEVBQUUsQ0FBQztpQ0FDVixDQUFDOzZCQUNILENBQUMsQ0FDSDt5QkFDRixFQUFFLEVBQUMsTUFBTSxFQUFFLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQyxFQUFDLENBQUM7cUJBQzVELENBQUM7b0JBQ0YsT0FBTyxDQUFDLGVBQWUsRUFBRTt3QkFDdkIsVUFBVSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQzFDLENBQUM7aUJBQ0g7Z0JBS0QsaUJBQWlCO2tCQURoQixLQUFLO1lBSU4sZUFBZTtrQkFEZCxLQUFLO1lBSU4sb0JBQW9CO2tCQURuQixLQUFLO1lBSU4sb0JBQW9CO2tCQURuQixLQUFLO1lBSU4saUJBQWlCO2tCQURoQixLQUFLO1lBSU4sdUJBQXVCO2tCQUR0QixLQUFLO1lBSU4sc0JBQXNCO2tCQURyQixLQUFLO1lBSU4sbUJBQW1CO2tCQURsQixLQUFLO1lBSU4sV0FBVztrQkFEVixLQUFLO1lBSU4sWUFBWTtrQkFEWCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01hdFBhc3N3b3JkU3RyZW5ndGhDb21wb25lbnR9IGZyb20gJy4uL21hdC1wYXNzd29yZC1zdHJlbmd0aC9tYXQtcGFzc3dvcmQtc3RyZW5ndGguY29tcG9uZW50JztcclxuaW1wb3J0IHthbmltYXRlLCBhbmltYXRlQ2hpbGQsIGtleWZyYW1lcywgcXVlcnksIHN0YWdnZXIsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCB1c2VBbmltYXRpb259IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQge3NoYWtlfSBmcm9tICcuLi8uLi9hbmltYXRpb25zL2luZGV4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWF0LXBhc3N3b3JkLXN0cmVuZ3RoLWluZm8nLFxyXG4gIGV4cG9ydEFzOiAnbWF0UGFzc3dvcmRTdHJlbmd0aEluZm8nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXQtcGFzc3dvcmQtc3RyZW5ndGgtaW5mby5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbWF0LXBhc3N3b3JkLXN0cmVuZ3RoLWluZm8uY29tcG9uZW50LnNjc3MnXSxcclxuICBhbmltYXRpb25zOiBbXHJcbiAgICAvLyBuaWNlIHN0YWdnZXIgZWZmZWN0IHdoZW4gc2hvd2luZyBleGlzdGluZyBlbGVtZW50c1xyXG4gICAgdHJpZ2dlcignbGlzdCcsIFtcclxuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xyXG4gICAgICAgIC8vIGNoaWxkIGFuaW1hdGlvbiBzZWxlY3RvciArIHN0YWdnZXJcclxuICAgICAgICBxdWVyeSgnQGl0ZW1zJyxcclxuICAgICAgICAgIHN0YWdnZXIoMzAwLCBhbmltYXRlQ2hpbGQoKSlcclxuICAgICAgICApXHJcbiAgICAgIF0pLFxyXG4gICAgXSksXHJcbiAgICB0cmlnZ2VyKCdpdGVtcycsIFtcclxuICAgICAgLy8gY3ViaWMtYmV6aWVyIGZvciBhIHRpbnkgYm91bmNpbmcgZmVlbFxyXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXHJcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NjYWxlKDAuNSknLCBvcGFjaXR5OiAwfSksXHJcbiAgICAgICAgYW5pbWF0ZSgnMXMgY3ViaWMtYmV6aWVyKC44LC0wLjYsMC4yLDEuNSknLFxyXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NjYWxlKDEpJywgb3BhY2l0eTogMX0pKVxyXG4gICAgICBdKSxcclxuICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xyXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdzY2FsZSgxKScsIG9wYWNpdHk6IDEsIGhlaWdodDogJyonfSksXHJcbiAgICAgICAgYW5pbWF0ZSgnMXMgY3ViaWMtYmV6aWVyKC44LC0wLjYsMC4yLDEuNSknLFxyXG4gICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NjYWxlKDAuNSknLCBvcGFjaXR5OiAwLCBoZWlnaHQ6ICcwcHgnLCBtYXJnaW46ICcwcHgnfSkpXHJcbiAgICAgIF0pLFxyXG4gICAgXSksXHJcbiAgICB0cmlnZ2VyKCdwb3NpdGl2ZVN0YXRlJywgW1xyXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXHJcbiAgICAgICAgc3R5bGUoeydiYWNrZmFjZS12aXNpYmlsaXR5JzogJ3Zpc2libGUnfSksXHJcbiAgICAgICAgYW5pbWF0ZShcclxuICAgICAgICAgICd7eyB0aW1pbmcgfX1zIHt7IGRlbGF5IH19cyBlYXNlLWluJyxcclxuICAgICAgICAgIGtleWZyYW1lcyhbXHJcbiAgICAgICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTpcclxuICAgICAgICAgICAgICAgICdwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2Qoe3sgcm90YXRlWCB9fSwge3sgcm90YXRlWSB9fSwgMCwgOTBkZWcpJyxcclxuICAgICAgICAgICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06XHJcbiAgICAgICAgICAgICAgICAncGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKHt7IHJvdGF0ZVggfX0sIHt7IHJvdGF0ZVkgfX0sIDAsIC0yMGRlZyknLFxyXG4gICAgICAgICAgICAgIG9mZnNldDogMC40LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTpcclxuICAgICAgICAgICAgICAgICdwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2Qoe3sgcm90YXRlWCB9fSwge3sgcm90YXRlWSB9fSwgMCwgMTBkZWcpJyxcclxuICAgICAgICAgICAgICBvZmZzZXQ6IDAuNixcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06XHJcbiAgICAgICAgICAgICAgICAncGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKHt7IHJvdGF0ZVggfX0sIHt7IHJvdGF0ZVkgfX0sIDAsIC01ZGVnKScsXHJcbiAgICAgICAgICAgICAgb2Zmc2V0OiAwLjgsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiAncGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDAsIDAsIDApJyxcclxuICAgICAgICAgICAgICBvZmZzZXQ6IDEsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgXSlcclxuICAgICAgICApLFxyXG4gICAgICBdLCB7cGFyYW1zOiB7dGltaW5nOiAxLCBkZWxheTogMCwgcm90YXRlWDogMSwgcm90YXRlWTogMH19KSxcclxuICAgIF0pLFxyXG4gICAgdHJpZ2dlcignbmVnYXRpdmVTdGF0ZScsIFtcclxuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgdXNlQW5pbWF0aW9uKHNoYWtlKSksXHJcbiAgICBdKSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0UGFzc3dvcmRTdHJlbmd0aEluZm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHBhc3N3b3JkQ29tcG9uZW50OiBNYXRQYXNzd29yZFN0cmVuZ3RoQ29tcG9uZW50O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGVuYWJsZVNjb3JlSW5mbyA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGxvd2VyQ2FzZUNyaXRlcmlhTXNnID0gJ2NvbnRhaW5zIGF0IGxlYXN0IG9uZSBsb3dlciBjaGFyYWN0ZXInO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHVwcGVyQ2FzZUNyaXRlcmlhTXNnID0gJ2NvbnRhaW5zIGF0IGxlYXN0IG9uZSB1cHBlciBjaGFyYWN0ZXInO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGRpZ2l0c0NyaXRlcmlhTXNnID0gJ2NvbnRhaW5zIGF0IGxlYXN0IG9uZSBkaWdpdCBjaGFyYWN0ZXInO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNwZWNpYWxDaGFyc0NyaXRlcmlhTXNnID0gJ2NvbnRhaW5zIGF0IGxlYXN0IG9uZSBzcGVjaWFsIGNoYXJhY3Rlcic7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY3VzdG9tQ2hhcnNDcml0ZXJpYU1zZyA9ICdjb250YWlucyBhdCBsZWFzdCBvbmUgY3VzdG9tIGNoYXJhY3Rlcic7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgbWluQ2hhcnNDcml0ZXJpYU1zZzogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG1hdEljb25Eb25lID0gJ2RvbmUnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG1hdEljb25FcnJvciA9ICdlcnJvcic7XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm1pbkNoYXJzQ3JpdGVyaWFNc2cpIHtcclxuICAgICAgdGhpcy5taW5DaGFyc0NyaXRlcmlhTXNnID0gYGNvbnRhaW5zIGF0IGxlYXN0ICR7dGhpcy5wYXNzd29yZENvbXBvbmVudC5taW59IGNoYXJhY3RlcnNgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8bWF0LWNhcmQgQGxpc3Q+XHJcbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8ZGl2ICpuZ0lmPVwicGFzc3dvcmRDb21wb25lbnQuZW5hYmxlTG93ZXJDYXNlTGV0dGVyUnVsZVwiIEBpdGVtcyBjbGFzcz1cImluZm8tcm93XCI+XHJcbiAgICAgIDxkaXYgKm5nSWY9XCJwYXNzd29yZENvbXBvbmVudC5jb250YWluQXRMZWFzdE9uZUxvd2VyQ2FzZUxldHRlcjsgdGhlbiBkb25lIGVsc2UgZXJyb3JcIiBAZmxpcFk+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8bmctdGVtcGxhdGUgI2RvbmU+XHJcbiAgICAgICAgPG1hdC1pY29uIEBwb3NpdGl2ZVN0YXRlIGNvbG9yPVwicHJpbWFyeVwiPnt7bWF0SWNvbkRvbmV9fTwvbWF0LWljb24+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjZXJyb3I+XHJcbiAgICAgICAgPG1hdC1pY29uIEBuZWdhdGl2ZVN0YXRlIGNvbG9yPVwid2FyblwiPnt7bWF0SWNvbkVycm9yfX08L21hdC1pY29uPlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICA8c3Bhbj57e2xvd2VyQ2FzZUNyaXRlcmlhTXNnfX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2ICpuZ0lmPVwicGFzc3dvcmRDb21wb25lbnQuZW5hYmxlVXBwZXJDYXNlTGV0dGVyUnVsZVwiIEBpdGVtcyBjbGFzcz1cImluZm8tcm93XCI+XHJcbiAgICAgIDxkaXYgKm5nSWY9XCJwYXNzd29yZENvbXBvbmVudC5jb250YWluQXRMZWFzdE9uZVVwcGVyQ2FzZUxldHRlcjsgdGhlbiBkb25lIGVsc2UgZXJyb3JcIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjZG9uZT5cclxuICAgICAgICA8bWF0LWljb24gQHBvc2l0aXZlU3RhdGUgY29sb3I9XCJwcmltYXJ5XCI+e3ttYXRJY29uRG9uZX19PC9tYXQtaWNvbj5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPG5nLXRlbXBsYXRlICNlcnJvcj5cclxuICAgICAgICA8bWF0LWljb24gQG5lZ2F0aXZlU3RhdGUgY29sb3I9XCJ3YXJuXCI+e3ttYXRJY29uRXJyb3J9fTwvbWF0LWljb24+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDxzcGFuPnt7dXBwZXJDYXNlQ3JpdGVyaWFNc2d9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgKm5nSWY9XCJwYXNzd29yZENvbXBvbmVudC5lbmFibGVEaWdpdFJ1bGVcIiBAaXRlbXMgY2xhc3M9XCJpbmZvLXJvd1wiPlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwicGFzc3dvcmRDb21wb25lbnQuY29udGFpbkF0TGVhc3RPbmVEaWdpdDsgdGhlbiBkb25lIGVsc2UgZXJyb3JcIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjZG9uZT5cclxuICAgICAgICA8bWF0LWljb24gQHBvc2l0aXZlU3RhdGUgY29sb3I9XCJwcmltYXJ5XCI+e3ttYXRJY29uRG9uZX19PC9tYXQtaWNvbj5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPG5nLXRlbXBsYXRlICNlcnJvcj5cclxuICAgICAgICA8bWF0LWljb24gQG5lZ2F0aXZlU3RhdGUgY29sb3I9XCJ3YXJuXCI+e3ttYXRJY29uRXJyb3J9fTwvbWF0LWljb24+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDxzcGFuPnt7ZGlnaXRzQ3JpdGVyaWFNc2d9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgKm5nSWY9XCJwYXNzd29yZENvbXBvbmVudC5lbmFibGVTcGVjaWFsQ2hhclJ1bGVcIiBAaXRlbXMgY2xhc3M9XCJpbmZvLXJvd1wiPlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwicGFzc3dvcmRDb21wb25lbnQuY29udGFpbkF0TGVhc3RPbmVTcGVjaWFsQ2hhcjsgdGhlbiBkb25lIGVsc2UgZXJyb3JcIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjZG9uZT5cclxuICAgICAgICA8bWF0LWljb24gQHBvc2l0aXZlU3RhdGUgY29sb3I9XCJwcmltYXJ5XCI+e3ttYXRJY29uRG9uZX19PC9tYXQtaWNvbj5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPG5nLXRlbXBsYXRlICNlcnJvcj5cclxuICAgICAgICA8bWF0LWljb24gQG5lZ2F0aXZlU3RhdGUgY29sb3I9XCJ3YXJuXCI+e3ttYXRJY29uRXJyb3J9fTwvbWF0LWljb24+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDxzcGFuPnt7c3BlY2lhbENoYXJzQ3JpdGVyaWFNc2d9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgKm5nSWY9XCJwYXNzd29yZENvbXBvbmVudC5lbmFibGVMZW5ndGhSdWxlXCIgQGl0ZW1zIGNsYXNzPVwiaW5mby1yb3dcIj5cclxuICAgICAgPGRpdiAqbmdJZj1cInBhc3N3b3JkQ29tcG9uZW50LmNvbnRhaW5BdExlYXN0TWluQ2hhcnM7IHRoZW4gZG9uZSBlbHNlIGVycm9yXCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8bmctdGVtcGxhdGUgI2RvbmU+XHJcbiAgICAgICAgPG1hdC1pY29uIEBwb3NpdGl2ZVN0YXRlIGNvbG9yPVwicHJpbWFyeVwiPnt7bWF0SWNvbkRvbmV9fTwvbWF0LWljb24+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjZXJyb3I+XHJcbiAgICAgICAgPG1hdC1pY29uIEBuZWdhdGl2ZVN0YXRlIGNvbG9yPVwid2FyblwiPnt7bWF0SWNvbkVycm9yfX08L21hdC1pY29uPlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICA8c3Bhbj57e21pbkNoYXJzQ3JpdGVyaWFNc2d9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgKm5nSWY9XCJwYXNzd29yZENvbXBvbmVudC5jdXN0b21WYWxpZGF0b3JcIiBAaXRlbXMgY2xhc3M9XCJpbmZvLXJvd1wiPlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwicGFzc3dvcmRDb21wb25lbnQuY29udGFpbkF0Q3VzdG9tQ2hhcnM7IHRoZW4gZG9uZSBlbHNlIGVycm9yXCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8bmctdGVtcGxhdGUgI2RvbmU+XHJcbiAgICAgICAgPG1hdC1pY29uIEBwb3NpdGl2ZVN0YXRlIGNvbG9yPVwicHJpbWFyeVwiPnt7bWF0SWNvbkRvbmV9fTwvbWF0LWljb24+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjZXJyb3I+XHJcbiAgICAgICAgPG1hdC1pY29uIEBuZWdhdGl2ZVN0YXRlIGNvbG9yPVwid2FyblwiPnt7bWF0SWNvbkVycm9yfX08L21hdC1pY29uPlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICA8c3Bhbj57e2N1c3RvbUNoYXJzQ3JpdGVyaWFNc2d9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgKm5nSWY9XCJlbmFibGVTY29yZUluZm9cIiBAaXRlbXMgY2xhc3M9XCJpbmZvLXJvd1wiPlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwicGFzc3dvcmRDb21wb25lbnQuc3RyZW5ndGggPT09IDEwMDsgdGhlbiBkb25lIGVsc2UgZXJyb3JcIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjZG9uZT5cclxuICAgICAgICA8bWF0LWljb24gQHBvc2l0aXZlU3RhdGUgY29sb3I9XCJwcmltYXJ5XCI+e3ttYXRJY29uRG9uZX19PC9tYXQtaWNvbj5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPG5nLXRlbXBsYXRlICNlcnJvcj5cclxuICAgICAgICA8bWF0LWljb24gQG5lZ2F0aXZlU3RhdGUgY29sb3I9XCJ3YXJuXCI+e3ttYXRJY29uRXJyb3J9fTwvbWF0LWljb24+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDxzcGFuPlBhc3N3b3JkJ3Mgc3RyZW5ndGggPSB7e3Bhc3N3b3JkQ29tcG9uZW50LnN0cmVuZ3RofX0gJTEwMDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbjwvbWF0LWNhcmQ+Il19