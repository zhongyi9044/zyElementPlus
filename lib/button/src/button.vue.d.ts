declare type IButtonType = "primary" | "warning" | "danger" | "default" | "info" | "success";
import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<IButtonType>;
        default: string;
        vaildator: (val: string) => boolean;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    disabeld: BooleanConstructor;
    loading: BooleanConstructor;
    round: BooleanConstructor;
}, {
    ZyButtonClass: import("vue").ComputedRef<(string | {
        "is-disabled": boolean;
        "is-loading": boolean;
        "is-round": boolean;
    })[]>;
    handleClick: (e: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "buttonClick"[], "buttonClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type: IButtonType;
    icon: string;
    disabeld: boolean;
    loading: boolean;
    round: boolean;
} & {}>, {
    type: IButtonType;
    icon: string;
    disabeld: boolean;
    loading: boolean;
    round: boolean;
}>;
export default _default;
