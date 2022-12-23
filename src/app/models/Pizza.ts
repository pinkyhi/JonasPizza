import { IPizza } from "./IPizza";
import { IPizzaSize } from "./IPizzaSize";
import { ITopping } from "./ITopping";

export class Pizza implements IPizza {
    constructor(public size: IPizzaSize, public toppings: ITopping[] = []) {
        this.size = size;
        this.toppings = toppings;
     }

    getPrice(): number {
        let toppingsPrice = 0;
        this.toppings.forEach(x => toppingsPrice += x.price);
        return toppingsPrice + this.size.price;
    }
    checkTopping(topping: ITopping){
        return this.toppings.includes(topping);
    }
    addTopping(topping: ITopping){
        if(!this.toppings.includes(topping)){
           this.toppings.push(topping); 
        }
    }
    removeTopping(topping: ITopping){
        this.toppings.splice(this.toppings.indexOf(topping), 1);
    }
  }