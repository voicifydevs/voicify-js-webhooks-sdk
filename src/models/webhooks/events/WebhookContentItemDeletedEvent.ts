﻿import {GeneralContentItemModel} from "../../content/GeneralContentItemModel";
import {EventWebhookEvent} from "./EventWebhookEvent";

export interface WebhookContentItemDeletedEvent extends EventWebhookEvent {
    eventType: string;
    applicationFeatureId: string;
    content: GeneralContentItemModel;

}

