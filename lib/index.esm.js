import { defineComponent, computed, openBlock, createBlock, createCommentVNode, renderSlot, provide, h, inject, getCurrentInstance, createVNode, withDirectives, vModelCheckbox, createTextVNode, toDisplayString } from 'vue';

var script$5 = defineComponent({
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

const _hoisted_1$3 = {
  key: 0,
  class: "zy-icon-gougou"
};
const _hoisted_2$1 = { key: 2 };

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("button", {
    class: _ctx.ZyButtonClass,
    onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.handleClick && _ctx.handleClick(...args)))
  }, [
    (_ctx.loading)
      ? (openBlock(), createBlock("i", _hoisted_1$3))
      : createCommentVNode("v-if", true),
    (_ctx.icon && !_ctx.loading)
      ? (openBlock(), createBlock("i", {
          key: 1,
          class: _ctx.icon
        }, null, 2 /* CLASS */))
      : createCommentVNode("v-if", true),
    (_ctx.$slots.default)
      ? (openBlock(), createBlock("span", _hoisted_2$1, [
          renderSlot(_ctx.$slots, "default")
        ]))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script$5.render = render$5;
script$5.__file = "packages/button/src/button.vue";

script$5.install = (app) => {
    app.component(script$5.name, script$5);
};
const _Button = script$5;

var script$4 = defineComponent({
    name: 'ZyIcon',
    props: {
        name: {
            type: String,
            default: '',
        }
    }
});

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("i", {
    class: `zy-icon-${_ctx.name}`
  }, null, 2 /* CLASS */))
}

script$4.render = render$4;
script$4.__file = "packages/icon/src/icon.vue";

script$4.install = (app) => {
    app.component(script$4.name, script$4);
};
const _Icon = script$4;

var script$3 = defineComponent({
    name: 'ZyButtonGroup',
});

const _hoisted_1$2 = { class: "zy-button-group" };

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1$2, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

script$3.render = render$3;
script$3.__file = "packages/button/src/button-group.vue";

script$3.install = (app) => {
    app.component(script$3.name, script$3);
};
const _ButtonGroup = script$3;

var Row = defineComponent({
    name: 'ZyRow',
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        gutter: {
            type: Number,
            default: 0
        },
        justify: {
            type: String,
            default: 'start'
        }
    },
    setup(props, { slots }) {
        const ZyRowClass = computed(() => [
            'zy-row',
            props.justify !== 'start' ? `is-justify-${props.justify}` : ''
        ]);
        const styles = computed(() => {
            let ret = {
                marginLeft: '',
                marginRight: ''
            };
            if (props.gutter) {
                ret.marginLeft = `-${props.gutter / 2}px`;
                ret.marginRight = `-${props.gutter / 2}px`;
            }
            return ret;
        });
        provide('ZyRow', props.gutter);
        return () => h(props.tag, {
            class: ZyRowClass.value,
            style: styles.value
        }, slots.default?.());
    }
});

Row.install = (app) => {
    app.component(Row.name, Row);
};

var Col = defineComponent({
    name: 'ZyCol',
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        span: {
            type: Number,
            default: 24
        },
        offset: {
            type: Number,
            default: 0
        }
    },
    setup(props, { slots }) {
        const gutter = inject('ZyRow', 0);
        const ZyColClass = computed(() => {
            const ret = [];
            const pos = ['span', 'offset']; //将数组内容变成常量，下面item就有提示了
            pos.forEach(item => {
                const size = props[item];
                if (typeof size == 'number' && size > 0) {
                    ret.push(`zy-col-${item}-${props[item]}`);
                }
            });
            return [
                'zy-col',
                ...ret
            ];
        });
        const styles = computed(() => {
            if (gutter !== 0) {
                return {
                    paddingLeft: gutter / 2 + 'px',
                    paddingRight: gutter / 2 + 'px',
                };
            }
        });
        return () => h(props.tag, {
            class: ZyColClass.value,
            style: styles.value
        }, slots.default?.());
    }
});

Col.install = (app) => {
    app.component(Col.name, Col);
};

const useCheckboxGroup = () => {
    const checkboxGroup = inject('ZyCheckboxGroup', {});
    const isGroup = checkboxGroup.name == 'ZyCheckboxGroup';
    return {
        checkboxGroup,
        isGroup
    };
};
const useModel = (props) => {
    const { emit } = getCurrentInstance();
    const { isGroup, checkboxGroup } = useCheckboxGroup();
    const store = computed(() => checkboxGroup ? checkboxGroup.modelValue?.value : props.modelValue);
    const model = computed({
        get() {
            return isGroup ? store.value : props.modelValue;
        },
        set(val) {
            if (isGroup) {
                checkboxGroup.changeEvent(val);
            }
            else {
                emit('update:modelValue', val);
            }
        }
    });
    return model;
};
const useCheckboxStatus = (props, model) => {
    const isChecked = computed(() => {
        const value = model.value;
        if (Array.isArray(value)) {
            return value.includes(props.label);
        }
        else {
            return value;
        }
    });
    return isChecked;
};
const useEvent = () => {
    const { emit } = getCurrentInstance();
    const checkboxChange = (e) => {
        const target = e.target;
        emit('change', target.checked);
    };
    return checkboxChange;
};
const useCheckbox = (props) => {
    let model = useModel(props);
    const isChecked = useCheckboxStatus(props, model);
    const checkboxChange = useEvent();
    return {
        model,
        isChecked,
        checkboxChange
    };
};

var script$2 = defineComponent({
    name: 'ZyCheckbox',
    props: {
        name: String,
        indeterminate: Boolean,
        checked: Boolean,
        disabled: Boolean,
        label: [String, Number, Boolean],
        modelValue: [String, Number, Boolean],
    },
    emits: ['update:modelValue', 'change'],
    setup(props) {
        return useCheckbox(props);
    }
});

const _hoisted_1$1 = { class: "zy-checkbox" };
const _hoisted_2 = { class: "zy-checkbox__input" };
const _hoisted_3 = { class: "zy-checkbox-label" };

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1$1, [
    createVNode("span", _hoisted_2, [
      withDirectives(createVNode("input", {
        type: "checkbox",
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (_ctx.model = $event)),
        checked: _ctx.isChecked,
        onChange: _cache[2] || (_cache[2] = (...args) => (_ctx.checkboxChange && _ctx.checkboxChange(...args))),
        name: _ctx.name,
        disabled: _ctx.disabled,
        indeterminate: _ctx.indeterminate,
        value: _ctx.label
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, ["checked", "name", "disabled", "indeterminate", "value"]), [
        [vModelCheckbox, _ctx.model]
      ])
    ]),
    createVNode("span", _hoisted_3, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createTextVNode(toDisplayString(_ctx.label), 1 /* TEXT */)
      ])
    ])
  ]))
}

script$2.render = render$2;
script$2.__file = "packages/checkbox/src/checkbox.vue";

script$2.install = (app) => {
    app.component(script$2.name, script$2);
};
const _Checkbox = script$2;

var script$1 = defineComponent({
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

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

script$1.render = render$1;
script$1.__file = "packages/checkbox/src/checkbox-group.vue";

script$1.install = (app) => {
    app.component(script$1.name, script$1);
};
const _CheckboxGroup = script$1;

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

const components = [
    _Button,
    _Icon,
    _ButtonGroup,
    Col,
    Row,
    _Checkbox,
    _CheckboxGroup,
    _Transfer
];
const install = (app) => {
    components.forEach(component => {
        app.component(component.name, component);
    });
};
var index = {
    install
};

export { index as default };
