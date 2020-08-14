import { Component, OnInit } from '@angular/core';
import { Order } from '../order.class';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service';
import { OrderItemService } from 'src/app/orderItem/order-item.service';
import { OrderItem } from 'src/app/orderItem/orderItem.class';
import { Item } from 'src/app/item/item.class';

@Component({
  selector: 'app-order-lines',
  templateUrl: './order-lines.component.html',
  styleUrls: ['./order-lines.component.css']
})
export class OrderLinesComponent implements OnInit {

  orderId: number= 0;
  order: Order=null;
  pageTitle: string= "Order Lines";
  orderItems: OrderItem;
  showVerify: boolean=false;
  item: Item=null;
  
  delete():void {this.showVerify = !this.showVerify;}

  verify(id:number):void {
      this.showVerify = false;
      this.orderIsvc.remove(id).subscribe(
        res=>{
          console.log("OrderItem delte successful");
          this.refresh(this.orderId);
        }
      );
    }
  
  constructor(
    private route: ActivatedRoute,
    private ordersvc: OrderService,
    private orderIsvc: OrderItemService
  ) { }

  refresh(id:number): void {
    this.ordersvc.get(id).subscribe(
      res=>{
        console.log("Order", res);
        this.order = res as Order;
      },
      err=>{
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    this.orderId = +this.route.snapshot.params.id;
    this.refresh(this.orderId);
  }


}
