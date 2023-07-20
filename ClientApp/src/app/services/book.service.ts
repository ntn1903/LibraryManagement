import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url = "book";

  constructor(private http: HttpClient) { }

  getList(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.apiUrl}/${this.url}`);
  }

  create(book: Book): Observable<Book> {
    book.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Book>(`${environment.apiUrl}/${this.url}`, book);
  }

  read(id: string): Observable<Book> {
    return this.http.get<Book>(`${environment.apiUrl}/${this.url}/` + id);
  }
}
