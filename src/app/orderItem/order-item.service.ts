import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { OrderItem } from './orderItem.class'

const baseurl = "http://localhost:56183/api/orderitems";

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  constructor(private http: HttpClient) { }

  list(): Observable<OrderItem[]>{
    return this.http.get(`${baseurl}`) as Observable<OrderItem[]>;
  }

  get(id:number): Observable<OrderItem>{
    return this.http.get(`${baseurl}/${id}`) as Observable<OrderItem>;
  }

  create(orderItem:OrderItem): Observable<OrderItem> {
    return this.http.post(`${baseurl}`, orderItem) as Observable<OrderItem>;
  }

  change(orderItem:OrderItem): Observable<any> {
    return this.http.put(`${baseurl}/${orderItem.id}`, orderItem) as Observable<any>;
  }

  remove(id:number): Observable<OrderItem> {
    return this.http.delete(`${baseurl}/${id}`) as Observable<OrderItem>;
  }
}
