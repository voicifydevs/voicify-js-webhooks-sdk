import { MediaItemModel, FollowUpModel, RepromptModel, MediaResponseModel } from "@voicify/voicify-sdk-cms";
import {AccountLinkingModel} from "./AccountLinkingModel";
import {PermissionModel} from "./PermissionModel";

/**
 * Contains basic information shared amongst content fulfillment
 * webhook responses that all must adhere to.
 * /// This model data is merged with the end result to send the response back down the the assistant
 */
export interface ContentFulfillmentWebhookData {
    id?: string;
    content?: string;
    smallImage?: MediaItemModel;
    largeImage?: MediaItemModel;
    backgroundImage?: MediaItemModel;
    audio?: MediaItemModel;
    video?: MediaItemModel;
    displayTextOverride?: string;
    displayTitleOverride?: string;
    followUp?: FollowUpModel;
    reprompt?: RepromptModel;
    accountLinking?: AccountLinkingModel;
    mediaResponse?: MediaResponseModel;
    permissions?: PermissionModel;

    /**Properties here are merged with the Voicify managed session attributes */
    additionalSessionAttributes?: { [key: string]: any };

    /**
     * Keys here are used to remove custom attributes that were previously added by the webhook or other hooks.
     * This cannot be used to clear Voicify internal keys
     */
    removedSessionAttributes?: string[];

    /**Allows for overriding the entire response to the assistant by returning a native assistant response */
    payloadOverride?: any;

}

