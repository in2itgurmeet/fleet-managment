import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsDataGridComponent } from 'cats-data-grid';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule, CatsDataGridComponent],
  templateUrl: './customer-list.html',
  styleUrls: ['./customer-list.scss'],
})
export class CustomerListComponent {
  activeTab = 'All';
  tabs = ['All', 'Active', 'VIP', 'Inactive'];

  stats = [
    {
      title: 'Total Customers',
      icon: 'fa-solid fa-users',
      colorClass: 'blue',
      value: '8,642',
      trend: '+9.1%',
      trendUp: true,
      chartData: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
    },
    {
      title: 'New This Month',
      icon: 'fa-solid fa-user-plus',
      colorClass: 'green',
      value: '486',
      trend: '+14.2%',
      trendUp: true,
      chartData: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
    },
    {
      title: 'Active Customers',
      icon: 'fa-solid fa-user-check',
      colorClass: 'yellow',
      value: '6,910',
      trend: '+3.6%',
      trendUp: true,
      chartData: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    },
    {
      title: 'Avg Orders/Customer',
      icon: 'fa-solid fa-chart-line',
      colorClass: 'red',
      value: '12.8',
      trend: '-0.8%',
      trendUp: false,
      chartData: [4, 6, 8, 5, 9, 7, 10, 8, 6, 7, 5, 8, 4, 6, 8, 5, 9, 7, 10, 8]
    }
  ];

  customers = [
    { name: 'Kathryn Murphy', email: 'kathryn.murphy@gmail.com', phone: '+1 555 987 6543', location: 'New York, NY', orders: 42, spent: '$3,840.00', status: 'VIP', avatar: 'assets/images/avatars/avatar-1.jpg' },
    { name: 'Jerome Bell', email: 'jerome.bell@outlook.com', phone: '+1 555 213 4498', location: 'Los Angeles, CA', orders: 18, spent: '$1,206.50', status: 'Active', avatar: 'assets/images/avatars/avatar-2.jpg' },
    { name: 'Cody Fisher', email: 'cody.fisher@gmail.com', phone: '+1 555 770 1102', location: 'Chicago, IL', orders: 27, spent: '$2,415.00', status: 'Active', avatar: 'assets/images/avatars/avatar-3.jpg' },
    { name: 'Savannah Nguyen', email: 'savannah.nguyen@yahoo.com', phone: '+1 555 668 2031', location: 'Dallas, TX', orders: 6, spent: '$318.20', status: 'Inactive', avatar: 'assets/images/avatars/avatar-4.jpg' },
    { name: 'Ralph Edwards', email: 'ralph.edwards@gmail.com', phone: '+1 555 904 7765', location: 'Miami, FL', orders: 51, spent: '$5,072.90', status: 'VIP', avatar: 'assets/images/avatars/avatar-5.jpg' },
    { name: 'Guy Hawkins', email: 'guy.hawkins@protonmail.com', phone: '+1 555 442 9007', location: 'Seattle, WA', orders: 14, spent: '$906.00', status: 'Active', avatar: 'assets/images/avatars/avatar-6.jpg' },
    { name: 'Darlene Robertson', email: 'darlene.robertson@gmail.com', phone: '+1 555 331 6620', location: 'Denver, CO', orders: 9, spent: '$640.75', status: 'Inactive', avatar: 'assets/images/avatars/avatar-7.jpg' }
  ];

  colDefs = [
    { headerName: 'CUSTOMER', fieldName: 'name', width: 200, customRender: true },
    { headerName: 'PHONE', fieldName: 'phone', width: 150 },
    { headerName: 'LOCATION', fieldName: 'location', width: 150 },
    { headerName: 'ORDERS', fieldName: 'orders', width: 100 },
    { headerName: 'TOTAL SPENT', fieldName: 'spent', width: 120 },
    { headerName: 'STATUS', fieldName: 'status', width: 120 }
  ];

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
