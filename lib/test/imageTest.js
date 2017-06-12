/**
 * Created by haozi on 6/9/2017.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = require("ava");
var remark = require("remark");
var remarkHtml = require("remark-html");
var Plugin_1 = require("../plugin/Plugin");
var plugin_1 = require("../plugin");
function toMarkdown(markdown) {
    return remark()
        .use(function () {
        var defaultOption = {
            imageCdn: 'https://cdn.hao-zi.cn/',
            editView: false,
        };
        var plugin = new Plugin_1.Plugin(defaultOption);
        plugin.register(plugin_1.Image);
        return function (node, file) {
            plugin.map(node, file);
        };
    })
        .use(remarkHtml)
        .processSync(markdown).contents;
}
var defalutOption = {
    imageCdn: '233333',
    editView: false
};
ava_1.default('图片转换测试 -> big', function (t) {
    t.is(toMarkdown("![test@big](https://test)"), "<p><img src=\"https://test\" alt=\"test\" big=\"true\"></p>\n");
});
ava_1.default('图片转换测试 -> small', function (t) {
    t.is(toMarkdown("![test@small](https://test)"), "<p><img src=\"https://test\" alt=\"test\" small=\"true\"></p>\n");
});
ava_1.default('图片转换测试 -> 不填参数', function (t) {
    t.is(toMarkdown("![test](https://test)"), "<p><img src=\"https://test\" alt=\"test\" small=\"true\"></p>\n");
});
