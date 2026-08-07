import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsDataGridComponent } from 'cats-data-grid';

@Component({
  selector: 'app-warehouse-list',
  standalone: true,
  imports: [CommonModule, CatsDataGridComponent],
  templateUrl: './warehouse-list.html',
  styleUrls: ['./warehouse-list.scss'],
})
export class WarehouseListComponent {
  activeTab = 'All';
  tabs = ['All', 'Operational', 'Near Full', 'Maintenance'];
  isAddWarehouseModalOpen = false;

  openAddModal() {
    this.isAddWarehouseModalOpen = true;
  }

  closeAddModal() {
    this.isAddWarehouseModalOpen = false;
  }

  stats = [
    {
      title: 'Total Warehouses',
      icon: 'fa-solid fa-warehouse',
      colorClass: 'blue',
      value: '14',
      trend: '+2 new',
      trendUp: true,
      chartData: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
    },
    {
      title: 'Total Capacity',
      icon: 'fa-solid fa-layer-group',
      colorClass: 'green',
      value: '486,000',
      trend: '+8.2%',
      trendUp: true,
      chartData: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    },
    {
      title: 'Utilization %',
      icon: 'fa-solid fa-chart-pie',
      colorClass: 'yellow',
      value: '71.4%',
      trend: '+3.6%',
      trendUp: true,
      chartData: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
    },
    {
      title: 'Active Hubs',
      icon: 'fa-solid fa-truck-fast',
      colorClass: 'green',
      value: '12',
      trend: '-1 maint',
      trendUp: false,
      chartData: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
    }
  ];

  warehouses = [
    { name: 'Central Hub', location: 'New York, NY', manager: 'Kathryn Murphy', capacity: '48,000', stored: '34,560', utilization: 72, status: 'Operational' },
    { name: 'West Depot', location: 'Los Angeles, CA', manager: 'Jerome Bell', capacity: '42,000', stored: '39,480', utilization: 94, status: 'Near Full' },
    { name: 'South Hub', location: 'Dallas, TX', manager: 'Savannah Nguyen', capacity: '38,000', stored: '22,420', utilization: 59, status: 'Operational' },
    { name: 'North Depot', location: 'Chicago, IL', manager: 'Cody Fisher', capacity: '36,000', stored: '15,840', utilization: 44, status: 'Maintenance' },
    { name: 'East Hub', location: 'Boston, MA', manager: 'Jenny Wilson', capacity: '32,000', stored: '26,240', utilization: 82, status: 'Operational' },
    { name: 'Bay Depot', location: 'Seattle, WA', manager: 'Guy Hawkins', capacity: '30,000', stored: '28,800', utilization: 96, status: 'Near Full' }
  ];

  colDefs = [
    { headerName: 'WAREHOUSE', fieldName: 'name', width: 200, customRender: true },
    { headerName: 'MANAGER', fieldName: 'manager', width: 180 },
    { headerName: 'CAPACITY', fieldName: 'capacity', width: 120 },
    { headerName: 'STORED PARCELS', fieldName: 'stored', width: 140 },
    { headerName: 'UTILIZATION', fieldName: 'utilization', width: 150, customRender: true },
    { headerName: 'STATUS', fieldName: 'status', width: 120, customRender: true },
    { headerName: 'ACTION', fieldName: 'action', width: 80, customRender: true }
  ];

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
