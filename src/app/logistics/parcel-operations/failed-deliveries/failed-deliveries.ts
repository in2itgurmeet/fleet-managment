import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsDataGridComponent } from 'cats-data-grid';

@Component({
  selector: 'app-failed-deliveries',
  standalone: true,
  imports: [CommonModule, CatsDataGridComponent],
  templateUrl: './failed-deliveries.html',
  styleUrls: ['./failed-deliveries.scss'],
})
export class FailedDeliveriesComponent {
  activeTab = 'All';
  tabs = ['All', 'Action Required', 'Resolved'];

  stats = [
    {
      title: 'Total Failed',
      icon: 'fa-solid fa-triangle-exclamation',
      colorClass: 'red',
      value: '342',
      trend: '+1.2%',
      trendUp: true,
      chartData: [4, 6, 8, 5, 9, 7, 10, 8, 6, 7, 5, 8, 4, 6, 8, 5, 9, 7, 10, 8]
    },
    {
      title: 'Returned to Hub',
      icon: 'fa-solid fa-warehouse',
      colorClass: 'yellow',
      value: '128',
      trend: '-0.5%',
      trendUp: false,
      chartData: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
    },
    {
      title: 'Rescheduled',
      icon: 'fa-solid fa-calendar-check',
      colorClass: 'blue',
      value: '185',
      trend: '+4.1%',
      trendUp: true,
      chartData: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
    },
    {
      title: 'Lost / Damaged',
      icon: 'fa-solid fa-box-open',
      colorClass: 'red',
      value: '29',
      trend: '-1.4%',
      trendUp: false,
      chartData: [2, 3, 2, 4, 3, 2, 2, 3, 2, 4, 3, 2, 2, 3, 2, 4, 3, 2, 2, 3]
    }
  ];

  parcels = [
    { id: 'PP-48321', customer: 'Kathryn Murphy', reason: 'Customer not available', attemptedOn: 'Jun 20, 2026', rider: 'Marcus Bell', status: 'Action Required' },
    { id: 'PP-48310', customer: 'Jerome Bell', reason: 'Wrong address provided', attemptedOn: 'Jun 20, 2026', rider: 'Jenny Wilson', status: 'Resolved' },
    { id: 'PP-48299', customer: 'Cody Fisher', reason: 'Damaged in transit', attemptedOn: 'Jun 19, 2026', rider: 'Robert Fox', status: 'Action Required' },
    { id: 'PP-48285', customer: 'Jane Cooper', reason: 'Refused by customer', attemptedOn: 'Jun 19, 2026', rider: 'Marcus Bell', status: 'Resolved' },
    { id: 'PP-48270', customer: 'Robert Fox', reason: 'Business closed', attemptedOn: 'Jun 18, 2026', rider: 'Jenny Wilson', status: 'Resolved' },
    { id: 'PP-48261', customer: 'Wade Warren', reason: 'Weather delay', attemptedOn: 'Jun 18, 2026', rider: 'Robert Fox', status: 'Resolved' }
  ];

  colDefs = [
    { headerName: 'TRACKING ID', fieldName: 'id', width: 120 },
    { headerName: 'CUSTOMER', fieldName: 'customer', width: 150 },
    { headerName: 'REASON', fieldName: 'reason', width: 150 },
    { headerName: 'ATTEMPTED ON', fieldName: 'attemptedOn', width: 120 },
    { headerName: 'RIDER', fieldName: 'rider', width: 120 },
    { headerName: 'STATUS', fieldName: 'status', width: 120 }
  ];

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
