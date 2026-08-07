import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsDataGridComponent } from 'cats-data-grid';

@Component({
  selector: 'app-completed-orders',
  standalone: true,
  imports: [CommonModule, CatsDataGridComponent],
  templateUrl: './completed-orders.html',
  styleUrls: ['./completed-orders.scss'],
})
export class CompletedOrdersComponent {
  activeTab = 'All';
  tabs = ['All', 'This Week', 'This Month', 'Top Rated'];

  stats = [
    {
      title: 'Completed Orders',
      icon: 'fa-solid fa-circle-check',
      colorClass: 'green',
      value: '22,640',
      trend: '+8.8%',
      trendUp: true,
      chartData: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    },
    {
      title: 'Delivered This Week',
      icon: 'fa-solid fa-box-open',
      colorClass: 'blue',
      value: '1,486',
      trend: '+6.3%',
      trendUp: true,
      chartData: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
    },
    {
      title: 'Avg Rating',
      icon: 'fa-regular fa-star',
      colorClass: 'yellow',
      value: '4.8',
      trend: '+0.2',
      trendUp: true,
      chartData: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
    },
    {
      title: 'Total Revenue',
      icon: 'fa-solid fa-dollar-sign',
      colorClass: 'green',
      value: '$1.94M',
      trend: '+11.5%',
      trendUp: true,
      chartData: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    }
  ];

  orders = [
    { id: '#PP-48120', customer: 'Kathryn Murphy', deliveredOn: 'Jun 18, 2026', items: '3 items', amount: '$148.00', rating: 4.9, status: 'Delivered' },
    { id: '#PP-48104', customer: 'Cody Fisher', deliveredOn: 'Jun 17, 2026', items: '5 items', amount: '$296.00', rating: 4.7, status: 'Delivered' },
    { id: '#PP-48089', customer: 'Savannah Nguyen', deliveredOn: 'Jun 17, 2026', items: '2 items', amount: '$74.50', rating: 5.0, status: 'Delivered' },
    { id: '#PP-48073', customer: 'Jenny Wilson', deliveredOn: 'Jun 16, 2026', items: '6 items', amount: '$412.00', rating: 4.8, status: 'Delivered' },
    { id: '#PP-48051', customer: 'Darlene Robertson', deliveredOn: 'Jun 15, 2026', items: '1 item', amount: '$52.20', rating: 4.6, status: 'Delivered' },
    { id: '#PP-48034', customer: 'Marvin McKinney', deliveredOn: 'Jun 15, 2026', items: '4 items', amount: '$256.50', rating: 5.0, status: 'Delivered' },
    { id: '#PP-48012', customer: 'Courtney Henry', deliveredOn: 'Jun 14, 2026', items: '2 items', amount: '$73.00', rating: 4.5, status: 'Delivered' }
  ];

  colDefs = [
    { headerName: 'ORDER ID', fieldName: 'id', width: 120 },
    { headerName: 'CUSTOMER', fieldName: 'customer', width: 150 },
    { headerName: 'DELIVERED ON', fieldName: 'deliveredOn', width: 150 },
    { headerName: 'ITEMS', fieldName: 'items', width: 100 },
    { headerName: 'AMOUNT', fieldName: 'amount', width: 100 },
    { headerName: 'RATING', fieldName: 'rating', width: 100 },
    { headerName: 'STATUS', fieldName: 'status', width: 150 }
  ];

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
