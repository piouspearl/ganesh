import { Component } from '@angular/core';
import { QuotationService } from '../quotation.service';
import { Router } from '@angular/router';
import { Quotation } from '../../models/quotation.model';

@Component({
  selector: 'app-quotation-form',
  templateUrl: './quotation-form.component.html',
  styleUrls: ['./quotation-form.component.css']
})
export class QuotationFormComponent {
  quotation: Quotation = {
    customerName: '',
    sareeType: '',
    quantity: 0,
    price: 0
  };

  constructor(private quotationService: QuotationService, private router: Router) {}

  submitQuotation() {
    this.quotationService.createQuotation(this.quotation).subscribe(
      (response) => {
        alert('Quotation submitted successfully');
        this.router.navigate(['/quotation/list']);
      },
      (error) => {
        console.error('Quotation submission error', error);
        alert('An error occurred while submitting the quotation');
      }
    );
  }
}