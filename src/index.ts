/**
 * Created by haozi on 2017/06/08.
 */
import {Plugin} from './plugin/Plugin'
import {Image} from './plugin'
export interface IASTParseOption {
    imageCdn: string,
    editView?: boolean
}

export default function(option: IASTParseOption) {
    const defaultOption = {
        imageCdn: 'https://cdn.hao-zi.cn/',
        editView: false,
    }
    option = {
      ...defaultOption,
      ...option
    } as IASTParseOption
    const plugin = new Plugin(option)
    plugin.register(Image)
    return plugin.map
}
