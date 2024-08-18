import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quotation } from '../models/quotation.model';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {
  private apiUrl = 'http://localhost:8080/api/quotations';

  constructor(private http: HttpClient) { }

  createQuotation(quotation: Quotation): Observable<Quotation> {
    return this.http.post<Quotation>(this.apiUrl, quotation);
  }

  getAllQuotations(): Observable<Quotation[]> {
    return this.http.get<Quotation[]>(this.apiUrl);
  }

  getQuotationById(id: number): Observable<Quotation> {
    return this.http.get<Quotation>(`${this.apiUrl}/${id}`);
  }
}