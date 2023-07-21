import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: Book = {
    id: '',
    title: '',
    author: '',
    quantity: 0,
    price: 0,
    description: ''
  }

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router,) { }

  isEdit: boolean = false;
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (p) => {
        const id = p.get('id');
        console.log(p)
        if (id) {
          this.isEdit = true;
          this.bookService.read(id).subscribe({
            next: (r) => { this.book = r; }
          })
        }
      }
    })
  }

  addBook() {
    if (this.book.id)
      this.bookService.update(this.book.id, this.book).subscribe({
        next: (r) => { this.router.navigate(['/book']); }
      });
    else
      this.bookService.create(this.book).subscribe({
        next: (r) => { this.router.navigate(['/book']); }
      });
  }

  back() {
    this.router.navigate(['/book']);
  }

}
