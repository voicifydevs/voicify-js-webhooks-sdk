import {EventWebhookEvent} from "./EventWebhookEvent";
import {GeneralAssistantRequest} from "../requests/GeneralAssistantRequest";

/**Event for when a feature is not found for the given intent */
export interface WebhookFeatureMissEvent extends EventWebhookEvent {
    intentName: string;
    originalRequest: GeneralAssistantRequest;
    eventType: string;
}

