import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "user";
  constructor(private http: HttpClient) { }

  getList(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/${this.url}`);
  }

  create(u: User): Observable<User> {
    u.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<User>(`${environment.apiUrl}/${this.url}`, u);
  }

  read(id: string): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/${this.url}/` + id);
  }
}
