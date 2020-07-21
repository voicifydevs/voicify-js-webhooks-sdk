import { LanguageModel } from "@voicify/voicify-sdk-cms";

export default interface GeneralContentItemModel 
{
    applicationId?: string;
    applicationFeatureId?: string;
    id?: string;
    isLive?: boolean;
    hits?: number;
    title?: string;
    requiresParent?: boolean;
    isComplete?: boolean;
    modifiedDate?: Date | string;
    createdDate?: Date | string;
    languages?: LanguageModel[];
}