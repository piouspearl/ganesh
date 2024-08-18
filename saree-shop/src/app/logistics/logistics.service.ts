import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogisticsDetails } from '../models/logistics-details.model';

@Injectable({
  providedIn: 'root'
})
export class LogisticsService {
  private apiUrl = 'http://localhost:8080/api/logistics';

  constructor(private http: HttpClient) { }

  createLogisticsDetails(logisticsDetails: LogisticsDetails): Observable<LogisticsDetails> {
    return this.http.post<LogisticsDetails>(this.apiUrl, logisticsDetails);
  }

  getLogisticsDetailsByOrderId(orderId: string): Observable<LogisticsDetails> {
    return this.http.get<LogisticsDetails>(`${this.apiUrl}/${orderId}`);
  }
}