<template>
    <div class="zy-checkbox">
        <span class="zy-checkbox__input">
            <input type="checkbox" v-model="model" :checked="isChecked" @change="checkboxChange" :name="name" :disabled="disabled" :indeterminate="indeterminate" :value="label">
        </span>
        <span class="zy-checkbox-label">
            <slot>{{label}}</slot>
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCheckbox } from './useCheckbox';
export default defineComponent({
    name: 'ZyCheckbox',
    props: {
        name: String,
        indeterminate: Boolean,
        checked: Boolean,
        disabled: Boolean,
        label: [String, Number, Boolean],
        modelValue: [String, Number, Boolean],
    },
    emits:['update:modelValue','change'],
    setup(props) {
        return useCheckbox(props)
    }
})
</script>