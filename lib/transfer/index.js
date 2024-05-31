import { defineComponent, openBlock, createBlock } from 'vue';

var script = defineComponent({
    name: 'ZyTransfer'
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", null, " transfer "))
}

script.render = render;
script.__file = "packages/transfer/src/transfer.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const _Transfer = script;

export { _Transfer as default };
