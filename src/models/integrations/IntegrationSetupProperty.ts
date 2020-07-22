import {IntegrationSetupField} from "./IntegrationSetupField";

export interface IntegrationSetupProperty {
    id: string;
    required: boolean;
    label: string;
    tooltip: string;
    field: IntegrationSetupField;
}