import { Pipe, PipeTransform } from '@angular/core';
import { Order } from './order.class';

@Pipe({
  name: 'orderSearch'
})
export class OrderSearchPipe implements PipeTransform {

  transform(orders: Order[], searchCriteria): Order[] {
    if( orders == null || searchCriteria ==null || searchCriteria=='') return orders;
    let selOrders: Order[]=[];
    searchCriteria=searchCriteria.toLowerCase();
    for(let o of orders) {
      if(
        o.customer.name.toLowerCase().includes(searchCriteria)
        || o.description.toLowerCase().includes(searchCriteria)
        || o.total.toString().includes(searchCriteria)
        || o.id.toString().includes(searchCriteria))
        {
          selOrders.push(o)
        }
    }
    return selOrders;
  }

}
