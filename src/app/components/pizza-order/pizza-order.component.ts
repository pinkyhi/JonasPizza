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
    this.fillOffers();
  }
  changeTopping(pizza: Pizza, topping: ITopping, $event : any){
    if($event.checked){
      pizza.addTopping(topping);
    }
    else{
      pizza.removeTopping(topping);
    }
    this.fillOffers();
  }
  getOrderPrice() : number {
    let sum = 0;
    this.order.forEach(x => sum += x.offerPrice??x.getPrice());
    return sum;
  }
  fillOffers() : void {
    this.order.forEach(x => {x.offerPrice = null; x.offerName = ""});
    let offer2Pizzas = this.order.filter(x => x.size.title === "Medium" && x.toppings.length == 4);
    let counter = 1;
    let offer2Pizza: any;
    for(let i = 0; i < offer2Pizzas.length; i++){
      if(counter % 2 == 0){
        offer2Pizza.offerPrice = 4.5;
        offer2Pizza.offerName = "Offer 2";
        offer2Pizzas[i].offerPrice = 4.5;
        offer2Pizzas[i].offerName = "Offer 2";
        counter = 1;
      }
      else{
        counter++;
        offer2Pizza = offer2Pizzas[i];
      }
    }

    let offer1Pizzas = this.order.filter(x => x.size.title === "Medium" && x.toppings.length == 2 && x.offerPrice == null);
    offer1Pizzas.forEach(x => {x.offerPrice = 4; x.offerName = "Offer 1"});

    let offer3Pizzas = this.order.filter(x => x.size.title === "Large" && x.offerPrice == null);
    offer3Pizzas.forEach(x => {
      counter = 0;
      x.toppings.forEach(x => (x.title === "Pepperoni" || x.title === "Barbecue chicken") ? counter += 2 : counter+= 1);
      if(counter == 4){
        x.offerPrice = x.getPrice() / 2;
        x.offerName = "Offer 3";
      }
    });
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
