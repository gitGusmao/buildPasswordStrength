import { OnInit } from '@angular/core';
import { MatPasswordStrengthComponent } from '../mat-password-strength/mat-password-strength.component';
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
}
