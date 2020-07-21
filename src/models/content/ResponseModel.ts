import { MediaItemModel, RepromptModel } from "@voicify/voicify-sdk-cms";

export default interface ResponseModel {
    id?: string;
    smallImage?: MediaItemModel;
    largeImage?: MediaItemModel;
    backgroundImage?: MediaItemModel;
    audio?: MediaItemModel;
    video?: MediaItemModel;
    content?: string;
    reprompt?: RepromptModel;
    createdDate?: Date;
    modifiedDate?: Date;
    mediaResponseContainerId?: string;
    displayTextOverride?: string;
    displayTitleOverride?: string;
    followUpId?: string;
    repromptId?: string;
}