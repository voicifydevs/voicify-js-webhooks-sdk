
/**
 * Generic wrapper for a webhook response
 * @typeparam TData 
 */
export default interface WebhookResponse<TData> {
    data: TData;
}
