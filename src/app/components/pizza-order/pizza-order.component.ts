import { Component } from '@angular/core';
import { IPizza } from 'src/app/models/IPizza';
import { pizzaSizes } from 'src/app/data/pizzaSizes';
import { toppings } from 'src/app/data/toppings';
import { ITopping } from 'src/app/models/ITopping';
import { IPizzaSize } from 'src/app/models/IPizzaSize';
import { Pizza } from 'src/app/models/Pizza';

@Component({
  selector: 'pizza-order',
  templateUrl: './pizza-order.component.html',
  styleUrls: ['./pizza-order.component.scss']
})

export class PizzaOrderComponent {

  order: Pizza[] = [];
  selectedSize: any = pizzaSizes.find(x => x.title === "Medium")?.title;
  addPizza() : void {
    let pizzaSize = pizzaSizes.find(x => x.title === this.selectedSize) as IPizzaSize;
    this.order.push(new Pizza(pizzaSize));
  }
  changeTopping(pizza: Pizza, topping: ITopping, $event : any){
    if($event.checked){
      pizza.addTopping(topping);
    }
    else{
      pizza.removeTopping(topping);
    }
  }
  getOrderPrice() : number {
    let sum = 0;
    this.order.forEach(x => sum += x.getPrice());
    return sum;
  }
  placeOrder() : void {
    alert('Check order in the console');
    console.log(this.order);
  }
  getToppings() : ITopping[] {
    return toppings;
  }
  getPizzaSizes() : IPizzaSize[] {
    return pizzaSizes;
  }
}
