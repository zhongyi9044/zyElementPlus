<template>
  <div class="zy-transfer__panel">
    <ZyCheckbox v-model="allChecked" @change="changeAllCheck">列表全选反选</ZyCheckbox>
    <div  class="zy-transfer__body">
      <ZyCheckboxGroup v-model="checked">
        <ZyCheckbox v-for="item in data" :key="item[keyProp]" :label="item[keyProp]" :disabled="item[disabledProp]">{{item[labelProp]}}</ZyCheckbox>
      </ZyCheckboxGroup>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from 'vue';
import { Props } from './transfer.type';
import ZyCheckboxGroup from '@zy-ui/checkbox-group';
import ZyCheckbox from '@zy-ui/checkbox'
import { useCheck } from './useCheck';
export default defineComponent({
  name: 'ZyTransferPanel',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    props: Object as PropType<Props>
  },
  emits:['checked-change'],
  setup(props) {
    const panelState = reactive({
      checked: [],
      allChecked: false,
    })
    let {labelProp,keyProp,disabledProp,changeAllCheck}=useCheck(props,panelState)
    return {
      ...toRefs(panelState),
      labelProp,
      keyProp,
      disabledProp,
      changeAllCheck
    }
  }
})
</script>