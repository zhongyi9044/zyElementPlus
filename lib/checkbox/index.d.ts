import { App } from 'vue';
import Checkbox from './src/checkbox.vue';
declare type IWithInstall<T> = T & {
    install(app: App): void;
};
declare const _Checkbox: IWithInstall<typeof Checkbox>;
export default _Checkbox;
