/**
 * Created by haozi on 6/9/2017.
 */

import test from 'ava'
import remark = require('remark')
import remarkHtml = require('remark-html')
import {Plugin} from '../plugin/Plugin'

import {Image} from '../plugin'
import {IASTNode, IASTNodeImage} from "../interfaces/ASTNode";

function toMarkdown(markdown) {
  return remark()
      .use(() => {
        const defaultOption = {
          imageCdn: 'https://cdn.hao-zi.cn/',
          editView: false,
        }
        const plugin = new Plugin(defaultOption)
        plugin.register(Image)
        return (node: IASTNodeImage, file: any) => {
          plugin.map(node, null, file)
        }
      })
      .use(remarkHtml)
      .processSync(markdown).contents
}
const defalutOption = {
  imageCdn: '233333',
  editView: false
}

test('图片转换测试 -> big', (t) => {
  t.is(toMarkdown(`![test@big](https://test)`),
      `<p><img src="https://test" alt="test" big="true"></p>\n`
  )
})

test('图片转换测试 -> small', (t) => {
  t.is(toMarkdown(`![test@small](https://test)`),
      `<p><img src="https://test" alt="test" small="true"></p>\n`
  )
})

test('图片转换测试 -> 不填参数', (t) => {
  t.is(toMarkdown(`![test](https://test)`),
      `<p><img src="https://test" alt="test" small="true"></p>\n`
  )
})
