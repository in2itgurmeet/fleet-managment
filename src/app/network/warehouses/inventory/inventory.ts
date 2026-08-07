import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsDataGridComponent } from 'cats-data-grid';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, CatsDataGridComponent],
  templateUrl: './inventory.html',
  styleUrls: ['./inventory.scss'],
})
export class InventoryComponent {
  activeTab = 'All';
  tabs = ['All', 'In Stock', 'Low Stock', 'Out of Stock', 'Reordered'];
  isAddItemModalOpen = false;

  openAddModal() {
    this.isAddItemModalOpen = true;
  }

  closeAddModal() {
    this.isAddItemModalOpen = false;
  }

  stats = [
    {
      title: 'Total SKUs',
      icon: 'fa-solid fa-boxes-stacked',
      colorClass: 'blue',
      value: '248',
      trend: '+5 new',
      trendUp: true,
      chartData: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
    },
    {
      title: 'In Stock',
      icon: 'fa-regular fa-circle-check',
      colorClass: 'green',
      value: '196',
      trend: '+2.1%',
      trendUp: true,
      chartData: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    },
    {
      title: 'Low Stock',
      icon: 'fa-solid fa-triangle-exclamation',
      colorClass: 'yellow',
      value: '38',
      trend: '+5.4%',
      trendUp: false,
      chartData: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
    },
    {
      title: 'Out of Stock',
      icon: 'fa-solid fa-circle-xmark',
      colorClass: 'red',
      value: '14',
      trend: '-1.6%',
      trendUp: true,
      chartData: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    }
  ];

  inventoryItems = [
    { item: 'Small Box', sku: 'PKG-SB-001', warehouse: 'Central Hub', quantity: '8,420', reorderLevel: '2,000', status: 'In Stock' },
    { item: 'Medium Box', sku: 'PKG-MB-002', warehouse: 'West Depot', quantity: '5,610', reorderLevel: '1,500', status: 'In Stock' },
    { item: 'Bubble Wrap', sku: 'PKG-BW-014', warehouse: 'South Hub', quantity: '420', reorderLevel: '500', status: 'Low Stock' },
    { item: 'Shipping Labels', sku: 'SUP-SL-020', warehouse: 'Central Hub', quantity: '12,800', reorderLevel: '3,000', status: 'In Stock' },
    { item: 'Pallet', sku: 'EQP-PL-031', warehouse: 'North Depot', quantity: '0', reorderLevel: '120', status: 'Out of Stock' },
    { item: 'Packing Tape', sku: 'SUP-PT-008', warehouse: 'East Hub', quantity: '3,240', reorderLevel: '800', status: 'In Stock' },
    { item: 'Padded Envelope', sku: 'PKG-PE-017', warehouse: 'West Depot', quantity: '680', reorderLevel: '1,000', status: 'Reordered' },
    { item: 'Large Box', sku: 'PKG-LB-003', warehouse: 'South Hub', quantity: '2,950', reorderLevel: '1,200', status: 'In Stock' }
  ];

  colDefs = [
    { headerName: 'ITEM', fieldName: 'item', width: 200, customRender: true },
    { headerName: 'SKU', fieldName: 'sku', width: 120 },
    { headerName: 'WAREHOUSE', fieldName: 'warehouse', width: 150 },
    { headerName: 'QUANTITY', fieldName: 'quantity', width: 120 },
    { headerName: 'REORDER LEVEL', fieldName: 'reorderLevel', width: 120 },
    { headerName: 'STATUS', fieldName: 'status', width: 120, customRender: true },
    { headerName: 'ACTION', fieldName: 'action', width: 80, customRender: true }
  ];

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
