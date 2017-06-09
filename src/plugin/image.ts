/**
 * Created by haozi on 6/9/2017.
 */
import {Iplugin} from "./Iplugin"
import {NodeImage} from "../NodeType"
import {IASTNodeImage} from "../interfaces/ASTNode"
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
  public transformer(node: IASTNodeImage, file: any) {
     if (node.alt) {
       if (/@big$/.test(node.alt)) {
          node.alt = node.alt.replace(/@big$/, '')
          node.data.hProperties = {
            big: true
          }
       }
       if (/@small$/.test(node.alt)) {
         node.alt = node.alt.replace(/@small$/, '')
         node.data.hProperties = {
           small: true
         }
       }
     }
  }
}
