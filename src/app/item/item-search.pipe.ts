import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item.class';

@Pipe({
  name: 'itemSearch'
})
export class ItemSearchPipe implements PipeTransform {

  transform(items: Item[],searchCriteria): Item[] {
    if( items == null || searchCriteria == null || searchCriteria == '') return items;
    let selItems: Item[]=[];
    searchCriteria= searchCriteria.toLowerCase();
    for(let i of items) {
      if(
        i.name.toLowerCase().includes(searchCriteria)
        || i.price.toString().includes(searchCriteria)
        || i.upc.toString().includes(searchCriteria))
        {
          selItems.push(i);
        }
    }
    return selItems;
  }

}
