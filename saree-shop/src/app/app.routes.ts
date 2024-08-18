import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { 
    path: 'quotation', 
    loadChildren: () => import('./quotation/quotation.module').then(m => m.QuotationModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'invoice', 
    loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'logistics', 
    loadChildren: () => import('./logistics/logistics.module').then(m => m.LogisticsModule),
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }