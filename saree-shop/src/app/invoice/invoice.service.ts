import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from '../models/invoice.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private apiUrl = 'http://localhost:8080/api/invoices';

  constructor(private http: HttpClient) { }

  uploadInvoice(file: File, orderId: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('orderId', orderId);
    return this.http.post(`${this.apiUrl}/upload`, formData);
  }

  getInvoiceByOrderId(orderId: string): Observable<Invoice> {
    return this.http.get<Invoice>(`${this.apiUrl}/${orderId}`);
  }
}