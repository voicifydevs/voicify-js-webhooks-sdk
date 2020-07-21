import FeatureResponseData from "./FeatureResponseData";
import GeneralResponseModel from "./GeneralResponseModel";

export default interface GeneralFeatureResponseData extends GeneralResponseModel, FeatureResponseData
{
    applicationId?: string;
    applicationFeatureId?: string;
    isLive?: boolean;
    hits?: number;
    title?: string;
    requiresParent?: boolean;
    isComplete?: boolean;
}