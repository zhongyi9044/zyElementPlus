import { defineComponent, computed, provide, h } from 'vue';

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

export { Row as default };
