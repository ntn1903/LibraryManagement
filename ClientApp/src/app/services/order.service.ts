import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = "order";
  constructor(private http: HttpClient) { }

  getList(): Observable<Order[]> {
    return this.http.get<Order[]>(`${environment.apiUrl}/${this.url}`);
  }

  create(order: Order): Observable<Order> {
    return this.http.post<Order>(`${environment.apiUrl}/${this.url}`, order);
  }

  update(orderId: number): Observable<Order> {
    return this.http.put<Order>(`${environment.apiUrl}/${this.url}/` +  orderId, orderId);
  }
}
