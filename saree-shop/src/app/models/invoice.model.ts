export interface Invoice {
    id?: number;
    orderId: string;
    fileName: string;
    fileData?: ArrayBuffer;
    uploadedAt?: Date;
  }