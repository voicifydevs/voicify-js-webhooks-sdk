import NumberRangeSearchResponseModel from "../../content/NumberRangeSearchResponseModel";
import GeneralAssistantRequest from "./GeneralAssistantRequest";

/**Webhook request to fulfill the response of a number range */
export default interface NumberRangeWebhookFulfillmentRequest {
    id: string;
    minimumValue: number | null;
    maximumValue: number | null;
    title: string;
    applicationId: string;
    applicationFeatureId: string;
    response: NumberRangeSearchResponseModel;
    parameters: { [key: string]: string };
    originalRequest: GeneralAssistantRequest;
}

