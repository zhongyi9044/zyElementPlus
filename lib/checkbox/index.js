import { getCurrentInstance, computed, inject, defineComponent, openBlock, createBlock, createVNode, withDirectives, vModelCheckbox, renderSlot, createTextVNode, toDisplayString } from 'vue';

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

var script = defineComponent({
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

const _hoisted_1 = { class: "zy-checkbox" };
const _hoisted_2 = { class: "zy-checkbox__input" };
const _hoisted_3 = { class: "zy-checkbox-label" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1, [
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

script.render = render;
script.__file = "packages/checkbox/src/checkbox.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const _Checkbox = script;

export { _Checkbox as default };
