import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
import { Order } from '../order.class';
import { CustomerService } from 'src/app/customer/customer.service';
import { Customer } from 'src/app/customer/customer.class';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {

  pageTitle:string = "New Order";
  order: Order = new Order();
  customers: Customer[] =[];

  constructor(
    private router: Router,
    private ordersvc: OrderService,
    private custsvc: CustomerService
  ) { }

  save(): void {
    this.order.customerId = +this.order.customerId;
    this.ordersvc.create(this.order).subscribe(
      res=> {
        console.log("Order create successful");
        this.router.navigateByUrl("/orders/list");
      },
      err=> {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
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
