import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsDataGridComponent } from 'cats-data-grid';

@Component({
  selector: 'app-vehicle-maintenance',
  standalone: true,
  imports: [CommonModule, CatsDataGridComponent],
  templateUrl: './vehicle-maintenance.html',
  styleUrls: ['./vehicle-maintenance.scss'],
})
export class VehicleMaintenanceComponent {
  activeTab = 'All';
  tabs = ['All', 'Scheduled', 'In Progress', 'Completed', 'Overdue'];
  isScheduleModalOpen = false;

  stats = [
    {
      title: 'Scheduled',
      icon: 'fa-regular fa-calendar-check',
      colorClass: 'blue',
      value: '24',
      trend: '+4.2%',
      trendUp: true,
      chartData: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
    },
    {
      title: 'In Progress',
      icon: 'fa-solid fa-spinner',
      colorClass: 'yellow',
      value: '9',
      trend: '+1.8%',
      trendUp: true,
      chartData: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
    },
    {
      title: 'Completed',
      icon: 'fa-regular fa-circle-check',
      colorClass: 'green',
      value: '142',
      trend: '+9.5%',
      trendUp: true,
      chartData: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    },
    {
      title: 'Overdue',
      icon: 'fa-solid fa-triangle-exclamation',
      colorClass: 'red',
      value: '5',
      trend: '-2.7%',
      trendUp: false,
      chartData: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    }
  ];

  maintenanceRecords = [
    { id: 'VH-1042', type: 'Oil Change', date: 'Jun 22, 2026', workshop: 'Downtown Auto', cost: '$120.00', status: 'Scheduled' },
    { id: 'VH-1031', type: 'Tire Replacement', date: 'Jun 20, 2026', workshop: 'FleetFix Garage', cost: '$640.00', status: 'In Progress' },
    { id: 'VH-0998', type: 'Inspection', date: 'Jun 14, 2026', workshop: 'CityCheck Center', cost: '$85.00', status: 'Completed' },
    { id: 'VH-1007', type: 'Oil Change', date: 'Jun 10, 2026', workshop: 'Downtown Auto', cost: '$120.00', status: 'Overdue' },
    { id: 'VH-1025', type: 'Inspection', date: 'Jun 25, 2026', workshop: 'CityCheck Center', cost: '$85.00', status: 'Scheduled' },
    { id: 'VH-1019', type: 'Tire Replacement', date: 'Jun 19, 2026', workshop: 'FleetFix Garage', cost: '$280.00', status: 'In Progress' },
    { id: 'VH-1038', type: 'Oil Change', date: 'Jun 08, 2026', workshop: 'Downtown Auto', cost: '$85.00', status: 'Completed' }
  ];

  colDefs = [
    { headerName: 'VEHICLE ID', fieldName: 'id', width: 140, customRender: true },
    { headerName: 'SERVICE TYPE', fieldName: 'type', width: 180 },
    { headerName: 'SCHEDULED DATE', fieldName: 'date', width: 160 },
    { headerName: 'WORKSHOP', fieldName: 'workshop', width: 180 },
    { headerName: 'COST', fieldName: 'cost', width: 120 },
    { headerName: 'STATUS', fieldName: 'status', width: 140, customRender: true },
    { headerName: 'ACTION', fieldName: 'action', width: 80, customRender: true }
  ];

  setTab(tab: string) {
    this.activeTab = tab;
  }

  openScheduleModal() {
    this.isScheduleModalOpen = true;
  }

  closeScheduleModal() {
    this.isScheduleModalOpen = false;
  }
}
