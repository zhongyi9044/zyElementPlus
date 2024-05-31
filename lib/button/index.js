import { defineComponent, computed, openBlock, createBlock, createCommentVNode, renderSlot } from 'vue';

var script = defineComponent({
    name: 'ZyButton',
    props: {
        type: {
            type: String,
            default: 'primary',
            vaildator: (val) => {
                return ["primary", "warning", "danger", "default", "info", "success"].includes(val);
            }
        },
        icon: {
            type: String,
            default: '',
        },
        disabeld: Boolean,
        loading: Boolean,
        round: Boolean
    },
    emits: ['buttonClick'],
    setup(props, ctx) {
        const ZyButtonClass = computed(() => [
            "zy-button",
            "zy-button--" + props.type,
            {
                "is-disabled": props.disabeld,
                "is-loading": props.loading,
                "is-round": props.round,
            }
        ]);
        const handleClick = (e) => {
            ctx.emit('buttonClick', e);
        };
        return {
            ZyButtonClass,
            handleClick
        };
    }
});

const _hoisted_1 = {
  key: 0,
  class: "zy-icon-gougou"
};
const _hoisted_2 = { key: 2 };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("button", {
    class: _ctx.ZyButtonClass,
    onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.handleClick && _ctx.handleClick(...args)))
  }, [
    (_ctx.loading)
      ? (openBlock(), createBlock("i", _hoisted_1))
      : createCommentVNode("v-if", true),
    (_ctx.icon && !_ctx.loading)
      ? (openBlock(), createBlock("i", {
          key: 1,
          class: _ctx.icon
        }, null, 2 /* CLASS */))
      : createCommentVNode("v-if", true),
    (_ctx.$slots.default)
      ? (openBlock(), createBlock("span", _hoisted_2, [
          renderSlot(_ctx.$slots, "default")
        ]))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script.render = render;
script.__file = "packages/button/src/button.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const _Button = script;

export { _Button as default };
