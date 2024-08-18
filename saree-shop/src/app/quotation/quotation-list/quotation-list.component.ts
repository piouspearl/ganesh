import { Component, OnInit } from '@angular/core';
import { QuotationService } from '../quotation.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-quotation-list',
  templateUrl: './quotation-list.component.html',
  styleUrls: ['./quotation-list.component.css']
})
export class QuotationListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'customerName', 'sareeType', 'quantity', 'price', 'barcode'];
  dataSource!: MatTableDataSource<any>;

  constructor(private quotationService: QuotationService) {}

  ngOnInit() {
    this.loadQuotations();
  }

  loadQuotations() {
    this.quotationService.getAllQuotations().subscribe(
      (quotations) => {
        this.dataSource = new MatTableDataSource(quotations);
      },
      (error) => {
        console.error('Error loading quotations', error);
      }
    );
  }
}