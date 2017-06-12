/**
 * Created by haozi on 6/9/2017.
 */

import test from 'ava'
import remark = require('remark')
import remarkHtml = require('remark-html')
import {Plugin} from '../plugin/Plugin'

import {sticker} from '../plugin'
import {IASTNode} from "../interfaces/ASTNode";
import {NodeText} from '../NodeType'

function toMarkdown(markdown) {
  return remark()
      .use(() => {
        const defaultOption = {
          imageCdn: 'https://cdn.hao-zi.cn/',
          editView: false,
        }
        const plugin = new Plugin(defaultOption)
        plugin.register(sticker)
        return (node: IASTNode, file: any) => {
          plugin.map(node, file)
        }
      })
      .use(remarkHtml)
      .processSync(markdown).contents
}

test('表情包节点转换 -> big', (t) => {
  const s = new sticker
  const tree = {
    type: NodeText,
    position: {
      start: {
        column: 0,
        line: 0,
        offset: 0
      },
      end: {
        column: 0,
        line: 0,
        offset: 0,
      }
    },
    value: '我想在这里放一个表情 :这个是一个表情: '
  }
  s.transformer(tree, {})
  console.log(toMarkdown('我想在这里放一个表情 :这个是一个表情: '))
})