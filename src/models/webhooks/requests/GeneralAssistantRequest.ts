import ConversationTurnHistoryState from "./ConversationTurnHistoryState";

/**A general mapping of a request from the Voicify assistant API */
export default interface GeneralAssistantRequest {
    requestType: string;
    slots: { [key: string]: string };
    sessionAttributes: { [key: string]: any };
    assistant: string;
    sessionId: string;
    userId: string;
    applicationId: string;
    requestId: string;
    hasDisplay: boolean;
    supportsVideo: boolean;
    hasAudio: boolean;
    nativeRequest: any;
    conversationState: ConversationTurnHistoryState;
    accessToken: string;
    locale: string;
}
