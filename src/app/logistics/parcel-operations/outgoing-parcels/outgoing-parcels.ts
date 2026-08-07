import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsDataGridComponent } from 'cats-data-grid';

@Component({
  selector: 'app-outgoing-parcels',
  standalone: true,
  imports: [CommonModule, CatsDataGridComponent],
  templateUrl: './outgoing-parcels.html',
  styleUrls: ['./outgoing-parcels.scss'],
})
export class OutgoingParcelsComponent {
  activeTab = 'All';
  tabs = ['All', 'Dispatching', 'In Transit', 'Delayed'];

  stats = [
    {
      title: 'Total Outgoing',
      icon: 'fa-solid fa-truck-ramp-box',
      colorClass: 'blue',
      value: '3,842',
      trend: '+12.4%',
      trendUp: true,
      chartData: [4, 6, 8, 5, 9, 7, 10, 8, 6, 7, 5, 8, 4, 6, 8, 5, 9, 7, 10, 8]
    },
    {
      title: 'Dispatched Today',
      icon: 'fa-solid fa-truck-fast',
      colorClass: 'green',
      value: '1,450',
      trend: '+8.1%',
      trendUp: true,
      chartData: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
    },
    {
      title: 'Awaiting Dispatch',
      icon: 'fa-solid fa-boxes-packing',
      colorClass: 'yellow',
      value: '520',
      trend: '-2.1%',
      trendUp: false,
      chartData: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
    },
    {
      title: 'Delayed',
      icon: 'fa-solid fa-triangle-exclamation',
      colorClass: 'red',
      value: '45',
      trend: '-1.5%',
      trendUp: true, // Assuming negative delays is good
      chartData: [2, 3, 2, 4, 3, 2, 2, 3, 2, 4, 3, 2, 2, 3, 2, 4, 3, 2, 2, 3]
    }
  ];

  parcels = [
    { id: 'PP-48512', recipient: 'Esther Howard', destination: 'San Francisco, CA', dispatchedAt: 'Jun 20, 09:14 AM', weight: '1.2 kg', status: 'Dispatching' },
    { id: 'PP-48507', recipient: 'Wade Warren', destination: 'Denver, CO', dispatchedAt: 'Jun 20, 08:32 AM', weight: '4.8 kg', status: 'In Transit' },
    { id: 'PP-48495', recipient: 'Brooklyn Simmons', destination: 'Phoenix, AZ', dispatchedAt: 'Jun 20, 08:10 AM', weight: '2.1 kg', status: 'Delayed' },
    { id: 'PP-48480', recipient: 'Cameron Williamson', destination: 'Portland, OR', dispatchedAt: 'Jun 20, 07:45 AM', weight: '0.9 kg', status: 'Dispatching' },
    { id: 'PP-48466', recipient: 'Jane Cooper', destination: 'Austin, TX', dispatchedAt: 'Jun 20, 07:12 AM', weight: '5.5 kg', status: 'In Transit' },
    { id: 'PP-48451', recipient: 'Robert Fox', destination: 'Las Vegas, NV', dispatchedAt: 'Jun 19, 11:20 PM', weight: '3.3 kg', status: 'Dispatching' },
    { id: 'PP-48438', recipient: 'Jacob Jones', destination: 'Seattle, WA', dispatchedAt: 'Jun 19, 09:45 PM', weight: '1.8 kg', status: 'In Transit' }
  ];

  colDefs = [
    { headerName: 'TRACKING ID', fieldName: 'id', width: 120 },
    { headerName: 'RECIPIENT', fieldName: 'recipient', width: 150 },
    { headerName: 'DESTINATION', fieldName: 'destination', width: 150 },
    { headerName: 'DISPATCHED AT', fieldName: 'dispatchedAt', width: 150 },
    { headerName: 'WEIGHT', fieldName: 'weight', width: 100 },
    { headerName: 'STATUS', fieldName: 'status', width: 120 }
  ];

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
