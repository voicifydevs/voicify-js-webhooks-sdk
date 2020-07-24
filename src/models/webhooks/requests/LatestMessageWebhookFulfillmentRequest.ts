import {LatestMessageSearchResponseModel} from "../../content/LatestMessageSearchResponseModel";
import {GeneralAssistantRequest} from "./GeneralAssistantRequest";

/**Webhook request to fulfill the response of a latest message */
export interface LatestMessageWebhookFulfillmentRequest {
    id?: string;
    category?: string;
    title?: string;
    applicationId?: string;
    applicationFeatureId?: string;
    response?: LatestMessageSearchResponseModel;
    parameters?: { [key: string]: string };
    originalRequest?: GeneralAssistantRequest;
}
