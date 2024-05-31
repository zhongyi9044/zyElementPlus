<template>
    <div>
        <ZyTransferPanel :data="sourceData" :props="props" @checked-change="onSourceCheckedChange">

        </ZyTransferPanel>

        <div class="zy-transfer__buttons">
            <ZyButton icon="zy-icon-gougou1" @click="addToLeft" :disabled="rightChecked.length === 0"></ZyButton>
            <ZyButton icon="zy-icon-gougouchushou" @click="addToRight" :disabled="leftChecked.length === 0"></ZyButton>
        </div>

        <ZyTransferPanel :data="targetData" :props="props" @checked-change="onTargetCheckedChange">

        </ZyTransferPanel>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from 'vue';
import ZyTransferPanel from './transfer.panel.vue'
import ZyButton from '@zy-ui/button'
import { DataItem, Key, Props } from './transfer.type';
import { useComputedData } from "./useComputedData"
export default defineComponent({
    name: 'ZyTransfer',
    components: {
        ZyTransferPanel,
        ZyButton
    },
    props: {
        data: {
            type: Array as PropType<DataItem[]>
        },
        modelValue: {
            type: Array as PropType<Key[]>
        },
        props: {
            type: Object as PropType<Props>,
            default: () => {
                return {
                    label: "label",
                    key: "key",
                    disabled: "disabled"
                }
            }
        }
    },
    setup(props, { emit }) {
        let { propsKey, sourceData, targetData } = useComputedData(props)
        console.log(props)
        const checkedState = reactive({
            leftChecked: [],
            rightChecked: []
        })
        const onSourceCheckedChange = (leftValue) => {
            checkedState.leftChecked = leftValue
        }
        const onTargetCheckedChange = (rightValue) => {
            checkedState.rightChecked = rightValue
        }
        const addToRight = () => {
            const currentValue = props.modelValue.slice(0)
            checkedState.leftChecked.forEach(item => {
                currentValue.push(item)
            })
            currentValue.sort((a: number, b: number) => a - b)
            emit('update:modelValue', currentValue)
        }
        const addToLeft = () => {
            const currentValue = props.modelValue.slice(0)
            console.log(props.modelValue, currentValue)
            checkedState.rightChecked.forEach(item => {
                let index = currentValue.indexOf(item)
                if (index > -1) {
                    currentValue.splice(index, 1)
                }
            })
            emit('update:modelValue', currentValue)
        }
        return {
            propsKey,
            sourceData,
            targetData,
            onSourceCheckedChange,
            onTargetCheckedChange,
            ...toRefs(checkedState),
            addToLeft,
            addToRight
        }
    }
})
</script>