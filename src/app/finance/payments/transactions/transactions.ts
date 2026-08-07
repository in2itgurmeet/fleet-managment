import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsDataGridComponent } from 'cats-data-grid';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, CatsDataGridComponent],
  templateUrl: './transactions.html',
  styleUrls: ['./transactions.scss'],
})
export class TransactionsComponent {
  activeTab = 'All';
  tabs = ['All', 'Completed', 'Pending', 'Failed', 'Refunded'];

  stats = [
    {
      title: 'Total Revenue',
      icon: 'fa-solid fa-earth-americas',
      colorClass: 'blue',
      value: '$842,190',
      trend: '+9.9%',
      trendUp: true,
      chartData: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
    },
    {
      title: 'This Month',
      icon: 'fa-regular fa-calendar',
      colorClass: 'green',
      value: '$68,540',
      trend: '+5.2%',
      trendUp: true,
      chartData: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    },
    {
      title: 'Pending Payouts',
      icon: 'fa-solid fa-hourglass-half',
      colorClass: 'yellow',
      value: '$12,380',
      trend: '+3.1%',
      trendUp: true,
      chartData: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
    },
    {
      title: 'Refunds',
      icon: 'fa-solid fa-arrow-rotate-left',
      colorClass: 'red',
      value: '$4,210',
      trend: '-1.4%',
      trendUp: false,
      chartData: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    }
  ];

  transactions = [
    { id: 'TXN-90218', date: 'Jun 18, 2026', customer: 'Kathryn Murphy', method: 'Card', amount: '$148.00', status: 'Completed' },
    { id: 'TXN-90211', date: 'Jun 18, 2026', customer: 'Jerome Bell', method: 'COD', amount: '$62.50', status: 'Pending' },
    { id: 'TXN-90198', date: 'Jun 17, 2026', customer: 'Cody Fisher', method: 'Wallet', amount: '$96.00', status: 'Completed' },
    { id: 'TXN-90155', date: 'Jun 17, 2026', customer: 'Savannah Nguyen', method: 'Card', amount: '$24.50', status: 'Failed' },
    { id: 'TXN-90090', date: 'Jun 16, 2026', customer: 'Ralph Edwards', method: 'COD', amount: '$60.00', status: 'Refunded' },
    { id: 'TXN-90042', date: 'Jun 16, 2026', customer: 'Guy Hawkins', method: 'Wallet', amount: '$210.00', status: 'Completed' },
    { id: 'TXN-89998', date: 'Jun 15, 2026', customer: 'Jenny Wilson', method: 'Card', amount: '$18.00', status: 'Completed' },
    { id: 'TXN-89970', date: 'Jun 15, 2026', customer: 'Darlene Robertson', method: 'COD', amount: '$72.20', status: 'Pending' }
  ];

  colDefs = [
    { headerName: 'TXN ID', fieldName: 'id', width: 140, customRender: true },
    { headerName: 'DATE', fieldName: 'date', width: 150 },
    { headerName: 'CUSTOMER', fieldName: 'customer', width: 200 },
    { headerName: 'METHOD', fieldName: 'method', width: 120, customRender: true },
    { headerName: 'AMOUNT', fieldName: 'amount', width: 120, customRender: true },
    { headerName: 'STATUS', fieldName: 'status', width: 120, customRender: true }
  ];

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
