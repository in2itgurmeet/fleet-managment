import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsDataGridComponent } from 'cats-data-grid';

@Component({
  selector: 'app-performance',
  standalone: true,
  imports: [CommonModule, CatsDataGridComponent],
  templateUrl: './performance.html',
  styleUrls: ['./performance.scss'],
})
export class PerformanceComponent {

  stats = [
    {
      title: 'Deliveries This Week',
      icon: 'fa-solid fa-box-open',
      colorClass: 'blue',
      value: '9,284',
      trend: '+8.6%',
      trendUp: true,
      chartData: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
    },
    {
      title: 'On-Time Rate',
      icon: 'fa-solid fa-clock-rotate-left',
      colorClass: 'green',
      value: '94.7%',
      trend: '+1.5%',
      trendUp: true,
      chartData: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    },
    {
      title: 'Avg Rating',
      icon: 'fa-regular fa-star',
      colorClass: 'yellow',
      value: '4.8',
      trend: '+0.5%',
      trendUp: true,
      chartData: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
    },
    {
      title: 'Failed Attempts',
      icon: 'fa-solid fa-circle-exclamation',
      colorClass: 'red',
      value: '112',
      trend: '-3.4%',
      trendUp: true, /* negative metric going down is good, use green styling */
      chartData: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
    }
  ];

  topRiders = [
    { rank: 1, name: 'Marcus Bell', deliveries: 218, onTime: '98.1%', rating: 4.9, earnings: '$1,840', avatar: 'assets/images/avatars/avatar-1.jpg' },
    { rank: 2, name: 'Guy Hawkins', deliveries: 205, onTime: '97.3%', rating: 4.8, earnings: '$1,712', avatar: 'assets/images/avatars/avatar-6.jpg' },
    { rank: 3, name: 'Savannah Nguyen', deliveries: 197, onTime: '96.0%', rating: 4.8, earnings: '$1,650', avatar: 'assets/images/avatars/avatar-4.jpg' },
    { rank: 4, name: 'Jerome Bell', deliveries: 184, onTime: '95.2%', rating: 4.7, earnings: '$1,524', avatar: 'assets/images/avatars/avatar-2.jpg' },
    { rank: 5, name: 'Darlene Robertson', deliveries: 176, onTime: '94.6%', rating: 4.9, earnings: '$1,488', avatar: 'assets/images/avatars/avatar-7.jpg' },
    { rank: 6, name: 'Cody Fisher', deliveries: 168, onTime: '93.1%', rating: 4.6, earnings: '$1,402', avatar: 'assets/images/avatars/avatar-3.jpg' },
    { rank: 7, name: 'Jenny Wilson', deliveries: 159, onTime: '92.4%', rating: 4.5, earnings: '$1,336', avatar: 'assets/images/avatars/avatar-5.jpg' }
  ];

  colDefs = [
    { headerName: 'RANK', fieldName: 'rank', width: 80, customRender: true },
    { headerName: 'RIDER', fieldName: 'name', width: 250, customRender: true },
    { headerName: 'DELIVERIES', fieldName: 'deliveries', width: 120 },
    { headerName: 'ON-TIME %', fieldName: 'onTime', width: 120 },
    { headerName: 'RATING', fieldName: 'rating', width: 120, customRender: true },
    { headerName: 'EARNINGS', fieldName: 'earnings', width: 120, customRender: true }
  ];

  serviceQuality = [
    { label: 'On-time delivery', value: '94%' },
    { label: 'First-attempt success', value: '80%' },
    { label: 'Customer satisfaction', value: '96%' },
    { label: 'Proof-of-delivery compliance', value: '91%' },
    { label: 'Route efficiency', value: '83%' }
  ];

}
