import {WebhookResponse} from "./WebhookResponse";
import {ContentFulfillmentWebhookData} from "./ContentFulfillmentWebhookData";

/**The base webhook response for content fulfillment */
export interface GeneralFulfillmentResponse extends WebhookResponse<ContentFulfillmentWebhookData> {
}
