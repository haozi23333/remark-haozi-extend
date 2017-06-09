"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by haozi on 2017/06/09.
 */
var ava_1 = require("ava");
var index_1 = require("../index");
var remark = require("remark");
var remarkHtml = require("remark-html");
function toMarkdown(markdown) {
    return remark()
        .use(index_1.default)
        .use(remarkHtml)
        .processSync(markdown).contents;
}
var defalutOption = {
    imageCdn: '233333',
    editView: false
};
ava_1.default('初步测试 -> 测试图片', function (t) {
    t.is(toMarkdown("![@big](https://test)"), "<p><img src=\"https://test\" alt=\"\" big=\"true\"></p>\n");
});
