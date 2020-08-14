import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item.class';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Item[];
  sortAsc: boolean=true;
  sortCriteria: string="id";
  searchCriteria:string='';

  sort(column:string): void {
    if(column === this.sortCriteria) {
      this.sortAsc= !this.sortAsc;
      return;
    }
    this.sortAsc=true;
    this.sortCriteria=column;
  }

  constructor(
    private itemsvc: ItemService
  ) { }

  ngOnInit(): void {
    this.itemsvc.list().subscribe(
      res=> {
        console.log(res)
        this.items = res as Item[];
      },
      err=> {
        console.error(err);
      }
    );
  }

}
