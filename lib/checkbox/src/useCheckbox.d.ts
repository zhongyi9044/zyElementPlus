import { WritableComputedRef } from "vue";
import { ICheckboxProps } from "./checkbox.types";
export declare const useCheckbox: (props: ICheckboxProps) => {
    model: WritableComputedRef<unknown>;
    isChecked: import("vue").ComputedRef<any>;
    checkboxChange: (e: InputEvent) => void;
};
