import {CustomRequestSearchResponseModel} from "../../content/CustomRequestSearchResponseModel";
import {GeneralAssistantRequest} from "./GeneralAssistantRequest";

/**Webhook request to fulfill the response of a custom request message */
export interface CustomRequestWebhookFulfillmentRequest {
    id: string;
    requestTypes: string;
    requestNames: string;
    platformFilter: string;
    title: string;
    applicationId: string;
    applicationFeatureId: string;
    response: CustomRequestSearchResponseModel;
    parameters: { [key: string]: string };
    originalRequest: GeneralAssistantRequest;
}

