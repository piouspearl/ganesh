import { Component } from '@angular/core';
import { LogisticsService } from '../logistics.service';
import { Router } from '@angular/router';
import { LogisticsDetails } from '../../models/logistics-details.model';

@Component({
  selector: 'app-logistics-form',
  templateUrl: './logistics-form.component.html',
  styleUrls: ['./logistics-form.component.css']
})
export class LogisticsFormComponent {
  logisticsDetails: LogisticsDetails = {
    orderId: '',
    shippingMethod: '',
    trackingNumber: '',
    estimatedDeliveryDate: new Date()
  };

  constructor(private logisticsService: LogisticsService, private router: Router) {}

  submitLogisticsDetails() {
    this.logisticsService.createLogisticsDetails(this.logisticsDetails).subscribe(
      (response) => {
        alert('Logistics details submitted successfully');
        this.router.navigate(['/quotation/list']);
      },
      (error) => {
        console.error('Logistics details submission error', error);
        alert('An error occurred while submitting logistics details');
      }
    );
  }
}