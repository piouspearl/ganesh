import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { QuotationFormComponent } from './quotation/quotation-form/quotation-form.component';
import { QuotationListComponent } from './quotation/quotation-list/quotation-list.component';
import { InvoiceUploadComponent } from './invoice/invoice-upload/invoice-upload.component';
import { LogisticsFormComponent } from './logistics/logistics-form/logistics-form.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'quotation/create', component: QuotationFormComponent, canActivate: [AuthGuard] },
  { path: 'quotation/list', component: QuotationListComponent, canActivate: [AuthGuard] },
  { path: 'invoice/upload', component: InvoiceUploadComponent, canActivate: [AuthGuard] },
  { path: 'logistics/form', component: LogisticsFormComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }