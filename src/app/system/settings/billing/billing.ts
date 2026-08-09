import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsDataGridComponent } from 'cats-data-grid';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [CommonModule, CatsDataGridComponent],
  templateUrl: './billing.html',
  styleUrl: './billing.scss',
})
export class Billing {
  billingHistory = [
    { invoice: 'RCPT-0612', date: 'Jun 21, 2026', amount: '$99.00', status: 'Paid' },
    { invoice: 'RCPT-0512', date: 'May 21, 2026', amount: '$99.00', status: 'Paid' },
    { invoice: 'RCPT-0412', date: 'Apr 21, 2026', amount: '$99.00', status: 'Paid' },
    { invoice: 'RCPT-0312', date: 'Mar 21, 2026', amount: '$99.00', status: 'Paid' },
  ];

  billingHistoryColumns = [
    { headerName: 'INVOICE', fieldName: 'invoice', },
    { headerName: 'DATE', fieldName: 'date',  },
    { headerName: 'AMOUNT', fieldName: 'amount' , customRender: true },
    { headerName: 'STATUS', fieldName: 'status',  customRender: true },
    { headerName: 'RECEIPT', fieldName: 'receipt', customRender: true },
  ];
}
