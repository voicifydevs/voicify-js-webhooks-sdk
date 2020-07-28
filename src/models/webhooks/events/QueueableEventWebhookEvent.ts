import {EventWebhookEvent} from "./EventWebhookEvent";
import { WebhookModel } from "@voicify/voicify-sdk-cms";

export interface QueueableEventWebhookEvent {
    eventType: string;
    data: EventWebhookEvent;
    webhook: WebhookModel;
}

