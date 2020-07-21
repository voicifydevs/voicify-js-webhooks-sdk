import IntegrationSetupField from "./IntegrationSetupField";

export default interface IntegrationSetupProperty {
    id: string;
    required: boolean;
    label: string;
    tooltip: string;
    field: IntegrationSetupField;
}