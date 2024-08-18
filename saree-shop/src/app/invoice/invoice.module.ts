import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { InvoiceUploadComponent } from './invoice-upload/invoice-upload.component';

@NgModule({
  declarations: [InvoiceUploadComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'upload', component: InvoiceUploadComponent }
    ]),
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class InvoiceModule { }