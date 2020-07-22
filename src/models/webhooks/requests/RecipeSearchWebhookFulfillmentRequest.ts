import { GeneralWebhookFulfillmentRequest } from "./GeneralWebhookFulfillmentRequest";

/**Request model sent to a webhoook for recipe searching */
export interface RecipeSearchWebhookFulfillmentRequest extends GeneralWebhookFulfillmentRequest {
    searchRecipeName: string;
    searchMealType: string;
    searchIngredientNames: string;
    searchCookTime: string | null;
}
