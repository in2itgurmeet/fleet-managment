import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsDataGridComponent } from 'cats-data-grid';

@Component({
  selector: 'app-processing-orders',
  standalone: true,
  imports: [CommonModule, CatsDataGridComponent],
  templateUrl: './processing-orders.html',
  styleUrls: ['./processing-orders.scss'],
})
export class ProcessingOrdersComponent {
  activeTab = 'All';
  tabs = ['All', 'Packing', 'Ready to Ship', 'Dispatched'];

  stats = [
    {
      title: 'In Processing',
      icon: 'fa-solid fa-box-open',
      colorClass: 'blue',
      value: '1,204',
      trend: '+3.1%',
      trendUp: true,
      chartData: [4, 6, 8, 5, 9, 7, 10, 8, 6, 7, 5, 8, 4, 6, 8, 5, 9, 7, 10, 8]
    },
    {
      title: 'Packing',
      icon: 'fa-solid fa-box',
      colorClass: 'yellow',
      value: '528',
      trend: '+5.6%',
      trendUp: true,
      chartData: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
    },
    {
      title: 'Ready to Ship',
      icon: 'fa-solid fa-boxes-stacked',
      colorClass: 'blue',
      value: '412',
      trend: '-1.4%',
      trendUp: false,
      chartData: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
    },
    {
      title: 'Dispatched Today',
      icon: 'fa-solid fa-truck-fast',
      colorClass: 'green',
      value: '264',
      trend: '+8.2%',
      trendUp: true,
      chartData: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    }
  ];

  orders = [
    { id: '#PP-48230', customer: 'Kristin Watson', warehouse: 'Newark, NJ', items: '3 items', amount: '$128.00', status: 'Packing' },
    { id: '#PP-48226', customer: 'Cameron Williamson', warehouse: 'Atlanta, GA', items: '1 item', amount: '$45.00', status: 'Ready to Ship' },
    { id: '#PP-48219', customer: 'Wade Warren', warehouse: 'Phoenix, AZ', items: '5 items', amount: '$312.50', status: 'Dispatched' },
    { id: '#PP-48212', customer: 'Esther Howard', warehouse: 'Newark, NJ', items: '2 items', amount: '$88.00', status: 'Packing' },
    { id: '#PP-48205', customer: 'Jacob Jones', warehouse: 'Houston, TX', items: '4 items', amount: '$204.00', status: 'Ready to Ship' },
    { id: '#PP-48198', customer: 'Annette Black', warehouse: 'Atlanta, GA', items: '1 item', amount: '$36.50', status: 'Dispatched' },
    { id: '#PP-48191', customer: 'Eleanor Pena', warehouse: 'Phoenix, AZ', items: '6 items', amount: '$398.00', status: 'Packing' }
  ];

  colDefs = [
    { headerName: 'ORDER ID', fieldName: 'id', width: 120 },
    { headerName: 'CUSTOMER', fieldName: 'customer', width: 150 },
    { headerName: 'WAREHOUSE', fieldName: 'warehouse', width: 150 },
    { headerName: 'ITEMS', fieldName: 'items', width: 100 },
    { headerName: 'AMOUNT', fieldName: 'amount', width: 100 },
    { headerName: 'STATUS', fieldName: 'status', width: 150 }
  ];

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
