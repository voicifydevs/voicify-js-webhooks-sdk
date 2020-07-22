import {GeneralResponseModel} from "../../content/GeneralResponseModel";
import {GeneralAssistantRequest} from "./GeneralAssistantRequest";

/**
 * The top level webhook fulfillment request model
 * containing the data sent to a webhook to get a content
 * fulfillment response
 */
export interface GeneralWebhookFulfillmentRequest {
    id: string;
    content: string;
    title: string;
    applicationId: string;
    applicationFeatureId: string;
    response: GeneralResponseModel;
    parameters: { [key: string]: string };
    originalRequest: GeneralAssistantRequest;
}
