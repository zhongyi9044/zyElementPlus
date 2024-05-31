import { defineComponent, inject, computed, h } from 'vue';

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

export { Col as default };
