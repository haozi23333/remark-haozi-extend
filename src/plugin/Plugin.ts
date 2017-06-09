/**
 * Created by haozi on 6/9/2017.
 */
import {IASTNode} from "../interfaces/ASTNode"
import {IASTParseOption} from "../index"
import {APlugin} from "./APlugin"

export class Plugin {
  public plugins = []
  public option = null

  constructor(option: IASTParseOption) {
    this.option = option
  }

  public register(plugin) {
    this.plugins.push(new plugin(this.option))
  }
  public parse() {
    const that = this
    console.log('load parse')
    return (...arg) => {
      that.map.apply(that, arg)
    }
  }
  public map(node: IASTNode, file: any) {
    if (!node) {
      return
    }
    this.plugins.map((v: APlugin) => {
      if (v.type === node.type) {
          v.transformer(node, file)
        }
    })
    if (node.children) {
        node.children.map((v) => this.map(v, file))
    }
  }
}
