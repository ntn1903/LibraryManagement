import { Component, Inject, Input, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';
import { AppModule } from '../app.module';
import { Router } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[] = [];
  constructor(
    private bookService: BookService,
    private router: Router,
  ) {
    this.bookService.getList().subscribe({
      next: (book) => { this.books = book },
      error: (error) => { console.log(error) }
    })
  }
  ngOnInit() {

  }

  deleteBook(id: string) {
    var answer = window.confirm("Do you want to delete?");
    if (answer) {
      this.bookService.delete(id).subscribe({next: (r) => { this.router.navigate(['/book']); }});
    }
    else {
      
    }
  }
}

