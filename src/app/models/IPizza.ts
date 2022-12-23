import { IPizzaSize } from "./IPizzaSize"
import { ITopping } from "./ITopping"

export interface IPizza {
    size: IPizzaSize
    toppings: Array<ITopping>
    getPrice() : number 
  }
  