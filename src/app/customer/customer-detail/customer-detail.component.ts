import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer.class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer:Customer = null;
  pageTitle: string = "Customer Detail";
  showDelete:boolean = false;

  verify():void {
    this.showDelete= !this.showDelete;
  }

  delete():void {
    this.custsvc.remove(this.customer.id).subscribe(
      res=> {
        console.log("Customer delete successful");
        this.router.navigateByUrl("/customers/list");
      },
      err=> {
        console.error(err);
      }
    );
  }
  constructor(
    private custsvc: CustomerService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params.id;
    this.custsvc.get(+id).subscribe(
      res => {
        console.log("Customer", res);
        this.customer = res as Customer;
      },
      err=>{
        console.log(err);
      }
    );

  }

}
