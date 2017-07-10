"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var NodeType_1 = require("../NodeType");
var APlugin_1 = require("./APlugin");
var Image = (function (_super) {
    __extends(Image, _super);
    function Image(option) {
        var _this = _super.call(this) || this;
        _this.type = NodeType_1.NodeImage;
        _this.imageCdn = '';
        _this.editView = false;
        _this.imageCdn = option.imageCdn;
        _this.editView = option.editView;
        return _this;
    }
    /**
     *
     * @param node
     * @param nodes
     * @param tree
     * @param file
     */
    Image.prototype.transformer = function (node, nodes, tree, file) {
        if (node.alt) {
            node.data = node.data || {};
            node.data.hProperties = node.data.hProperties || {};
            var param = node.alt.match(/@\w*/g);
            node.alt = node.alt.match(/^\w*/)[0];
            if (param === null) {
                node.data.hProperties = {
                    small: true
                };
            }
            else {
                param.map(function (v) {
                    node.data.hProperties[v.match(/\w*/g)[1]] = true;
                });
            }
        }
    };
    return Image;
}(APlugin_1.APlugin));
exports.Image = Image;
