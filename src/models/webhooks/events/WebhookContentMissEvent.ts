import {EventWebhookEvent} from "./EventWebhookEvent";
import {GeneralAssistantRequest} from "../requests/GeneralAssistantRequest";

/**Event data for when a feature is hit but there is no content for the original request */
export interface WebhookContentMissEvent extends EventWebhookEvent {
    featureTypeId: string;
    reason: string;
    eventType: string;
    slots: { [key: string]: string };
    originalRequest: GeneralAssistantRequest;

}
