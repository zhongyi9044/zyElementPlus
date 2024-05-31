<template>
    <button :class="ZyButtonClass" @click="handleClick">
        <i v-if="loading" class="zy-icon-gougou"></i>
        <i v-if="icon && !loading" :class="icon"></i>
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script lang="ts">
type IButtonType = "primary" | "warning" | "danger" | "default" | "info" | "success";
import { computed, defineComponent, PropType } from "vue";
export default defineComponent({
    name: 'ZyButton',
    props: {
        type: {
            type: String as PropType<IButtonType>,//type值的类型，PropType是vue3提供的获取类型的值方法
            default: 'primary',
            vaildator: (val: string) => {
                return ["primary", "warning", "danger", "default", "info", "success"].includes(val)
            }
        },
        icon: {
            type: String,
            default: '',
        },
        disabeld: Boolean,
        loading: Boolean,
        round: Boolean
    },
    emits:['click'],
    setup(props, ctx) {
        const ZyButtonClass = computed(() => [
            "zy-button",
            "zy-button--" + props.type,
            {
                "is-disabled": props.disabeld,
                "is-loading": props.loading,
                "is-round": props.round,
            }
        ]);
        const handleClick=(e)=>{
            ctx.emit('click',e)
        }
        return {
            ZyButtonClass,
            handleClick
        }
    }
});
</script>