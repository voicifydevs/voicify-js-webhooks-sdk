import EventWebhookEvent from "./EventWebhookEvent";
import { WebhookModel } from "@voicify/voicify-sdk-cms";

export default interface QueueableEventWebhookEvent {
    eventType: string;
    data: EventWebhookEvent;
    webhook: WebhookModel;
}

