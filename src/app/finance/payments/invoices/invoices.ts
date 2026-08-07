import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsDataGridComponent } from 'cats-data-grid';

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [CommonModule, CatsDataGridComponent],
  templateUrl: './invoices.html',
  styleUrls: ['./invoices.scss'],
})
export class InvoicesComponent {
  activeTab = 'All';
  tabs = ['All', 'Paid', 'Unpaid', 'Overdue', 'Draft'];
  isNewInvoiceModalOpen = false;

  openNewInvoiceModal() {
    this.isNewInvoiceModalOpen = true;
  }

  closeNewInvoiceModal() {
    this.isNewInvoiceModalOpen = false;
  }

  stats = [
    {
      title: 'Total Invoiced',
      icon: 'fa-solid fa-file-invoice-dollar',
      colorClass: 'blue',
      value: '$512,300',
      trend: '+8.1%',
      trendUp: true,
      chartData: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
    },
    {
      title: 'Paid',
      icon: 'fa-regular fa-circle-check',
      colorClass: 'green',
      value: '$418,720',
      trend: '+6.2%',
      trendUp: true,
      chartData: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    },
    {
      title: 'Unpaid',
      icon: 'fa-solid fa-hourglass-half',
      colorClass: 'yellow',
      value: '$72,640',
      trend: '+2.5%',
      trendUp: true,
      chartData: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
    },
    {
      title: 'Overdue',
      icon: 'fa-solid fa-circle-exclamation',
      colorClass: 'red',
      value: '$20,940',
      trend: '-1.2%',
      trendUp: false,
      chartData: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    }
  ];

  invoicesData = [
    { id: 'INV-2026-0418', client: 'Acme Logistics Co.', issue: 'Jun 01, 2026', due: 'Jun 15, 2026', amount: '$4,820.00', status: 'Paid' },
    { id: 'INV-2026-0417', client: 'Brightline Retail', issue: 'Jun 02, 2026', due: 'Jun 16, 2026', amount: '$2,150.00', status: 'Unpaid' },
    { id: 'INV-2026-0416', client: 'Northwind Traders', issue: 'May 20, 2026', due: 'Jun 03, 2026', amount: '$6,340.00', status: 'Overdue' },
    { id: 'INV-2026-0415', client: 'Coastal Imports', issue: 'Jun 05, 2026', due: 'Jun 19, 2026', amount: '$980.00', status: 'Draft' },
    { id: 'INV-2026-0414', client: 'Summit Supplies', issue: 'Jun 06, 2026', due: 'Jun 20, 2026', amount: '$3,275.00', status: 'Paid' },
    { id: 'INV-2026-0413', client: 'Vertex Electronics', issue: 'May 18, 2026', due: 'Jun 01, 2026', amount: '$5,610.00', status: 'Overdue' },
    { id: 'INV-2026-0412', client: 'Harbor Goods Ltd.', issue: 'Jun 08, 2026', due: 'Jun 22, 2026', amount: '$1,440.00', status: 'Unpaid' },
    { id: 'INV-2026-0411', client: 'Pioneer Wholesale', issue: 'Jun 09, 2026', due: 'Jun 23, 2026', amount: '$7,890.00', status: 'Paid' }
  ];

  colDefs = [
    { headerName: 'INVOICE NO.', fieldName: 'id', width: 150, customRender: true },
    { headerName: 'CLIENT', fieldName: 'client', width: 220 },
    { headerName: 'ISSUE DATE', fieldName: 'issue', width: 140 },
    { headerName: 'DUE DATE', fieldName: 'due', width: 140 },
    { headerName: 'AMOUNT', fieldName: 'amount', width: 120, customRender: true },
    { headerName: 'STATUS', fieldName: 'status', width: 120, customRender: true }
  ];

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
