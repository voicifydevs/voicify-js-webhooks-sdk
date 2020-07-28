import { FollowUpModel, MediaResponseModel } from "@voicify/voicify-sdk-cms";
import {AccountLinkingModel} from "../responses/AccountLinkingModel";
import {PermissionModel} from "../responses/PermissionModel";
import {GeneralFeatureResponseData} from "../../content/GeneralFeatureResponseData";

/**
 * Contains properties that all feature server response models
 * should have to send back to the voice experience platform
 */
export interface BaseFeatureResponseModel {
    id?: string;
    applicationId?: string;
    userId?: string;
    assistant?: string;
    responseDate?: Date | string;
    followUp?: FollowUpModel;
    mediaResponse?: MediaResponseModel;
    accountLinking?: AccountLinkingModel;
    permissions?: PermissionModel;
    data?: GeneralFeatureResponseData;
    followUpQuestionVariations?: string[];
    /**Properties here are merged with the Voicify managed session attributes */
    additionalSessionAttributes?: { [key: string]: any };
    removedSessionAttributes?: string[];
    /**Allows for overriding the entire response to the assistant by returning a native assistant response */
    payloadOverride?: any;
}

