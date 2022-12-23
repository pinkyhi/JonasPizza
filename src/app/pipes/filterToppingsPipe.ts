import { Pipe, PipeTransform } from '@angular/core';
import { ITopping } from '../models/ITopping';

@Pipe({
  name: 'filterToppings'
})
export class FilterToppingsPipe implements PipeTransform {

  transform(toppings: ITopping[], isVeg: boolean): ITopping[] {
    let result = toppings.filter(t => t.isVeg == isVeg);
    return result;
  }
}
