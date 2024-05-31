import { defineComponent, computed, provide, openBlock, createBlock, renderSlot } from 'vue';

var script = defineComponent({
    name: 'ZyCheckboxGroup',
    props: {
        modelValue: Array,
    },
    emits: ['change', "update:modelValue"],
    setup(props, { emit }) {
        const modelValue = computed(() => props.modelValue);
        const changeEvent = (val) => {
            emit("change", val);
            emit("update:modelValue", val);
        };
        provide('ZyCheckboxGroup', {
            name: 'ZyCheckboxGroup',
            modelValue,
            changeEvent
        });
    }
});

const _hoisted_1 = { claas: "zy-checkbox-group" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

script.render = render;
script.__file = "packages/checkbox/src/checkbox-group.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const _CheckboxGroup = script;

export { _CheckboxGroup as default };
