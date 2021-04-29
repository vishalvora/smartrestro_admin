import { Option} from './option.model'
import { Image} from './image.model'

export class Variant{
    title:String;
    selectionType:String;
    validation:String;
    options:Array<Option>
    image?:Image

    constructor(title:string, selectionType:String, validation:string, options:Option[]){
        this.title = title
        this.selectionType = selectionType
        this.validation= validation
        this.options=options
    }
}