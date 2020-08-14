import { Component, OnInit } from '@angular/core';
import { OrderItem } from '../orderItem.class';
import { Item } from 'src/app/item/item.class';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderItemService } from '../order-item.service';
import { ItemService } from 'src/app/item/item.service';

@Component({
  selector: 'app-order-item-edit',
  templateUrl: './order-item-edit.component.html',
  styleUrls: ['./order-item-edit.component.css']
})
export class OrderItemEditComponent implements OnInit {

  pageTitle:string = "OrderItem Edit";
  orderItem: OrderItem= null;
  items: Item[] =[];

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private orderIsvc:OrderItemService,
    private itemsvc: ItemService

  ) { }

  save():void {
    // this.orderItem.itemId = +this.orderItem.itemId;
    this.orderIsvc.change(this.orderItem).subscribe(
      res=> {
        console.log("OrderItem edit successful");
        this.router.navigateByUrl("/order/lines/:id");
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.orderIsvc.get(+id).subscribe(
      res=> {
        console.log("OrderItem", res);
        this.orderItem = res as OrderItem;
      },
      err => {
        console.error(err);
      }
    );

    this.itemsvc.list().subscribe(
      res=> {
        this.items = res as Item[];
      },
      err=> {
        console.error(err)
      }
    );
  }
}
