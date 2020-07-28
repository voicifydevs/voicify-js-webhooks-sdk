import {IntegrationSetupProperty} from "./IntegrationSetupProperty";

export interface IntegrationSetupSection {
    instructionsMarkdown: string;
    properties: IntegrationSetupProperty[];
}