<template>
  <div>
    <ZyButton round type="success" :loading="buttonLoading">按钮</ZyButton>
    <ZyButton icon="zy-icon-gougouchushou" round type="primary" loading>按钮</ZyButton>
    <ZyButton icon="zy-icon-gougou1" round type="warning"></ZyButton>
    <ZyButton icon="zy-icon-gougou1" round type="danger">按钮</ZyButton>
    <ZyButton icon="zy-icon-gougou1" round type="info" @click="buttonClick">按钮</ZyButton>
  </div>
  <div>
    <ZyIcon name="gougou"></ZyIcon>
    <ZyIcon name="gougouchushou"></ZyIcon>
    <ZyIcon name="gougou1"></ZyIcon>
  </div>
  <div>
    <ZyButtonGroup>
      <ZyButton icon="zy-icon-gougou1" round type="warning" @click="buttonClick"></ZyButton>
      <ZyButton icon="zy-icon-gougou1" round type="danger" @click="buttonClick">按钮</ZyButton>
    </ZyButtonGroup>
  </div>

  <hr>

  <div>
    <ZyRow>
      <ZyCol :span="6">
        <div style="background-color: red;">111</div>
      </ZyCol>
      <ZyCol :span="6" :offset="6">
        <div style="background-color: yellow;">222</div>
      </ZyCol>
      <ZyCol :span="6">
        <div style="background-color: blue;">333</div>
      </ZyCol>
    </ZyRow>
  </div>
  <div>
    <ZyRow :gutter="2">
      <ZyCol :span="6">
        <div style="background-color: red;">111</div>
      </ZyCol>
      <ZyCol :span="6">
        <div style="background-color: yellow;">222</div>
      </ZyCol>
      <ZyCol :span="6">
        <div style="background-color: blue;">333</div>
      </ZyCol>
      <ZyCol :span="6">
        <div style="background-color: pink;">444</div>
      </ZyCol>
    </ZyRow>
  </div>
  <div>
    <ZyRow :gutter="2" justify="space-around">
      <ZyCol :span="1">
        <div style="background-color: red;">111</div>
      </ZyCol>
      <ZyCol :span="2">
        <div style="background-color: yellow;">222</div>
      </ZyCol>
      <ZyCol :span="3">
        <div style="background-color: blue;">333</div>
      </ZyCol>
      <ZyCol :span="4">
        <div style="background-color: pink;">444</div>
      </ZyCol>
    </ZyRow>
  </div>
  <hr>
  <div>
    {{ checkVal }}
    <ZyCheckbox v-model="checkVal" @change="checkboxChange" disabled indeterminate>checkbox</ZyCheckbox>
  </div>
  <hr>
  <div>
    {{ checkGroupVal }}
    <ZyCheckboxGroup v-model="checkGroupVal" @change="checkboxGroupChange">
      <ZyCheckbox v-for="item in checks" :key="item" :label="item"></ZyCheckbox>
    </ZyCheckboxGroup>
  </div>
  <hr>
  <ZyTransfer v-model="rightValue" :data="transferData" :props="transferProp"></ZyTransfer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useButton } from './hooks/usebutton'
import { useCheckbox } from './hooks/useCheckbox'
export function useTransfer() {
  const generateData = () => {
    const data = []
    for (let i = 1; i <= 40; i++) {
      data.push({
        key: i,
        label: `备选${i}`,
        disabled: i%4===0
      })
    }
    return ref(data)
  }
  return {
    transferData:generateData(),
    rightValue:ref([1,4,6,12,25,24,33,40]),
    transferProp:{
      key:'key',
      label:'label',
      disabled:'disabled',
    }
  }
}
export default defineComponent({
  setup() {
    return {
      ...useButton(),
      ...useCheckbox(),
      ...useTransfer()
    }
  }
})
</script>