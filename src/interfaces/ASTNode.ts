/**
 * Created by haozi on 2017/06/08.
 * 这个文件不是很完整
 * 用到的时候再补充吧
 *
 * 终于找到文档了
 * https://github.com/syntax-tree/mdast
 */

export interface IASTNode {
    type: string
    position: IASTNodePosition
    children?: IASTNode[]
}

/**
 *  这个 Node 在文本位置
 */
export interface IASTNodePosition {
    end: IASTNodePositionP
    start: IASTNodePositionP
}

/**
 * 位置信息
 */
export interface IASTNodePositionP {
    column: number
    line: number
    offset: number
}

export interface IASTNodeData {
    data: {
        hProperties?: object,
        hName?: string
        hChildren?: IASTNode
        className?: string[]
    }
}

export interface IASTNodeRoot extends IASTNode {
}

/**
 * AST 图片节点
 */
export interface IASTNodeImage extends IASTNode, IASTNodeData {
    alt: string
    title: string
    url: string
}

/**
 * AST 文本节点
 */
export interface IASTNodeText extends IASTNode {
    /**
     * 文本
     */
    value: string
}

export interface IASTNodeHeading extends IASTNode {
    /**
     * h 标签深度
     */
    depth: number
}

/**
 * Blockquote 块
 */
export interface IASTNodeBlockquote extends IASTNode {

}

/**
 *
 */
export interface IASTNodeList extends IASTNode {
    loose: boolean
    ordered: boolean
    start: boolean
}
/**
 * 列表
 */
export interface IASTNodeListitem extends IASTNode {
    checked: any
    loose: boolean
}
/**
 * 段落
 */
export interface IASTNodeParagraph extends IASTNode {
}