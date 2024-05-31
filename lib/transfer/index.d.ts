import { App } from 'vue';
import Transfer from './src/transfer.vue';
declare type IWithInstall<T> = T & {
    install(app: App): void;
};
declare const _Transfer: IWithInstall<typeof Transfer>;
export default _Transfer;
