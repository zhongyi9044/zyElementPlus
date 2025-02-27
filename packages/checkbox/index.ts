import { App, createApp } from 'vue'
import Checkbox from './src/checkbox.vue'

Checkbox.install=(app:App):void=>{
  app.component(Checkbox.name as string,Checkbox)
}

type IWithInstall<T>=T & {install(app:App):void}

const _Checkbox:IWithInstall<typeof Checkbox>=Checkbox

export default _Checkbox