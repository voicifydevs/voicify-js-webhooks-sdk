import {EventWebhookEvent} from "./EventWebhookEvent";
import {BaseFeatureResponseModel} from "../requests/BaseFeatureResponseModel";
import {GeneralAssistantRequest} from "../requests/GeneralAssistantRequest";

/**Event data for when content is found from a request */
export interface WebhookContentHitEvent extends EventWebhookEvent {
    content: BaseFeatureResponseModel;
    originalRequest: GeneralAssistantRequest;
    featureTypeId: string;
    applicationModuleId: string;
    applicationFeatureId: string;
    eventType: string;
}

