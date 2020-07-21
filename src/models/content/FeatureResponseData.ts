import ResponseModel from "./ResponseModel";

export default interface FeatureResponseData extends ResponseModel {
    applicationId?: string;
    applicationFeatureId?: string;
    id?: string;
    isLive?: boolean;
    hits?: number;
    title?: string;
    requiresParent?: boolean;
    isComplete?: boolean;
}