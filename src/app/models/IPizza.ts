import { IPizzaSize } from "./IPizzaSize"
import { ITopping } from "./ITopping"

type Nullable<T> = T | null;
export interface IPizza {
    size: IPizzaSize
    toppings: Array<ITopping>
    offerPrice: Nullable<number>
    offerName: string
    getPrice() : number 
  }
  