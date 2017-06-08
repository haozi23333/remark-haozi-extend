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
    position: IASTNode_Position[]
    children?: IASTNode[]
}

/**
 *  这个 Node 在文本位置
 */
export interface IASTNode_Position {
    end: IASTNode_Position_P
    start: IASTNode_Position_P
}

/**
 * 位置信息
 */
export interface IASTNode_Position_P {
    column: number
    line: number
    offset: number
}

export interface IASTNode_Data {
    data: {
        hProperties?: object,
        hName?: string
        hChildren?: IASTNode
        className?: string[]
    }
}

export interface IASTNode_Root extends IASTNode {

}

/**
 * AST 图片节点
 */
export interface IASTNode_Image extends IASTNode, IASTNode_Data {
    alt: string
    title: string
    url: string
}

/**
 * AST 文本节点
 */
export interface IASTNode_Text extends IASTNode {
    /**
     * 文本
     */
    value: string
}

export interface IASTNode_Heading extends IASTNode {
    /**
     * h 标签深度
     */
    depth: number
}

/**
 * Blockquote 块
 */
export interface IASTNode_Blockquote extends IASTNode {
}

/**
 *
 */
export interface IASTNode_List extends IASTNode {
    loose: boolean
    ordered: boolean
    start: boolean
}
/**
 * 列表
 */
export interface IASTNode_Listitem extends IASTNode {
    checked: any
    loose: boolean
}
/**
 * 段落
 */
export interface IASTNode_Paragraph extends IASTNode {
}