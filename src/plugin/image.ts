/**
 * Created by haozi on 6/9/2017.
 */
import {Iplugin} from "./Iplugin"
import {NodeImage} from "../NodeType"
import {IASTNode, IASTNodeImage} from "../interfaces/ASTNode"
import {IASTParseOption} from "../index"
import {APlugin} from "./APlugin"

export class Image extends APlugin {
  public type = NodeImage
  public imageCdn = ''
  public editView = false
  public constructor(option: IASTParseOption) {
    super()
    this.imageCdn = option.imageCdn
    this.editView = option.editView
  }

  /**
   *
   * @param node
   * @param nodes
   * @param tree
   * @param file
   */
  public transformer(node: IASTNodeImage, nodes: IASTNode, tree: IASTNode, file: any) {
    if (node.alt) {
      node.data = node.data || {}
      node.data.hProperties = node.data.hProperties || {}
      const param = node.alt.match(/@\w*/g)
      node.alt = node.alt.match(/^\w*/)[0]
      if (param === null) {
        node.data.hProperties = {
          small: true
        }
      } else {
        param.map(v => {
          node.data.hProperties[v.match(/\w*/g)[1]] = true
        })
      }
    }
  }
}
