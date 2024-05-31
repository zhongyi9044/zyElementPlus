import { ComputedRef } from "vue";
export interface ICheckboxProps {
    indeterminate?: boolean;
    checked?: boolean;
    name?: string;
    disabled?: boolean;
    label?: string | number | boolean;
    modelValue?: string | number | boolean;
}
export interface ICheckboxGroupProvide {
    name?: string;
    modelValue?: ComputedRef;
    changeEvent?: (val: unknown) => any;
}
