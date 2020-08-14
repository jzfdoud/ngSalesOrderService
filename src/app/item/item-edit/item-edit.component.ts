import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../item.class';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

  pageTitle:string= "Item Edit";
  item: Item=null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemsvc: ItemService
  ) { }

  save():void {
    this.itemsvc.change(this.item).subscribe(
      res=> {
        console.log("Item edit successful");
        this.router.navigateByUrl("/items/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.itemsvc.get(+id).subscribe(
      res=> {
        console.log("Item", res);
        this.item = res as Item;
      },
      err => {
        console.error(err);
      }
    );
  }

}
