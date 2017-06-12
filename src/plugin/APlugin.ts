
/**
 * Created by haozi on 6/9/2017.
 */
import {IASTNode} from "../interfaces/ASTNode"

export abstract class APlugin {
  public type: string
  public constructor() {
  }

  /**
   * @param node 当前节点
   * @param nodes 当前父节点
   * @param tree  整棵树
   * @param file  file
   */
  public abstract transformer(node: IASTNode, nodes: IASTNode, tree: IASTNode, file: any)
}
