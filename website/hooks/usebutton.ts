import { ref } from 'vue';
export const useButton = () => {
  const buttonClick = () => {
    console.log('handle-click')
  }
  const buttonLoading = ref(true)
  setTimeout(() => {
    buttonLoading.value = false
  }, 2000)
  return {
    buttonClick,
    buttonLoading
  }
}