import { App } from "vue";
import Row from "../col/src/raw";

Row.install = (app: App): void => {
  app.component(Row.name, Row)
}

export default Row