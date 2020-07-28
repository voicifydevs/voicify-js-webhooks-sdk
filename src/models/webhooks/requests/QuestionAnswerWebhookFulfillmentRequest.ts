import {GeneralAssistantRequest} from "./GeneralAssistantRequest";
import { AnswerModel } from "@voicify/voicify-sdk-cms";

export interface QuestionAnswerWebhookFulfillmentRequest {
    id?: string;
    content?: string;
    applicationId?: string;
    applicationModuleId?: string;
    questionAnswerId?: string;
    title?: string;
    applicationFeatureId?: string;
    isLive?: boolean;
    response?: AnswerModel;
    parameters?: { [key: string]: string };
    originalRequest?: GeneralAssistantRequest;
}
