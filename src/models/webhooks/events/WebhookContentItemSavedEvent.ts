import EventWebhookEvent from "./EventWebhookEvent";
import GeneralContentItemModel from "../../content/GeneralContentItemModel";

export default interface WebhookContentItemSavedEvent extends EventWebhookEvent {
    eventType: string;
    applicationFeatureId: string;
    content: GeneralContentItemModel;
}
