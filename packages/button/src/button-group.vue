<template>
  <div class="zy-button-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  name: 'ZyButtonGroup',
});
</script>