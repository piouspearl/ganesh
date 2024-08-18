import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { QuotationFormComponent } from './quotation-form/quotation-form.component';
import { QuotationListComponent } from './quotation-list/quotation-list.component';

@NgModule({
  declarations: [QuotationFormComponent, QuotationListComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'create', component: QuotationFormComponent },
      { path: 'list', component: QuotationListComponent }
    ]),
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class QuotationModule { }