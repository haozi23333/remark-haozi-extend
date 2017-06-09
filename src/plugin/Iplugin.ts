import {IASTNode} from "../interfaces/ASTNode"
/**
 * Created by haozi on 6/9/2017.
 */

export interface Iplugin {
  type: string
  transformer: (node: IASTNode, file: any) => void
}
