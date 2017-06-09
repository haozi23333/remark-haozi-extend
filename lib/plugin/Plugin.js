"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Plugin = (function () {
    function Plugin(option) {
        this.plugins = [];
        this.option = null;
        this.option = option;
    }
    Plugin.prototype.register = function (plugin) {
        this.plugins.push(new plugin(this.option));
    };
    Plugin.prototype.map = function (node, file) {
        var _this = this;
        if (!node) {
            return;
        }
        this.plugins.map(function (v) {
            if (v.type === node.type) {
                v.transformer(node, file);
            }
        });
        if (node.children) {
            node.children.map(function (v) { return _this.map(v, file); });
        }
    };
    return Plugin;
}());
exports.Plugin = Plugin;
