import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsDataGridComponent } from 'cats-data-grid';
import { ActioRendrer } from '../../../shared/actio-rendrer/actio-rendrer';

@Component({
  selector: 'app-all-shipments',
  standalone: true,
  imports: [CommonModule, CatsDataGridComponent],
  templateUrl: './all-shipments.html',
  styleUrl: './all-shipments.scss',
})
export class AllShipments {
  activeTab = 'All';
  tabs = ['All', 'In Transit', 'Delivered', 'Pending', 'Failed'];

  stats = [
    {
      title: 'Total Shipments',
      icon: 'fa-solid fa-cube',
      colorClass: 'blue',
      value: '18,420',
      trend: '+12.4%',
      trendUp: true,
      chartData: [4, 6, 8, 5, 9, 7, 10, 8, 6, 7, 5, 8, 4, 6, 8, 5, 9, 7, 10, 8]
    },
    {
      title: 'In Transit',
      icon: 'fa-solid fa-truck-fast',
      colorClass: 'green',
      value: '1,168',
      trend: '+4.7%',
      trendUp: true,
      chartData: [2, 3, 4, 3, 5, 4, 6, 5, 4, 4, 3, 5, 2, 3, 4, 3, 5, 4, 6, 5]
    },
    {
      title: 'Pending Pickup',
      icon: 'fa-regular fa-clock',
      colorClass: 'yellow',
      value: '312',
      trend: '-1.9%',
      trendUp: false,
      chartData: [6, 5, 7, 6, 5, 4, 3, 4, 5, 4, 5, 6, 6, 5, 7, 6, 5, 4, 3, 4]
    },
    {
      title: 'Failed / Returned',
      icon: 'fa-regular fa-circle-xmark',
      colorClass: 'red',
      value: '320',
      trend: '-2.3%',
      trendUp: false,
      chartData: [3, 2, 4, 2, 3, 2, 1, 2, 3, 2, 2, 3, 3, 2, 4, 2, 3, 2, 1, 2]
    }
  ];

  shipments = [
    { id: 'PP-48213', customer: 'Kathryn Murphy', destination: 'New York, NY', service: 'Express', date: 'Jun 18, 2026', cod: '$48.00', status: 'Delivered' },
    { id: 'PP-48201', customer: 'Jerome Bell', destination: 'Los Angeles, CA', service: 'Standard', date: 'Jun 18, 2026', cod: '—', status: 'In Transit' },
    { id: 'PP-48190', customer: 'Cody Fisher', destination: 'Chicago, IL', service: 'Same-Day', date: 'Jun 17, 2026', cod: '$96.00', status: 'Delivered' },
    { id: 'PP-48182', customer: 'Jane Cooper', destination: 'Houston, TX', service: 'Express', date: 'Jun 17, 2026', cod: '—', status: 'Pending' },
    { id: 'PP-48175', customer: 'Robert Fox', destination: 'Phoenix, AZ', service: 'Standard', date: 'Jun 16, 2026', cod: '$150.00', status: 'Failed' },
    { id: 'PP-48166', customer: 'Wade Warren', destination: 'Philadelphia, PA', service: 'Express', date: 'Jun 16, 2026', cod: '—', status: 'In Transit' },
    { id: 'PP-48150', customer: 'Esther Howard', destination: 'San Antonio, TX', service: 'Same-Day', date: 'Jun 15, 2026', cod: '$32.00', status: 'Delivered' },
  ];

  colDefs = [
    { headerName: 'TRACKING ID', fieldName: 'id', width: 120 },
    { headerName: 'CUSTOMER', fieldName: 'customer', width: 150 },
    { headerName: 'DESTINATION', fieldName: 'destination', width: 150 },
    { headerName: 'SERVICE', fieldName: 'service', width: 120 },
    { headerName: 'DATE', fieldName: 'date', width: 120 },
    { headerName: 'COD', fieldName: 'cod', width: 100 },
    { headerName: 'STATUS', fieldName: 'status', width: 120 },
    {
      headerName: "ACTION", fieldName: "action", width: 120, cellRenderer: ActioRendrer
    }
  ];

  setTab(tab: string) {
    this.activeTab = tab;
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'delivered': return 'status-delivered';
      case 'in transit': return 'status-transit';
      case 'pending': return 'status-pending';
      case 'failed': return 'status-failed';
      default: return 'status-default';
    }
  }
}
