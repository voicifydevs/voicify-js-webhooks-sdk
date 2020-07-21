import WebhookResponse from "./WebhookResponse";
import ContentFulfillmentWebhookData from "./ContentFulfillmentWebhookData";

/**The base webhook response for content fulfillment */
export default interface GeneralFulfillmentResponse extends WebhookResponse<ContentFulfillmentWebhookData> {
}
