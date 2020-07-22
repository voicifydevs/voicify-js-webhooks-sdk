import { IntegrationSetupSection } from "./IntegrationSetupSection";

export interface IntegrationSetupResponse
{
    /**A oauth url to redirect the client */
    oAuthUrl: string;
    /**A dictionary of key: additionalPropertyName, value: additionalPropertyType */
    additionalPropertiesConfiguration: { [key: string]: string };
    /**A list of the setup sections to be rendered in the client. */
    aetupSections: IntegrationSetupSection[];
}