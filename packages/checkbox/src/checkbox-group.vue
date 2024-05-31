<template>
  <div claas="zy-checkbox-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, provide } from 'vue'
export default defineComponent({
  name: 'ZyCheckboxGroup',
  props: {
    modelValue: Array,
  },
  emits: ['change',"update:modelValue"],
  setup(props,{emit}) {
    const modelValue = computed(() => props.modelValue)
    const changeEvent=(val)=>{
      emit("change",val);
      emit("update:modelValue",val)
    }
    provide('ZyCheckboxGroup',{
      name:'ZyCheckboxGroup',
      modelValue,
      changeEvent
    })
  }
})
</script>