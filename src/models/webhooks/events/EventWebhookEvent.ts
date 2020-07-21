
/**
 * Model used for tracking a basic analytics event
 * for end-user usage of the application
 */
export default interface EventWebhookEvent {
    ed: string;
    applicationId: string;
    eventDate: Date | string;
    eventType: string // overridden by inheritted implementation
    assistant: string;
    requestId: string;
    sessionId: string;
    deviceTargetId: string;
    parameters: { [key: string]: string };
}

