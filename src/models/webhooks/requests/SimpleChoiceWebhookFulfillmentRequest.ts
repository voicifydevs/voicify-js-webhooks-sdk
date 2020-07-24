import { SimpleChoiceType } from "./SimpleChoiceType";
import { SimpleChoiceSearchResponseModel } from "../../content/SimpleChoiceSearchResponseModel";
import { GeneralAssistantRequest } from "./GeneralAssistantRequest";

/**Webhook request to fulfill the response of a latest message */
export interface SimpleChoiceWebhookFulfillmentRequest {
    id?: string;
    choiceType?: SimpleChoiceType | null;
    title?: string;
    applicationId?: string;
    response?: SimpleChoiceSearchResponseModel;
    applicationFeatureId?: string;
    parameters?: { [key: string]: string };
    originalRequest?: GeneralAssistantRequest;
}
