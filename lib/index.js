"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by haozi on 2017/06/08.
 */
var Plugin_1 = require("./plugin/Plugin");
var plugin_1 = require("./plugin");
function default_1(option) {
    var defaultOption = {
        imageCdn: 'https://cdn.hao-zi.cn/',
        editView: false,
    };
    option = __assign({}, defaultOption, option);
    var plugin = new Plugin_1.Plugin(option);
    plugin.register(plugin_1.Image);
    plugin.register(plugin_1.sticker);
    return function (node, file) {
        plugin.setTree(node);
        plugin.map(node, null, file);
    };
}
exports.default = default_1;
