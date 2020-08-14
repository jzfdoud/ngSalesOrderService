import { Component, OnInit } from '@angular/core';
import { Order } from '../order.class';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../order.service';
import { CustomerService } from 'src/app/customer/customer.service';
import { Customer } from 'src/app/customer/customer.class';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  pageTitle:string = "Order Edit";
  order: Order= null;
  customers: Customer[] =[];

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private ordersvc:OrderService,
    private custsvc: CustomerService

  ) { }

  save():void {
    this.order.customerId = +this.order.customerId;
    this.ordersvc.change(this.order).subscribe(
      res=> {
        console.log("Order edit successful");
        this.router.navigateByUrl("/orders/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.ordersvc.get(+id).subscribe(
      res=> {
        console.log("Order", res);
        this.order = res as Order;
      },
      err => {
        console.error(err);
      }
    );

    this.custsvc.list().subscribe(
      res=> {
        this.customers = res as Customer[];
      },
      err=> {
        console.error(err)
      }
    );
  }
}
