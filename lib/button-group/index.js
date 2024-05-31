import { defineComponent, openBlock, createBlock, renderSlot } from 'vue';

var script = defineComponent({
    name: 'ZyButtonGroup',
});

const _hoisted_1 = { class: "zy-button-group" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

script.render = render;
script.__file = "packages/button/src/button-group.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const _ButtonGroup = script;

export { _ButtonGroup as default };
