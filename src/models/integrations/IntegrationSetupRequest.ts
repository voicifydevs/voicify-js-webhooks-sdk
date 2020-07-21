export default interface IntegrationSetupRequest
{
    accessToken: string;
    organizationId: string;
    additionalProperties: { [key: string]: string };
}