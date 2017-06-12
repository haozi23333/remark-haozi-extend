/**
 * Created by haozi on 6/9/2017.
 */
import {IASTNode} from "../interfaces/ASTNode"
import {IASTParseOption} from "../index"
import {APlugin} from "./APlugin"

export class Plugin {
  public plugins = []
  public option = null
  private tree = null

  constructor(option: IASTParseOption) {
    this.option = option
  }

  public setTree(tree: IASTNode) {
    this.tree = tree
  }
  public register(plugin) {
    this.plugins.push(new plugin(this.option))
  }

  public map(node: IASTNode, nodes: IASTNode, file: any) {
    if (!node) {
      return
    }
    this.plugins.map((v: APlugin) => {
      if (v.type === node.type) {
          v.transformer(node, nodes, this.tree, file)
        }
    })
    if (node.children) {
        node.children.map((v) => this.map(v, node, file))
    }
  }
}
