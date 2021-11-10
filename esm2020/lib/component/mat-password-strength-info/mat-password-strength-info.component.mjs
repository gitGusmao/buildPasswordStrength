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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXBhc3N3b3JkLXN0cmVuZ3RoLWluZm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1tYXRlcmlhbC1leHRlbnNpb25zL3Bhc3N3b3JkLXN0cmVuZ3RoL3NyYy9saWIvY29tcG9uZW50L21hdC1wYXNzd29yZC1zdHJlbmd0aC1pbmZvL21hdC1wYXNzd29yZC1zdHJlbmd0aC1pbmZvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZXh0ZW5zaW9ucy9wYXNzd29yZC1zdHJlbmd0aC9zcmMvbGliL2NvbXBvbmVudC9tYXQtcGFzc3dvcmQtc3RyZW5ndGgtaW5mby9tYXQtcGFzc3dvcmQtc3RyZW5ndGgtaW5mby5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUV2RCxPQUFPLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUMvSCxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7Ozs7OztJQ0F2QyxzQkFDTTs7SUFENEUsa0NBQU07OztJQUd0RixtQ0FBeUM7SUFBQSxZQUFlO0lBQUEsaUJBQVc7OztJQUF6RCwwQ0FBYztJQUFpQixlQUFlO0lBQWYsd0NBQWU7OztJQUd4RCxtQ0FBc0M7SUFBQSxZQUFnQjtJQUFBLGlCQUFXOzs7SUFBdkQsMENBQWM7SUFBYyxlQUFnQjtJQUFoQiwwQ0FBZ0I7OztJQVAxRCw4QkFBNkU7SUFDM0UsdUZBQ007SUFDTix3SUFFYztJQUNkLHdJQUVjO0lBQ2QsNEJBQU07SUFBQSxZ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U0FBUyxFQUNQLHFFQUFxRTtvQ0FDdkUsTUFBTSxFQUFFLEdBQUc7aUNBQ1osQ0FBQztnQ0FDRixLQUFLLENBQUM7b0NBQ0osU0FBUyxFQUNQLHFFQUFxRTtvQ0FDdkUsTUFBTSxFQUFFLEdBQUc7aUNBQ1osQ0FBQztnQ0FDRixLQUFLLENBQUM7b0NBQ0osU0FBUyxFQUFFLHlDQUF5QztvQ0FDcEQsTUFBTSxFQUFFLENBQUM7aUNBQ1YsQ0FBQzs2QkFDSCxDQUFDLENBQ0g7eUJBQ0YsRUFBRSxFQUFDLE1BQU0sRUFBRSxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUMsRUFBQyxDQUFDO3FCQUM1RCxDQUFDO29CQUNGLE9BQU8sQ0FBQyxlQUFlLEVBQUU7d0JBQ3ZCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUMxQyxDQUFDO2lCQUNIO2dCQUtELGFBQWE7a0JBRFosS0FBSztZQUlOLGVBQWU7a0JBRGQsS0FBSztZQUlOLG9CQUFvQjtrQkFEbkIsS0FBSztZQUlOLG9CQUFvQjtrQkFEbkIsS0FBSztZQUlOLGlCQUFpQjtrQkFEaEIsS0FBSztZQUlOLHVCQUF1QjtrQkFEdEIsS0FBSztZQUlOLHNCQUFzQjtrQkFEckIsS0FBSztZQUlOLG1CQUFtQjtrQkFEbEIsS0FBSztZQUlOLFdBQVc7a0JBRFYsS0FBSztZQUlOLFlBQVk7a0JBRFgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNYXRQYXNzd29yZFN0cmVuZ3RoQ29tcG9uZW50fSBmcm9tICcuLi9tYXQtcGFzc3dvcmQtc3RyZW5ndGgvbWF0LXBhc3N3b3JkLXN0cmVuZ3RoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7YW5pbWF0ZSwgYW5pbWF0ZUNoaWxkLCBrZXlmcmFtZXMsIHF1ZXJ5LCBzdGFnZ2VyLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciwgdXNlQW5pbWF0aW9ufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHtzaGFrZX0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucy9pbmRleCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21hdC1wYXNzd29yZC1zdHJlbmd0aC1pbmZvJyxcclxuICBleHBvcnRBczogJ21hdFBhc3N3b3JkU3RyZW5ndGhJbmZvJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWF0LXBhc3N3b3JkLXN0cmVuZ3RoLWluZm8uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21hdC1wYXNzd29yZC1zdHJlbmd0aC1pbmZvLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgYW5pbWF0aW9uczogW1xyXG4gICAgLy8gbmljZSBzdGFnZ2VyIGVmZmVjdCB3aGVuIHNob3dpbmcgZXhpc3RpbmcgZWxlbWVudHNcclxuICAgIHRyaWdnZXIoJ2xpc3QnLCBbXHJcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcclxuICAgICAgICAvLyBjaGlsZCBhbmltYXRpb24gc2VsZWN0b3IgKyBzdGFnZ2VyXHJcbiAgICAgICAgcXVlcnkoJ0BpdGVtcycsXHJcbiAgICAgICAgICBzdGFnZ2VyKDMwMCwgYW5pbWF0ZUNoaWxkKCkpXHJcbiAgICAgICAgKVxyXG4gICAgICBdKSxcclxuICAgIF0pLFxyXG4gICAgdHJpZ2dlcignaXRlbXMnLCBbXHJcbiAgICAgIC8vIGN1YmljLWJlemllciBmb3IgYSB0aW55IGJvdW5jaW5nIGZlZWxcclxuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xyXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdzY2FsZSgwLjUpJywgb3BhY2l0eTogMH0pLFxyXG4gICAgICAgIGFuaW1hdGUoJzFzIGN1YmljLWJlemllciguOCwtMC42LDAuMiwxLjUpJyxcclxuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdzY2FsZSgxKScsIG9wYWNpdHk6IDF9KSlcclxuICAgICAgXSksXHJcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcclxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2NhbGUoMSknLCBvcGFjaXR5OiAxLCBoZWlnaHQ6ICcqJ30pLFxyXG4gICAgICAgIGFuaW1hdGUoJzFzIGN1YmljLWJlemllciguOCwtMC42LDAuMiwxLjUpJyxcclxuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdzY2FsZSgwLjUpJywgb3BhY2l0eTogMCwgaGVpZ2h0OiAnMHB4JywgbWFyZ2luOiAnMHB4J30pKVxyXG4gICAgICBdKSxcclxuICAgIF0pLFxyXG4gICAgdHJpZ2dlcigncG9zaXRpdmVTdGF0ZScsIFtcclxuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xyXG4gICAgICAgIHN0eWxlKHsnYmFja2ZhY2UtdmlzaWJpbGl0eSc6ICd2aXNpYmxlJ30pLFxyXG4gICAgICAgIGFuaW1hdGUoXHJcbiAgICAgICAgICAne3sgdGltaW5nIH19cyB7eyBkZWxheSB9fXMgZWFzZS1pbicsXHJcbiAgICAgICAgICBrZXlmcmFtZXMoW1xyXG4gICAgICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06XHJcbiAgICAgICAgICAgICAgICAncGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKHt7IHJvdGF0ZVggfX0sIHt7IHJvdGF0ZVkgfX0sIDAsIDkwZGVnKScsXHJcbiAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOlxyXG4gICAgICAgICAgICAgICAgJ3BlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCh7eyByb3RhdGVYIH19LCB7eyByb3RhdGVZIH19LCAwLCAtMjBkZWcpJyxcclxuICAgICAgICAgICAgICBvZmZzZXQ6IDAuNCxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06XHJcbiAgICAgICAgICAgICAgICAncGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKHt7IHJvdGF0ZVggfX0sIHt7IHJvdGF0ZVkgfX0sIDAsIDEwZGVnKScsXHJcbiAgICAgICAgICAgICAgb2Zmc2V0OiAwLjYsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOlxyXG4gICAgICAgICAgICAgICAgJ3BlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCh7eyByb3RhdGVYIH19LCB7eyByb3RhdGVZIH19LCAwLCAtNWRlZyknLFxyXG4gICAgICAgICAgICAgIG9mZnNldDogMC44LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3BlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAwLCAwLCAwKScsXHJcbiAgICAgICAgICAgICAgb2Zmc2V0OiAxLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIF0pXHJcbiAgICAgICAgKSxcclxuICAgICAgXSwge3BhcmFtczoge3RpbWluZzogMSwgZGVsYXk6IDAsIHJvdGF0ZVg6IDEsIHJvdGF0ZVk6IDB9fSksXHJcbiAgICBdKSxcclxuICAgIHRyaWdnZXIoJ25lZ2F0aXZlU3RhdGUnLCBbXHJcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIHVzZUFuaW1hdGlvbihzaGFrZSkpLFxyXG4gICAgXSksXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdFBhc3N3b3JkU3RyZW5ndGhJbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KClcclxuICBwYXNzQ29tcG9uZW50OiBNYXRQYXNzd29yZFN0cmVuZ3RoQ29tcG9uZW50O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGVuYWJsZVNjb3JlSW5mbyA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGxvd2VyQ2FzZUNyaXRlcmlhTXNnID0gJ2NvbnRhaW5zIGF0IGxlYXN0IG9uZSBsb3dlciBjaGFyYWN0ZXInO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHVwcGVyQ2FzZUNyaXRlcmlhTXNnID0gJ2NvbnRhaW5zIGF0IGxlYXN0IG9uZSB1cHBlciBjaGFyYWN0ZXInO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGRpZ2l0c0NyaXRlcmlhTXNnID0gJ2NvbnRhaW5zIGF0IGxlYXN0IG9uZSBkaWdpdCBjaGFyYWN0ZXInO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNwZWNpYWxDaGFyc0NyaXRlcmlhTXNnID0gJ2NvbnRhaW5zIGF0IGxlYXN0IG9uZSBzcGVjaWFsIGNoYXJhY3Rlcic7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY3VzdG9tQ2hhcnNDcml0ZXJpYU1zZyA9ICdjb250YWlucyBhdCBsZWFzdCBvbmUgY3VzdG9tIGNoYXJhY3Rlcic7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgbWluQ2hhcnNDcml0ZXJpYU1zZzogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG1hdEljb25Eb25lID0gJ2RvbmUnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG1hdEljb25FcnJvciA9ICdlcnJvcic7XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm1pbkNoYXJzQ3JpdGVyaWFNc2cpIHtcclxuICAgICAgdGhpcy5taW5DaGFyc0NyaXRlcmlhTXNnID0gYGNvbnRhaW5zIGF0IGxlYXN0ICR7dGhpcy5wYXNzQ29tcG9uZW50Lm1pbn0gY2hhcmFjdGVyc2BcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsIjxtYXQtY2FyZCBAbGlzdD5cclxuICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgIDxkaXYgKm5nSWY9XCJwYXNzQ29tcG9uZW50LmVuYWJsZUxvd2VyQ2FzZUxldHRlclJ1bGVcIiBAaXRlbXMgY2xhc3M9XCJpbmZvLXJvd1wiPlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwicGFzc0NvbXBvbmVudC5jb250YWluQXRMZWFzdE9uZUxvd2VyQ2FzZUxldHRlcjsgdGhlbiBkb25lIGVsc2UgZXJyb3JcIiBAZmxpcFk+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8bmctdGVtcGxhdGUgI2RvbmU+XHJcbiAgICAgICAgPG1hdC1pY29uIEBwb3NpdGl2ZVN0YXRlIGNvbG9yPVwicHJpbWFyeVwiPnt7bWF0SWNvbkRvbmV9fTwvbWF0LWljb24+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjZXJyb3I+XHJcbiAgICAgICAgPG1hdC1pY29uIEBuZWdhdGl2ZVN0YXRlIGNvbG9yPVwid2FyblwiPnt7bWF0SWNvbkVycm9yfX08L21hdC1pY29uPlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICA8c3Bhbj57e2xvd2VyQ2FzZUNyaXRlcmlhTXNnfX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2ICpuZ0lmPVwicGFzc0NvbXBvbmVudC5lbmFibGVVcHBlckNhc2VMZXR0ZXJSdWxlXCIgQGl0ZW1zIGNsYXNzPVwiaW5mby1yb3dcIj5cclxuICAgICAgPGRpdiAqbmdJZj1cInBhc3NDb21wb25lbnQuY29udGFpbkF0TGVhc3RPbmVVcHBlckNhc2VMZXR0ZXI7IHRoZW4gZG9uZSBlbHNlIGVycm9yXCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8bmctdGVtcGxhdGUgI2RvbmU+XHJcbiAgICAgICAgPG1hdC1pY29uIEBwb3NpdGl2ZVN0YXRlIGNvbG9yPVwicHJpbWFyeVwiPnt7bWF0SWNvbkRvbmV9fTwvbWF0LWljb24+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjZXJyb3I+XHJcbiAgICAgICAgPG1hdC1pY29uIEBuZWdhdGl2ZVN0YXRlIGNvbG9yPVwid2FyblwiPnt7bWF0SWNvbkVycm9yfX08L21hdC1pY29uPlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICA8c3Bhbj57e3VwcGVyQ2FzZUNyaXRlcmlhTXNnfX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2ICpuZ0lmPVwicGFzc0NvbXBvbmVudC5lbmFibGVEaWdpdFJ1bGVcIiBAaXRlbXMgY2xhc3M9XCJpbmZvLXJvd1wiPlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwicGFzc0NvbXBvbmVudC5jb250YWluQXRMZWFzdE9uZURpZ2l0OyB0aGVuIGRvbmUgZWxzZSBlcnJvclwiPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG5nLXRlbXBsYXRlICNkb25lPlxyXG4gICAgICAgIDxtYXQtaWNvbiBAcG9zaXRpdmVTdGF0ZSBjb2xvcj1cInByaW1hcnlcIj57e21hdEljb25Eb25lfX08L21hdC1pY29uPlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICA8bmctdGVtcGxhdGUgI2Vycm9yPlxyXG4gICAgICAgIDxtYXQtaWNvbiBAbmVnYXRpdmVTdGF0ZSBjb2xvcj1cIndhcm5cIj57e21hdEljb25FcnJvcn19PC9tYXQtaWNvbj5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPHNwYW4+e3tkaWdpdHNDcml0ZXJpYU1zZ319PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiAqbmdJZj1cInBhc3NDb21wb25lbnQuZW5hYmxlU3BlY2lhbENoYXJSdWxlXCIgQGl0ZW1zIGNsYXNzPVwiaW5mby1yb3dcIj5cclxuICAgICAgPGRpdiAqbmdJZj1cInBhc3NDb21wb25lbnQuY29udGFpbkF0TGVhc3RPbmVTcGVjaWFsQ2hhcjsgdGhlbiBkb25lIGVsc2UgZXJyb3JcIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjZG9uZT5cclxuICAgICAgICA8bWF0LWljb24gQHBvc2l0aXZlU3RhdGUgY29sb3I9XCJwcmltYXJ5XCI+e3ttYXRJY29uRG9uZX19PC9tYXQtaWNvbj5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPG5nLXRlbXBsYXRlICNlcnJvcj5cclxuICAgICAgICA8bWF0LWljb24gQG5lZ2F0aXZlU3RhdGUgY29sb3I9XCJ3YXJuXCI+e3ttYXRJY29uRXJyb3J9fTwvbWF0LWljb24+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDxzcGFuPnt7c3BlY2lhbENoYXJzQ3JpdGVyaWFNc2d9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgKm5nSWY9XCJwYXNzQ29tcG9uZW50LmVuYWJsZUxlbmd0aFJ1bGVcIiBAaXRlbXMgY2xhc3M9XCJpbmZvLXJvd1wiPlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwicGFzc0NvbXBvbmVudC5jb250YWluQXRMZWFzdE1pbkNoYXJzOyB0aGVuIGRvbmUgZWxzZSBlcnJvclwiPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG5nLXRlbXBsYXRlICNkb25lPlxyXG4gICAgICAgIDxtYXQtaWNvbiBAcG9zaXRpdmVTdGF0ZSBjb2xvcj1cInByaW1hcnlcIj57e21hdEljb25Eb25lfX08L21hdC1pY29uPlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICA8bmctdGVtcGxhdGUgI2Vycm9yPlxyXG4gICAgICAgIDxtYXQtaWNvbiBAbmVnYXRpdmVTdGF0ZSBjb2xvcj1cIndhcm5cIj57e21hdEljb25FcnJvcn19PC9tYXQtaWNvbj5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPHNwYW4+e3ttaW5DaGFyc0NyaXRlcmlhTXNnfX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2ICpuZ0lmPVwicGFzc0NvbXBvbmVudC5jdXN0b21WYWxpZGF0b3JcIiBAaXRlbXMgY2xhc3M9XCJpbmZvLXJvd1wiPlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwicGFzc0NvbXBvbmVudC5jb250YWluQXRDdXN0b21DaGFyczsgdGhlbiBkb25lIGVsc2UgZXJyb3JcIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjZG9uZT5cclxuICAgICAgICA8bWF0LWljb24gQHBvc2l0aXZlU3RhdGUgY29sb3I9XCJwcmltYXJ5XCI+e3ttYXRJY29uRG9uZX19PC9tYXQtaWNvbj5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPG5nLXRlbXBsYXRlICNlcnJvcj5cclxuICAgICAgICA8bWF0LWljb24gQG5lZ2F0aXZlU3RhdGUgY29sb3I9XCJ3YXJuXCI+e3ttYXRJY29uRXJyb3J9fTwvbWF0LWljb24+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDxzcGFuPnt7Y3VzdG9tQ2hhcnNDcml0ZXJpYU1zZ319PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiAqbmdJZj1cImVuYWJsZVNjb3JlSW5mb1wiIEBpdGVtcyBjbGFzcz1cImluZm8tcm93XCI+XHJcbiAgICAgIDxkaXYgKm5nSWY9XCJwYXNzQ29tcG9uZW50LnN0cmVuZ3RoID09PSAxMDA7IHRoZW4gZG9uZSBlbHNlIGVycm9yXCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8bmctdGVtcGxhdGUgI2RvbmU+XHJcbiAgICAgICAgPG1hdC1pY29uIEBwb3NpdGl2ZVN0YXRlIGNvbG9yPVwicHJpbWFyeVwiPnt7bWF0SWNvbkRvbmV9fTwvbWF0LWljb24+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjZXJyb3I+XHJcbiAgICAgICAgPG1hdC1pY29uIEBuZWdhdGl2ZVN0YXRlIGNvbG9yPVwid2FyblwiPnt7bWF0SWNvbkVycm9yfX08L21hdC1pY29uPlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICA8c3Bhbj5QYXNzd29yZCdzIHN0cmVuZ3RoID0ge3twYXNzQ29tcG9uZW50LnN0cmVuZ3RofX0gJTEwMDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbjwvbWF0LWNhcmQ+Il19