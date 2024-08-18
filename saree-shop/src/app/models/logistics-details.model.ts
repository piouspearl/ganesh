export interface LogisticsDetails {
    id?: number;
    orderId: string;
    shippingMethod: string;
    trackingNumber: string;
    estimatedDeliveryDate: Date;
  }