import { Component, OnInit } from '@angular/core';
import { Item } from '../item.class';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  pageTitle:string = 'New item'
  item:Item = new Item();
  items:Item[] = [];

  constructor(
    private router: Router,
    private itemsvc: ItemService

  ) { }

  save(): void {
    this.itemsvc.create(this.item).subscribe(
      res=> {
        console.log("Item create successful");
        this.router.navigateByUrl("/items/list");
      },
      err=> {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    this.itemsvc.list().subscribe(
      res=>{
        console.log(res);
        this.items = res as Item[];
      },
      err=>{
        console.error(err);
      }
    );
  }

}
