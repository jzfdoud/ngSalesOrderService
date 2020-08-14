import { OrderItem } from '../orderItem/orderItem.class';
import { Customer } from '../customer/customer.class';

export class Order {
    id:number=0;
    description:string='';
    total:number=0;
    customer: Customer;
    customerId:number=0;
    orderItems: OrderItem[];

    customerName:string = '';

    constructor() {
    }

}