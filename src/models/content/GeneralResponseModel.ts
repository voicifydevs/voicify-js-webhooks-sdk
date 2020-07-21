import ResponseModel from "./ResponseModel";
import { MediaItemModel, MediaResponseContainerModel, FollowUpModel, RepromptModel } from "@voicify/voicify-sdk-cms";

export default interface GeneralResponseModel extends ResponseModel {
    id?: string;
    smallImage?: MediaItemModel;
    largeImage?: MediaItemModel;
    backgroundImage?: MediaItemModel;
    audio?: MediaItemModel;
    video?: MediaItemModel;
    content?: string;
    reprompt?: RepromptModel;
    followUp?: FollowUpModel;
    mediaResponseContainer?: MediaResponseContainerModel;
    createdDate?: Date;
    modifiedDate?: Date;
    mediaResponseContainerId?: string;
    displayTextOverride?: string;
    displayTitleOverride?: string;
    followUpId?: string;
    repromptId?: string;
}