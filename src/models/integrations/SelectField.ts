import IntegrationSetupField from "./IntegrationSetupField";

export default interface SelectField extends IntegrationSetupField {
    options: SelectFieldOption[];
}

export interface SelectFieldOption
{
    value: string;
    label: string;
}