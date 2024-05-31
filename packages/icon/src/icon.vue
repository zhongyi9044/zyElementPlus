<template>
    <i :class="`zy-icon-${name}`"></i>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'ZyIcon',
    props: {
        name: {
            type: String,
            default: '',
        }
    }
})
</script>