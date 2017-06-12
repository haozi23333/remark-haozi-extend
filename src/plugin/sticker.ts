/**
 * Created by haozi on 6/12/2017.
 * 要注意优先级   这个要在image 之前处理
 */
import {NodeImage, NodeText} from "../NodeType"
import {IASTNode, IASTNodeImage, IASTNodeText} from "../interfaces/ASTNode"
import {APlugin} from "./APlugin"

export class sticker extends APlugin {
  public type = NodeText
  public constructor() {
    super()
  }
  public transformer(node: IASTNodeText, nodes: IASTNode, tree: IASTNode, file: any) {
    const children = []
    node.value = node.value.replace(/\s:(.*):\s/, (text, stickerId) => {
      children.push({
        type: NodeImage,
        alt: stickerId + '@small',
        title: stickerId,
        url: `https://url/${stickerId}`
      })
      return ''
    })
    node.children = children
  }
}
