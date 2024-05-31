import { computed, getCurrentInstance, inject, WritableComputedRef } from "vue";
import { ICheckboxGroupProvide, ICheckboxProps } from "./checkbox.types";

const useCheckboxGroup = () => {
  const checkboxGroup = inject<ICheckboxGroupProvide>('ZyCheckboxGroup', {})
  const isGroup = checkboxGroup.name == 'ZyCheckboxGroup'
  return {
    checkboxGroup,
    isGroup
  }
}

const useModel = (props: ICheckboxProps) => {
  const { emit } = getCurrentInstance()
  const { isGroup, checkboxGroup } = useCheckboxGroup()
  const store =computed(()=>
    checkboxGroup ? checkboxGroup.modelValue?.value : props.modelValue
  ) 
  const model = computed({
    get() {
      
      return isGroup ? store.value : props.modelValue
    },
    set(val) {
      if (isGroup) {
       checkboxGroup.changeEvent(val)
      }else{
        emit('update:modelValue', val)
      }
    }
  })
  return model
}

const useCheckboxStatus = (props: ICheckboxProps, model) => {

  const isChecked = computed(() => {
    const value = model.value

    if (Array.isArray(value)) {

      return value.includes(props.label)
    } else {
      return value
    }
  })
  return isChecked
}
const useEvent = () => {
  const { emit } = getCurrentInstance()
  const checkboxChange = (e: InputEvent) => {
    const target = e.target as HTMLInputElement;
    emit('change', target.checked)
  }
  return checkboxChange
}

export const useCheckbox = (props: ICheckboxProps) => {
  let model = useModel(props)

  const isChecked = useCheckboxStatus(props, model);

  const checkboxChange = useEvent();

  return {
    model,
    isChecked,
    checkboxChange
  }
}