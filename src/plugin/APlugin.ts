
/**
 * Created by haozi on 6/9/2017.
 */
import {IASTNode} from "../interfaces/ASTNode"

export abstract class APlugin {
  public type: string
  public constructor() {
  }
  public abstract transformer(node: IASTNode, file: any)
}
