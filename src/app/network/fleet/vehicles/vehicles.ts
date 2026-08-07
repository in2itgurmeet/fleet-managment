import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsDataGridComponent } from 'cats-data-grid';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [CommonModule, CatsDataGridComponent],
  templateUrl: './vehicles.html',
  styleUrls: ['./vehicles.scss'],
})
export class VehiclesComponent {
  activeTab = 'All';
  tabs = ['All', 'Active', 'In Maintenance', 'Idle', 'Out of Service'];
  isAddVehicleModalOpen = false;

  stats = [
    {
      title: 'Total Vehicles',
      icon: 'fa-solid fa-truck',
      colorClass: 'blue',
      value: '86',
      trend: '+3.6%',
      trendUp: true,
      chartData: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
    },
    {
      title: 'Active',
      icon: 'fa-regular fa-circle-check',
      colorClass: 'green',
      value: '62',
      trend: '+6.1%',
      trendUp: true,
      chartData: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    },
    {
      title: 'In Maintenance',
      icon: 'fa-solid fa-wrench',
      colorClass: 'yellow',
      value: '14',
      trend: '+2.8%',
      trendUp: true,
      chartData: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
    },
    {
      title: 'Idle',
      icon: 'fa-solid fa-power-off',
      colorClass: 'red',
      value: '10',
      trend: '-1.4%',
      trendUp: false,
      chartData: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    }
  ];

  vehicles = [
    { id: 'VH-1042', type: 'Van', plate: 'NY-48 213', rider: 'Marcus Bell', capacity: '1,200 kg', status: 'Active' },
    { id: 'VH-1038', type: 'Bike', plate: 'CA-77 905', rider: 'Jerome Bell', capacity: '40 kg', status: 'Active' },
    { id: 'VH-1031', type: 'Truck', plate: 'IL-31 477', rider: 'Cody Fisher', capacity: '5,000 kg', status: 'In Maintenance' },
    { id: 'VH-1025', type: 'Van', plate: 'TX-12 644', rider: 'Savannah Nguyen', capacity: '1,200 kg', status: 'Idle' },
    { id: 'VH-1019', type: 'Bike', plate: 'FL-90 188', rider: 'Ralph Edwards', capacity: '40 kg', status: 'Active' },
    { id: 'VH-1007', type: 'Truck', plate: 'WA-55 320', rider: '—', capacity: '5,000 kg', status: 'Out of Service' },
    { id: 'VH-0998', type: 'Van', plate: 'MA-18 042', rider: 'Jenny Wilson', capacity: '1,200 kg', status: 'Idle' }
  ];

  colDefs = [
    { headerName: 'VEHICLE ID', fieldName: 'id', width: 150, customRender: true },
    { headerName: 'TYPE', fieldName: 'type', width: 120 },
    { headerName: 'PLATE NO.', fieldName: 'plate', width: 150 },
    { headerName: 'ASSIGNED RIDER', fieldName: 'rider', width: 200 },
    { headerName: 'CAPACITY', fieldName: 'capacity', width: 120 },
    { headerName: 'STATUS', fieldName: 'status', width: 150, customRender: true },
    { headerName: 'ACTION', fieldName: 'action', width: 80, customRender: true }
  ];

  setTab(tab: string) {
    this.activeTab = tab;
  }

  openAddModal() {
    this.isAddVehicleModalOpen = true;
  }

  closeAddModal() {
    this.isAddVehicleModalOpen = false;
  }
}
