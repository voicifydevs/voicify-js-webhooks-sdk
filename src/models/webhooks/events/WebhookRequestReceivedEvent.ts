import {GeneralAssistantRequest} from "../requests/GeneralAssistantRequest";
import {EventWebhookEvent} from "./EventWebhookEvent";

/**Event for an assistant request received */
export interface WebhookRequestReceivedEvent extends EventWebhookEvent {
    intentName: string;
    originalRequest: GeneralAssistantRequest;

    eventType: string;
}
