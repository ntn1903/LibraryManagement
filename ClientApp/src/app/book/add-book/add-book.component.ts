import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @Input() bookSelected: Book | undefined;

  book: Book = {
    id: '',
    title: '',
    author: '',
    quantity: 0,
    price: 0,
    description: ''
  }

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    console.log(this.bookSelected)
  }

  addBook(){
    this.bookService.create(this.book).subscribe(_=> console.log(_))
  }

}
