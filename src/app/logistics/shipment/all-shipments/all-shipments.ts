import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsDataGridComponent } from 'cats-data-grid';
import { ActioRendrer } from '../../../shared/actio-rendrer/actio-rendrer';
import { ShipmentService } from '../shipment.service';

@Component({
  selector: 'app-all-shipments',
  standalone: true,
  imports: [CommonModule, CatsDataGridComponent],
  templateUrl: './all-shipments.html',
  styleUrl: './all-shipments.scss',
})
export class AllShipments implements OnInit {
  activeTab = 'All';
  tabs = ['All', 'In Transit', 'Delivered', 'Pending', 'Failed'];
  showSkeleton = false;
  stats: any[] = []; // Load from backend
  shipments: any[] = []; // Load from backend

  constructor(private shipmentService: ShipmentService) { }

  ngOnInit() {
    this.fetchShipments();
    this.fetchStats();
  }

  fetchStats() {
    this.shipmentService.getShipmentStats().subscribe({
      next: (data) => {
        this.stats = data;
      },
      error: (err) => console.error('Error fetching shipment stats', err)
    });
  }

  fetchShipments(status: string = 'All') {
    this.showSkeleton = true;
    this.shipmentService.getAllShipments(status).subscribe({
      next: (data) => {
        this.showSkeleton = false;
        this.shipments = data.map(item => ({
          id: item._id.substring(item._id.length - 8).toUpperCase(),
          customer: item.sender?.fullName || 'Unknown',
          destination: item.recipient?.city || 'Unknown',
          service: item.service?.serviceType || 'Standard',
          date: new Date(item.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          cod: item.service?.codAmount ? `$${item.service.codAmount}` : '—',
          status: item.status
        }));
      },
      error: (err) => {
        this.showSkeleton = false;
        console.error('Error fetching shipments', err);
      }
    });
  }

  colDefs = [
    { headerName: 'TRACKING ID', fieldName: 'id', width: 120 },
    { headerName: 'CUSTOMER', fieldName: 'customer', width: 150 },
    { headerName: 'DESTINATION', fieldName: 'destination', width: 150 },
    { headerName: 'SERVICE', fieldName: 'service', width: 120 },
    { headerName: 'DATE', fieldName: 'date', width: 120 },
    { headerName: 'COD', fieldName: 'cod', width: 100 },
    { headerName: 'STATUS', fieldName: 'status', width: 120 },
    {
      headerName: "ACTION", fieldName: "action", width: 120, cellRenderer: ActioRendrer
    }
  ];

  setTab(tab: string) {
    this.activeTab = tab;
    this.fetchShipments(tab);
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'delivered': return 'status-delivered';
      case 'in transit': return 'status-transit';
      case 'pending': return 'status-pending';
      case 'failed': return 'status-failed';
      default: return 'status-default';
    }
  }
}
