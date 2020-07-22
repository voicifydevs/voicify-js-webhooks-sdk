import {IntegrationSetupResponse} from "./IntegrationSetupResponse";

export interface IntegrationSetupResultResponse extends IntegrationSetupResponse {
    apiUserId: string;
}