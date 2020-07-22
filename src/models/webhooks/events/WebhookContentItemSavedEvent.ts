import {EventWebhookEvent} from "./EventWebhookEvent";
import {GeneralContentItemModel} from "../../content/GeneralContentItemModel";

export interface WebhookContentItemSavedEvent extends EventWebhookEvent {
    eventType: string;
    applicationFeatureId: string;
    content: GeneralContentItemModel;
}
