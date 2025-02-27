import { defineComponent, openBlock, createBlock } from 'vue';

var script = defineComponent({
    name: 'ZyIcon',
    props: {
        name: {
            type: String,
            default: '',
        }
    }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("i", {
    class: `zy-icon-${_ctx.name}`
  }, null, 2 /* CLASS */))
}

script.render = render;
script.__file = "packages/icon/src/icon.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const _Icon = script;

export { _Icon as default };
