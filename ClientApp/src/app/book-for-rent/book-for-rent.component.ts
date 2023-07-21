import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-for-rent',
  templateUrl: './book-for-rent.component.html',
  styleUrls: ['./book-for-rent.component.css'],
})
export class BookForRentComponent implements OnInit {
  books: Book[] = [];

  constructor(
    private bookService: BookService,
    private orderService: OrderService,
    private router: Router,
  ) {
    this.bookService.getList().subscribe({
      next: (book) => { this.books = book },
      error: (error) => { console.log(error) }
    })
  }
  ngOnInit() {

  }

  bookTotals: number = 0;
  orderDetail: string[] = [];
  addToCart(book: Book) {
    // if (this.bookTotals < 5) {
    //   this.bookTotals++;
    //   this.orderDetail.push(id)
    //   console.log(this.orderDetail)
    // }
    // else alert("You can not rent over 5 books")
    let order: Order = {
      userId: '00000000-0000-0000-0000-000000000000',
      bookId: book.id,
      title: book.title,
      id: 0
    }

    this.orderService.create(order).subscribe({
      next: (R) => { window.location.reload(); }
    })
  }
}
