import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CatsDataGridComponent } from 'cats-data-grid';

@Component({
  selector: 'app-new-orders',
  standalone: true,
  imports: [CommonModule, RouterModule, CatsDataGridComponent],
  templateUrl: './new-orders.html',
  styleUrls: ['./new-orders.scss'],
})
export class NewOrdersComponent {
  activeTab = 'All';
  tabs = ['All', 'Awaiting Confirmation', 'Confirmed'];

  stats = [
    {
      title: 'New Today',
      icon: 'fa-solid fa-sparkles',
      colorClass: 'blue',
      value: '486',
      trend: '+14.2%',
      trendUp: true,
      chartData: [4, 6, 8, 5, 9, 7, 10, 8, 6, 7, 5, 8, 4, 6, 8, 5, 9, 7, 10, 8]
    },
    {
      title: 'Awaiting Confirmation',
      icon: 'fa-solid fa-clock-rotate-left',
      colorClass: 'yellow',
      value: '312',
      trend: '+6.4%',
      trendUp: true,
      chartData: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
    },
    {
      title: 'Confirmed',
      icon: 'fa-solid fa-circle-check',
      colorClass: 'blue',
      value: '174',
      trend: '+9.1%',
      trendUp: true,
      chartData: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
    },
    {
      title: 'Avg Order Value',
      icon: 'fa-solid fa-dollar-sign',
      colorClass: 'green',
      value: '$86.40',
      trend: '-2.0%',
      trendUp: false,
      chartData: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    }
  ];

  orders = [
    { id: '#PP-48256', customer: 'Brooklyn Simmons', items: '2 items', placed: '5 min ago', amount: '$64.00', status: 'Awaiting Confirmation' },
    { id: '#PP-48254', customer: 'Leslie Alexander', items: '1 item', placed: '12 min ago', amount: '$28.50', status: 'Confirmed' },
    { id: '#PP-48251', customer: 'Dianne Russell', items: '4 items', placed: '23 min ago', amount: '$182.00', status: 'Awaiting Confirmation' },
    { id: '#PP-48249', customer: 'Robert Fox', items: '3 items', placed: '41 min ago', amount: '$97.20', status: 'Confirmed' },
    { id: '#PP-48245', customer: 'Theresa Webb', items: '1 item', placed: '58 min ago', amount: '$42.00', status: 'Awaiting Confirmation' },
    { id: '#PP-48241', customer: 'Marvin McKinney', items: '5 items', placed: '1 hr ago', amount: '$256.50', status: 'Confirmed' },
    { id: '#PP-48238', customer: 'Courtney Henry', items: '2 items', placed: '2 hr ago', amount: '$73.00', status: 'Awaiting Confirmation' }
  ];

  colDefs = [
    { headerName: 'ORDER ID', fieldName: 'id', width: 120 },
    { headerName: 'CUSTOMER', fieldName: 'customer', width: 150 },
    { headerName: 'ITEMS', fieldName: 'items', width: 100 },
    { headerName: 'PLACED', fieldName: 'placed', width: 120 },
    { headerName: 'AMOUNT', fieldName: 'amount', width: 100 },
    { headerName: 'STATUS', fieldName: 'status', width: 150 }
  ];

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
