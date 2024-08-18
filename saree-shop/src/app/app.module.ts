import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes'; 
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';  // Import RouterModule


import { AuthModule } from './auth/auth.module';
import { QuotationModule } from './quotation/quotation.module';
import { InvoiceModule } from './invoice/invoice.module';
import { LogisticsModule } from './logistics/logistics.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
  ],
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AuthModule,
    QuotationModule,
    InvoiceModule,
    LogisticsModule,
    SharedModule, 
    AppComponent   
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }