import { OnInit } from '@angular/core';
import { MatPasswordStrengthComponent } from '../mat-password-strength/mat-password-strength.component';
import * as i0 from "@angular/core";
export declare class MatPasswordStrengthInfoComponent implements OnInit {
    passComponent: MatPasswordStrengthComponent;
    enableScoreInfo: boolean;
    lowerCaseCriteriaMsg: string;
    upperCaseCriteriaMsg: string;
    digitsCriteriaMsg: string;
    specialCharsCriteriaMsg: string;
    customCharsCriteriaMsg: string;
    minCharsCriteriaMsg: string;
    matIconDone: string;
    matIconError: string;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<MatPasswordStrengthInfoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MatPasswordStrengthInfoComponent, "mat-password-strength-info", ["matPasswordStrengthInfo"], { "passComponent": "passComponent"; "enableScoreInfo": "enableScoreInfo"; "lowerCaseCriteriaMsg": "lowerCaseCriteriaMsg"; "upperCaseCriteriaMsg": "upperCaseCriteriaMsg"; "digitsCriteriaMsg": "digitsCriteriaMsg"; "specialCharsCriteriaMsg": "specialCharsCriteriaMsg"; "customCharsCriteriaMsg": "customCharsCriteriaMsg"; "minCharsCriteriaMsg": "minCharsCriteriaMsg"; "matIconDone": "matIconDone"; "matIconError": "matIconError"; }, {}, never, never>;
}
