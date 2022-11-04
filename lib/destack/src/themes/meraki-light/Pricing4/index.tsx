import { parse } from 'node-html-parser'
import { source } from './source'

import { cleanHTMLElement } from '../../../utils/html'

import preview from './preview.png'

const root = cleanHTMLElement(parse(source))

const WithProps = { craft: {} }
WithProps.craft = {
  root: root,
  displayName: 'Pricing 4',
  category: 'Pricing',
  image: preview,
  props: {},
  related: {},
}
export default WithProps
