import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { CatsDataGridComponent } from 'cats-data-grid';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [CommonModule, CatsDataGridComponent],
  templateUrl: './customer-details.html',
  styleUrls: ['./customer-details.scss']
})
export class CustomerDetailsComponent {
  customer = {
    name: 'Kathryn Murphy',
    status: 'VIP',
    id: 'CUST-10482',
    email: 'kathryn.murphy@gmail.com',
    phone: '+1 555 987 6543',
    address: '88 Park Avenue, New York, NY 10001',
    since: 'Jan 2024',
    avatar: 'assets/images/avatars/avatar-1.jpg',
    preferences: {
      time: 'Afternoon (2-6 PM)',
      note: 'Leave with concierge',
      payment: 'COD'
    }
  };

  stats = [
    { title: 'Total Orders', value: '42', trend: '+6', trendUp: true, colorClass: 'blue', chartData: [4, 6, 8, 5, 9, 7, 10, 8, 6, 7, 5, 8, 4, 6, 8, 5, 9, 7, 10, 8] },
    { title: 'Total Spent', value: '$3,840.00', trend: '+12.4%', trendUp: true, colorClass: 'green', chartData: [4, 6, 8, 5, 9, 7, 10, 8, 6, 7, 5, 8, 4, 6, 8, 5, 9, 7, 10, 8] },
    { title: 'Avg Delivery Time', value: '1.8 days', trend: '-0.5d', trendUp: true, colorClass: 'yellow', chartData: [4, 6, 8, 5, 9, 7, 10, 8, 6, 7, 5, 8, 4, 6, 8, 5, 9, 7, 10, 8] },
    { title: 'Return Rate', value: '2.4%', trend: '-0.5%', trendUp: true, colorClass: 'red', chartData: [4, 6, 8, 5, 9, 7, 10, 8, 6, 7, 5, 8, 4, 6, 8, 5, 9, 7, 10, 8] }
  ];

  recentOrders = [
    { id: 'PP-48213', date: 'Jun 18, 2026', items: 4, amount: '$48.00', status: 'Processing' },
    { id: 'PP-47880', date: 'Jun 09, 2026', items: 2, amount: '$96.00', status: 'Delivered' },
    { id: 'PP-47604', date: 'May 28, 2026', items: 1, amount: '$24.50', status: 'Delivered' },
    { id: 'PP-47291', date: 'May 14, 2026', items: 3, amount: '$132.00', status: 'Cancelled' },
    { id: 'PP-47012', date: 'Apr 30, 2026', items: 5, amount: '$210.40', status: 'Delivered' }
  ];

  colDefs = [
    { fieldName: 'id', headerName: 'Order ID', width: 150 },
    { fieldName: 'date', headerName: 'Date', width: 150 },
    { fieldName: 'items', headerName: 'Items', width: 100 },
    { fieldName: 'amount', headerName: 'Amount', width: 120 },
    { fieldName: 'status', headerName: 'Status', width: 150 }
  ];
  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }
}
