import { Variant } from './variant.model'
import { Image} from './image.model'

export class Product{
    name:string;
     description?:String;
     images?: Array<Image>
     price?:number;
     comparePrice?:number;
     isCustomization: boolean;
     foodType?: String;
     variants?: Array<Variant>;
     status:String
  
    constructor(
        name:string,
        isCustomization: boolean,
        status:String,
        // public description?:String,
        // public image?: Array<Image>,
        price:number,
        comparePrice:number,
        // public isCustamization: boolean,
        // public isVeg?: boolean,
        // public variants?: Array<Variant>
        ){
            this.name =name
            this.isCustomization = isCustomization
            this.status = status
            this.price = price
            this.comparePrice = comparePrice
    }

}