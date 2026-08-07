import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsDataGridComponent } from 'cats-data-grid';

@Component({
  selector: 'app-incoming-parcels',
  standalone: true,
  imports: [CommonModule, CatsDataGridComponent],
  templateUrl: './incoming-parcels.html',
  styleUrls: ['./incoming-parcels.scss'],
})
export class IncomingParcelsComponent {
  activeTab = 'All';
  tabs = ['All', 'Received', 'Sorting', 'Awaiting Pickup'];

  stats = [
    {
      title: 'Total Incoming',
      icon: 'fa-solid fa-box',
      colorClass: 'blue',
      value: '2,940',
      trend: '+8.1%',
      trendUp: true,
      chartData: [4, 6, 8, 5, 9, 7, 10, 8, 6, 7, 5, 8, 4, 6, 8, 5, 9, 7, 10, 8]
    },
    {
      title: 'Sorted Today',
      icon: 'fa-solid fa-check-circle',
      colorClass: 'green',
      value: '1,212',
      trend: '+5.4%',
      trendUp: true,
      chartData: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
    },
    {
      title: 'Awaiting Sort',
      icon: 'fa-solid fa-clock-rotate-left',
      colorClass: 'yellow',
      value: '486',
      trend: '-3.2%',
      trendUp: false,
      chartData: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
    },
    {
      title: 'Avg Process Time',
      icon: 'fa-solid fa-stopwatch',
      colorClass: 'green',
      value: '42 min',
      trend: '-6.8%',
      trendUp: true, // Assuming negative time is good
      chartData: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
    }
  ];

  parcels = [
    { id: 'PP-48412', sender: 'Kathryn Murphy', origin: 'Newark Hub, NJ', receivedAt: 'Jun 20, 08:14 AM', weight: '2.4 kg', status: 'Received' },
    { id: 'PP-48407', sender: 'Jerome Bell', origin: 'Atlanta Hub, GA', receivedAt: 'Jun 20, 07:52 AM', weight: '0.8 kg', status: 'Sorting' },
    { id: 'PP-48395', sender: 'Cody Fisher', origin: 'Chicago Hub, IL', receivedAt: 'Jun 20, 07:30 AM', weight: '5.1 kg', status: 'Awaiting Pickup' },
    { id: 'PP-48380', sender: 'Savannah Nguyen', origin: 'Dallas Hub, TX', receivedAt: 'Jun 20, 06:58 AM', weight: '1.2 kg', status: 'Received' },
    { id: 'PP-48366', sender: 'Ralph Edwards', origin: 'Miami Hub, FL', receivedAt: 'Jun 20, 06:21 AM', weight: '3.7 kg', status: 'Sorting' },
    { id: 'PP-48351', sender: 'Guy Hawkins', origin: 'Seattle Hub, WA', receivedAt: 'Jun 19, 11:47 PM', weight: '0.5 kg', status: 'Awaiting Pickup' },
    { id: 'PP-48338', sender: 'Jenny Wilson', origin: 'Boston Hub, MA', receivedAt: 'Jun 19, 10:12 PM', weight: '6.3 kg', status: 'Received' }
  ];

  colDefs = [
    { headerName: 'TRACKING ID', fieldName: 'id', width: 120 },
    { headerName: 'SENDER', fieldName: 'sender', width: 150 },
    { headerName: 'ORIGIN HUB', fieldName: 'origin', width: 150 },
    { headerName: 'RECEIVED AT', fieldName: 'receivedAt', width: 150 },
    { headerName: 'WEIGHT', fieldName: 'weight', width: 100 },
    { headerName: 'STATUS', fieldName: 'status', width: 120 }
  ];

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
