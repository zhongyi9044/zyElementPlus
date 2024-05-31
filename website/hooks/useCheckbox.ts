import { ref } from "vue"

export function useCheckbox() {
  const checkVal = ref(true)
  const checkGroupVal = ref(['深圳', '北京'])
  const checks = ref(['深圳', '天津', '北京', '云南'])
  const checkboxChange = (val) => {
    console.log(val)
  }
  const checkboxGroupChange = (val) => {
    console.log(val, 'group')
  }
  return {
    checkVal,
    checkboxChange,
    checkGroupVal,
    checkboxGroupChange,
    checks
  }
}