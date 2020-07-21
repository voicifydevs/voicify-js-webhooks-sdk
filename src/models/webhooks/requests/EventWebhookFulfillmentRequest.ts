import GeneralAssistantRequest from "./GeneralAssistantRequest";
import { EventResponseModel } from "@voicify/voicify-sdk-cms";
import { EventQueryType } from "./EventQueryType";

/**
 * Request model for sending to a webhook to fulfill the response
 * for the event item
 */
export default interface EventWebhookFulfillmentRequest {
    id: string;
    title: string;
    eventName: string;
    description: string;
    ownerName: string;
    status: string;
    locationName: string;
    address: string;
    eventStartDate: Date | string;
    eventEndDate: Date | string | null;
    applicationId: string;
    applicationFeatureId: string;
    response: EventResponseModel;
    categories: string[];
    queryType: EventQueryType;
    parameters: { [key: string]: string };
    originalRequest: GeneralAssistantRequest;
}
