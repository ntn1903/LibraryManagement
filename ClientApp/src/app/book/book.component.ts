import { Component, Inject, Input, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';
import { AppModule } from '../app.module';
import { Router } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
})
export class BookComponent implements OnInit {
  books: Book[] = [];
  selectedBook?: Book;
  constructor(
    private bookService: BookService,
    private router: Router
  ) {
    this.bookService.getList().subscribe({
      next: (book) => { this.books = book },
      error: (error) => { console.log(error) }
    })
  }
  ngOnInit() {

  }

  editBook(b: Book) {
    this.selectedBook = b;
    this.router.navigate(['/book', 'add']);
  }

  deleteBook(id: string) {
    // this.router.navigate(['/book', 'add']);
  }

  viewBook(b: Book) {

  }
}

