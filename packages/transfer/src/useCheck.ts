import { computed, getCurrentInstance, watch } from "vue";
import { IPanelState, ITransferPanelProps } from "./transfer.type";

export const useCheck = (props: ITransferPanelProps, panelState: IPanelState) => {
  const { emit } = getCurrentInstance()
  const labelProp = computed(() => props.props.label)
  const keyProp = computed(() => props.props.key)
  const disabledProp = computed(() => props.props.disabled)
  const checkableData = computed(() => {
    return props.data.filter(item => !item[disabledProp.value])
  })
  const changeAllCheck = (val) => {
    panelState.allChecked = val
    panelState.checked = val ? checkableData.value.map(item => item[keyProp.value]) : []
  }
  watch(() => panelState.checked, () => {
    let checkKeys = checkableData.value.map(item => item[keyProp.value])
    panelState.allChecked = checkKeys.every(item => panelState.checked.includes(item)) && checkKeys.length !== 0
    emit('checked-change', panelState.checked)
  })
  watch(() => props.data, () => {
    panelState.allChecked = false
    panelState.checked = []
  })
  return {
    labelProp,
    keyProp,
    disabledProp,
    changeAllCheck
  }
}