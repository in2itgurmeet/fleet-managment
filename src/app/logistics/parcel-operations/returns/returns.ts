import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsDataGridComponent } from 'cats-data-grid';

@Component({
  selector: 'app-returns',
  standalone: true,
  imports: [CommonModule, CatsDataGridComponent],
  templateUrl: './returns.html',
  styleUrls: ['./returns.scss'],
})
export class ReturnsComponent {
  activeTab = 'All';
  tabs = ['All', 'Requested', 'In Return', 'Refunded', 'Rejected'];

  stats = [
    {
      title: 'Total Returns',
      icon: 'fa-solid fa-arrow-rotate-left',
      colorClass: 'blue',
      value: '1,072',
      trend: '-1.5%',
      trendUp: true, // Assuming fewer returns is good
      chartData: [4, 6, 8, 5, 9, 7, 10, 8, 6, 7, 5, 8, 4, 6, 8, 5, 9, 7, 10, 8]
    },
    {
      title: 'Pending Returns',
      icon: 'fa-solid fa-clock',
      colorClass: 'yellow',
      value: '214',
      trend: '+2.8%',
      trendUp: false,
      chartData: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
    },
    {
      title: 'Refunded',
      icon: 'fa-solid fa-money-bill-transfer',
      colorClass: 'green',
      value: '$42,180',
      trend: '+6.1%',
      trendUp: true,
      chartData: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
    },
    {
      title: '% Return Rate',
      icon: 'fa-solid fa-percent',
      colorClass: 'green',
      value: '3.6%',
      trend: '-0.4%',
      trendUp: true, // Lower rate is better
      chartData: [2, 3, 2, 4, 3, 2, 2, 3, 2, 4, 3, 2, 2, 3, 2, 4, 3, 2, 2, 3]
    }
  ];

  parcels = [
    { id: 'PP-48127', customer: 'Kathryn Murphy', reason: 'Damaged item', returnDate: 'Jun 19, 2026', refund: '$48.00', status: 'Refunded' },
    { id: 'PP-48114', customer: 'Jerome Bell', reason: 'Wrong item shipped', returnDate: 'Jun 19, 2026', refund: '$32.50', status: 'In Return' },
    { id: 'PP-48098', customer: 'Cody Fisher', reason: 'Changed mind', returnDate: 'Jun 18, 2026', refund: '$96.00', status: 'Requested' },
    { id: 'PP-48083', customer: 'Savannah Nguyen', reason: 'Item not as described', returnDate: 'Jun 18, 2026', refund: '—', status: 'Rejected' },
    { id: 'PP-48069', customer: 'Ralph Edwards', reason: 'Defective product', returnDate: 'Jun 17, 2026', refund: '$50.00', status: 'Refunded' },
    { id: 'PP-48054', customer: 'Guy Hawkins', reason: 'Late delivery', returnDate: 'Jun 17, 2026', refund: '$24.00', status: 'In Return' },
    { id: 'PP-48041', customer: 'Jenny Wilson', reason: 'Damaged item', returnDate: 'Jun 16, 2026', refund: '$18.00', status: 'Requested' }
  ];

  colDefs = [
    { headerName: 'TRACKING ID', fieldName: 'id', width: 120 },
    { headerName: 'CUSTOMER', fieldName: 'customer', width: 150 },
    { headerName: 'REASON', fieldName: 'reason', width: 150 },
    { headerName: 'RETURN DATE', fieldName: 'returnDate', width: 150 },
    { headerName: 'REFUND', fieldName: 'refund', width: 100 },
    { headerName: 'STATUS', fieldName: 'status', width: 120 }
  ];

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
