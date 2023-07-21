import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-rent-detail',
  templateUrl: './rent-detail.component.html',
  styleUrls: ['./rent-detail.component.css']
})
export class RentDetailComponent implements OnInit {
  orders: Order[] = []
  constructor(private orderService: OrderService, private router: Router,) { }

  ngOnInit(): void {
    this.orderService.getList().subscribe({
      next: (order) => { this.orders = order },
      error: (error) => { console.log(error) }
    })
  }

  minusFromCart(orderId: number) {
    this.orderService.update(orderId).subscribe({
      next: (r) => { window.location.reload(); }
    })
    console.log(orderId)
  }
}
