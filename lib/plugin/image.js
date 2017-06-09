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
    Image.prototype.transformer = function (node, file) {
        if (node.alt) {
            node.data = node.data || {};
            if (/@big$/.test(node.alt)) {
                node.alt = node.alt.replace(/@big$/, '');
                node.data.hProperties = {
                    big: true
                };
            }
            if (/@small$/.test(node.alt)) {
                node.alt = node.alt.replace(/@small$/, '');
                node.data.hProperties = {
                    small: true
                };
            }
        }
    };
    return Image;
}(APlugin_1.APlugin));
exports.Image = Image;
