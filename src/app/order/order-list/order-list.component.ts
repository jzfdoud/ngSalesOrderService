import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order.class';
import { OrderItemService } from '../../orderItem/order-item.service';
import { OrderItem } from '../../orderItem/orderItem.class'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  // order: Order;
  orders: Order[];
  // orderItems: OrderItem[];
  // orderItem: OrderItem;
  sortCriteria: string="description";
  sortAsc: boolean=true;
  searchCriteria: string='';

  sort(column:string): void {
    if(column === this.sortCriteria) {
      this.sortAsc= !this.sortAsc;
      return;
    }
    this.sortAsc=true;
    this.sortCriteria=column;
  }

  constructor(
    private ordersvc: OrderService,
    // private route: ActivatedRoute,
    // private router: Router,
    // private orderIsvc: OrderItemService

  ) { }

  ngOnInit(): void {
    this.ordersvc.list().subscribe(
      res => {
        for(let o of res){
          o.customerName= o.customer.name;
        }
        console.log(res);
        this.orders = res as Order[]
      },
      err=> {
        console.error(err);
      }
    );

    // this.orderIsvc.list().subscribe(
    //   res=> {
    //     this.orderItems = res as OrderItem[];
    //   },
    //   err=> {
    //     console.error(err)
    //   }
    // );

    // this.order.id = this.orderItem.orderId;
  }

}
