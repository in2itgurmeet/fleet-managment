import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsDataGridComponent } from 'cats-data-grid';

@Component({
  selector: 'app-cod-management',
  standalone: true,
  imports: [CommonModule, CatsDataGridComponent],
  templateUrl: './cod-management.html',
  styleUrls: ['./cod-management.scss'],
})
export class CodManagementComponent {
  activeTab = 'All';
  tabs = ['All', 'Collected', 'Pending', 'Remitted', 'Discrepancy'];

  stats = [
    {
      title: 'COD Collected',
      icon: 'fa-solid fa-money-bill-trend-up',
      colorClass: 'blue',
      value: '$214,860',
      trend: '+7.6%',
      trendUp: true,
      chartData: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
    },
    {
      title: 'COD Pending',
      icon: 'fa-solid fa-hourglass-half',
      colorClass: 'yellow',
      value: '$38,420',
      trend: '+2.8%',
      trendUp: true,
      chartData: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
    },
    {
      title: 'Remitted',
      icon: 'fa-regular fa-circle-check',
      colorClass: 'green',
      value: '$176,440',
      trend: '+5.4%',
      trendUp: true,
      chartData: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    },
    {
      title: 'Outstanding',
      icon: 'fa-solid fa-circle-exclamation',
      colorClass: 'red',
      value: '$11,980',
      trend: '-1.7%',
      trendUp: false,
      chartData: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    }
  ];

  collections = [
    { id: 'PP-48213', customer: 'Kathryn Murphy', rider: 'Marcus Lee', amount: '$48.00', date: 'Jun 18, 2026', status: 'Collected' },
    { id: 'PP-48201', customer: 'Jerome Bell', rider: 'Priya Sharma', amount: '$62.50', date: '—', status: 'Pending' },
    { id: 'PP-48190', customer: 'Cody Fisher', rider: 'Daniel Cruz', amount: '$96.00', date: 'Jun 17, 2026', status: 'Remitted' },
    { id: 'PP-48155', customer: 'Savannah Nguyen', rider: 'Marcus Lee', amount: '$24.50', date: 'Jun 17, 2026', status: 'Discrepancy' },
    { id: 'PP-47990', customer: 'Ralph Edwards', rider: 'Aisha Khan', amount: '$60.00', date: 'Jun 16, 2026', status: 'Collected' },
    { id: 'PP-47985', customer: 'Guy Hawkins', rider: 'Daniel Cruz', amount: '$132.00', date: 'Jun 16, 2026', status: 'Remitted' },
    { id: 'PP-47960', customer: 'Jenny Wilson', rider: 'Priya Sharma', amount: '$18.00', date: 'Jun 15, 2026', status: 'Collected' },
    { id: 'PP-47912', customer: 'Darlene Robertson', rider: 'Aisha Khan', amount: '$72.20', date: '—', status: 'Pending' }
  ];

  colDefs = [
    { headerName: 'TRACKING ID', fieldName: 'id', width: 140, customRender: true },
    { headerName: 'CUSTOMER', fieldName: 'customer', width: 180 },
    { headerName: 'RIDER', fieldName: 'rider', width: 180 },
    { headerName: 'COD AMOUNT', fieldName: 'amount', width: 120, customRender: true },
    { headerName: 'COLLECTED ON', fieldName: 'date', width: 150 },
    { headerName: 'STATUS', fieldName: 'status', width: 120, customRender: true }
  ];

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
