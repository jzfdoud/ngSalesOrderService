import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderItemCreateComponent } from './order-item-create.component';

describe('OrderItemCreateComponent', () => {
  let component: OrderItemCreateComponent;
  let fixture: ComponentFixture<OrderItemCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderItemCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderItemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
