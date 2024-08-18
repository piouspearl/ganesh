import { Component, Input, OnInit } from '@angular/core';
import JsBarcode from 'jsbarcode';

@Component({
  selector: 'app-barcode',
  template: '<svg #barcodeElement></svg>'
})
export class BarcodeComponent implements OnInit {
  @Input()
  value!: string;

  ngOnInit() {
    JsBarcode('#barcodeElement', this.value, {
      format: 'CODE128',
      width: 2,
      height: 100,
      displayValue: true
    });
  }
}