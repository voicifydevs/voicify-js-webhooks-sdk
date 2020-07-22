import {EventWebhookEvent} from "./EventWebhookEvent";

/**Webhook event for a feature hit */
export interface WebhookFeatureHitEvent extends EventWebhookEvent {
    featureTypeId: string;
    isCustomFeatureServer: boolean;
    intentName: string;

    eventType: string;
}
