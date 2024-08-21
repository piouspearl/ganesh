import { Component } from '@angular/core';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-upload',
  templateUrl: './invoice-upload.component.html',
  styleUrls: ['./invoice-upload.component.css']
})
export class InvoiceUploadComponent {
  selectedFile: File | null = null;
  orderId: string = '';

  constructor(private invoiceService: InvoiceService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadInvoice() {
    if (this.selectedFile && this.orderId) {
      this.invoiceService.uploadInvoice(this.selectedFile, this.orderId).subscribe(
        (response) => {
          alert('Invoice uploaded successfully');
          this.resetForm();
        },
        (error) => {
          console.error('Invoice upload error', error);
          alert('An error occurred while uploading the invoice');
        }
      );
    } else {
      alert('Please select a file and enter an order ID');
    }
  }

  resetForm() {
    this.selectedFile = null;
    this.orderId = '';
  }
}