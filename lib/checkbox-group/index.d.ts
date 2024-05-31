import { App } from 'vue';
import CheckboxGroup from '../checkbox/src/checkbox-group.vue';
declare type IWithInstall<T> = T & {
    install(app: App): void;
};
declare const _CheckboxGroup: IWithInstall<typeof CheckboxGroup>;
export default _CheckboxGroup;
