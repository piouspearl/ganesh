import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BarcodeComponent } from './barcode/barcode.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule


@NgModule({
  declarations: [BarcodeComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
  ],
  exports: [
    BarcodeComponent,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    MatFormFieldModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
  ]
})
export class SharedModule { }