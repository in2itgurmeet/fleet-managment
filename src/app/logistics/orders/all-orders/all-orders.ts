import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CatsDataGridComponent } from 'cats-data-grid';

@Component({
  selector: 'app-all-orders',
  standalone: true,
  imports: [CommonModule, RouterModule, CatsDataGridComponent],
  templateUrl: './all-orders.html',
  styleUrls: ['./all-orders.scss'],
})
export class AllOrdersComponent {
  activeTab = 'All';
  tabs = ['All', 'New', 'Processing', 'Completed', 'Cancelled'];

  stats = [
    {
      title: 'Total Orders',
      icon: 'fa-solid fa-list-check',
      colorClass: 'blue',
      value: '24,856',
      trend: '+9.6%',
      trendUp: true,
      chartData: [4, 6, 8, 5, 9, 7, 10, 8, 6, 7, 5, 8, 4, 6, 8, 5, 9, 7, 10, 8]
    },
    {
      title: 'New Orders',
      icon: 'fa-solid fa-sparkles',
      colorClass: 'blue',
      value: '486',
      trend: '+14.2%',
      trendUp: true,
      chartData: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
    },
    {
      title: 'Processing',
      icon: 'fa-solid fa-gears',
      colorClass: 'yellow',
      value: '1,204',
      trend: '+3.1%',
      trendUp: true,
      chartData: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
    },
    {
      title: 'Completed',
      icon: 'fa-solid fa-circle-check',
      colorClass: 'green',
      value: '22,640',
      trend: '+8.8%',
      trendUp: true,
      chartData: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    }
  ];

  orders = [
    { id: '#PP-48213', customer: 'Kathryn Murphy', items: '3 items', orderDate: 'Jun 18, 2026', amount: '$148.00', payment: 'Prepaid', status: 'Completed' },
    { id: '#PP-48207', customer: 'Jerome Bell', items: '1 item', orderDate: 'Jun 18, 2026', amount: '$32.50', payment: 'COD', status: 'New' },
    { id: '#PP-48190', customer: 'Cody Fisher', items: '5 items', orderDate: 'Jun 17, 2026', amount: '$296.00', payment: 'Prepaid', status: 'Processing' },
    { id: '#PP-48155', customer: 'Savannah Nguyen', items: '2 items', orderDate: 'Jun 17, 2026', amount: '$74.50', payment: 'COD', status: 'Processing' },
    { id: '#PP-47990', customer: 'Ralph Edwards', items: '4 items', orderDate: 'Jun 16, 2026', amount: '$210.00', payment: 'Prepaid', status: 'Cancelled' },
    { id: '#PP-47985', customer: 'Guy Hawkins', items: '1 item', orderDate: 'Jun 16, 2026', amount: '$18.99', payment: 'COD', status: 'New' },
    { id: '#PP-47960', customer: 'Jenny Wilson', items: '6 items', orderDate: 'Jun 15, 2026', amount: '$412.00', payment: 'Prepaid', status: 'Completed' }
  ];

  colDefs = [
    { headerName: 'ORDER ID', fieldName: 'id', width: 120 },
    { headerName: 'CUSTOMER', fieldName: 'customer', width: 150 },
    { headerName: 'ITEMS', fieldName: 'items', width: 100 },
    { headerName: 'ORDER DATE', fieldName: 'orderDate', width: 120 },
    { headerName: 'AMOUNT', fieldName: 'amount', width: 100 },
    { headerName: 'PAYMENT', fieldName: 'payment', width: 120 },
    { headerName: 'STATUS', fieldName: 'status', width: 120 }
  ];

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
