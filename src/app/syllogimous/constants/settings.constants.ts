import { EnumQuestionType } from "./question.constants";
// TODO: Add an audio only mode
// TODO: Add simple arithmetic mode
export enum EnumQuestionGroup {
    Comparison = "Comparison",
    Direction = "Direction",
    Arrangement = "Arrangement",
}

export interface ISettingParams {
    enabled: boolean;
    minNumOfPremises: number;
    maxNumOfPremises: number;
    basic: boolean;
    group?: EnumQuestionGroup;
}

export const QUESTION_TYPE_SETTING_PARAMS: Record<EnumQuestionType, ISettingParams> = {
    [EnumQuestionType.Distinction]: {
        enabled: true,
        minNumOfPremises: 2,
        maxNumOfPremises: 20,
        basic: true
    },
    [EnumQuestionType.ComparisonNumerical]: {
        enabled: true,
        minNumOfPremises: 2,
        maxNumOfPremises: 20,
        basic: true,
        group: EnumQuestionGroup.Comparison
    },
    [EnumQuestionType.ComparisonChronological]: {
        enabled: true,
        minNumOfPremises: 2,
        maxNumOfPremises: 20,
        basic: true,
        group: EnumQuestionGroup.Comparison
    },
    [EnumQuestionType.Syllogism]: {
        enabled: true,
        minNumOfPremises: 2,
        maxNumOfPremises: 20,
        basic: true
    },
    [EnumQuestionType.LinearArrangement]: {
        enabled: true,
        minNumOfPremises: 2,
        maxNumOfPremises: 20,
        basic: true,
        group: EnumQuestionGroup.Arrangement
    },
    [EnumQuestionType.CircularArrangement]: {
        enabled: true,
        minNumOfPremises: 2,
        maxNumOfPremises: 20,
        basic: true,
        group: EnumQuestionGroup.Arrangement
    },
    [EnumQuestionType.Direction]: {
        enabled: true,
        minNumOfPremises: 2,
        maxNumOfPremises: 20,
        basic: true,
        group: EnumQuestionGroup.Direction
    },
    [EnumQuestionType.Direction3DSpatial]: {
        enabled: true,
        minNumOfPremises: 2,
        maxNumOfPremises: 20,
        basic: true,
        group: EnumQuestionGroup.Direction
    },
    [EnumQuestionType.Direction3DTemporal]: {
        enabled: true,
        minNumOfPremises: 2,
        maxNumOfPremises: 20,
        basic: true,
        group: EnumQuestionGroup.Direction
    },
    [EnumQuestionType.GraphMatching]: {
        enabled: true,
        minNumOfPremises: 2,
        maxNumOfPremises: 20,
        basic: false
    },
    [EnumQuestionType.Analogy]: {
        enabled: true,
        minNumOfPremises: 3,
        maxNumOfPremises: 20,
        basic: false
    },
    [EnumQuestionType.Binary]: {
        enabled: true,
        minNumOfPremises: 4,
        maxNumOfPremises: 20,
        basic: false
    },
}

export const DEFAULT_ENABLED_FLAGS = {
    meaningfulWords: true,
    meta: true,
    negation: false,
    audioMode: true,
    binary: {
        and: true,
        nand: true,
        or: true,
        nor: true,
        xor: true,
        xnor: true,
    },
};
