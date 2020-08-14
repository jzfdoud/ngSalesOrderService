import { Component, OnInit } from '@angular/core';
import { Order } from '../order.class';
import { OrderService } from '../order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/customer/customer.service';
import { Customer } from 'src/app/customer/customer.class';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  order: Order=null;
  pageTitle: string = "Order Detail";
  showDelete:boolean = false;
  customers: Customer[] =[];


  verify():void {
    this.showDelete= !this.showDelete;
  }

  delete():void {
    this.ordersvc.remove(this.order.id).subscribe(
      res=> {
        console.log("order delete successful");
        this.router.navigateByUrl("/orders/list");
      },
      err=> {
        console.error(err);
      }
    );
  }

  constructor(
    private ordersvc: OrderService,
    private route: ActivatedRoute,
    private router: Router,
    private custsvc: CustomerService
  ) { }

  ngOnInit(): void {
    
    let id = this.route.snapshot.params.id;
    this.ordersvc.get(+id).subscribe(
      res => {
        console.log("Order", res);
        this.order = res as Order;
      },
      err=> {
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
