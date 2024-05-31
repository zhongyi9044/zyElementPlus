import Button from '@zy-ui/button'
import Icon from '@zy-ui/Icon'
import ButtonGroup from '@zy-ui/button-group'
import Row from '@zy-ui/row'
import Col from '@zy-ui/col'
import Checkbox from '@zy-ui/checkbox'
import CheckboxGroup from '@zy-ui/checkbox-group'
import Transfer from '@zy-ui/transfer'
import { App, createApp } from 'vue'

const components = [
  Button,
  Icon,
  ButtonGroup,
  Col,
  Row,
  Checkbox,
  CheckboxGroup,
  Transfer
]

const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name as string, component)
  })
}

export default {
  install
}