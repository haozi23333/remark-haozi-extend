/**
 * Created by haozi on 6/9/2017.
 */

import test from 'ava'
import remark = require('remark')
import remarkHtml = require('remark-html')
import {Plugin} from '../plugin/Plugin'

import {Image} from '../plugin'

function toMarkdown(plugin, markdown) {
  return remark()
    .use(plugin.parse())
    .use(remarkHtml)
    .processSync(markdown).contents
}
const defalutOption = {
  imageCdn: '233333',
  editView: false
}

test('test Image transform', (t) => {

  const plugin = new Plugin(defalutOption)
  plugin.register(Image)
  console.log(toMarkdown(plugin,
    `![@big](https://test)`
  ))
  t.is(toMarkdown(plugin,
  `![@big](https://test)`
  ),
  `<p><img src="https://test" alt="" big="true"></p>`
  )
})
