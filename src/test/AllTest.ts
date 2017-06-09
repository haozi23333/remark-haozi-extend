/**
 * Created by haozi on 2017/06/09.
 */
import test from 'ava'
import qwq from '../index'
import remark = require('remark')
import remarkHtml = require('remark-html')

function toMarkdown(markdown) {
    return remark()
        .use(qwq)
        .use(remarkHtml)
        .processSync(markdown).contents
}
const defalutOption = {
    imageCdn: '233333',
    editView: false
}

test('初步测试 -> 测试图片', (t) => {
    t.is(toMarkdown(`![@big](https://test)`),
        `<p><img src="https://test" alt="" big="true"></p>\n`
    )
})