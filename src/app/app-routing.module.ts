import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Customer } from './customer/customer.class';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { Order } from './order/order.class';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { OrderCreateComponent } from './order/order-create/order-create.component';
import { OrderEditComponent } from './order/order-edit/order-edit.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemDetailComponent } from './item/item-detail/item-detail.component';
import { ItemEditComponent } from './item/item-edit/item-edit.component';
import { ItemCreateComponent } from './item/item-create/item-create.component';
import { OrderItemEditComponent } from './orderItem/order-item-edit/order-item-edit.component';
import { OrderItemCreateComponent } from './orderItem/order-item-create/order-item-create.component';
import { OrderLinesComponent } from './order/order-lines/order-lines.component';


const routes: Routes = [
  // {path: '', redirectTo: '/', pathMatch:'full'},
  // {path: 'customer/list', component:CustomerListComponent},
  // {path: 'customer/detail/:id', component:CustomerDetailComponent},
  // {path: 'customer/edit/:id', component:CustomerEditComponent},
  // {path: 'customer/create', component:CustomerCreateComponent},
  // {path: '**', component:CustomerListComponent},

  {path: '', redirectTo: '/', pathMatch:'full'},
  {path: 'order/list', component:OrderListComponent},
  {path: 'order/detail/:id', component:OrderDetailComponent},
  {path: 'order/edit/:id', component:OrderEditComponent},
  {path: 'order/create', component:OrderCreateComponent},
  {path: 'order/lines/:id', component:OrderLinesComponent},

  // {path: '**', component:OrderListComponent}

  // {path: '', redirectTo: '/', pathMatch:'full'},
  // {path: 'item/list', component:ItemListComponent},
  // {path: 'item/detail/:id', component:ItemDetailComponent},
  // {path: 'item/edit/:id', component:ItemEditComponent},
  // {path: 'item/create', component:ItemCreateComponent},
  // {path: '**', component:ItemListComponent},

  // {path: '', redirectTo: '/', pathMatch:'full'},

  {path: 'orderItem/edit/:id', component:OrderItemEditComponent},
  {path: 'orderItem/create', component:OrderItemCreateComponent},
  {path: '**', component:OrderListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
