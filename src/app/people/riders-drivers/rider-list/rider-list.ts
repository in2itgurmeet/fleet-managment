import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsDataGridComponent } from 'cats-data-grid';

@Component({
  selector: 'app-rider-list',
  standalone: true,
  imports: [CommonModule, CatsDataGridComponent],
  templateUrl: './rider-list.html',
  styleUrls: ['./rider-list.scss'],
})
export class RiderListComponent {
  activeTab = 'All';
  tabs = ['All', 'On Duty', 'On Break', 'Off Duty'];

  stats = [
    {
      title: 'Total Riders',
      icon: 'fa-solid fa-motorcycle',
      colorClass: 'blue',
      value: '142',
      trend: '+6.2%',
      trendUp: true,
      chartData: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
    },
    {
      title: 'On Shift',
      icon: 'fa-solid fa-clock',
      colorClass: 'green',
      value: '98',
      trend: '+3.1%',
      trendUp: true,
      chartData: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    },
    {
      title: 'Avg Deliveries/Day',
      icon: 'fa-solid fa-box-open',
      colorClass: 'yellow',
      value: '27.4',
      trend: '+1.8%',
      trendUp: true,
      chartData: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
    },
    {
      title: 'Avg Rating',
      icon: 'fa-regular fa-star',
      colorClass: 'green',
      value: '4.8',
      trend: '+0.4%',
      trendUp: true,
      chartData: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
    }
  ];

  riders = [
    { name: 'Marcus Bell', id: 'RID-1042', vehicle: 'Bike', zone: 'Zone A', deliveries: 32, rating: 4.9, status: 'On Duty', avatar: 'assets/images/avatars/avatar-1.jpg' },
    { name: 'Savannah Nguyen', id: 'RID-1037', vehicle: 'Van', zone: 'Zone C', deliveries: 28, rating: 4.8, status: 'On Duty', avatar: 'assets/images/avatars/avatar-4.jpg' },
    { name: 'Cody Fisher', id: 'RID-1029', vehicle: 'Scooter', zone: 'Zone B', deliveries: 19, rating: 4.6, status: 'On Break', avatar: 'assets/images/avatars/avatar-3.jpg' },
    { name: 'Jerome Bell', id: 'RID-1018', vehicle: 'Bike', zone: 'Zone A', deliveries: 24, rating: 4.7, status: 'On Duty', avatar: 'assets/images/avatars/avatar-2.jpg' }
  ];

  colDefs = [
    { headerName: 'RIDER', fieldName: 'name', width: 220, customRender: true },
    { headerName: 'VEHICLE', fieldName: 'vehicle', width: 120 },
    { headerName: 'ZONE', fieldName: 'zone', width: 120 },
    { headerName: 'DELIVERIES TODAY', fieldName: 'deliveries', width: 160 },
    { headerName: 'RATING', fieldName: 'rating', width: 100, customRender: true },
    { headerName: 'STATUS', fieldName: 'status', width: 120 },
    { headerName: 'ACTION', fieldName: 'action', width: 80, customRender: true }
  ];

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
